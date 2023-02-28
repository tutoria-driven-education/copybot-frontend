import { useState } from "react";
import { BsPerson, BsPeople } from "react-icons/bs";

import Form from "../styles/Form";
import FormOneToOne from "../components/FormOneToOne";
import FormOneToMany from "../components/FormOneToMany";
import MossStatus from "../components/MossStatus";
import Loading from "../components/Loading";
import { MossContextProvider } from "../hooks/MossContext";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompareOneToOne, setIsCompareOneToOne] = useState(false);

  return (
    <>
      <MossContextProvider>
        <Form.Container>
          <MossStatus />
          {isSubmitting ? (
            <>
              <Loading message="Aguarde! Estamos analisando os projetos!" />
            </>
          ) : (
            <>
              <Form.WrapperTrade>
                <Form.WrapperToolTip>
                  <Form.ToolTip>Comparar com apenas um projeto</Form.ToolTip>
                  <BsPerson />
                </Form.WrapperToolTip>
                <Form.Trade
                  status={isCompareOneToOne}
                  onClick={() => setIsCompareOneToOne(!isCompareOneToOne)}
                />
                <Form.WrapperToolTip>
                  <Form.ToolTip>Comparar com a base de dados</Form.ToolTip>
                  <BsPeople />
                </Form.WrapperToolTip>
              </Form.WrapperTrade>
              {isCompareOneToOne ? (
                <FormOneToMany
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                />
              ) : (
                <FormOneToOne
                  isSubmitting={isSubmitting}
                  setIsSubmitting={setIsSubmitting}
                />
              )}
            </>
          )}
        </Form.Container>
      </MossContextProvider>
    </>
  );
}
