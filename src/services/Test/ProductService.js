import BaseService from '../BaseService';

export default class ProductService extends BaseService {
    async index (params = {}) {
        return await this.get(`/products`, params)
    }
}
