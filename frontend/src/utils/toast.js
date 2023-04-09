import { toast } from "react-toastify";

// export default function showToast(message, config) {
//   toast(message, config);
// }
class Toast {
  error(message, config = {}) {
    toast.error(message, config);
  }
  success(message, config = {}) {
    toast.success(message, config);
  }
  info(message, config = {}) {
    toast.info(message, config);
  }
}
export default new Toast();
