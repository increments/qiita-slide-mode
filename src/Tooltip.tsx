import React from "react"

interface Props {
  leftDistance: number
  children: React.ReactNode
}

export default (props: Props) => {
  return (
    <div style={{ left: `${props.leftDistance}px` }} className={"slideMode-Tooltip"}>{props.children}</div>
  )
}
