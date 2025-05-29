import { styled, useTheme, type Theme, type CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import ListItemsComponent from '../components/sidebarComponents/ListItemsComponent';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`, 
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`, 
  },
});

type DrawerRootProps = { open: boolean };
const DrawerRoot = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<DrawerRootProps>(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': open ? openedMixin(theme) : closedMixin(theme),
  }),
);

interface DrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<DrawerMenuProps> = ({ open, onClose }) => {
  const theme = useTheme();
  return (
    <DrawerRoot variant="permanent" open={open} anchor="left">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: theme.spacing(0, 1), ...theme.mixins.toolbar }}>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItemsComponent open={open} items={['Inbox','Starred','Send email','Drafts']}/>
      </List>
      <Divider />
      <List>
        <ListItemsComponent open={open} items={['All mail','Trash','Spam']} />
      </List>
    </DrawerRoot>
  );
};

export default Sidebar;