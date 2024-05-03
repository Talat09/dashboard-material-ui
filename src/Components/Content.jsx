import { Box, Button } from "@mui/material";
// import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
// import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import Input from "./Input";
import RouteButton from "./RouteButton";
import ButtonGroup from "./ButtonGroup";
const Content = () => {
  return (
    <Box
      sx={{
        marginLeft: "30px",
        bgcolor: "rgba(13, 142, 132, 1)",
        backgroundImage: `linear-gradient(rgba(13, 142, 132, 1), rgba(0, 0, 0, 0.6)),url("https://i.ibb.co/bbMjKdJ/ezgif-7-f1bd9b5954.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "700px",
        borderRadius: "30px",
      }}
    >
      <Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              marginLeft: "20px",
              marginTop: "20px",
              position: "absolute",
              top: "10px",
              left: "150px",
            }}
          >
            <ButtonGroup />
          </Box>
          <Box sx={{ position: "absolute", top: "80px" }}>
            <RouteButton />
            <Input />
            <Button
              sx={{
                marginTop: "20px",
                marginLeft: "213px",
                width: "600px",
                bgcolor: "#0a9e90",
                color: "white",
                ":hover": {
                  bgcolor: "#0a9e90",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
