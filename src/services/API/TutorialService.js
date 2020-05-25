import BaseService from '../BaseService'

export default class UserService extends BaseService {
  async index (params = {}) {
    return await this.get(`/api/v1/tutorials`, params)
  }

  async create (params = {}) {
    return await this.post(`/api/v1/tutorials`, params)
  }

  async update (id, params = {}) {
    return await this.put(`/api/v1/tutorials/${id}`, params)
  }

  async show (id) {
    return await this.get(`/api/v1/tutorials/${id}`)
  }

  async destroy (id) {
    return await this.delete(`/api/v1/tutorials/${id}`)
  }
}
