import { Box } from "@mui/material";
import Container from "./Container";
import SideBar from "./SideBar";
import "./Home.css";
const Home = () => {
  return (
    <Box className="home">
      <SideBar />
      <Container />
    </Box>
  );
};

export default Home;
