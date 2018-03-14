import { h } from "hyperapp"
import { Tooltip } from "./Tooltip"
import { getMagnitudeFromRange } from "./getMagnitudeFromRange"

export const SlideViewer = ({ state, actions, pages }) => (
  <div class={"slide unselectable" + " " + (state.isFullScreen ? "fullscreen" : "")}>
    <div class="slideViewer">
      <div
        onclick={event => {
          if (event.target.tagName !== "IMG" || event.target.tagName === "A") {
            return 
          }

          // getBoundingClientRect always returns the actual rendered element
          // dimensions, even if there are CSS transformations applied to it.

          const rect = event.currentTarget.getBoundingClientRect()

          if (event.clientX - rect.left > rect.width / 2) {
            actions.next(pages.length)
          } else {
            actions.prev()
          }
        }}
        innerHTML={pages[state.page]}
      />
    </div>

    <Tooltip state={state.tooltip} length={pages.length} />

    <div class="dashboard">
      <button disabled={state.page === 0} onclick={actions.prev}>
        Prev
      </button>
      <button
        disabled={state.page === pages.length - 1}
        onclick={() => actions.next(pages.length)}
      >
        Next
      </button>

      <span>
        {state.page + 1}/{pages.length}
      </span>

      <div
        class="progress"
        onmousemove={event => {
          actions.tooltip.show({
            page: getMagnitudeFromRange(
              event.currentTarget,
              event.clientX,
              pages.length
            ),
            left: event.clientX
          })
        }}
        onmouseleave={event => {
          actions.tooltip.hide()
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
          class="progressFill"
          style={{
            width: `${(state.page + 1) / pages.length * 100}%`
          }}
        />
      </div>

      <button onclick={actions.toggleFullScreen}>■</button>
    </div>
  </div>
)
