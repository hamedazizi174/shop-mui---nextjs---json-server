import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

export default function Footer() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignContent="center"
      px={2}
    >
      <List sx={{ display: "flex", flexDirection: "row" }}>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <BusinessCenterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Become Seller" sx={{ textWrap: "nowrap" }} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CardGiftcardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Gift Cards" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutlineRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Help Center" sx={{ textWrap: "nowrap" }} />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ display: "flex", flexDirection: "row" }}>
        <ListItem>
          <ListItemButton sx={{ p: "0" }}>
            <ListItemText primary="Terms Of Use" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ p: "0" }}>
            <ListItemText
              primary="Privacy Policy"
              sx={{ textWrap: "nowrap" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <List sx={{ display: "flex", flexDirection: "row" }}>
        <ListItem>
          <ListItemText primary="All Rights Reserved By Group 1 |2024" />
        </ListItem>
      </List>
    </Stack>
  );
}
