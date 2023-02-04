import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
}

export default function MenuAppBar({ title }: Props) {
  return (
    <AppBar
      position='static'
      sx={{
        borderRadius: '0 0 1rem 1rem',
      }}
    >
      <Toolbar>
        <Typography
          variant='h3'
          component='div'
          sx={{ flexGrow: 1 }}
          className='capitalize'
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
