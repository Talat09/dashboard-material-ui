import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import SearchButton from "./SearchButton";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HouseIcon from "@mui/icons-material/House";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
// import SearchButton from "./SearchButton";
import { styled } from "@mui/material/styles";

const StyledLogo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  "& img": {
    width: "40px",
    height: "40px",
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(10),
  },
}));
const SideBar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        bgcolor: "#1D9D92",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
      }}
    >
      <StyledLogo>
        <img src="your-logo.png" alt="Logo" />
      </StyledLogo>
      <Divider sx={{ width: "70%", margin: "10px auto", bgcolor: "white" }} />
      <List>
        <ListItem
          Button
          sx={{
            width: "85%",
            bgcolor: "white",
            margin: "10px auto",
            color: "black",
            borderRadius: "10px",
          }}
        >
          <ListItemIcon>
            <IconButton>
              {" "}
              <SearchIcon />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Search Pad" />
        </ListItem>
        {/* Add more list items here */}
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <HouseIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <EventAvailableIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="My Booking" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <ManageAccountsIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Traveler" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <AccountCircleIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <AccountBalanceIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Deposit" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <CurrencyExchangeIcon
                sx={{ color: "white", marginLeft: "10px" }}
              />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Transaction" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <RequestQuoteIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Ledger Report" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <PeopleAltIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="My Staffs" />
        </ListItem>
        <ListItem Button>
          <ListItemIcon>
            <IconButton>
              <LogoutIcon sx={{ color: "white", marginLeft: "10px" }} />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
