export const slide = {
  state: {
    isFullScreen: false,
    page: 0,
    style: {}
  },
  actions: {
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
