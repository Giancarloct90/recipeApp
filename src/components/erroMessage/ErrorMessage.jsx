import { ErrorMessageContainer, Message } from "./styleErrorMessage";
import { SiKde } from "react-icons/si";

const ErrorMessage = ({ message }) => {
  return (
    <ErrorMessageContainer>
      <Message>{message}</Message>
      <SiKde />
    </ErrorMessageContainer>
  );
};

export default ErrorMessage;
