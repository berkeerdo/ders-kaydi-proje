import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TopicCard = ({ topic }) => {
  return (
    <Card sx={{ maxWidth: 345, cursor: "pointer", minHeight: "200px" }}>
      <div>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="h5" gutterBottom noWrap>
              {topic.name}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default TopicCard;
