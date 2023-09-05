import React, {useEffect} from "react";
import styles from "./styles";

interface ProfileProps {
    setIsAuthorized: (isAuthorized: boolean) => void;
    isAuthorized?: boolean;
}

function Profile({ setIsAuthorized }: ProfileProps) {

    useEffect(() => {
        setIsAuthorized(true)
    }, []);

    return (
        <div>
        </div>
    );
}


export default Profile;
