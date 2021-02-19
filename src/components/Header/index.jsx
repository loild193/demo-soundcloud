import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from '../../constants/optimize';
import './Header.scss';
function Header(props) {
  const { onSearch } = props;
  const searchInputRef = useRef(null);
  const history = useHistory();

  const handleSearchWord = async (word) => {
    onSearch && onSearch(word);
  }
  const debounceSearchSong = debounce(handleSearchWord, 500);

  const handleClearInput = () => {
    searchInputRef.current.value = "";
  }

  const handleGoHomePage = () => {
    handleClearInput();
    history.push('/');
  }

  return (
    <div className="header container-fluid p-3">
      <div className="container">
        <div className="row">
          <h3 
            className="col-md-5 header__title"
            onClick={handleGoHomePage}
          >
          Soundcloud
          </h3>

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

              onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
              onKeyUp={(e) => debounceSearchSong(e.target.value)}
            />
            <i className="fas fa-search header__search--search"/>
          </div>
          <div className="col-md-1 header__playlist">
            <i 
              className="header__playlist__icon fas fa-headphones-alt fa-lg" 
              title="Your playlist"
              onClick={() => history.push('/songs/playlist')}
            />
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

