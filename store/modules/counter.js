// store/modules/counter.js
export default options => ({
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    adjust(state, data) {
      console.log('teste mutation')
      state.count += data
    }
  },
  getters: {
    count: state => state.count
  }
})
