import { useState } from "react";
import { SearchContext } from "./contexts";


const SearchContextProvider = ({children}) => {
    const [searchByTitleStr, setSearchByTitleStr] = useState("");
    const store = {
      searchByTitleStr,
      setSearchByTitleStr,
    };
    
  return (
    <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
  );
}

export default SearchContextProvider