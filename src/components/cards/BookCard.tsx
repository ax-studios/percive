import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props =
  | {
      pages: number;
      readed: number;
    }
  | {
      pages?: never;
      readed?: never;
    };

export default function BookCard({ pages, readed }: Props) {
  return (
    <Card sx={{ maxWidth: 200, height: 'min-content' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          image='/images/contemplative-reptile.jpg'
          alt='green iguana'
          className='h-52'
        />
        <CardContent
          sx={{
            p: 2,
          }}
        >
          <Typography
            {...(readed && { gutterBottom: true })}
            variant='h5'
            component='h3'
          >
            Lizard
          </Typography>
          {readed && (
            <Typography variant='subtitle1' component='p'>
              {readed} / {pages}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
