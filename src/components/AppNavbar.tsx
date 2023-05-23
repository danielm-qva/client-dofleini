import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { applogout } from '../redux/slice/sliceApp';
import { Home , ArticleRounded } from '@mui/icons-material'; 

function AppNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const dispacht = useDispatch();
  const navigate = useNavigate();
  const login = useSelector((store: any) => store.app.statusLogin)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  const logoutApp = () => {
    dispacht(applogout());
    navigate('/home');
  }

  return (
    <header>
    <AppBar position="static" color='primary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'gainsboro',
              textDecoration: 'none',
            }}
          >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2s69pEgZS-h4C4KOL-jLHYjSJM7FclMvHUxh_DGbtfrq50jIBgu-pYGA71ixJPvBOhUw&usqp=CAU"  
             style={{width: "50px" , borderRadius: "5px" }} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        
            <Link
              to='/home'
              style = {{textDecoration: 'none' , display: 'flex' ,  }}
            >
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex'}}
              >
             <Home/>  Home
              </Button>
            </Link>
            
            <Link
              to='/survey'
              style = {{textDecoration: 'none'}}
            >
              <Button
                key="survey"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex' }}
              >
               <ArticleRounded /> Survey
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {
              login ? (<>
                <Tooltip title="Open settings">
                  <IconButton style={{backgroundColor: 'black'}} onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                    <MenuItem key="Profile" onClick={() => navigate('/profile')}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={logoutApp} key="Logout">
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                </Menu></>) :
                (
                  <Link
              to='/login'
              style = {{textDecoration: 'none'}}
            >
              <Button
                key="survey"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Login
              </Button>
            </Link>
                )
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </header>
  );
}
export default AppNavbar;