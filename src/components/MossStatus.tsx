import { useContext } from "react";
import { IoMdRefresh } from "react-icons/io";

import Form from "../styles/Form";
import { MossContext } from "../hooks/MossContext";

export default function MossStatus() {
  const { mossStatus, getMossStatus } = useContext(MossContext);

  return (
    <>
      <Form.MossStatus status={mossStatus}>
        Status Moss: <span>{mossStatus ? "Online" : "Offline"}</span>
        <Form.UpdateStatus onClick={() => getMossStatus(true)}>
          <IoMdRefresh />
        </Form.UpdateStatus>
      </Form.MossStatus>
    </>
  );
}
