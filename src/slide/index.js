export const slide = {
  state: {
    isToolTipVisible: false,
    isFullScreen: false,
    page: 0,
    hoverPage: 0,
    hoverLeft: 0,
    style: {}
  },
  actions: {
    setHoverLeft: hoverLeft => ({ hoverLeft }),
    setHoverPage: hoverPage => ({ hoverPage }),
    toggleToolTip: () => state => ({
      isToolTipVisible: !state.isToolTipVisible
    }),
    toggleFullScreen: () => state => ({ isFullScreen: !state.isFullScreen }),
    prev: () => state => ({
      page: state.page <= 0 ? 0 : state.page - 1
    }),
    next: length => state => ({
      page: state.page + 1 >= length ? state.page : state.page + 1
    }),
    goto: page => ({
      page
    })
  }
}
