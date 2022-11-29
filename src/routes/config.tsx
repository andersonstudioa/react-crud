import Home from '../pages/Home';
import UserList from '../pages/UsersList';
import UserAdd from '../pages/UserAdd';

export const RoutesConfig = [
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