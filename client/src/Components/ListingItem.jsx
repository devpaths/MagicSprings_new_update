import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const ListingItem = ({ listing }) => {
  return (
    <Link to={`/listing/${listing._id}`} className="block w-full h-full">
      <Card
        sx={{
          width: '100%', // Full width within the grid item
          height: '100%',
         
          borderRightWidth:0.1,
          borderLeftWidth:0.1,
          borderTopWidth:0.1,
          borderBottomWidth:0.1,
          borderBlockEndColor:'lightgray',
          borderBlockColor:'lightgray',
          maxWidth: 350,
          maxHeight: 550,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media (max-width: 600px)': {
            maxWidth: '100%', // On small screens, use full width
            height: 'auto', // Allow height to adjust automatically
          },
        }}
      >
        <CardMedia
          sx={{ height: 350, '@media (max-width: 600px)': { height: 250 } }} // Adjust height on small screens
          image={listing.imageUrls[0]}
          title={listing.name}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            padding: 2,
            '@media (max-width: 600px)': { padding: 1 },
          }}
        >
          <Typography gutterBottom variant="h5" component="div" noWrap>
            {listing.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {listing.description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {listing.Range || "No Range available"}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {listing.Mounting || "No Mounting info"}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default ListingItem;
