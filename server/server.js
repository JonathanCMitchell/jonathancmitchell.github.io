const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./build'))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.set('port', process.env.PORT || 3030)

app.listen(app.get('port'), function() {
    console.log('we are listening on port: ', app.get('port'))
})

