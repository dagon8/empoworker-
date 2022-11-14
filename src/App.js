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
  const [ogSearch, setOGSearch] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const search = () => {
    setLoading(true);
    navigate("/search");
    console.log(
      "numberInput id: ",
      document.getElementById("numberInput").value,
    );
    if (value.length === 0) {
      setLoading(false);
      setResult([]);
    }

    if (value.length > 0) {
      fetch("https://empoworkerbase-default-rtdb.firebaseio.com/companies.json")
        .then(
          // when it's finished requesting the data
          (response) => response.json(),
          // to have access to the javascript object
        )
        .then((responseData) => {
          setResult([]);
          let searchQuery = value.toLowerCase();

          for (const key in responseData) {
            let company = responseData[key].trade_nm.toLowerCase();

            if (
              company.slice(0, searchQuery.length).indexOf(searchQuery) !== -1
            ) {
              setResult((prevResult) => {
                return [...prevResult, [key, responseData[key]]];
              });

              setOGSearch((prevResult) => {
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

  const filter = () => {
    let num = document.getElementById("numberInput").value;
    let str = document.getElementById("locationInput").value;

    if (ogSearch.length !== 0 && (num || str)) {
      if (num && !str) {
        setResult(
          ogSearch.filter(
            (obj) =>
              obj[1]["violations"]["overall"]["case_violtn_cnt"]["count"] ===
              num,
          ),
        );
      } else if (!num && str) {
        let lStr = str.toLowerCase();
        setResult(
          ogSearch.filter(
            (obj) =>
              obj[1]["cty_nm"].toLowerCase().includes(lStr) ||
              obj[1]["st_cd"].toLowerCase().includes(lStr) ||
              obj[1]["street_addr_1_txt"].toLowerCase().includes(lStr) ||
              obj[1]["zip_cd"] === lStr,
          ),
        );
      } else if (num && str) {
        let lStr = str.toLowerCase();
        setResult(
          ogSearch.filter(
            (obj) =>
              (obj[1]["cty_nm"].toLowerCase().includes(lStr) ||
                obj[1]["st_cd"].toLowerCase().includes(lStr) ||
                obj[1]["street_addr_1_txt"].toLowerCase().includes(lStr) ||
                obj[1]["zip_cd"] === lStr) &&
              obj[1]["violations"]["overall"]["case_violtn_cnt"]["count"] ===
                num,
          ),
        );
      }
    }
  };

  const clearFilter = () => {
    setResult(ogSearch);
    document.getElementById("numberInput").value = "";
    document.getElementById("locationInput").value = "";
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
          element={
            <CompanyList
              companies={result}
              loading={loading}
              filter={filter}
              search={search}
              clearFilter={clearFilter}
            />
          }
        />
        <Route exact path='/resources' element={<Resources />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
