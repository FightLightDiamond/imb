import axios from 'axios';
import Api from '../config/Api';

export default class BaseService {
    domain: null;

    constructor(auth = 'user', domain = null) {
        this.setAuth(auth);

        if (domain) {
            this.setDomain(domain);
        } else {
            this.setDomain(Api.domain);
        }
    }

    setDomain = (domain) => {
        this.domain = domain;
    };

    getDomain = () => {
        return this.domain;
    };

    getUrl = (uri) => {
        return this.getDomain() + uri;
    };

    setAuth = (auth) => {
        // const loginInfo = JSON.parse(localStorage.getItem(auth))
        // console.log(auth, loginInfo);
        //
        // axios.interceptors.request.use(function (config) {
        //   if (loginInfo) {
        //     config.headers.Authorization = `Bearer ${loginInfo.access_token}`
        //   }
        //   return config
        // })
    };

    get = async (uri, params = {}) => {
        try {
            return await axios.get(this.getUrl(uri), {params: params});
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    post = async (uri, params = {}) => {
        try {
            return await axios.post(this.getUrl(uri), params);
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    put = async (uri, params = {}) => {
        try {
            return await axios.put(this.getUrl(uri), params);
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    patch = async (uri, params = {}) => {
        try {
            return await axios.patch(this.getUrl(uri), params);
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    show = async (uri) => {
        try {
            return await axios.get(this.getUrl(uri));
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    delete = async (uri) => {
        try {
            return await axios.delete(this.getUrl(uri));
        } catch (e) {
            return this.errorMsg(e);
        }
    };

    errorMsg = (e) => {
        //console.log(e)
        if (e.response === undefined) {
            e.status = 0;
            e.statusText = e.message;
            return {data: e};
        }

        let validationErrors = '';
        if (e.response.status === 422) {
            const errors = e.response.data.errors;
            for (let key in errors) {
                validationErrors += errors[key] + '. ';
            }
        }

        if (e.response.status !== 422) {
            validationErrors = e.response.data;
        }

        //console.log('validationErrors', validationErrors);

        return {data: e.response};
    };
}
