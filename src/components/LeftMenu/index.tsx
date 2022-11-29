import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuItensTypes } from '../../shared/data/datamenu';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

interface PropsType {
    window?: () => Window;
    title?: string;
    items: menuItensTypes[];
}

const LeftMenu = (props: PropsType) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ width: '100%' }}>
            <List>
                {props.items.map((item) => (
                    <Link to={item.path} key={item.name}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon color="secondary">{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem key={"sair"} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon color="secondary">logout</Icon>
                        </ListItemIcon>
                        <ListItemText primary={"Sair"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    //const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                anchor="left"
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>

        </Box>

    )
}

export default LeftMenu