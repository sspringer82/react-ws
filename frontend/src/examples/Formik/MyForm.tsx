import { ReactElement } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type Person = {
  firstname: string;
  lastname: string;
};

const initialPerson: Person = {
  firstname: '',
  lastname: '',
};

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
});

function MyForm(): ReactElement {
  return (
    <Formik
      initialValues={initialPerson}
      validationSchema={validationSchema}
      onSubmit={(event, actions) => {
        console.log(event);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <label htmlFor="title">First name:</label>
            <Field
              id="firstname"
              type="text"
              name="firstname"
              className={errors.firstname && 'fielderror'}
              data-testid="firstname"
            />
            <ErrorMessage
              name="firstname"
              render={(msg) => <div className="errormessage">{msg}</div>}
            />
          </div>
          <div>
            <label htmlFor="title">Last name:</label>
            <Field
              id="lastname"
              type="text"
              name="lastname"
              className={errors.lastname && 'fielderror'}
              data-testid="lastname"
            />
            <ErrorMessage
              name="lastname"
              render={(msg) => <div className="errormessage">{msg}</div>}
            />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
