import Home from '../pages/Home';
import UserList from '../pages/UsersList';
import UserAdd from '../pages/UserAdd';
import Box from '@mui/material/Box';
import LeftMenu from '../components/LeftMenu';
import { menuItens } from '../shared/data/datamenu'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Pages from '../pages';

interface RoutesConfigType {

}

const RoutesApp = (props: RoutesConfigType) => {

    const RoutesConfig = [
        {
            path: '/',
            element: <Home title='Página Inicial' />,
        },
        {
            path: '/list-users',
            element: <UserList title='Listar usuários' />,
        },
        {
            path: '/add-users',
            element: <UserAdd title='Adicionar Usuários' />,
        },
    ]

    const drawerWidth = 240;

    return (
        <>
            <Router>
                <Routes>
                    {RoutesConfig.map(route =>
                        <Route
                            path={route.path}
                            element={<Pages>{route.element}</Pages>}
                            key={route.path}
                        />
                    )}
                </Routes>
            </Router>
        </>
    )
}

export default RoutesApp