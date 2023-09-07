import { get } from "../api";

export async function getPatents(personId: string) {
    try {
        const endpoint = 'get-patent';
        const params = { personId };
        const response = await get(endpoint, params);

        const sortedResponse = [...response];

        sortedResponse.sort((a, b) => new Date(b.dateOfIssue).getTime() - new Date(a.dateOfIssue).getTime());

        sortedResponse.forEach(patent => {
            const sortedMessages = [...patent.messages];
            sortedMessages.sort((a, b) => a.type - b.type);
            patent.messages = sortedMessages;
        });

        localStorage.setItem('patents', JSON.stringify(sortedResponse));
        return sortedResponse;

    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
