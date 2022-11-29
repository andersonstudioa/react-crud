import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';

const drawerWidth = 240;

interface PropsType {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    title: string;
}

const Header = (props: PropsType) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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