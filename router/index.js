const { resolve } = require('path')

export default [
    {
        name: 'teste',
        path: '/teste',
        chunkName: 'admin',
        component: resolve(__dirname, '../pages/valid.vue')
    }
]