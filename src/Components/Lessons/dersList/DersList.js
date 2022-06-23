import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Button,
} from "react-admin";
import { useNavigate } from "react-router-dom";

const DersList = (props) => {
  const navigate = useNavigate();

  function actionLogout() {
    navigate("/login");
  }

  return (
    <div>
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
          <TextField source="teacher" />
          <EditButton basePath="/dersler" />
          <DeleteButton basePath="/dersler" />
        </Datagrid>
      </List>
    </div>
  );
};

export default DersList;
