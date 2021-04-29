import React, { useContext, useEffect, useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

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
  const [input, setInput] = useState("");
  const accountsContext = useContext(AccountsContext);
  const { filterAccounts } = accountsContext;

  useEffect(() => {
    filterAccounts("");
    // eslint-disable-next-line
  }, []);

  const onChangeInput = (e) => search(e.currentTarget.value);

  const clearInput = () => search("");

  const search = (searchTerm) => {
    filterAccounts(searchTerm);
    setInput(searchTerm);
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
          startAdornment: (
            <InputAdornment position='start' className='color-gray'>
              <SearchIcon aria-label='search' />
            </InputAdornment>
          ),
          endAdornment: input.length > 0 && (
            <InputAdornment position='end' className='color-gray'>
              <IconButton onClick={clearInput} aria-label='clear'>
                <CloseIcon fontSize='small' />
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={onChangeInput}
        value={input}
      />
      <ContentDivider />
    </div>
  );
};

export default Search;
