import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import debounce from '../../constants/optimize';
import './Header.scss';
function Header(props) {
  const searchInputRef = useRef(null);
  const { onSearch } = props;

  const handleSearchWord = async (word) => {
    onSearch && onSearch(word);
  }
  const debounceSearchSong = debounce(handleSearchWord, 500);

  const handleClearInput = () => {
    searchInputRef.current.value = "";
  }

  return (
    <div className="header container-fluid p-3">
      <div className="container">
        <div className="row">
          <h3 className="col-md-6 header__title">Soundcloud</h3>

          <div className="col-md-6 header__search">
            <i 
              className="fas fa-times-circle header__search--clear"
              onClick={handleClearInput}
            />
            <input 
              ref={searchInputRef}
              className="header__search__input" 
              type="text" 
              placeholder="Search here..."
              autoFocus={true}

              onKeyUp={(e) => debounceSearchSong(e.target.value)}
            />
            <i className="fas fa-search header__search--search"/>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  onSearch: PropTypes.func,
}
Header.defaultProps = {
  onSearch: null,
}

export default Header

