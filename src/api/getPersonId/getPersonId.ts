import { post } from "../api";

export async function getPersonId(inn: string, dateOfBirth: string,) {
    const requestData = {
            inn,
            birthday: dateOfBirth,
    };
    const response = await post('check-inn-birthday', requestData);
    if (!response.status)
    {

        const newPersonId = response.personId

        const firstName = response.firstName;
        const lastName = response.lastName;
        const patronymic = response.patronymic;

        const name = response.name;
        const fullName = firstName + " " + lastName + (patronymic? " " + patronymic.charAt(0) + "." : "");
        localStorage.setItem('personId', newPersonId);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('patronymic', patronymic);
        localStorage.setItem('name', name);
        localStorage.setItem('fullName', fullName);

        return newPersonId;
    }

    return null;
}
