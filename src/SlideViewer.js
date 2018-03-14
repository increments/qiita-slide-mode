import { h } from "hyperapp"
import { Tooltip } from "./Tooltip"
import { getMagnitudeFromRange } from "./getMagnitudeFromRange"
import { QiitaLogo } from "./QiitaLogo"

export const SlideViewer = ({ state, actions, pages }) => (
  <div
    class={
      "slideMode" + (state.isFullScreen ? " fullscreen" : "")
    }
  >
    <div class="slideMode-Viewer">
      <div
        class="slideMode-Viewer_content"
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

    <div class="slideMode-Dashboard">
      <button
        class={
          "slideMode-Dashboard_button slideMode-Dashboard_button--prev " +
          (state.page !== 0 ? "slideMode-Dashboard_button--clickable" : "")
        }
        disabled={state.page === 0}
        onclick={actions.prev}
      >
        <i class="fa fa-backward" />
      </button>
      <button
        class={
          "slideMode-Dashboard_button slideMode-Dashboard_button--next " +
          (state.page !== pages.length - 1
            ? "slideMode-Dashboard_button--clickable"
            : "")
        }
        disabled={state.page === pages.length - 1}
        onclick={() => actions.next(pages.length)}
      >
        <i class="fa fa-forward" />
      </button>

      <span class="slideMode-Dashboard_pageCount">
        {state.page + 1} / {pages.length}
      </span>

      <div
        class="slideMode-Dashboard_progress"
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
          class="slideMode-Dashboard_progressFill"
          style={{
            width: `${(state.page + 1) / pages.length * 100}%`
          }}
        />
      </div>

      <button
        class="slideMode-Dashboard_button slideMode-Dashboard_button--fullscreen slideMode-Dashboard_button--clickable"
        onclick={actions.toggleFullScreen}
      >
        <i class="fa fa-desktop" />
      </button>

      <QiitaLogo />
    </div>
  </div>
)
