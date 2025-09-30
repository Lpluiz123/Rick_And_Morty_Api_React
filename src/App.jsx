import "./App.css";

import Button from "./components/Button";
import ListCharacter from "./components/ListCharacter";

import useFetch from "./hooks/useFetch";
import { Routes, Route} from "react-router-dom";
import useChangePage from "./hooks/useChangePage";

const url = `https://rickandmortyapi.com/api/character/?page=`;

function App() {
  
  const {handleClickNext,handleClickPreview,currentPage} = useChangePage("page",url)
  
  const { dataApi, apiInfo, isLoading, apiErro } = useFetch(url + currentPage);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Rick and Morty - API</h1>
              {isLoading ? (
                <span className="loader"></span>
              ) : apiErro ? (
                <h1>Ops!!! Ocorreu um erro para carregar os dados</h1>
              ) : (
                <ListCharacter data={dataApi} />
              )}

              {currentPage == 1 ? (
                <p>
                  Page: {currentPage} Next:{parseInt(currentPage) + 1}
                </p>
              ) : currentPage == apiInfo ? (
                <p>
                  Preview:{currentPage - 1} Page: {currentPage}
                </p>
              ) : (
                <p>
                  Preview:{currentPage - 1} Page: {currentPage} Next: {parseInt(currentPage) + 1}
                </p>
              )}
              <div className="buttons">
                <Button
                  action={handleClickPreview}
                  name={<i className="bi bi-arrow-left-circle-fill"></i>}
                />
                <Button
                  action={handleClickNext} 
                  name={<i className="bi bi-arrow-right-circle-fill"></i>}
                />
              </div>
            </>
            
          }
        />
        ,
      </Routes>
    </div>
  );
}

export default App;
