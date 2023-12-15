import * as Yup from 'yup';

export const validationSchema = () => {
  return Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters long')
      .matches(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least 1 lowercase letter')
      .matches(/\d/, 'Password must contain at least 1 number')
      .matches(
        /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/,
        'Password must contain at least 1 special character (!@#$%^&*()_-+={[}]|:;"\'<,>.'
      ),
    confirmPassword: Yup.string()
      .required('Please confirm your password')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });
};
