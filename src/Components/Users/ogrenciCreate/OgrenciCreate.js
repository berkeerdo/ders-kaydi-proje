import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const OgrenciCreate = (props) => {
  return (
    <Create {...props} title="Öğrenci Ekle">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="number" />
      </SimpleForm>
    </Create>
  );
};

export default OgrenciCreate;
