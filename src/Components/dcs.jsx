// import React from 'react';
// import logo from '../img/b-logo.png';
// import Menu from './Menu';
// import cln from 'classnames';
// export default function Header(props) {
//   const [menuVisible, setMenuvisible] = React.useState(false);
//   const showMenu = () => {
//     setMenuvisible(!menuVisible);
//   };
//   return (
//     <section className="header" id="header">
//       <div className="container">
//         <div className="header__content">
//           <a href="#" className="header__logo">
//             <div className="header__logo-img">
//               <img src={logo} alt="logo" />
//             </div>

//             <div className="header__logo-descr">
//               <div className="header__logo-title">BlaBla</div>
//               <div className="header__logo-subtitle">One Page Flat Template</div>
//             </div>
//           </a>
//           <div className={cln({ burger_active: menuVisible }, 'burger')} onClick={showMenu}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//           <div className="header__nav">
//             <ul>
//               <li>
//                 <a href="#">Home</a>
//               </li>
//               <li>
//                 <a href="#">Portfolio</a>
//               </li>
//               <li>
//                 <a href="#">About</a>
//               </li>
//               <li>
//                 <a href="#">Contact</a>
//               </li>
//             </ul>
//           </div>
//           <Menu menuVisible={menuVisible} />
//         </div>
//       </div>
//     </section>
//   );
// }
