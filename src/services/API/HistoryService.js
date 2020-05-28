import BaseService from '../BaseService'

export default class HistoryService extends BaseService {
  async index (params = {}) {
    const res = await this.get(`/api/crazy-histories`, params)

    return res.data
  }

  async listen (params = {}) {
    const res = await this.get(`/api/crazy-listen-histories`, params)

    return res.data
  }

  async read (params = {}) {
    const res = await this.get(`/api/crazy-read-histories`, params)
    console.log(res)
    return res
  }

  async write (params = {}) {
    const res = await this.get(`/api/crazy-write-histories`, params)

    return res.data
  }

  async speak (params = {}) {
    const res = await this.get(`/api/test/crazy-write/${id}`, params)

    return res.data
  }
}
