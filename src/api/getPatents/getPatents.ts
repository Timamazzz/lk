import { get } from "../api";

export async function getPatents(personId: string) {
    try {
        const endpoint = 'get-patent';
        const params = { personId };
        const response = await get(endpoint, params);

        const sortedResponse = [...response];

        sortedResponse.sort((a, b) => new Date(b.dateOfIssue).getTime() - new Date(a.dateOfIssue).getTime());

        const sortedMessages = [...sortedResponse[0]?.messages];
        sortedMessages.sort((a, b) => b.type - a.type);

        sortedResponse[0].messages = sortedMessages;

        localStorage.setItem('patents', JSON.stringify(sortedResponse));
        return sortedResponse;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
