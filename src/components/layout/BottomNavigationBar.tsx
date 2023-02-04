import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  React.useEffect(() => {
    const path = window.location.pathname;
    const index = options.findIndex((option) => option.href === path);
    setValue(index);
  }, []);

  return (
    <Paper elevation={3} sx={{ py: 1 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          router.push(options[newValue].href);
        }}
      >
        {options.map((option, index) => (
          <BottomNavigationAction
            key={index}
            label={option.label}
            icon={option.icon}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
const options = [
  {
    label: 'Home',
    icon: <HomeOutlinedIcon />,
    href: '/',
  },
  {
    label: 'Books',
    icon: <AutoStoriesIcon />,
    href: '/books',
  },
  {
    label: 'Article',
    icon: <ArticleOutlinedIcon />,
    href: '/article',
  },
  {
    label: 'Journel',
    icon: <DocumentScannerIcon />,
    href: '/journel',
  },
  {
    label: 'Profile',
    icon: <Person2OutlinedIcon />,
    href: '/profile',
  },
];
