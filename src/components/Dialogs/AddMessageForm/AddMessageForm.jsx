import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import PurpleButton from "../../common/Buttons/PurpleButton";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  const submitForm = (values) => {
    props.onSubmit(values);
    props.reset(); // Очистка формы после отправки
  };
  return (
    <form onSubmit={props.handleSubmit(submitForm)}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        ></Field>
      </div>
      <div>
        <PurpleButton text="Send" />
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);
