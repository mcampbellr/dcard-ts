import App from './App'
import {cyan} from 'chalk'
import dotenv from 'dotenv'
dotenv.config()

App.start(() => {
  console.log(cyan('[Server is running]:'), `On -> http://${process.env.HOST}:${process.env.PORT}`)
})