import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

interface CardLinkType {
    id: number,
    name: string;
    icon: string;
    path: string;
    description: string;
}

const CardLink = (props: CardLinkType) => {
    return (
        <Card sx={{ minWidth: 400, m: 1, p: 1 }}>
            <CardContent>
                <Icon color="secondary" fontSize="large" >{props.icon}</Icon>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={props.path}>
                    Acessar
                </Link>
            </CardActions>
        </Card>
    );
}

export default CardLink