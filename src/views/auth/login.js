import { useState, useEffect } from 'react'
import '../../assets/styles/index.css'
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../../slices/login";
import { clearMessage } from "../../slices/message";

export default function Login(props) {

  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    phone: Yup.number().required("Phone is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const handleLogin = async(formValue) => {
    const { phone, password } = formValue;
    dispatch(login({ phone, password }))
  }
  return (
    <>
      <div className="bg-green-400 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-blue-500 px-6 py-8 rounded shadow-md text-black w-48">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form>
                  <div className="form-group ">
                    <label htmlFor="phone">Phone</label>

                    <Field name="phone" type="text"     className="block border border-grey-light w-full p-3 rounded mb-4" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password"     className="block border border-grey-light w-full p-3 rounded mb-4" />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert alert-danger"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className=" w-full text-center py-3 rounded bg-green my-1" disabled={loading}>
                      {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                      )}
                      <span>Login</span>
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
