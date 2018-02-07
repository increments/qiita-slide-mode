import { h } from "hyperapp"
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

    <div class={styles.dashboard}>
      <button onclick={actions.prev}>Prev</button>
      <button onclick={() => actions.next(pages.length)}>Next</button>

      <span>
        {state.page + 1}/{pages.length}
      </span>

      <div
        class={styles.progress}
        onmousemove={event => {
          actions.setHoverPage(
            getMagnitudeFromRange(
              event.currentTarget,
              event.clientX,
              pages.length
            )
          )
          if (!state.isToolTipVisible) {
            actions.toggleToolTip()
          }
        }}
        onmouseleave={event => {
          actions.toggleToolTip()
        }}
        onclick={event => {
          actions.goto(
            getMagnitudeFromRange(
              event.currentTarget,
              event.clientX,
              pages.length
            ) - 1
          )
        }}
      >
        <div
          class={styles.progressFill}
          style={{
            width: `${(state.page + 1) / pages.length * 100}%`
          }}
        />
      </div>

      <button onclick={actions.toggleFullScreen}>FullScreen</button>
    </div>
    {state.isToolTipVisible && (
      <div class={styles.tooltip}>{`${state.hoverPage}/${pages.length}`}</div>
    )}
  </div>
)

function getMagnitudeFromRange(target, x, length) {
  const rect = target.getBoundingClientRect()
  return Math.ceil((x - rect.left) / (rect.width / length))
}
