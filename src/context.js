import React, { useContext, useState } from 'react';
import BagReducer from './components/BagReducer';
//data
import productsData from './data/productsData';

const AppContext = React.createContext();

const initialState = {
  bagList: [],
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filterKey, setFilterKey] = useState(null);

  //bag
  const [showBag, setShowBag] = useState(false);
  const [bagLocation, setBagLocation] = useState(null);
  const toggleBag = () => {
    setShowBag(!showBag);
  };

  const closeBag = () => {
    setShowBag(false);
  };
  const getBagLocation = (center) => {
    setBagLocation(center);
  };

  const [state, dispatch] = React.useReducer(BagReducer, initialState);

  const addToBag = (theProduct) => {
    dispatch({ type: 'ADD_TO_BAG', payload: theProduct });
  };

  //search Form
  const [showSearchForm, setShowSearchForm] = useState(false);

  //filtering the products
  React.useEffect(() => {
    filteringTheProducts();
  }, [filterKey]);

  const filteringTheProducts = () => {
    if (filterKey) {
      const newProducts = productsData.filter((item) => {
        if (item.type === filterKey) {
          return { item };
        }
        return null;
      });
      setProducts(newProducts);
    } else {
      setProducts(productsData);
    }
  };

  //searching
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedItems, setSearchedItems] = useState([]);

  React.useEffect(() => {
    if (!searchTerm) {
      setSearchedItems([]);
      return null;
    }

    const searching = productsData.filter((product) => {
      if (
        product.name.slice(0, searchTerm.length).toLocaleLowerCase() ===
        searchTerm.toLocaleLowerCase()
      ) {
        return { product };
      }
      return null;
    });
    setSearchedItems(searching);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        products,
        setFilterKey,
        addToBag,
        ...state,
        showBag,
        toggleBag,
        closeBag,
        bagLocation,
        getBagLocation,
        showSearchForm,
        setShowSearchForm,
        setSearchTerm,
        searchTerm,
        searchedItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
