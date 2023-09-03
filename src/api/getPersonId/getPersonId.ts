import { post } from "../api";

export async function getPersonId(inn: string, dateOfBirth: string,) {
    const requestData = {
            inn,
            birthday: dateOfBirth,
    };
    const response = await post('check-inn-birthday', requestData);
    if (!response.status)
    {

        const newPersonId = response.personId;
        const newName = response.name;

        //localStorage.setItem('personId', newPersonId);
        //localStorage.setItem('name', newName);

        return newPersonId;
    }

    return null;
}
