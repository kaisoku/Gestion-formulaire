import { useReducer } from "react";

const defaultInputState = {
  enteredValue: "",
  isTouched: false
};
const inputStateReducer = (state, action) => {
  if (action.type === "CHANGE") {
    const enteredValue = action.enteredValue;
    const isTouched = state.isTouched;
    return {
      enteredValue,
      isTouched
    };
  }
  if (action.type === "BLUR") {
    return {
      enteredValue: state.enteredValue,
      isTouched: true
    };
  }
  if (action.type === "RESET") {
    return defaultInputState;
  }

  return defaultInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispactchInput] = useReducer(
    inputStateReducer,
    defaultInputState
  );
  /* const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched; */

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispactchInput({ type: "CHANGE", enteredValue: event.target.value });
    // setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    dispactchInput({ type: "BLUR" });
    // setIsTouched(true);
  };

  const reset = () => {
    dispactchInput({ type: "RESET" });
    //setEnteredValue("");
    //setIsTouched(false);
  };

  return {
    value: inputState.enteredValue,
    isValid: valueIsValid,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler
  };
};

export default useInput;
