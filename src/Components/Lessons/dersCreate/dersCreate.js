import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create {...props} title="Create a Post">
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="teacher" />
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
