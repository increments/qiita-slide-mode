import { h } from "hyperapp"
import styles from "./styles.css"

export const Tooltip = ({ state, length }) =>
  state.isVisible && (
    <div style={{ left: `${state.left}px` }} class={styles.tooltip}>{`${
      state.page
    }/${length}`}</div>
  )
