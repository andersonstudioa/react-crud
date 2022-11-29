import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

interface PropsType {
    window?: () => Window;
    title: string;
}

const Header = (props: PropsType) => {

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    mb: 0
                }}
                color="secondary"
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Header