/**
 * Interface for SlideMode state.
 */
export interface State {
  isFullScreen: boolean
  page: number
  tooltip: {
    page: number
    left: number
    isVisible: boolean
  }
}

export interface Option {
  contentClass?: string
  theme?: string
}

/**
 * Interface for SlideMode actions.
 */
export interface Actions {
  tooltip: {
    show(props: { page: number; left: number }): State
    hide(): State
  }
  toggleFullScreen(): State
  prev(): State
  next(length: number): State
  goto(page: number): State
}

export declare const slide: {
  state: State
  actions: Actions
}

export declare const SlideViewer: (
  props: { state: State; actions: Actions; pages: string[]; option: Option }
) => any
