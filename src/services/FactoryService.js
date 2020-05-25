import adminService from './Admin/IndexService'
import userService from './API/IndexService'
import testService from './Test/IndexService'

const requestMap = {
  user: userService,
  admin: adminService,
  test: testService
}

export default class FactoryService {
  static request (classname, auth = 'user', domain = null) {
    let RequestClass = requestMap[auth][classname]

    if (!RequestClass) {
      throw new Error('Invalid request class name: ' + classname)
    }

    return new RequestClass(auth, domain = null)
  }
}
