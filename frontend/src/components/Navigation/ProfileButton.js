import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; // ✅ import history
import * as sessionActions from "../../store/session";
import { IconButton, Menu, MenuItem, Typography, Divider } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory(); // ✅

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(sessionActions.logout());
    handleCloseMenu();
  };

  return (
    <>
      <IconButton
        onClick={handleOpenMenu}
        size="large"
        edge="end"
        color="inherit"
        aria-controls={open ? "profile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ ml: 1 }}
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 220,
            bgcolor: "background.paper",
            color: "text.primary",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {user ? (
          <>
            <MenuItem disabled>
              <Typography variant="subtitle1" fontWeight="bold">
                {user.username}
              </Typography>
            </MenuItem>
            <MenuItem disabled>
              {user.firstName} {user.lastName}
            </MenuItem>
            <MenuItem disabled>{user.email}</MenuItem>
            <Divider />
            <MenuItem onClick={logout}>Log Out</MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                history.push("/login"); // ✅ Go to login
              }}
            >
              <Typography component="span" sx={{ cursor: "pointer" }}>
                Log In
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleCloseMenu();
                history.push("/signup"); // ✅ Go to signup
              }}
            >
              <Typography component="span" sx={{ cursor: "pointer" }}>
                Sign Up
              </Typography>
            </MenuItem>
          </>
        )}
      </Menu>
    </>
  );
}

export default ProfileButton;
