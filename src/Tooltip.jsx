import { h } from "hyperapp"

export const Tooltip = ({ state, length }) =>
  state.isVisible && (
    <div style={{ left: `${state.left}px` }} class={"slideMode-Tooltip"}>{`${
      state.page
    }/${length}`}</div>
  )
