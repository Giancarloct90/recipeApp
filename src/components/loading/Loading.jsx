import loading from "../../assets/load.gif";
import { LoadingConatiner } from "./styleLoading";

const Loading = () => {
  return (
    <LoadingConatiner>
      <img src={loading} alt="" />
    </LoadingConatiner>
  );
};

export default Loading;
