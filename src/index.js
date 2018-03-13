export const slide = {
  state: {
    tooltip: {
      page: 0,
      left: 0,
      isVisible: false
    },
    isFullScreen: false,
    page: 0
  },
  actions: {
    tooltip: {
      show: ({ page, left }) => state => ({
        page,
        left,
        isVisible: true
      }),
      hide: () => ({ isVisible: false })
    },
    toggleFullScreen: () => state => ({ isFullScreen: !state.isFullScreen }),
    prev: () => state => ({
      page: state.page <= 0 ? 0 : state.page - 1
    }),
    next: length => state => ({
      page: state.page + 1 >= length ? state.page : state.page + 1
    }),
    goto: page => ({ page })
  }
}

export { SlideViewer } from "./SlideViewer"
