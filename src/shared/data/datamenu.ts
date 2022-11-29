export interface menuItensTypes {
    id: number,
    name: string;
    icon: string;
    path: string;
    description: string;
}

export const menuItens: menuItensTypes[] = [
    {
        id: 0,
        name: 'Home',
        icon: 'home',
        path: '/',
        description: 'Página inicial',
    },
    {
        id: 1,
        name: ' Listar usuários',
        icon: 'group',
        path: '/list-users',
        description: 'Visualize todos os cadastros de usuários',
    },
    {
        id: 2,
        name: 'Novo usuário',
        icon: 'person_add',
        path: '/add-users',
        description: 'Cadastre um novo usuário no sistema',
    },

    //return valores;
]