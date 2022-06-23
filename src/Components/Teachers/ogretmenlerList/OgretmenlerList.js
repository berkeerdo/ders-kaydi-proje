import { Button } from "@mui/material";
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const OgretmenlerList = (props) => {
  const navigate = useNavigate();

  function actionLogout() {
    navigate("/login");
  }

  return (
    <List {...props}>
      <Button
        size="small"
        sx={{ margin: "10px", paddingLeft: "15px" }}
        variant="contained"
        onClick={() => actionLogout()}
      >
        Çıkış Yap
      </Button>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="Vdersler" />
        <EditButton basePath="/ogretmenler" />
        <DeleteButton basePath="/ogretmenler" />
      </Datagrid>
    </List>
  );
};

export default OgretmenlerList;
