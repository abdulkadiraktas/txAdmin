import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  content: {
    display: "flex",
  },
  sidebar: {
    paddingRight: 10,
  },
  actionPage: {
    paddingLeft: 10,
    flexGrow: 1,
  },
}));

export const PlayerActionModal: React.FC = () => {
  const classes = useStyles();

  return (
    <Dialog open={true} fullWidth maxWidth="md">
      <DialogTitle>[1] Taso</DialogTitle>
      <DialogContent className={classes.content}>
        <List className={classes.sidebar}>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Info" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="IDs" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Ban" />
          </ListItem>
        </List>
        <Box className={classes.actionPage}>
          <Typography variant="h6">Player Info</Typography>
          <Box py={1}>
            <Typography variant="body1">Session Time: 20 minutes</Typography>
            <Typography variant="body1">Play Time: --</Typography>
            <Typography variant="body1">
              Join Date: May 4, 2021 - 14:25:15
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            label="Player Note"
            multiline
            rows={4}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>DM</Button>
        <Button>Kick</Button>
        <Button>Warn</Button>
      </DialogActions>
    </Dialog>
  );
};
