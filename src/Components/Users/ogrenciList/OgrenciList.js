import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const OgrenciList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="number" />
        <EditButton basePath="/ogrenciler" />
        <DeleteButton basePath="/ogrenciler" />
      </Datagrid>
    </List>
  );
};

export default OgrenciList;
