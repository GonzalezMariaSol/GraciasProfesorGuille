import { MessageBox } from "../components"
import { Box } from "@mui/material";
import backgroundPic from "../../public/12079894_4906331.png"

const AlumnaView = () => {
  return (
    <Box
      sx={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundPic})`, 
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: 2,
      }}
    >
      <MessageBox />
    </Box>
  );
};

export default AlumnaView;