import React, {useEffect, useState} from "react";
import styles from "./styles";
import {getPatents} from "../../api/getPatents/getPatents";
import Patent from "../../components/project/patent/Patent";

function Profile() {

    const [patents, setPatents] = useState<any[]>([]);

    useEffect(() => {
        async function fetchPatents() {
            try {
                // @ts-ignore
                const result = await getPatents(localStorage.getItem("personId"));
                setPatents(result);
            } catch (error) {
                console.error("Error fetching patents:", error);
            }
        }
        fetchPatents();
    }, []);

    return (
        <div>
            <text>Данные по патенту</text>
            {/* @ts-ignore*/}
            {patents?.length > 0? (
                /* @ts-ignore*/
                patents.map((patent: any, index: number) => (<Patent patent={patent} />))
                ) :
                (
                    <text>Нет активных патентов</text>
                )
            }

        </div>
    );
}


export default Profile;
