import { styled } from '@mui/material/styles';
import MuiAppBar, { type AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';

const drawerWidth = 240;

interface AppBarMenuProps extends MuiAppBarProps {
  open?: boolean;
  onOpen: () => void;
}

const AppBarRoot = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarMenuProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const NavBar: React.FC<AppBarMenuProps> = ({ open, onOpen, ...props }) => (
  <AppBarRoot position="fixed" open={open} {...props} onOpen={onOpen}>
    <Toolbar>
      <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={onOpen} sx={{ ...(open && { display: 'none' }) }}>
        <Menu />
      </IconButton>
    </Toolbar>
  </AppBarRoot>
);

export default NavBar