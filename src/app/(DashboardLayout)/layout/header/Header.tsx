import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Typography, Avatar } from '@mui/material';
import PropTypes from 'prop-types';
import { IconBellRinging, IconMenu } from '@tabler/icons-react';
import Link from 'next/link';

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: 'none',
              xs: 'inline',
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* Logo Image */}
        <Avatar src="/images/backgrounds/htr.jpg" alt="HopeThroughRecycling Logo" sx={{ width: 40, height: 40, mr: 1 }} />

        {/* HopeThroughRecycling Text with Clickable Link */}
        <Typography
          variant="h6"
          sx={{
            color: 'green',
            mx: 2,
            cursor: 'pointer',
            fontWeight: 'bold',
            '&:hover': { textDecoration: 'underline' },
            display: 'inline'
          }}
          onClick={() => window.open('https://www.instagram.com/hopethroughrecycling/', '_blank')}
        >
          HopeThroughRecycling
        </Typography>

        {/* Additional Links */}
        <Typography
          variant="body1"
          sx={{ mx: 2, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          onClick={() => window.open('https://www.instagram.com/hopethroughrecycling/', '_self')}
        >
          About Us
        </Typography>
        
        <Typography
          variant="body1"
          sx={{ mx: 2, cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
          onClick={() => window.open('https://www.instagram.com/hopethroughrecycling/', '_self')}
        >
          Contact
        </Typography>

       

        <Box flexGrow={1} />
        
        <Stack spacing={1} direction="row" alignItems="center">
        <IconButton
          size="large"
          aria-label="show new notifications"
          color="inherit"
          aria-controls="msgs-menu"
          aria-haspopup="true"
        >
          <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>
        </IconButton>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
