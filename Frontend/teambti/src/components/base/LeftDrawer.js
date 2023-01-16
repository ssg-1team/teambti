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
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { IconButton } from "@mui/material";

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

  return (
    <>
      <Fragment key={"left"}>
        <IconButton onClick={toggleDrawer("left", true)} size="large" sx={{color:"#F38181"}}>
          <AccessibilityNewIcon fontSize="inherit"/>
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          <MyProfile />
        </Drawer>
      </Fragment>
    </>
  );
};

export default LeftDrawer;
