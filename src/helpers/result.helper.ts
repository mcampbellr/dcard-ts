'use strict'
import {Response} from 'express'

class Result {
  public res: Response
  public code: number
  public message: string
  public result: any
  public error: any
  public type: string = this.getType(this.code)

  constructor (res: Response, options: {statusCode: number, message: string, data?: any, error?: any} ) {
    this.message = options.message
    this.code = options.statusCode
    this.result = options?.data
    this.error = options?.error
    this.res = res
    this.end()
  }

  private end (): Response {
    return this.res.status(this.code).send({
      type: this.getType(this.code),
      message: this.message,
      statusCode: this.code,
      result: this.result,
      error: this.error
    })
  }

  private getType (code: number) : string {
    const first = String(code).charAt(0)
    switch (first) {
      case '1':
        return 'informational'
      case '2':
        return 'success'
      case '3':
        return 'redirection'
      case '4':
        return 'client error'
      case '5':
      default:
        return 'server error'
    }
  }
}

export default Result