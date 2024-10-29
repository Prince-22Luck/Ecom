import Dashcss from "./Dash.module.css";
import Bar from "../charts/Barchart.jsx";
import Pie from "../charts/Piechart.jsx";
import Area from "../charts/Areachart.jsx";
import Line from "../charts/Linechart.jsx";

const Dash = () =>{
  return (
    <>
    <div className={Dashcss.container}>
      <div className={Dashcss.side}>
        <ul className={Dashcss.unorder}>
          <li className={Dashcss.list}>Filter</li>
          <li className={Dashcss.list}>Filter</li>
          <li className={Dashcss.list}>Filter</li>
        </ul>
      </div>
      <div className={Dashcss.rightSide}>
        <h2 className={Dashcss.h2}>DashBoard</h2>
        <div className={Dashcss.valueLayout}>
          <div className={Dashcss.box}><h5 className={Dashcss.para}>Products like GPUs, RAM, and SSDs are driving much of the revenue growth, particularly in core and expansion components. High-end components such as graphics cards and RAM 32GB are significant revenue generators.</h5></div>
          <div className={Dashcss.box}><span className={Dashcss.name}>Revenue</span><h2 className={Dashcss.h2}>38100</h2></div>
          <div className={Dashcss.box}><span className={Dashcss.name}>Units Sold</span><h2 className={Dashcss.h2}>458</h2></div>
        </div>

        <div className={Dashcss.graph}>
          <div className={Dashcss.graphContainer}>
           
            <Line />
          
            
          </div>
          <div className={Dashcss.graphContainer}>
          <Bar />
          </div>

          </div>
          <div className={Dashcss.graph1}>
          <div className={Dashcss.graphContainer}>  <Pie /></div>
          <div className={Dashcss.graphContainer}><Area /></div>
          <div className={Dashcss.graphContainer}></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dash;
