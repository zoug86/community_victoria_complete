import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';

export default function MediaCard({ image, title }) {

    return (
        <Card sx={{ maxWidth: 345, m: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="support">
                        {title[0].toUpperCase()}
                    </Avatar>
                }
                title={title}
                subheader=""
            />
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ height: "600px" }}
                className="media-card"
            />

        </Card>
    );
}
