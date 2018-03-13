export namespace SlideMode {
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
}
