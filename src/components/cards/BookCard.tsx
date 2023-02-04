import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type Props = {
  i: number;
  name: string;
} & (
  | {
      pages: number;
      readed: number;
    }
  | {
      pages?: never;
      readed?: never;
    }
);

export default function BookCard({ pages, readed, i, name }: Props) {
  return (
    <Card sx={{ maxWidth: '200px', width: '100%' }}>
      <CardActionArea>
        <CardMedia
          component='img'
          image={`https://source.unsplash.com/random/?book&${i}`}
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
            {name}
          </Typography>
          {readed && (
            <>
              <Typography variant='subtitle1' component='p'>
                {readed} / {pages}
              </Typography>
              <Paper
                className='relative mt-2 h-4 w-full rounded-lg bg-black/20'
                variant='elevation'
                elevation={3}
              >
                <div
                  className='absolute top-0 h-full  rounded-lg bg-primary-500'
                  style={{ width: `${(readed / pages) * 100}%` }}
                ></div>
              </Paper>
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
