import config from "../config.json";
// api.ts
const apiUrl = config.apiUrl;
const apiKey = config.apiKey;

async function sendRequest(url: string, requestOptions: RequestInit): Promise<any> {
    const response = await fetch(url, requestOptions);
    return await response.json();
}

export async function get(endpoint: string, params?: Record<string, any>): Promise<any> {
    try {
        const url = new URL(`${apiUrl}/${endpoint}`);
        if (params) {
            Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
        }

        const requestOptions: RequestInit = {
            method: "GET",
            headers: {
                "X-API-Key": apiKey,
            },
        };

        return await sendRequest(url.toString(), requestOptions);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export async function post(endpoint: string, data: any): Promise<any> {
    const url = `${apiUrl}/${endpoint}`;
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
        },
        body: JSON.stringify(data),
    };


    return await sendRequest(url, requestOptions);
}

export async function postFormData(endpoint: string, data: FormData): Promise<any> {
    try {
        const url = `${apiUrl}/${endpoint}`;
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "X-API-Key": apiKey,
            },
            body: data,
        };

        return await sendRequest(url, requestOptions);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
