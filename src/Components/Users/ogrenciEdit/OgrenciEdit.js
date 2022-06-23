import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const OgrenciEdit = (props) => {
  return (
    <Edit {...props} title="Create a Post">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="number" />
      </SimpleForm>
    </Edit>
  );
};

export default OgrenciEdit;
