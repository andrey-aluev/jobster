import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../Forms/InputField';
import moment from 'moment';
import SaveButtons from '../../SaveButtons';

const AddPositionForm = ({ onSubmit, drafts }) => {

  const [draft, setDraft] = useState(false);

  const loginFormOptions = useFormik({
    initialValues: {
      title: '',
      department: '',
      description: '',
      date: moment().format('YYYY.MM.DD'),
      status: true
    },
    onSubmit: (values) => {
      onSubmit(values, draft);
      resetForm();
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required('Required'),
      department: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      date: Yup.string().required('Required'),
    }),
  });

  const { handleSubmit, resetForm, ...props } = loginFormOptions;

  return (
    <form onSubmit={handleSubmit}>
      <InputField placeholder="Title" name="title" type="text" {...props} />

      <InputField placeholder="Department" name="department" type="text" {...props} />

      <InputField placeholder="Description" name="description" type="textarea" {...props} />

      <InputField placeholder="Date" name="date" type="date" {...props} />

      <InputField placeholder="Status" name="status" type="select" {...props}>
        <option value="true" defaultValue={true}>Open</option>
        <option value="false">Closed</option>
      </InputField>

      <div className="mt-2">
        <SaveButtons drafts={drafts} setDraft={setDraft} type="position"/>
      </div>
    </form>
  );
};

export default AddPositionForm;
