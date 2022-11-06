import { React, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Resources from "./Components/Resources/Resources";
import Error from "./Components/Error";
import Home from "./Components/Home/Home";
import CompanySearch from "./Components/Companies/CompanySearch";
import CompanyList from "./Components/Companies/CompanyList";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const search = () => {
    setLoading(true);
    navigate("/search");
    if (value.length > 0) {
      fetch("https://empoworker475-default-rtdb.firebaseio.com/companies.json")
        .then(
          // when it's finished requesting the data
          (response) => response.json(),
          // to have access to the javascript object
        )
        .then((responseData) => {
          // clear array results so the search will start from stratch
          setResult([]);
          let searchQuery = value.toLowerCase();
          // loop through response data so you can loop through the companies
          for (const key in responseData) {
            // get the trade name of each company
            let company = responseData[key].trade_nm.toLowerCase();
            // returns the first character of the search word
            // e.g. if we type in "pear" it's not going to match with "apple"
            // because the 'p' is not at the start of "apple"
            if (
              company.slice(0, searchQuery.length).indexOf(searchQuery) !== -1
            ) {
              // if we type 'p', it will return "pineapple, pear, peach"
              setResult((prevResult) => {
                return [...prevResult, [key, responseData[key]]];
              });
            }
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // once the user deletes their input or they don't type anything in
      console.log("no result");
      setResult([]);
    }
  };

  return (
    <div>
      {/* <Navbar/> */}
      <CompanySearch
        value={value}
        setValue={(val) => setValue(val)}
        search={() => {
          search();
        }}
      />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route
          exact
          path='/search'
          element={<CompanyList companies={result} loading={loading} />}
        />
        <Route exact path='/resources' element={<Resources />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
