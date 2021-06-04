import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

const SearchForm = () => {
  const { setShowSearchForm, showSearchForm, setSearchTerm, searchedItems } =
    useGlobalContext();

  const searchValue = React.useRef('');

  const searching = () => {
    setSearchTerm(searchValue.current.value);
  };

  // React.useEffect(() => {
  //   console.log(searchTerm);
  // }, [searchTerm]);

  return (
    <>
      <div
        className={`${
          showSearchForm
            ? 'search-form-layer search-form-layer-active'
            : 'search-form-layer'
        }`}
      ></div>
      <div
        className={`${
          showSearchForm ? 'search-form search-form-active' : 'search-form'
        }`}
      >
        <div className='search-form-container'>
          <form>
            <button className='submit-search'>
              <AiOutlineSearch />
            </button>
            <input
              type='text'
              placeholder='Search...'
              ref={searchValue}
              onChange={searching}
            ></input>
          </form>
          <button
            className='close-search'
            onClick={() => setShowSearchForm(false)}
          >
            <FaTimes />
          </button>
        </div>
        <div className='founded-items'>
          <h4>resaults</h4>
          {searchedItems.length === 0 ? (
            <h4>no match</h4>
          ) : (
            <ul>
              {searchedItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link
                      to={`/${item.type}/${item.id}`}
                      onClick={() => setShowSearchForm(false)}
                    >
                      <div className='search-item-name'>{item.name}</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchForm;
