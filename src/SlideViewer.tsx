import React, { useState, useEffect, useRef } from "react"
import classNames from 'classnames'
import SlideViewerDashboard from "./SlideViewerDashboard"

const LEFT_KEY = 37
const RIGHT_KEY = 39

export default (props: {
  contentsEachPage: string[]
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = props.contentsEachPage.length

  const next = () => {
    if(currentPage + 1 <= totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  const prev = () => {
    if(currentPage - 1 >= 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const [isFullScreen, setIsFullScreen] = useState(false)

  const containerElement = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.keyCode === LEFT_KEY) {
        prev()
      } else if (event.keyCode === RIGHT_KEY) {
        next()
      }
    }

    containerElement.current && containerElement.current.addEventListener('keydown', handleKeyboard)

    return () => {
      containerElement.current && containerElement.current.removeEventListener('keydown', handleKeyboard)
    }
  }, [containerElement])

  return (
    <div
      ref={containerElement}
      className={"slideMode" + (isFullScreen ? " fullscreen" : "")}
    >
      <div className="slideMode-Viewer">
        <div
          className={classNames("slideMode-Viewer_content", "markdownContent", {
            "slideMode-Viewer_content--firstSlide": currentPage === 0
          })}
          onClick={event => {
            const clickedElement = (event.target as HTMLElement)

            if (
              clickedElement.tagName === "IMG" ||
              clickedElement.tagName === "A"
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
          dangerouslySetInnerHTML={{ __html: props.contentsEachPage[currentPage - 1] }}
        />
      </div>

      <SlideViewerDashboard currentPage={currentPage} totalPage={totalPage} nextCallback={next} prevCallback={prev} setPageCallback={setCurrentPage}
        switchFullScreenCallback={() => setIsFullScreen(!isFullScreen)} />
    </div>
  )
}
