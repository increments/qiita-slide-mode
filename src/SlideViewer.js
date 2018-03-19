import { h } from "hyperapp"
import { Tooltip } from "./Tooltip"
import { getMagnitudeFromRange } from "./getMagnitudeFromRange"
import { QiitaLogo } from "./QiitaLogo"

const LEFT_KEY = 37
const RIGHT_KEY = 39

export const SlideViewer = ({ state, actions, pages, option = {} }) => {
  const { theme, contentClass } = option
  const next = () => actions.next(pages.length)
  const prev = actions.prev

  return (
    <div
      class={"slideMode" + (state.isFullScreen ? " fullscreen" : "")}
      oncreate={element => {
        element.customKeyHandler = event => {
          if (event.keyCode === LEFT_KEY) {
            prev()
          } else if (event.keyCode === RIGHT_KEY) {
            next()
          }
        }
        addEventListener("keydown", element.customKeyHandler)
      }}
      ondestroy={element => {
        removeEventListener("keydown", element.customKeyHandler)
      }}
    >
      <div class="slideMode-Viewer">
        <div
          class={
            "slideMode-Viewer_content" +
            (state.page === 0 ? " slideMode-Viewer_content--firstSlide" : "") +
            (contentClass ? " " + contentClass : " markdownContent")
          }
          onclick={event => {
            if (
              event.target.tagName === "IMG" ||
              event.target.tagName === "A"
            ) {
              return
            }

            // We want to use getBoundingClientRect because it always returns
            // the actual rendered element dimensions, even if there are CSS
            // transformations applied to it.
            const rect = event.currentTarget.getBoundingClientRect()

            // Should we transition to the next or the previous slide?
            if (event.clientX - rect.left > rect.width / 2) {
              next()
            } else {
              prev()
            }
          }}
          innerHTML={pages[state.page]}
        />
      </div>

      <Tooltip state={state.tooltip} length={pages.length} />

      <div
        class={
          "slideMode-Dashboard" + (theme ? " slideMode-Dashboard-" + theme : "")
        }
      >
        <button
          class={
            "slideMode-Dashboard_button slideMode-Dashboard_button--prev " +
            (theme ? " slideMode-Dashboard_button-" + theme : "") +
            (state.page !== 0 ? " slideMode-Dashboard_button--clickable" : "")
          }
          disabled={state.page === 0}
          onclick={actions.prev}
        >
          <i class="fa fa-backward" />
        </button>
        <button
          class={
            "slideMode-Dashboard_button slideMode-Dashboard_button--next " +
            (theme ? " slideMode-Dashboard_button-" + theme : "") +
            (state.page !== pages.length - 1
              ? " slideMode-Dashboard_button--clickable"
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
          class={
            "slideMode-Dashboard_progress" +
            (theme ? " slideMode-Dashboard_progress-" + theme : "")
          }
          onmousemove={event => {
            actions.tooltip.show({
              page: getMagnitudeFromRange(
                event.currentTarget,
                event.clientX,
                pages.length
              ),
              left:
                event.clientX - event.currentTarget.getBoundingClientRect().left
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
            class={
              "slideMode-Dashboard_progressFill" +
              (theme ? " slideMode-Dashboard_progressFill-" + theme : "")
            }
            style={{
              width: `${(state.page + 1) / pages.length * 100}%`
            }}
          />
        </div>

        <button
          class={
            "slideMode-Dashboard_button slideMode-Dashboard_button--fullscreen slideMode-Dashboard_button--clickable" +
            (theme ? " slideMode-Dashboard_button-" + theme : "")
          }
          onclick={actions.toggleFullScreen}
        >
          <i class="fa fa-desktop" />
        </button>

        <QiitaLogo />
      </div>
    </div>
  )
}
