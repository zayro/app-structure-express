require('longjohn')

const app = require('./src/app.js')
import config from './src/config/config.js'

app.listen(config.port, () => {
    console.log(`API REST corriendo en el puerto ${config.port}`)
})