import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TopBar from "./TopBar";
import Content from "./Content";

import Footer from "./Footer";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "white" : "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Container = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Item sx={{ boxShadow: "none" }}>
          <TopBar />
        </Item>
        <Box sx={{ height: "80vh", borderRadius: "20px" }}>
          <Content />
        </Box>
        <Item sx={{ boxShadow: "none" }}>
          <Footer />
        </Item>
      </Stack>
    </Box>
  );
};

export default Container;
