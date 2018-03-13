import { VNode } from "hyperapp"

export as namespace QiitaSlideMode

/**
 * SlideViewer
 */
export type SlideViewer<State, Actions> = (data?: any) => VNode
