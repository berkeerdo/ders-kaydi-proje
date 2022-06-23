import { Grid } from "@mui/material";
import React from "react";
import NavApp from "../../Components/Navbar/NavApp";
import TopicCard from "./TopicCard/TopicCard";

const Student = () => {
  const Topics = [
    { id: 1, name: "Ders Seçim Sistemi" },
    { id: 2, name: "Transkript" },
    { id: 3, name: "Dönem Notları" },
    { id: 4, name: "Staj Başvuruları" },
  ];

  return (
    <>
      <NavApp />
      <main
        style={{
          flexGrow: 1,
          backgroundColor: "#f5f5f5",
          padding: "5px",
          height: "99vh",
          overflow: "hidden",
        }}
      >
        <div style={{ minHeight: "2rem" }} />
        <Grid container justifyContent="center" spacing={4}>
          {Topics.map((topic) => (
            <Grid item key={topic.id} xs={12} sm={6} md={4} lg={3}>
              <TopicCard topic={topic} />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Student;
