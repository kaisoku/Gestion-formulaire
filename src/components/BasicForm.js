import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    isValid: enteredFirstameIsValid,
    hasError: enteredFirstnameIsInvalid,
    reset: resetFirstname,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: enteredLastnameIsValid,
    hasError: enteredLastnameIsInvalid,
    reset: resetLastname,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInvalid,
    reset: resetEmail,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid =
    enteredFirstameIsValid && enteredLastnameIsValid && enteredEmailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstname, enteredLastname, enteredEmail);

    resetFirstname();
    resetLastname();
    resetEmail();
  };

  const firstnameInputClasse = enteredFirstnameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lastnameInputClasse = enteredLastnameIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasse = enteredEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstnameInputClasse}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstname}
          />
          {enteredFirstnameIsInvalid && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastnameInputClasse}>
          <label htmlFor="lastname">Lasst Name</label>
          <input
            type="text"
            id="lastname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastname}
          />
          {enteredLastnameIsInvalid && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasse}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {enteredEmailIsInvalid && (
          <p className="error-text">Please Enter A valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
