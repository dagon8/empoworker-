import { React, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ref, get, child } from "firebase/database";
import WageTheft from "./Components/Resources/ResourceCategories/WageTheft";
import Resources from "./Components/Resources/Resources";
import Error from "./Components/Error";
import Home from "./Components/Home/Home";
import CompanySearch from "./Components/Companies/CompanySearch";
import CompanyList from "./Components/Companies/CompanyList";
import ChildLabor from "./Components/Resources/ResourceCategories/ChildLabor";
import WorkPlaceAccidents from "./Components/Resources/ResourceCategories/WorkPlaceAccidents";
import MigrantResources from "./Components/Resources/ResourceCategories/MigrantResources";
import WorkersRights from "./Components/Resources/ResourceCategories/WorkersRights";
//import OccupationSH from "./Components/Resources/ResourceCategories/OccupationSH";
import { db } from "./Util/fire-config";
import Osha from "./Components/Resources/ResourceCategories/Osha";
import "./App.css";

function App() {
  const [result, setResult] = useState([]);
  const [ogSearch, setOGSearch] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [cityVal, setCityVal] = useState([]);

  const citySearch = () => {
    setLoading(true);
    navigate("/search");

    if (cityVal.length === 0) {
      setLoading(false);
      setResult([]);
    }

    if (cityVal.length > 0) {
      const dbRef = ref(db);
      get(child(dbRef, `locations/${cityVal}`))
        .then((snapshot) => {
          console.log("searched for :", cityVal);
          if (snapshot.exists()) {
            console.log(snapshot.val());
            let responseData = snapshot.val();
            for (let i = 0; i < responseData.length; i++) {
              let key = responseData[i].company_key;
              setResult((prevResult) => {
                return [...prevResult, [key, responseData[i]]];
              });

              setOGSearch((prevResult) => {
                return [...prevResult, [key, responseData[i]]];
              });
            }

            setLoading(false);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // once the user deletes their input or they don't type anything in
      console.log("no result");
      setResult([]);
    }
  };

  const search = () => {
    setLoading(true);
    navigate("/search");

    if (value.length === 0) {
      setLoading(false);
      setResult([]);
      if (cityVal.length > 0) {
        citySearch();
      }
    }

    if (value.length > 0) {
      fetch("https://empoworkerdemo-default-rtdb.firebaseio.com/employers.json")
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
          ogSearch.filter((obj) =>
            obj[1]["cty_nm"].toLowerCase().includes(lStr),
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
      <CompanySearch />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              value={value}
              setValue={(val) => setValue(val)}
              search={search}
              citySearch={citySearch}
              cityVal={cityVal}
              setCityVal={(cval) => setCityVal(cval)}
            />
          }
        />
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
              value={value}
              setValue={(val) => setValue(val)}
              citySearch={citySearch}
              cityVal={cityVal}
              setCityVal={(cval) => setCityVal(cval)}
            />
          }
        />
        <Route exact path='/resources' element={<Resources />} />
        <Route path='*' element={<Error />} />
        <Route path='/error' element={<Error />} />
        <Route exact path='/resources/wage-theft' element={<WageTheft />} />
        <Route exact path='/resources/child-labor' element={<ChildLabor />} />
        <Route
          exact
          path='/resources/workplace-accidents'
          element={<WorkPlaceAccidents />}
        />
        <Route
          exact
          path='/resources/migrant-resources'
          element={<MigrantResources />}
        />
        <Route
          exact
          path='/resources/workers-rights'
          element={<WorkersRights />}
        />
        <Route exact path='/resources/osh' element={<Osha />} />
      </Routes>
    </div>
  );
}

export default App;
