import { useEffect, useContext } from "react";

import Form from "../styles/Form";
import { checkMossStatus } from "../services/api";
import { MossContext } from "../hooks/MossContext";

function MossStatus() {
  const { mossStatus } = useContext(MossContext);
  //const [mossStatus, setMossStatus] = useState(false);

  return (
    <>
      <Form.MossStatus status={mossStatus}>
        Status do Moss:
        {mossStatus ? <span> Online</span> : <span> Offline</span>}
      </Form.MossStatus>
    </>
  );
}

export default MossStatus;
