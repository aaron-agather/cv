import { useState } from 'react'
import {  } from './comp/button'
import { H0Custom, H1Custom, H2Custom, H3Custom, H4Custom, SectionName, CText, CLink } from './comp/text';
import { CCircle, Line } from './comp/shapes';
import { CSpacer, ListToView } from './comp/utils';
import { MotherboardAnimation } from './comp/gsap motherboard';

import './App.css'

function App() {

  return (
    <section id="parent">
      <section id="left">
        <H4Custom label="Aaron" cfont="Anurati" paddingTop="20px" color="white" fontSize={50}/>
        <H4Custom label="Agather" cfont="Anurati" color="color-mix(in oklab, white, purple 90%)" fontSize={50}/>
        <CSpacer height={50} />
        <SectionName label="contact" />
        <Line />
        <H3Custom label="+45 71 54 38 03" color="white" />
        <CLink label="aaroagather@gmail.com" color="white" fontSize={20} link="mailto:aaroagather@gmail.com" />        
        <CLink label="Portfolio" color="white" fontSize={20} link="https://aaron-agather.github.io/portfolio/" />
        <CLink label="Hjørring" color="white" fontSize={20} link="https://maps.app.goo.gl/N7tH8EU69WS5i91a7"/>
        <CSpacer height={50} />
        <SectionName label="skills" />
        <Line />
        <ListToView list={[
          { name: "Photoshop", progress: 80 },
          { name: "Illustrator", progress: 80 },
          { name: "Figma", progress: 50 },
          { name: "HTML", progress: 95 },
          { name: "CSS", progress: 95 },
          { name: "JAVASCRIPT", progress: 50 },
          { name: "React", progress: 10 },
        ]} />
        <CSpacer height="30px" />
        <SectionName label="languages" />
        <Line />
        <ListToView
          list={[
            { name: "German", progress: 100 },
            { name: "English", progress: 100 },
            { name: "Danish", progress: 30 }
        ]}
        />
      </section>
      <section id="right">
        <H4Custom label="PROFILE" fontSize={50} />
        <CText label={``} />
        {/* <div style={{ width: "100vw", height: "100vh" }}>
          <MotherboardAnimation />
        </div>*/}
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </section>
  )
}

export default App
