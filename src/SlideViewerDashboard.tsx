import React, { useState } from "react"
import classNames from 'classnames'
import { getMagnitudeFromRange } from "./getMagnitudeFromRange"
import Tooltip from "./Tooltip"
import QiitaLogo from "./QiitaLogo"

export default ({ currentPage, totalPage, prevCallback, nextCallback, switchFullScreenCallback, setPageCallback }: {
  currentPage: number
  totalPage: number
  prevCallback: Function
  nextCallback: Function
  switchFullScreenCallback: Function
  setPageCallback: (page: number) => void
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [tooltipLeftDistance, setTooltipLeftDistance] = useState(0)

  return (
    <div
      className="slideMode-Dashboard"
    >
      { isTooltipVisible && <Tooltip leftDistance={tooltipLeftDistance}>{currentPage}/{totalPage}</Tooltip> }

      <button
        className={classNames("slideMode-Dashboard_button", "slideMode-Dashboard_button--prev", {
          "slideMode-Dashboard_button--clickable": currentPage !== 0
        })}
        disabled={currentPage === 0}
        onClick={() => prevCallback()}
      >
        <i className="fa fa-backward" />
      </button>
      <button
        className={classNames("slideMode-Dashboard_button", "slideMode-Dashboard_button--next", {
          "slideMode-Dashboard_button--clickable": currentPage !== totalPage
        })}
        disabled={currentPage === totalPage}
        onClick={() => nextCallback()}
      >
        <i className="fa fa-forward" />
      </button>

      <span className="slideMode-Dashboard_pageCount">
        {currentPage} / {totalPage}
      </span>

      <div
        className="slideMode-Dashboard_progress"
        onMouseMove={event => {
          setIsTooltipVisible(true)
          setTooltipLeftDistance(event.clientX - event.currentTarget.getBoundingClientRect().left)
        }}
        onMouseLeave={() => {
          setIsTooltipVisible(false)
        }}
        onClick={event => {
          setPageCallback(
            getMagnitudeFromRange(
              event.currentTarget,
              event.clientX,
              totalPage
            ) - 1
          )
        }}
      >
        <div
          className="slideMode-Dashboard_progressFill"
          style={{
            width: `${(currentPage + 1) / totalPage * 100}%`
          }}
        />
      </div>

      <button
        className="slideMode-Dashboard_button slideMode-Dashboard_button--fullscreen slideMode-Dashboard_button--clickable"
        onClick={() => switchFullScreenCallback()}
      >
        <i className="fa fa-desktop" />
      </button>

      <QiitaLogo />
    </div>
  )
}
