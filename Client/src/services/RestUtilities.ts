import axios from "axios";

export default class RestUtilities {

    public get<T>(url: string): Promise<T> {
        return this.request<T>("GET", url);
    }

    public delete(url: string): Promise<void> {
        return this.request<void>("DELETE", url);
    }

    public put<T>(url: string, data: Object | string): Promise<T> {
        return this.request<T>("PUT", url, data);
    }

    public post<T>(url: string, data: Object | string): Promise<T> {
        return this.request<T>("POST", url, data);
    }

    private request<T>(method: string, url: string, data: any = null): any {
        let body: any = data;
        let headers: any = {};
        return new Promise((resolve, reject) => {
            return axios(url, {
                method: method,
                headers: headers,
                data: body
            }).then((response: any) => {
                if (response.status === 400) {
                    console.log("Bad Request");
                }
                resolve(response.data);

            }).catch((error: any) => {
                reject(error.response);
            });
        });
    }
}