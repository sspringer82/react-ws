import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Please enter a firstname, you fool!'),
  author: Yup.string().required(),
  isbn: Yup.string()
    .matches(/^\d{3}-\d{10}$/, 'expected format: 123-1234567890')
    .required(),
});

export default validationSchema;
