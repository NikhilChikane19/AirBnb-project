import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Cards({ listing }) {
    return (
        <>
            <Container maxWidth='xl'>
                <Grid container spacing={{ xs: 2 , md : 2}}>
                    {listing.map((x) => {
                        return <Grid item xs={12} sm={6} md={3} key={x.id}  >
                            <Card sx={{ maxWidth: 345, maxHeight: 355  }}>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={x.images.picture_url}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" color= "text.primary">
                                        {x.address.market},{x.address.country}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {x.property_type}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {x.room_type}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Typography size="small" color= "text.secondary" sx={{ fontWeight: 'bold', paddingLeft: 1 }}>${x.price}</Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    })}
                </Grid>
            </Container>

        </>
    )
}
