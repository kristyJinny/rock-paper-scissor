import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div className="nav-container">
      <div className="nav-header">
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>

      <div className="nav-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
      </div>
      <div className="nav-menu-area">
        <ul className="menu-list">
          {menuList.map((menu)=> (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" />
        </div>
      </div>

    </div>
  )
}
