import React, { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Profile from "../Profile";
import MyProfile from "../MyProfile";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';

const LeftDrawer = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  return (
    <div>
      <Fragment key={"left"}>
        <IconButton onClick={toggleDrawer("left", true)} size="large" sx={{color:"#F38181"}}>
          <ChevronRightIcon fontSize="inherit"/>
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
        >
          <DrawerHeader>
            <img src={require(`../../assets/image/logo_remove.png`)} style={{width:200}} alt=""/>
            <IconButton onClick={toggleDrawer("left", false)} size="large" sx={{color:"#F38181"}}>
              <ChevronLeftIcon fontSize="inherit"/>
            </IconButton>
          </DrawerHeader>
          <MyProfile />
        </Drawer>
      </Fragment>
    </div>
  );
};

export default LeftDrawer;
