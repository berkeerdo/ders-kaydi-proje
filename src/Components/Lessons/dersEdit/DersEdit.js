import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const DersEdit = (props) => {
  return (
    <Edit {...props} title="Create a Post">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default DersEdit;
