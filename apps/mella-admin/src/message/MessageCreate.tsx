import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="sentTo" source="sentTo" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="sentBy" source="sentBy" />
      </SimpleForm>
    </Create>
  );
};
