import { useState } from 'react'
import {  } from './comp/button'
import { H3Custom, H4Custom, SectionName, CText } from './comp/text';
import { CCircle, Line } from './comp/shapes';
import { CSpacer, ListToView } from './comp/utils';
import './App.css'

function App() {

  return (
    <section id="parent">
      <section id="left">
        <H3Custom label="Aaron" cfont="Anurati" paddingTop="20px" color="white"/>
        <H3Custom label="Agather" cfont="Anurati" color="color-mix(in oklab, white, purple 90%)" />
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
            { name: "Danish", progress: 20}
        ]}
        />
      </section>
      <section id="right">
        <H4Custom label="About Me" />
        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </section>
  )
}

export default App
