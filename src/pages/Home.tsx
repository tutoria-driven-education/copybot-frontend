import { useEffect, useState } from "react";

import Form from "../styles/Form";
import FormOneToOne from "../components/FormOneToOne";
import FormOneToMany from "../components/FormOneToMany";
import MossStatus from "../components/MossStatus";
import Loading from "../components/Loading";
import { FcVlc } from "react-icons/fc";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompareOneToOne, setIsCompareOneToOne] = useState(true);

  return (
    <>
      <Form.Container>
        <MossStatus />
        {isSubmitting ? (
          <>
            <Loading message="Aguarde! Estamos analisando os projetos!" />
          </>
        ) : (
          <>
            {isCompareOneToOne ? (
              <FormOneToOne
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            ) : (
              <>
                <FcVlc fontSize={64} />
                <span className="loading-text">
                  Aguarda essa página esta em manutenção!
                </span>

                {/* <FormOneToMany
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                /> */}
              </>
            )}
            <Form.Trade
              type="button"
              onClick={() => setIsCompareOneToOne(!isCompareOneToOne)}
            >
              {isCompareOneToOne ? "" : "Comparar um para um"}
            </Form.Trade>
            <Form.Navigate to="/history">
              Histórico de comparações
            </Form.Navigate>
          </>
        )}
      </Form.Container>
    </>
  );
}
