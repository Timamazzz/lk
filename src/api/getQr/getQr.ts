
import { get, post } from "../api";
import { Patent } from "../../Classes/Patent";

export async function getQRCode(patentId: string, sum: number): Promise<any> {
    try {
        // Define the endpoint 
        const endpoint = "get-qr";

        // Prepare the params 
        const params = {
            patentId: patentId,
            sum: sum,
        };

        // Call the 'get' function with the endpoint and params 
        return await get(endpoint, params);
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
