import Header from "../../components/Header"

interface HomeType {
    title: string
}

const Home = (props: HomeType) => {

    return (
        <>
            <Header title={props.title} />
            <div><p>Página inicial</p></div>
        </>
    )
}

export default Home