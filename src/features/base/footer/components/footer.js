import {
  Grid,
  Container,
  Typography,
  List,
  ListItem,
  Stack,
  Button,
  Box,
  IconButton,
  ListItemButton,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../utils/Icon';
import FooterStyled from './overrides/footerStyle';
import {
  nav1,
  nav2,
  navicon,
  buttons,
} from '../features/base/footer/components/config';

function Footer() {
  return (
    <FooterStyled component='footer'>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <Box mt={5}>
              <Link to='/' className='logo-link'>
                <Icon path='opsci' className='logo' />
              </Link>
              <Typography
                mt={3}
                variant='h5'
                textTransform='uppercase'
                fontFamily="'Exo 2'"
                fontWeight={500}>
                The Open Science Decentralized Autonomous Organization
              </Typography>
              <Stack direction='row' mt={3} spacing={2}>
                <Icon path='footer' className='logo' />
                <Icon path='holo-icon' className='logo' />
                <Icon path='Vector (1)' className='logo' />
                <Icon path='Vector (2)' className='logo' />
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Stack
                  direction='row'
                  mt={3}
                  justifyContent='space-between'
                  className='nav-links'>
                  <List>
                    {nav1.map((item, i) => (
                      <ListItem key={item.name}>
                        <ListItemButton>
                          <Typography
                            variant='body1'
                            fontFamily="'Exo 2'"
                            color={i === 0 ? 'primary' : 'main.contrastText'}
                            fontWeight={i === 0 ? '600' : '500'}
                            to={item.path}>
                            {item.name}
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <List>
                    {nav2.map((item, i) => (
                      <ListItem key={item.name}>
                        <ListItemButton>
                          <Typography
                            variant='body1'
                            fontFamily="'Exo 2'"
                            color={i === 0 ? 'primary' : 'main.contrastText'}
                            fontWeight={i === 0 ? '600' : '500'}
                            to={item.path}>
                            {item.name}
                          </Typography>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </Grid>
              <Grid item md={3} sm={6} xs={12} ml='auto'>
                <Stack
                  direction={{ xs: 'row', sm: 'column' }}
                  justifyContent={{ xs: 'center' }}
                  spacing={2}
                  mt={5}>
                  {buttons.map((item) => (
                    <Button key={item.name} className='footer-btn'>
                      {item.name}
                    </Button>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={11}>
          <Grid
            container
            direction='row-reverse'
            justifyContent='center'
            alignItems='center'
            spacing={3}>
            <Grid item xs={12} md={7} sm={12}>
              <Stack
                direction={{ sm: 'row', xs: 'column' }}
                justifyContent={{ sm: 'center' }}
                spacing={2}
                alignItems='center'>
                <Typography
                  variant='body2'
                  textTransform='uppercase'
                  fontFamily="'Exo 2'"
                  fontWeight={500}>
                  CONNECT WITH US
                </Typography>
                <Stack direction='row' spacing={{ xs: 1, sm: 2 }}>
                  {navicon.map((item) => (
                    <IconButton className='btn-icon' key={item.name}>
                      <Icon path={item.name} />
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Stack alignItems={{ xs: 'center', sm: 'start' }}>
                <List dense className='policy-privacy'>
                  <ListItem>
                    <Link to='/' fontFamily='Exo 2'>
                      © OpSci {new Date().getFullYear()}
                    </Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Terms of Use</Link>
                  </ListItem>
                </List>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FooterStyled>
  );
}

export default Footer;
