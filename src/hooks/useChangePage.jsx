import { useSearchParams } from "react-router";

import useFetch from "./useFetch";

const useChangePage = (paramsName,url) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get(paramsName) ?? 1;

  const {apiInfo} = useFetch(url)
  
  const handleClickNext = () => {
    if (currentPage == apiInfo) {
      return;
    }

    setSearchParams({
      [paramsName]: parseInt(currentPage) + 1,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickPreview = () => {
    if (currentPage == 1) {
      return;
    }

    setSearchParams({
      [paramsName]: parseInt(currentPage) - 1,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    {
      handleClickNext,
      handleClickPreview,
      currentPage
    }
  )
};

export default useChangePage;
