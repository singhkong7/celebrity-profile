import React from 'react'
import "./Card.scss";
function Card() {
    return (
        <div className="card">
           <table>
               <tbody>
                   <tr>
                        <td>
                            <h1 className="head">Mike Tyson</h1>
                            <img src="/Image.jpg" alt=" " />
                            <p className="dew">Tyson in 2019</p>
                        </td>
                   </tr>
                   <tr>
                       <th>Born</th>
                       <td>
                            <p>
                                Michael Gerard Tyson<br></br>
                                June 30, 1966 (age 55)<br></br>
                                New York City, U.S.<br></br>
                            </p>
                        </td>
                   </tr>
                   <tr>
                       <th>Spouse(s)</th>
                       <td>
                           <p>
                                Robin Givens<br></br>
                                ​(m. 1988; div. 1989)<br></br>​
                                Monica Turner<br></br>
                                ​(m. 1997; div. 2003)​<br></br>
                                Lakiha Spicer​<br></br>
                                ​(m. 2009)<br></br>
                           </p>
                       </td>
                   </tr>
                   <tr>
                       <th>Children</th>
                       <td><p>8</p></td>
                   </tr>
                   <h3 className="top">Boxing Career<br></br>Statistics</h3>
                   <tr>
                       <th>Nicknames</th>
                       <td>
                           <p>
                                Iron Mike<br></br>
                                Kid Dynamite<br></br>
                                The Baddest Man on the Planet<br></br>
                           </p>
                       </td>
                   </tr>
                   <tr>
                       <th>Weight Category</th>
                       <td>
                           <a href="https://en.wikipedia.org/wiki/Heavyweight">Heavyweight</a>
                       </td>
                   </tr>
                   <tr>
                       <th>Height</th>
                       <td>
                           <p>5 ft 10 inch(178cm)</p>
                       </td>
                   </tr>
                   <tr>
                       <th>Reach</th>
                       <td>
                           <p>71 in (180 cm)</p>
                       </td>
                   </tr>
                   <tr>
                       <th>Stance</th>
                       <td>
                           <a href="https://en.wikipedia.org/wiki/Orthodox_stance">Orthodox</a>
                       </td>
                   </tr>
                     <h3 className="top">Boxing Record</h3>
                   <tr>
                        <th>Total fights</th>
                        <td><p>58</p></td>
                   </tr>
                   <tr>
                       <th>Win</th>
                       <td><p>50</p></td>
                   </tr>
                   <tr>
                       <th>Losses</th>
                       <td><p>8</p></td>
                   </tr>
                   <tr>
                       <th>Win by KO</th>
                       <td><p>44</p></td>
                   </tr>
                   <tr>
                       <th>No .of Contest</th>
                       <td><p>2</p></td>
                   </tr>
                   <tr>
                       <th>Website</th>
                       <a href="https://miketyson.com/">miketyson.com</a>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}

export default Card
