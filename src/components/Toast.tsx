import { StyledToast } from "../styles/Toast";
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  return <StyledToast position="bottom-right" autoClose={5000} hideProgressBar={false}  />;
}

export default Toast;
