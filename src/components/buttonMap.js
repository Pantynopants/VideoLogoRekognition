import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import SimpleDialog from './popup'
import Button from 'material-ui/Button';

export const mailFolderListItems = (
    <div>
        <ListItem  >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            {/* <ListItemText primary="Upload" /> */}
            <SimpleDialog>
                {/* <StarIcon /> */}
            </SimpleDialog>
        </ListItem>
        <ListItem button="flase" >
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            {/* <ListItemText primary="My Star" /> */}
            <SimpleDialog>
            </SimpleDialog>
        </ListItem> 
        <ListItem button="flase" >
        <Button href="http://dev.musite.net/test/videoSnap/">
            Video
      </Button>
      </ListItem>
        <ListItem button="flase" >
        <Button href="/video">
            Video test
      </Button>
      </ListItem>
        {/* <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Popular" />
        </ListItem> */}
        
            {/* <StarIcon /> */}
        
        
    </div>
);

export const otherMailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Log in" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Sign up" />
        </ListItem>

    </div>
);