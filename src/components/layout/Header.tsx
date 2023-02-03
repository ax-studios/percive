import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

interface Props {
  title: string;
}

export default function MenuAppBar({ title }: Props) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
