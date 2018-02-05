import { h } from "hyperapp"
import { ProgressBar } from "./ProgressBar"
import styles from "./styles.css"

export const SlideViewer = ({ state, actions, pages }) => (
  <div class={styles.unselectable} style={state.style}>
    <div style={{ backgroundColor: "#eee" }}>
      <div innerHTML={pages[state.page]} />
    </div>

    <hr />

    <div>
      <button onclick={actions.prev}>Prev</button>
      <button onclick={() => actions.next(pages.length)}>Next</button>

      <span>
        {state.page + 1}/{pages.length}
      </span>

      <ProgressBar />

      <button onclick={actions.toggleFullscreen}>FullScreen</button>
    </div>
  </div>
)
