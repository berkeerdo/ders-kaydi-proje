import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const OgretmenlerList = (props) => {
  return (
    <List {...props}>
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
