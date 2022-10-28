import React from "react";
import OpsciStyled from "./overrides/opsciStyle";
import {
  Box,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
function OpSciCard({ data }) {
  return (
    <OpsciStyled>
      <CardContent>
        <Box className="ic-container">
          <Box component="img" src={data.icon} />
        </Box>
        <Typography
          variant="h4"
          my={3}
          fontFamily="'Exo 2'"
          fontWeight={500}
          textAlign="center"
        >
          {data.title}
        </Typography>
        <Typography
          variant="subtitle1"
          fontFamily="'Exo 2'"
          fontWeight={400}
          textAlign="center"
        >
          {data.description}
        </Typography>
        <CardActions sx={{ justifyContent: "center", mt: 3 }}>
          <Button className="card-btn">{data.action}</Button>
        </CardActions>
      </CardContent>
    </OpsciStyled>
  );
}

export default OpSciCard;
