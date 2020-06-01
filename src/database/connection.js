const mongoose = require('mongoose')

class Connection {
  static getInstance() {
    if (Connection.db == undefined) {
      Connection.db = mongoose
        .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
          console.log('mongoose is running')
          return Connection.db
        })
        .catch((err) => console.log(err))
    }

    return Connection.db
  }
}

module.exports = Connection