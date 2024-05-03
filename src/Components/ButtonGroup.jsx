import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { Box, Button, Stack } from "@mui/material";

const ButtonGroup = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1D9D92",
        width: "300px",
        height: "60px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "30px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Button
          variant=""
          sx={{
            bgcolor: "white",
            color: "black",
            textTransform: "none",
            "&:hover": { bgcolor: "white" },
          }}
        >
          <FlightTakeoffIcon />
          Search Pad
        </Button>
        <Button sx={{ textTransform: "none", color: "white", gap: "5px" }}>
          <ArrowCircleDownIcon />
          PNR Import
        </Button>
      </Stack>
    </Box>
  );
};

export default ButtonGroup;
