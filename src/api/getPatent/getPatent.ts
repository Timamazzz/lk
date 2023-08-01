import { get } from "../api";
import { Patent } from "../../Classes/Patent";

export async function getPatent(personId: string): Promise<Patent> {
    try {
        const endpoint = 'get-patent';
        const params = { personId };
        const response = await get(endpoint, params);

        const { patentId, number, issued, dateOfIssue, expirationDate, debt, payed_to_date, price, messages } = response;
        const patentObj = new Patent(
            patentId,
            number,
            issued,
            dateOfIssue,
            expirationDate,
            debt,
            payed_to_date,
            price,
            messages
        );

        localStorage.setItem('patent', JSON.stringify(response));

        console.log(response)
        console.log(localStorage.getItem('personId'))
        return patentObj;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
