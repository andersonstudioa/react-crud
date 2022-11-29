import Header from "../../components/Header";
import Box, { BoxProps } from '@mui/material/Box';
import CardLink from "../../components/CardLink";
import { menuItensTypes, menuItens } from '../../shared/data/datamenu';

interface HomeType {
    title: string;
    items?: menuItensTypes[];
}

const Home = (props: HomeType) => {

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
                {menuItens.map((item) => {
                    return item.name != 'Home' ? (
                        <CardLink
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            icon={item.icon}
                            path={item.path}
                            description={item.description}
                        />
                    ) : ""

                })}
                <CardLink
                    key="sair"
                    id={3}
                    name="Sair"
                    icon="logout"
                    path="/"
                    description="Sair do sistema"
                />
            </Box>
        </>
    )
}

export default Home