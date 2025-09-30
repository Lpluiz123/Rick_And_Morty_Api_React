import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dataApi, setDataApi] = useState(null);
  const [apiInfo, setApiInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [apiErro, setApiErro] = useState(false);

  const getApi = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDataApi(data.results);
      setApiInfo(data.info.pages);
      setIsLoading(false);
      setApiErro(false);
    } catch (error) {
      setIsLoading(false);
      setApiErro(true);
    }
  };
  useEffect(() => {
    getApi();
  }, [url]);

  return {
    dataApi,
    apiInfo,
    isLoading,
    apiErro,
  };
};

export default useFetch;
