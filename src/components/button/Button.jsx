import './button.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted'
};

function Button({ children, buttonType, ...other }) {
  return (
    <button
      className={`btn-wrapper ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...other}
    >
      {children}
    </button>
  );
}

export default Button;
