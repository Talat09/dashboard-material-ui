import { Box, Button, Stack } from "@mui/material";

const RouteButton = () => {
  return (
    <Box sx={{ marginTop: "50px", marginLeft: "280px" }}>
      <Box
        sx={{
          bgcolor: "white",
          width: "400px",
          height: "60px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button
            variant=""
            sx={{
              bgcolor: "#1D9D92",
              color: "white",
              borderRadius: "30px",

              "&:hover": { bgcolor: "white" },
            }}
          >
            ONE WAY
          </Button>
          <Button sx={{ color: "black", gap: "5px" }}>ROUND WAY</Button>
          <Button sx={{ color: "black", gap: "5px" }}>MULTI CITY</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RouteButton;
