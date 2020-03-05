'use strict'
import mongoose from 'mongoose'

export default interface InterfaceUserModel extends mongoose.Document {
  prefix: String,
  name: string,
  lastname: string,
  email: string,
  phone: string,
  username: string,
  password: string,
  role: string,
  status: string,
  tags:Array<string>,
  profile: Array<any>,
  country: object,
  contacts: Array<object>,
  socials: Array<object>,
  images: object,
  shipping: object,
  locations:Array<object>,
  companies: Array<object>,
  design: Array<object>,
  views: number,
  customerId: any,
  settings: any,
  subscription: any,
  referredBy: any,
  reseller: any
  createdAt: Date;
  modifiedAt: Date;
}