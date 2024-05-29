import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const buttonStyle = {
  fontSize: "3vw", 
  borderRadius: "10px",
  color: "black",
  width: "70%", 
  minHeight: "30%", 
  marginBottom: "3vw",
  transition: "transform 0.2s",
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "black",
        padding: "5vw",
        marginTop: "0",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Angelly")}
          sx={{
            ...buttonStyle,
            backgroundColor: "pink",
            "&:hover": {
              backgroundColor: "red",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Angelly</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Ro")}
          sx={{
            ...buttonStyle,
            backgroundColor: "green",
            "&:hover": {
              backgroundColor: "#4fecc2",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Ro</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Ire")}
          sx={{
            ...buttonStyle,
            backgroundColor: "red",
            "&:hover": {
              backgroundColor: "mediumpurple",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Ire</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Jime")}
          sx={{
            ...buttonStyle,
            backgroundColor: "yellow",
            "&:hover": {
              backgroundColor: "green",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Jime</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Sol")}
          sx={{
            ...buttonStyle,
            backgroundColor: "mediumpurple",
            "&:hover": {
              backgroundColor: "cornflowerblue",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Sol</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Betty")}
          sx={{
            ...buttonStyle,
            backgroundColor: "cornflowerblue",
            "&:hover": {
              backgroundColor: "pink",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Betty</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Maca")}
          sx={{
            ...buttonStyle,
            backgroundColor: "#4fecc2",
            "&:hover": {
              backgroundColor: "#ff5af1",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Maca</p>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Button
          onClick={() => navigate("/alumna/Coco")}
          sx={{
            ...buttonStyle,
            backgroundColor: "saddlebrown",
            "&:hover": {
              backgroundColor: "gold",
              transform: "scale(1.1)",
            },
          }}
        >
          <p>Coco</p>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
