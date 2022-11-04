import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./CompanySearch.css";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function CompanySearch({ setValue, value, search }) {
  return (
    <div className='container'>
      <div className='bar-button-container'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='empoworker logo' />
          </div>
          <div className='title'>Empoworker</div>
        </div>

        <div className='SearchBar'>
          <TextField
            id='outlined-basic'
            onChange={(event) => setValue(event.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                search();
              }
            }}
            value={value}
            variant='outlined'
            fullWidth
            label='Search'
            size='small'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className='searchButton'>
          <Button
            variant='contained'
            color='warning'
            size='medium'
            onClick={() => search()}
            sx={{ textTransform: "none", color: "black" }}
          >
            {" "}
            Search{" "}
          </Button>
        </div>

        <div className='nav-button home-button'>
          <Button
            component={Link}
            to='/'
            size='small'
            sx={{ textTransform: "none", color: "black" }}
          >
            {" "}
            Home{" "}
          </Button>
        </div>

        <div className='nav-button search-button'>
          <Button
            component={Link}
            to='/search'
            size='small'
            sx={{ textTransform: "none", color: "black" }}
          >
            {" "}
            Search{" "}
          </Button>
        </div>

        <div className='nav-button resources-button'>
          <Button
            component={Link}
            to='/resources'
            size='small'
            sx={{ textTransform: "none", color: "black" }}
          >
            {" "}
            Resources{" "}
          </Button>
        </div>

        <div className='nav-button contact-button'>
          <Button
            component={Link}
            to='/'
            size='small'
            variant='outlined'
            sx={{ textTransform: "none", color: "black", borderColor: "black" }}
          >
            {" "}
            Contact Us{" "}
          </Button>
        </div>
      </div>

      {/* these are the search results */}
      <div className='searchBack'>
        {/* loop through result and display all the values */}
      </div>
    </div>
  );
}
export default CompanySearch;
