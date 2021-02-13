import React from 'react'
import './Header.scss'
function Header(props) {
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
            />
            <i className="fas fa-search header__search__icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header

