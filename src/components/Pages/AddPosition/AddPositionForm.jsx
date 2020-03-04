import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../Forms/InputField';

const AddPositionForm = ({ onSubmit }) => {

  const [draft, setDraft] = useState(false);

  const loginFormOptions = useFormik({
    initialValues: {
      title: '',
      department: '',
      description: '',
      date: '',
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
      date: Yup.date().required('Required'),
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

      <div className="mt-2 btn-group">
        <button className="btn btn-primary" onClick={() => setDraft(false)}>Save</button>
        <button className="btn btn-primary" onClick={() => setDraft(true)}>Save and Add Another</button>
      </div>
    </form>
  );
};

export default AddPositionForm;
