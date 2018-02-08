export const tooltip = {
  state: {
    page: 0,
    left: 0,
    isVisible: false
  },
  actions: {
    show: ({ page, left }) => state => ({
      page,
      left,
      isVisible: true
    }),
    hide: () => ({ isVisible: false })
  }
}
