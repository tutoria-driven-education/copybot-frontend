import { MagnifyingGlass } from "react-loader-spinner";

type LoadingProps = {
  message: string;
}

export default function Loading({ message }: LoadingProps) {
  return (
    <>
      <span className="loading-text">{message}</span>
      <MagnifyingGlass
        height="90"
        width="90"
        color="#ff7bbd"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </>
  );
}
