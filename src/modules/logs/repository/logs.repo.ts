import {MainRepo} from '../../../database/MainRepo'
import LogInterface from '../model/log.interface'
import Log from '../model/log.schema'

class LogRepo extends MainRepo<LogInterface> {
  constructor () {
    super(Log)
  }
}

export default LogRepo