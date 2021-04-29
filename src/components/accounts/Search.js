import React, { useContext, useEffect } from "react";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

import AccountsContext from "../../context/accounts/accountsContext";
import ContentDivider from "../layout/ContentDivider";

const styles = {
  fixedSearch: {
    margin: "0 -5vw",
    padding: "0 5vw",
    position: "sticky",
    zIndex: "1",
    top: "0px",
    backgroundColor: "white",
  },
  inputMargin: {
    margin: "0",
    padding: "1rem 0",
  },
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
    <div style={styles.fixedSearch}>
      <TextField
        required
        margin='normal'
        placeholder='Search...'
        type='text'
        fullWidth
        style={styles.inputMargin}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <SearchIcon aria-label='search' className='color-gray' />
            </InputAdornment>
          ),
        }}
        onChange={onChangeInput}
      />
      <ContentDivider />
    </div>
  );
};

export default Search;
