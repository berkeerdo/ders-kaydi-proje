import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Button,
} from "react-admin";



const DersList = (props) => {
  return (
    <div>
      <List {...props}>
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
