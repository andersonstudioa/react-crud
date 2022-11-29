import * as React from 'react';
import { styled } from '@mui/material/styles';
import Header from "../../components/Header";
import Box, { BoxProps } from '@mui/material/Box';

interface UserListType {
    title: string
}

const UserList = (props: UserListType) => {

    return (
        <>
            <Header title={props.title} />
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    mt: 7,
                    p: 3,
                }}
            >
                Formulário aqui
            </Box>
        </>

    )
}

export default UserList