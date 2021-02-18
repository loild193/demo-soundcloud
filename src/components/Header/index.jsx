import PropTypes from 'prop-types';
import React from 'react';
import debounce from '../../constants/optimize';
import './Header.scss';
function Header(props) {
  const { onSearch } = props;

  const handleSearchWord = async (word) => {
    onSearch && onSearch(word);
  }
  const debounceSearchSong = debounce(handleSearchWord, 500);

  return (
    <div className="header container-fluid p-3">
      <div className="container">
        <div className="row">
          <h3 className="col-md-6 header__title">Soundcloud</h3>

          <div className="col-md-6 header__search">
            <input 
              className="header__search__input" 
              type="text" 
              placeholder="Search here..."
              autoFocus={true}

              onKeyUp={(e) => debounceSearchSong(e.target.value)}
            />
            <i className="fas fa-search header__search__icon"></i>
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

