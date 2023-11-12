import { createContext, useContext, useState } from 'react';

const SearchFilterContext = createContext();

export const SearchFilterContextProvider = ({ children }) => {
    const [searchFilter, setSearchFilter] = useState(null);

    return (
        <SearchFilterContext.Provider value = {{ searchFilter, setSearchFilter }}>
            {children}
        </SearchFilterContext.Provider>
    )
};

export const useSearchFilter = () => {
    return useContext(SearchFilterContext);
}
