// body {
//   font-family: sans-serif;
//   font-size: 12px;
//   font-weight: bold;
//   margin: 0;
// }

// * {
//   box-sizing: border-box;
// }
// .container{
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }

// .columns{
//   display: flex;
//   flex: 1;
// }

// header,
// nav,
// main,
// aside,
// footer {
//   padding: 12px;
//   text-align: center;
// }

// header {
//   background-color: tomato;
//   height: 60px;
//   color: white;
// }

// nav {
//   background-color: coral;
//   flex-shrink: 0;
//   width: 100px;
//   color: #333;
// }

// main {
//   background-color: moccasin;
//   flex-grow: 1;
//   color: #333;
// }

// aside {
//   background-color: sandybrown;
//   flex-shrink: 0;
//   width: 100px;
//   color: #333;
// }

// footer {
//   background-color: slategray;
//   height: 100px;
//   color: white;
//   margin-top: auto;
// }


import React from "react";
import "./HolyGrail.css";

export default function HolyGrail() {
  return (
    <div className="container">
      <header>Header</header>

      <div className="columns">
        <nav>Navigation</nav>
        <main>Main</main>
        <aside>Sidebar</aside>


      </div>


      <footer>Footer</footer>
    </div>
  );
}