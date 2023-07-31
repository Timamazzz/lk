import { post } from "../api";

export function usePersonId() {
    const getPersonId = async (inn: string, dateOfBirth: string) => {
        try {
            const requestData = {
                inn,
                birthday: dateOfBirth,
            };

            const response = await post('check-inn-birthday', requestData);
            const newPersonId = response.personId;

            // Записываем полученный personId в Local Storage
            localStorage.setItem('personId', newPersonId);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Получаем personId из Local Storage
    const personId = localStorage.getItem('personId');

    return { personId, getPersonId };
}
