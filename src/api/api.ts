// api.ts
const apiUrl = "https://46.147.195.11:52000/patents/api";
const apiKey = "92E0DD1A-E03C-4717-A5A8-11C8DB79DC00";

async function sendRequest(url: string, requestOptions: RequestInit): Promise<any> {
    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
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
    try {
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
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
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
