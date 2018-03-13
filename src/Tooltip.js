import { h } from "hyperapp"

export const Tooltip = ({ state, length }) =>
  state.isVisible && (
    <div style={{ left: `${state.left}px` }} class={"tooltip"}>{`${
      state.page
    }/${length}`}</div>
  )
