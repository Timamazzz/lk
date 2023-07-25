// api.ts
const apiUrl = "https://46.147.195.11:52000/patents/api";

export async function api(endpoint: string, method: string, data?: any): Promise<any> {
    try {
        const url = `${apiUrl}/${endpoint}`;
        const headers = {
            "Content-Type": "application/json",
            "X-API-Key": "92E0DD1A-E03C-4717-A5A8-11C8DB79DC00",
        };

        const requestOptions: RequestInit = {
            method: method,
            headers: headers,
            body: data ? JSON.stringify(data) : undefined,
        };

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
