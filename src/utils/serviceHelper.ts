import axios, { AxiosRequestConfig } from 'axios';

export enum HTTPMethod {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    PUT = 'PUT',
}

export class ServiceHelper {
    public static getBaseUrl(): string {

        return 'http://localhost:3000/';
    }

    public static async requestData({ method = HTTPMethod.GET, url, headers, data }: AxiosRequestConfig) {
        const requestUrl = `${this.getBaseUrl()}${url}`;
        const options = {
            method,
            headers,
            data,
        };

        try {
            const { data: responseData } = await axios(requestUrl, options);
            return responseData;
        } catch (e) {
            console.error(e);
            throw new Error(e);
        }
    }
}
