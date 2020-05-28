import BaseService from '../BaseService'

export default class CourseService extends BaseService {
  async create (params = {}) {
    const res = await this.post(`/api/reminds`, params)

    return res.data
  }

  async index (id, params = {}) {
    const res = await this.get(`/api/reminds`, params)

    return res.data
  }
}
