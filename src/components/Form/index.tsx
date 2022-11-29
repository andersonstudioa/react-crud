import * as React from 'react';
import { useState } from "react";
import { userDataType } from "../../shared/data/datausers";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


interface FormType {
    gender: string[];
    saveUser: (user: userDataType) => void
}

const Form = (props: FormType) => {
    const [id, setId] = useState('')
    const [index, setIndex] = useState(0)
    const [picture, setPicture] = useState('')
    const [age, setAge] = useState(0)
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const toSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.saveUser({
            id,
            index,
            picture,
            age,
            name,
            gender,
            email,
            phone,
            address
        })
        //Clear fields
        setId('')
        setIndex(0)
        setPicture('')
        setAge(0)
        setName('')
        setGender('')
        setEmail('')
        setPhone('')
        setAddress('')
    }

    return (
        <>
            <form onSubmit={toSave} style={{ width: "100%" }}>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    mt: 11,
                    mx: 0,
                    px: 3,

                }}>

                    <Grid container spacing={3} sx={{ width: '100%', m: 0, p: 0 }}>
                        <Grid xs={12} md={9}>
                            <TextField
                                label="Nome"
                                id={name}
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <TextField
                                label="age"
                                id="age"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <TextField
                                label="Avatar"
                                id="picture"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <TextField
                                label="E-mail"
                                id="email"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <TextField
                                label="Gênero"
                                id="gender"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <TextField
                                label="Telefone"
                                id="phone"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <TextField
                                label="Endereço"
                                id="address"
                                sx={{ m: 0, width: '100%' }}
                            />
                        </Grid>
                        <Grid xs={12} md={12} justifyContent="flex-end">
                            <Button
                                sx={{ marginLeft: "auto", width: "100%", p: 2 }}
                                variant="contained"
                                endIcon={<SendIcon />}
                                size="large"
                                color="secondary"
                            >
                                Cadastrar
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>

    )
}

export default Form