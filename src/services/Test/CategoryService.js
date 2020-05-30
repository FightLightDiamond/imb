import BaseService from '../BaseService';

export default class CategoryService extends BaseService {
    async index (params = {}) {
        return await this.get(`/categories`, params)
    }
}
