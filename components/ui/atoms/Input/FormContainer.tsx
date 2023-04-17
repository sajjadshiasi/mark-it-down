/* eslint-disable...*/
import { Formik } from 'formik';
import formValidateSchema from '../../template/Shared/Auth/Validation';

export const FormContainer = ({
  //@ts-ignore
  initialValues,
  //@ts-ignore
  onSubmit,
  //@ts-ignore
  component: Component,
  ...props
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={formValidateSchema}
  >
    {(formikPorps) => <Component {...formikPorps} {...props} />}
  </Formik>
);
