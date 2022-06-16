import styled from 'styled-components';

export const MenuIcon = styled.div`
  margin-top: 1rem;
  margin-left: 10px;
  position: relative;
  height: auto;
  width: fit-content;
  left: 1%;
  cursor: pointer;
  .icon {
  width: 20px;
  height: 20px;
};
.icon.iconActive {
  width: 20px;
  height: 20px;
};

;
.menuItems li {
  list-style-type: none;
}
.menuClose {
  display: none;
};
.menu.menuOpen {
  position: absolute; 
  display: block;
};

.icoon {
  position: absolute;
  width: 30px;
  height: 6px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.1s;
}
.icoon::before {
  top: -13px;
  left: -1px;
  content: '';
  position: absolute;
  width: 37px;
  height: 6px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  }
  
.icoon::after {
  top: 10px;
  left: -1px;
  content: '';
  position: absolute;
  width: 37px;
  height: 6px;
  background: #000;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  }
.icoon.icoonActive {
  background: transparent;
  border: none;
  box-shadow: none;
  
}
.icoon.icoonActive::before {
  top: 0;
  background: #000;
  transform: rotate(225deg);
  position: absolute;
}
.icoon.icoonActive::after {
  top: 0;
  background: #000;
  transform: rotate(135deg);
  position: absolute;
}
`;

