import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const OgretmenlerEdit = (props) => {
  return (
    <Edit {...props} title="Create a Post">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="Vdersler" />
      </SimpleForm>
    </Edit>
  );
};

export default OgretmenlerEdit;
