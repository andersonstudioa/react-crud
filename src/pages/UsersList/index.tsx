import Header from "../../components/Header";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userData, userDataType } from '../../shared/data/datausers';

interface UserListType {
    title: string;
}

const columns: GridColDef[] = [
    {
        field: 'index',
        headerName: 'ID',
        type: 'number',
        width: 50,
    },
    {
        field: 'name',
        headerName: 'Nome',
        flex: 1,
        minWidth: 150,
        editable: false,
    },
    {
        field: 'gender',
        headerName: 'Gênero',
        width: 80,
        editable: false,
    },
    {
        field: 'age',
        headerName: 'Idade',
        type: 'number',
        width: 70,
        editable: false,
    },
    {
        field: 'email',
        headerName: 'E-mail',
        flex: 1,
        minWidth: 150,
        editable: false,
    },
];

const UserList = (props: UserListType) => {
    const rows = userData;
    console.log(userData);
    return (
        <>
            <Header title={props.title} />
            <Box
                component="main"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    height: '700px',
                    mt: 7,
                    p: 3,
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
        </>
    )
}

export default UserList