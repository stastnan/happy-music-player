import PropTypes from "prop-types";
import { StyledInput } from "./styled";

function Input(props) {
  return <StyledInput {...props} />;
}

Input.propTypes = {
  startIcon: PropTypes.ReactElement,
};

export default Input;
