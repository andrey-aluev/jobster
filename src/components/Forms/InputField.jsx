import React from 'react';
import cnames from 'classnames';
import DatePicker from 'react-datepicker';
//import DatePicker from 'react-date-picker';
import 'react-datepicker/dist/react-datepicker.css';


const Input = (
  {
    name,
    handleChange,
    values,
    handleBlur,
    type,
    touched, errors,
    placeholder,
    autoFocus,
    autoComplete = 'off',
  }) => {
  return (
    <input
      name={name}
      onChange={handleChange}
      value={values[name]}
      onBlur={handleBlur}
      type={type}
      className={cnames('form-control', { 'is-invalid': touched[name] && errors[name] })}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
    />
  );
};

const Date = (
  {
    name,
    values,
    handleBlur,
    touched, errors,
    placeholder,
    autoComplete = 'off',
    setFieldValue,
  }) => {

  return (
    <DatePicker
      type="date"
      name={name}
      placeholder={placeholder}
      onChange={e => setFieldValue(name, e.toDateString())}
      value={values[name]}
      onBlur={handleBlur}
      dateFormat="yyyy.MM.dd"
      className={cnames('form-control', { 'is-invalid': (touched[name] && errors[name]) })}
      autoComplete={autoComplete}
    />
  );
};

const TextArea = (
  {
    name,
    handleChange,
    values,
    handleBlur,
    touched, errors,
    placeholder,
    autoFocus,
    autoComplete = 'false',
  }) => {
  return (
    <textarea
      name={name}
      onChange={handleChange}
      value={values[name]}
      onBlur={handleBlur}
      className={cnames('form-control', { 'is-invalid': touched[name] && errors[name] })}
      placeholder={placeholder}
      autoFocus={autoFocus}
      autoComplete={autoComplete}
    />
  );
};

const Select = (
  {
    name,
    handleChange,
    values,
    handleBlur,
    touched,
    errors,
    children,
  }) => {
  return (
    <select
      id={name}
      name={name}
      onChange={handleChange}
      value={values[name]}
      onBlur={handleBlur}
      className={cnames('form-control ', { 'is-invalid': touched[name] && errors[name] })}
    >
      {children}
    </select>
  );
};

const InputField = (props) => {
  const { name, type = 'text', ...rest } = props;

  let renderInput;

  switch (type) {
    case 'text':
    case 'email':
    case 'password': {
      renderInput = <Input name={name} type={type} {...rest} />;
      break;
    }

    case 'select': {
      renderInput = <Select name={name} {...rest} />;
      break;
    }

    case 'textarea': {
      renderInput = <TextArea name={name} {...rest}/>;
      break;
    }

    case 'date': {
      renderInput = <Date name={name} {...rest}/>;
      break;
    }

    default: {
      renderInput = null;
    }
  }

  const { touched, errors } = props;

  return (
    <div className={cnames('form-group', { 'has-danger': touched[name] && errors[name] })}>
      {renderInput}
      {touched[name] && errors[name] && <span className="invalid-feedback">{errors[name]}</span>}
    </div>
  );
};

export default InputField;
