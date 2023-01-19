import { useState } from "react";

import Form from "../styles/Form";
import FormOneToOne from "../components/FormOneToOne";
import FormOneToMany from "../components/FormOneToMany";
import Loading from "../components/Loading";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompareOneToOne, setIsCompareOneToOne] = useState(true);

  return (
    <>
      <Form.Container>
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
              <FormOneToMany
                isSubmitting={isSubmitting}
                setIsSubmitting={setIsSubmitting}
              />
            )}
            <Form.Trade
              type="button"
              onClick={() => setIsCompareOneToOne(!isCompareOneToOne)}
            >
              {isCompareOneToOne
                ? "Comparar com banco de dados"
                : "Comparar um para um"}
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
