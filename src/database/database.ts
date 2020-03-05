import mongoose from 'mongoose'
import {cyan} from 'chalk'

class Database {
  private uri: string

  constructor (uri: string) {
    this.uri = uri
  }

  connect () {
    mongoose.connect(this.uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log(cyan('[Connected to database]'), `On -> ${this.uri}`)
      }
    }) 
  }
}

export default Database