import * as Yup from 'yup';
export interface Entity {
  id: string | number;
  name: string;
  category: string;
  fields: string[];
  subject: string;
  level: string;
  price: { amount: number; currency: string };
  ratings: number;
  language: string;
}

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the course name.'),
  category: Yup.string().required('Please enter the category.'),
  fields: Yup.array().of(Yup.string()).required('Please enter the fields.'),
  subject: Yup.string().required('Please enter the course subject.'),
  level: Yup.string().required('Please enter the level of the course.'),
  price: Yup.object()
    .shape({
      amount: Yup.number()
        .positive('Amount must be a positive number.')
        .required('The amount is required.'),
      currency: Yup.string().required('The currency is required'),
    })
    .required('Please enter the course price.'),
  ratings: Yup.number()
    .positive('Ratings must be a positive number.')
    .required('Please enter the course ratings.'),
  language: Yup.string().required('Please enter the language.'),
});
