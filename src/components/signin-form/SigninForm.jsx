import { useState } from 'react';

import './signin-form.scss';

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../context/user.context';

import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { useContext } from 'react';

const defaultFormFields = {
  email: '',
  password: ''
};

function SigninForm(props) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Cannot sign in, wrong password!');
        return;
      }

      if (error.code === 'auth/user-not-found') {
        alert('Cannot sign in, User not found');
        return;
      }

      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="signup-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType={'google'}
            onClick={signInWithGoogle}
            type="button"
          >
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
