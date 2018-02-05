
export const slide = {
  state: {
    isFullscreen: false,
    page: 0,
    style: {}
  },
  actions: {
    toggleFullscreen: () => state => ({
      isFullscreen: !state.isFullscreen,
      style: state.isFullscreen
        ? {}
        : {
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: "auto",
            background: "blue"
          }
    }),
    prev: () => state => ({
      page: state.page <= 0 ? 0 : state.page - 1
    }),
    next: length => state => ({
      page: state.page + 1 >= length ? state.page : state.page + 1
    })
  }
}
