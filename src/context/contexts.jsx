import { createContext, useContext } from "react";

export const SearchContext = createContext(undefined);

export const useSearchContext =()=>{
    const searchContext = useContext(SearchContext);

    if(searchContext === undefined){
        throw new Error("search context requires a search value and setter function state")
    }

    return searchContext;
}

