interface LoginType {
    user: string;
    password: string;
    login: string;
}

const Login = (props: LoginType) => {
    return (
        <h1>Faça seu login</h1>
    )
}

export default Login