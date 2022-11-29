export interface menuItensTypes {
    id: number,
    name: string;
    icon: string;
    path: string;
}

export const menuItens: menuItensTypes[] = [
    {
        id: 0,
        name: 'Home',
        icon: 'home',
        path: '/'
    },
    {
        id: 1,
        name: ' Listar usuários',
        icon: 'group',
        path: '/list-users'
    },
    {
        id: 2,
        name: 'Novo usuário',
        icon: 'person_add',
        path: '/add-users'
    },

    //return valores;
]