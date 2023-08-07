// api.ts
const apiUrl = "https://89.109.238.137:49001/patents/api";
const apiKey = "C0F7091E-6BA7-4DBA-9E60-20696016F306";

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
