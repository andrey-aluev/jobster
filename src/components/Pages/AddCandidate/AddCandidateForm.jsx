import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../Forms/InputField';
import SaveButtons from '../../SaveButtons';

const AddCandidateForm = ({ onSubmit, positions, drafts }) => {

  const [draft, setDraft] = useState(false);

  const loginFormOptions = useFormik({
    initialValues: {
      name: '',
      description: '',
      positionId: '',
    },
    onSubmit: (values) => {
      onSubmit(values, draft);
      resetForm();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      positionId: Yup.string(),
    }),
  });

  const renderPositions = positions.map(({ id, title }) => {
    return (
      <option value={id}>{title}</option>
    );
  });

  const { handleSubmit, resetForm, ...props } = loginFormOptions;

  return (
    <form onSubmit={handleSubmit}>
      <InputField placeholder="Name" name="name" type="text" {...props} />

      <InputField placeholder="Description" name="description" type="textarea" {...props} />

      <InputField placeholder="Position" name="positionId" type="select" {...props}>
        <option>Select position</option>
        {renderPositions}
      </InputField>

      <div className="mt-2">
        <SaveButtons drafts={drafts} setDraft={setDraft} type="candidate"/>
      </div>
    </form>
  );
};

export default AddCandidateForm;
