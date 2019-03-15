// import React, {Component} from 'react';
// import './user-page.css';

// export default class UserPage extends Component {
//     render() {
//         return (
//             <main className="container">
//                 <nav className="navbar">
//                     <ul>
//                         <li><a href="../index.html"><i className="fa fa-home"></i></a></li>
//                         <li><a href="#"><i className="fa fa-users"></i></a></li>
//                         <li><a href="#"><i className="fa fa-envelope"></i></a></li>
//                         <li><a href="#"><i className="fa fa-gear"></i></a></li>
//                         <li><a href="#"><i className="fa fa-bell"></i></a></li>
//                         <li><a href="#"><i className="fa fa-bar-chart"></i></a></li>
//                     </ul>
//                 </nav>
//                 <div className="content">
//                     <div className="profile">
//                         <div className="picture">
//                             <img src="https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg"/>
//                             <div className="badge green"><i className="fa fa-check"></i></div>
//                         </div>
//                         <div className="details">
//                             <div className="tags">
//                                 <div className="tag orange">Електрик 3-го розряду</div>
//                                 <div className="tag green">Online</div>
//                             </div>
//                             <div className="title">Марк Мельниченко</div>
//                             <div className="titulus">Branch administrator</div>
//                             <div className="description">
//                                 <div className="info-row"><i className="fa fa-map-marker"></i><span className="caption">Родом з:</span><span
//                                     className="value">Хуст, Україна</span></div>
//                                 <div className="info-row"><i className="fa fa-clock-o"></i><span className="caption">Востаннє в мережі:</span><span
//                                     className="value">online</span></div>
//                                 <div className="info-row"><i className="fa fa-calendar"></i><span className="caption">На сайті з:</span><span
//                                     className="value">17 червня 2018</span></div>
//                             </div>
//                         </div>
//                         <div className="functions">
//                             <div className="func"><i className="fa fa-envelope"></i></div>
//                             <div className="func"><i className="fa fa-comments"></i></div>
//                             <div className="func"><i className="fa fa-edit"></i></div>
//                             <div className="func"><i className="fa fa-flag"></i></div>
//                             <div className="func"><i className="fa fa-share-alt"></i></div>
//                             <div className="func"><i className="fa fa-trash"></i></div>
//                         </div>
//                         <hr/>
//                         <div className="further">
//                             <div className="info-row">
//                                 <div className="info-block"><i className="fa fa-home"></i><span className="value">+2 574 986 224</span>
//                                 </div>
//                                 <div className="info-block"><i className="fa fa-globe"></i><span
//                                     className="value">https://codepen.io</span></div>
//                             </div>
//                             <div className="info-row">
//                                 <div className="info-block"><i className="fa fa-phone"></i><span className="value">+6 865 664 25 69</span>
//                                 </div>
//                                 <div className="info-block"><i className="fa fa-envelope"></i><span
//                                     className="value">mark.brack@gmail.com</span></div>
//                             </div>
//                         </div>
//                         <div className="further">
//                             <div className="info-row">
//                                 <div className="info-block"><i className="fa fa-twitter"></i><span
//                                     className="value">@markbrack</span></div>
//                                 <div className="info-block"><i className="fa fa-google-plus"></i><span
//                                     className="value">google.com/mark.brack</span></div>
//                             </div>
//                             <div className="info-row">
//                                 <div className="info-block"><i className="fa fa-facebook"></i><span
//                                     className="value">fb.com/mark.brack</span></div>
//                                 <div className="info-block"><i className="fa fa-youtube"></i><span
//                                     className="value">youtube.com/mark.brack</span></div>
//                             </div>
//                         </div>
//                         <hr/>
//                         <div className="logs">
//                             <div className="title">Останні події</div>
//                             <table>
//                                 <tr>
//                                     <td>2018-05-17</td>
//                                     <td>Ви увыйшли до свого профілю.</td>
//                                 </tr>
//                                 <tr>
//                                     <td>2018-05-16</td>
//                                     <td>Ви вийшли зі свого профілю.</td>
//                                 </tr>
//                                 <tr>
//                                     <td>2018-05-16</td>
//                                     <td>Ви зберегли вакансію у <a href="#">обраних</a>.</td>
//                                 </tr>
//                                 <tr>
//                                     <td>2018-05-16</td>
//                                     <td>Ми підірали для вас цікаві вакансії.</td>
//                                 </tr>
//                                 <tr>
//                                     <td>2018-05-16</td>
//                                     <td>Ви увійшли до свого профілю.</td>
//                                 </tr>
//                             </table>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         );
//     }
// }