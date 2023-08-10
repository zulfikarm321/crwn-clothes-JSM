import SigninForm from '../../components/signin-form/SigninForm';
import SignupForm from '../../components/signup-form/SignupForm';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import './auth.scss';

function Auth(props) {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="auth-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
}

export default Auth;
