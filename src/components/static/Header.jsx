import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box sx={{
      backgroundColor: "#d80065",
      display: "flex",
      justifyContent: "center", 
      alignItems: "center",
      
  }}>
      <Typography sx={{fontSize:"3vw"}}>La 19va tiene algo que decirte...</Typography>
  </Box>
  );
};
export default Header;
