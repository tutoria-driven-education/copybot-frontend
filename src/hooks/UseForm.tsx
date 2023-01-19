import React, { useState, useCallback } from "react";

type CheckOneToOne = {
  url1: string;
  url2: string;
  project: string;
};

type CheckOneToMany = {
  url: string;
  project: string;
};

type SignIn = {
  email: string;
  password: string;
};

function useForm(initialValues: CheckOneToMany | CheckOneToOne | SignIn) {
  const [values, setValues] =
    useState<
      React.SetStateAction<CheckOneToMany | CheckOneToOne | SignIn | any>
    >(initialValues);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  return { values, handleChange };
}

export default useForm;
