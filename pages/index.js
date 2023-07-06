
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from "react";
import ParticlesBox from '../data/particles'
import bg from '../public/googlingGod.png'


import data from "../data/data";
import BarChart from "../components/barChart";




export default function Home() {
  const [dataToShow, updateDataToShow] = useState('USData')
  useEffect(
    () => {
      var bars = document.getElementsByClassName("bar")


      console.log('svg', bars.item(1).getAttribute('width'))
      console.log('svg', bars.item(1).getAttribute('height'))

    }, []
  )

  // useEffect(() => {
  //   console.log('effect');


  //   return () => {
  //     console.log('cleaned up');
  //     document.getElementById("tsparticles").disabled = true;

  //   };
  // }, []);

  return (
    <div onClick={() => { updateDataToShow('JapanData') }} className={styles.container}>
      glow on
      {/* <div style={particleBars}></div> */}



      <ParticlesBox />
      <img style={{
        position: "relative",
        top: '0',
        left: 0,
        right: 0,
        maxWidth: '100%',
        objectFit: 'cover',
        zIndex: 0
      }} src={bg.src} />
      <BarChart width={250}
        height={400}
        onMouseOver={() => { }}
        data={
          data[dataToShow]
        }
        yAxisTitle={` GDP growth`} ></BarChart >
    </div >
  )
}



