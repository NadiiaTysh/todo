import * as Yup from 'yup';

export   const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Task title is too short')
      .required('Task title field is required'),
    tag: Yup.string()
      .required('Task tag field is required'),
});