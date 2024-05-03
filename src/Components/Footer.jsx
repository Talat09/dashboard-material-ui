import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "#1D9D92",
          color: "white",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Typography>© 2023 All rights reserved by TailDash</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
