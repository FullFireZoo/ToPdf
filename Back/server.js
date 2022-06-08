/* This is the code that starts the server. */
const {app} = require('./app')
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })