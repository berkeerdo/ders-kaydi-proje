import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const OgretmenlerCreate = (props) => {
  return (
    <Create {...props} title="Create a Post">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="Vdersler" />
      </SimpleForm>
    </Create>
  );
};

export default OgretmenlerCreate;
