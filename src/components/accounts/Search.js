import React, { useContext, useEffect } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

import AccountsContext from "../../context/accounts/accountsContext";

const inputMargin = {
  marginBottom: "1rem",
};

const Search = () => {
  const accountsContext = useContext(AccountsContext);
  const { filterAccounts } = accountsContext;

  useEffect(() => {
    filterAccounts("");
    // eslint-disable-next-line
  }, []);

  const onChangeInput = (e) => {
    filterAccounts(e.currentTarget.value);
  };

  return (
    <TextField
      required
      margin='normal'
      placeholder='Search...'
      type='text'
      fullWidth
      style={inputMargin}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <SearchIcon aria-label='search' className='color-gray' />
          </InputAdornment>
        ),
      }}
      onChange={onChangeInput}
    />
  );
};

export default Search;
