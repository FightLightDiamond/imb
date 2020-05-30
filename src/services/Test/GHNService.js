import BaseService from '../BaseService';

export default class GHNService extends BaseService {
// 2. Tính cước phí
    async CalculateFee(params = {}) {
        return await this.post(`/CalculateFee`, params);
    }

// 1.Lấy danh sách các địa chỉ ship
    async GetDistricts(params = {}) {
        return await this.post(`/GetDistricts`, params);
    }

// 1. Trả về gói dịch vụ có phù hợp không
    async FindAvailableServices(params = {}) {
        return await this.post(`/FindAvailableServices`, params);
    }

// 3. Create order
    async CreateOrder(params = {}) {
        return await this.post(`/CreateOrder`, params);
    }

// 1. GetHubs - lấy thông tin kho
    async GetHubs(params = {}) {
        return await this.post(`/GetHubs`, params);
    }

// 3. OrderInfo
    async OrderInfo(params = {}) {
        return await this.post(`/OrderInfo`, params);
    }

// 3. UpdateOrder
    async UpdateOrder(params = {}) {
        return await this.post(`/UpdateOrder`, params);
    }

// 3. CancelOrder
    async CancelOrder(params = {}) {
        return await this.post(`/CancelOrder`, params);
    }

// 3. ReturnOrder
    async ReturnOrder(params = {}) {
        return await this.post(`/ReturnOrder`, params);
    }

// 3. AddHubs - thêm kho
    async AddHubs(params = {}) {
        return await this.post(`/AddHubs`, params);
    }

// 3. UpdateHubs - update kho
    async UpdateHubs(params = {}) {
        return await this.post(`/UpdateHubs`, params);
    }

// 3. SignIn
    async SignIn(params = {}) {
        return await this.post(`/SignIn`, params);
    }

// 3. GetWards
    async GetWards(params = {}) {
        return await this.post(`/GetWards`, params);
    }

// 3. SetConfigClient
    async SetConfigClient(params = {}) {
        return await this.post(`/SetConfigClient`, params);
    }

// 3. GetOrderLogs
    async GetOrderLogs(params = {}) {
        return await this.post(`/GetOrderLogs`, params);
    }

// 3. SignUp
    async SignUp(params = {}) {
        return await this.post(`/SignUp`, params);
    }
}
