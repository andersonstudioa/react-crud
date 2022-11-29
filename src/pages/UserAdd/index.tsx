import Header from "../../components/Header";
import Box from '@mui/material/Box';
import Form from "../../components/Form"
import { useState } from 'react';
import { userDataType } from "../../shared/data/datausers";

interface UserAddType {
    title: string
}

const UserAdd = (props: UserAddType) => {
    const [users, setUsers] = useState<userDataType[]>([])

    const addNewUser = (user: userDataType) => {
        setUsers([...users, user])
    }

    const gender = ['Masculino', 'Feminino'];

    return (
        <>
            <Header title={props.title} />
            <Form
                gender={gender}
                saveUser={user => addNewUser(user)}
            />
        </>

    )
}

export default UserAdd