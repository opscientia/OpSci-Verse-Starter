import {
  ListItem,
  ListItemButton,
  List,
  Collapse,
  ListItemText,
  ClickAwayListener,
  ListItemIcon,
  Typography,
  Stack,
} from '@mui/material';
import * as React from 'react';
import MenuStyled from './overrides/menuStyle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import IconUrl from '../utils/Icon';
export default function Menu({ menu }) {
  const [collapse, setcollapse] = React.useState(null);
  const navigate = useNavigate();
  const handleClick = (prop) => (e) => {
    if (prop.children) {
      setcollapse(collapse === prop.title ? null : prop.title);
    } else {
      setcollapse(null);
      navigate(prop.path);
    }
  };
  const handleClickAway = () => {
    setcollapse(null);
  };
  const { navbar } = menu;
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <MenuStyled>
        {navbar.map((item, idx) => (
          <ListItem key={idx} className="menu-list">
            <ListItemButton
              onClick={handleClick(item)}
              sx={{
                borderRadius: 0.6,
                color:
                  item.title === collapse
                    ? (theme) => theme.palette.primary.main
                    : (theme) => theme.palette.text.primary,
              }}>
              {item.title}{' '}
              {item.children &&
                (collapse === item.title ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                ))}
            </ListItemButton>
            {item.children && (
              <Collapse
                sx={{
                  minWidth: { xs: 0, md: item.title === 'dApps' ? 500 : 0 },
                }}
                in={item.title === collapse}
                timeout='auto'
                unmountOnExit>
                <List
                  component='div'
                  disablePadding

                  sx={{
                    display: 'grid',
                    gridTemplateRows:
                      item.title === 'dApps'
                        ? 'repeat(3,minmax(0,1fr))'
                        : 'repeat(1,minmax(0,1fr))',
                    gridAutoFlow: {
                      xs: 'row',
                      md: item.title === 'dApps' ? 'column' : 'row',
                    },
                    gridGap: 8,
                    p: 1,
                  }}>
                  {item.children.map((child) => (
                    <ListItemButton
                      sx={{
                        flexGrow: 0,
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}
                      onClick={() => {
                        navigate(child.path);
                        setcollapse(null);
                      }}
                      key={child.title}>
                      <Stack direction='row' spacing={2}>
                        <ListItemIcon>
                          <IconUrl path={child.icon} />
                        </ListItemIcon>
                        <Stack>
                          <ListItemText primary={child.title} />
                          {child.subtitle && (
                            <Typography
                              variant='caption'
                              display={{ xs: 'none', md: 'block' }}>
                              {child.subtitle}
                            </Typography>
                          )}
                        </Stack>
                      </Stack>
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </ListItem>
        ))}
      </MenuStyled>
    </ClickAwayListener>
  );
}
