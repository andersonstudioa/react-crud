import Header from "../../components/Header";
import Box, { BoxProps } from '@mui/material/Box';

interface UserAddType {
    title: string
}

const UserAdd = (props: UserAddType) => {

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

export default UserAdd