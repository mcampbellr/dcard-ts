'use strict'

import mongoose from 'mongoose'
import LogInterface from './log.interface'

const Schema = mongoose.Schema
const Mixed = Schema.Types.Mixed
const ObjectId = Schema.Types.ObjectId

const LogSchema = new Schema({
  action: {
    type: String,
    createIndexes: true
  },
  category: {
    type: String,
    createIndexes: true
  },
  createdBy: {
    type: ObjectId,
    ref: 'user'
  },
  message: String,
  diff: {
    type: Mixed
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
})

export default mongoose.model<LogInterface>('log', LogSchema)