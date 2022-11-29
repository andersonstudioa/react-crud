import Box from '@mui/material/Box';
import LeftMenu from '../components/LeftMenu';
import { menuItens } from '../shared/data/datamenu'

interface PagesType {
    children: any
}

const Pages = (props: PagesType) => {

    const drawerWidth = 240;

    const isAuthenticated = true;

    return (
        <>
            {isAuthenticated ?
                <>
                    <LeftMenu items={menuItens} />
                    <Box sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        mb: 0
                    }}>
                        {props.children}
                    </Box>
                </>
                :
                <>
                    {props.children}
                </>
            }

        </>
    )
}

export default Pages