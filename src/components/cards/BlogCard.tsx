import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import UnstyledLink from '@/components/links/UnstyledLink';

type Props = {
  index: number;
  title: string;
  description: string;
  href: string;
};

export default function BlogCard({ index, href, description, title }: Props) {
  return (
    <Card>
      <CardActionArea LinkComponent={UnstyledLink} href={href}>
        <CardMedia
          component='img'
          height='140'
          className='aspect-video'
          image={`https://source.unsplash.com/random/?nature&${index}`}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
