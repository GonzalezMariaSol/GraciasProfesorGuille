import { Box, Typography, Button } from "@mui/material";
import { Computer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AngellyMsje, CocoMsje, IreMsje, JimeMsje, SolMsje, TatyMsje, BettyMsje } from "./";

const MessageBox = () => {
  const navigate = useNavigate();

  const { nombre } = useParams();

  const renderMessageComponent = () => {
    if (nombre === "Angelly") {
      return <AngellyMsje />;
    } else if (nombre === "Coco") {
      return <CocoMsje />;
    } else if (nombre === "Ire") {
      return <IreMsje />;
    } else if (nombre === "Jime") {
      return <JimeMsje />;
    } else if (nombre === "Sol") {
        return <SolMsje />
    } else if (nombre === "Taty") {
        return <TatyMsje />
    } else if (nombre === "Betty") {
        return <BettyMsje />
    }
    return null;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#ffffffa2",
        width: "80%",
        maxHeight: "90vh",
        overflowY: "auto",
        padding: 2,
      }}
    >
      <Button startIcon={<Computer />} onClick={() => navigate("/")}>
        <Typography>Volver</Typography>
      </Button>
        {renderMessageComponent()}
      <Typography style={{ textAlign: "right" }}> -{nombre}</Typography>
    </Box>
  );
};

export default MessageBox;
