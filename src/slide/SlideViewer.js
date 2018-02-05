import { h } from "hyperapp"
import { ProgressBar } from "./ProgressBar"

export const SlideViewer = ({ state, actions, pages }) => (
  <div style={state.style}>
    <p>
      <div innerHTML={pages[state.page]} />
    </p>

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
