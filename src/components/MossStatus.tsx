import { useEffect, useState } from "react";

import Form from "../styles/Form";
import { checkMossStatus } from "../services/api";

function MossStatus() {
  const [mossStatus, setMossStatus] = useState(false);

  const getMossStatus = async () => {
    const status = await checkMossStatus();

    return setMossStatus(status);
  };

  useEffect(() => {
    getMossStatus();
  }, []);

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
