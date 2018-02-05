import { h } from "hyperapp"
import { ProgressBar } from "./ProgressBar"
import styles from "./styles.css"

export const SlideViewer = ({ state, actions, pages }) => (
  <div
    class={
      styles.unselectable + " " + (state.isFullScreen ? styles.fullscreen : "")
    }
  >
    <div class={styles.slideViewer}>
      <div
        onclick={event => {
          const target = event.currentTarget
          if (target) {
            // getBoundingClientRect always returns the actual rendered element
            // dimensions, even if there are CSS transformations applied to it.

            const rect = target.getBoundingClientRect()

            if (event.clientX - rect.left > rect.width / 2) {
              actions.next(pages.length)
            } else {
              actions.prev()
            }
          }
        }}
        innerHTML={pages[state.page]}
      />
    </div>

    <hr />

    <div>
      <button onclick={actions.prev}>Prev</button>
      <button onclick={() => actions.next(pages.length)}>Next</button>

      <span>
        {state.page + 1}/{pages.length}
      </span>

      <ProgressBar />

      <button onclick={actions.toggleFullScreen}>FullScreen</button>
    </div>
  </div>
)
