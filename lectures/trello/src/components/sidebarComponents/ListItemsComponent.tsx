import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Inbox, Mail } from '@mui/icons-material';

interface ListItemsProps {
  open: boolean;
  items: string[];
}

const ListItemsComponent: React.FC<ListItemsProps> = ({ open, items }) => (
  <>
    {items.map((text, index) => (
      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={{ minHeight: 48, px: 2.5, justifyContent: open ? 'initial' : 'center' }}>
          <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center', mr: open ? 3 : 'auto' }}>
            {index % 2 === 0 ? <Inbox /> : <Mail />}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    ))}
  </>
);

export default ListItemsComponent