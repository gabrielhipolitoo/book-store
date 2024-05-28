//customHook
//faltando receber os dados
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const UseSendDataUser = (urlApi) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await axios.post(urlApi, testData);
        setTestData(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    sendData();
  }, [urlApi]);

  return {
    data,
    loading,
    testData,
  };
};

export default UseSendDataUser;
