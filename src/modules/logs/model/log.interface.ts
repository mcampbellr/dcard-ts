'use strict'
import mongoose from 'mongoose'

export default interface LogInterface extends mongoose.Document {
  action: string,
  category: string,
  message: string,
  createdBy?: object
  diff: Object | undefined
}

