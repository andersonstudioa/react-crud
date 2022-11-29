import Header from "../../components/Header"

interface UserAddType {
    title: string
}

const UserAdd = (props: UserAddType) => {

    return (
        <Header title={props.title} />
    )
}

export default UserAdd