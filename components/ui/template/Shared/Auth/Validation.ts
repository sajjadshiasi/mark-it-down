import * as Yup from 'yup';

const formValidateSchema = Yup.object().shape({
  email: Yup.string()
    .email('Valid email required')
    .required('Valid email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Minimum 8 characters, at least 1 letter and 1 number')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Minimum 8 characters, at least 1 letter and 1 number'
    ),
  renewPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'Passwords must match'
  ),
});
export default formValidateSchema;
