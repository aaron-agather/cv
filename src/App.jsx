// import { useState } from 'react'
import {  } from './comp/button'
import { H0Custom, H1Custom, H2Custom, H3Custom, H4Custom, SectionName, CText, CLink, TextWithBox } from './comp/text';
import { CCircle, Line } from './comp/shapes';
import { CSpacer, ListToView } from './comp/utils';
import CircuitBoardBackground from './comp/gsap_board';
import { G_H4Custom, G_MH4Custom } from './comp/gsap_text';

import './App.css'

function App() {

  return (
    <section id="parent">
      <section id="left">
        <div
          style={{
            zIndex: 1
          }}>
          <G_MH4Custom
            label="Aaron"
            cfont="Anurati"
            paddingTop="50px"
            color="white"
            animation_color="color-mix(in oklab, white, purple 90%)"
            fontSize={40}
            uppdercase={true}
            
            slabel="Agather"
            scfont="Anurati"
            scolor="color-mix(in oklab, white, purple 90%)"
            sanimation_color="white"
            sfontSize={40}
            Suppdercase={true}
          />
          {/* <H4Custom label="Aaron" cfont="Anurati" paddingTop="50px" color="white" fontSize={40} uppdercase={true}/>
          <G_H4Custom label="Agather" cfont="Anurati" color="color-mix(in oklab, white, purple 90%)" fontSize={40} animation_color="white" uppdercase={true}/>*/}
          <CSpacer height={50} />
          <SectionName label="contact" color="color-mix(in oklab, white 50%, purple)" fontSize={20} uppdercase={true}/>
          <Line color="color-mix(in oklab, white 50%, purple)" />
          <H3Custom label="+45 71 54 38 03" color="white" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <CLink label="aaroagather@gmail.com" color="white" fontSize={20} link="mailto:aaroagather@gmail.com" />        
            <CLink label="Portfolio" color="white" fontSize={20} link="https://aaron-agather.github.io/portfolio/" />
            <CLink label="9800 Hjørring" color="white" fontSize={20} link="https://maps.app.goo.gl/N7tH8EU69WS5i91a7"/>
          </div>
          <CSpacer height="100px" />
          <SectionName label="skills" color="color-mix(in oklab, white 50%, purple)" fontSize={20} uppdercase={true}/>
          <Line color="color-mix(in oklab, white 50%, purple)"/>
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
          <SectionName label="languages" color="color-mix(in oklab, white 50%, purple)" fontSize={20} uppdercase={true}/>
          <Line color="color-mix(in oklab, white 50%, purple)" />
          <ListToView
            list={[
              { name: "German", progress: 100 },
              { name: "English", progress: 100 },
              { name: "Danish", progress: 15 }
          ]}
          />
        </div>
        <CircuitBoardBackground
          speed={0.2}
          color='purple'
          lineCount={10}
          opacity={.5}
          glowStrength={10} />
      </section>
      <section id="right">
        <CSpacer height='50px' />
        <SectionName label="profile" color="gray" fontSize={15} uppdercase={true} />
        <Line color="gray" />
        <CSpacer height='50px' />
        <CText label={`Junior Digital Designer focused on e-commerce design, brand identity, and web development.
        Combines design education with hands-on project experience across webshops, product pages, and client work.`} />
        
        
        <CSpacer height="50px" />
        <SectionName label="projects" color="gray" fontSize={15} uppdercase={true} />
        <Line color="gray" />
        <CSpacer height='20px' />
        <SectionName label="VOID Webshop Concept" color="black" fontSize={15} />
        
        
        <CSpacer height="10px" />
        <TextWithBox label="SELF-INITIATED · 2026" color="#5c0087" backgroundColor="#d7abeb" textPosition="center" />
        <CSpacer height="10px" />
        <CText label={`Designed a complete dark minimal webshop concept for a modern
        streetwear brand. Built homepage, product pages, and campaign visuals with a focus on premium apparel presentation, structured purchase flow, and visual consistency.`} />
        
        
        <CSpacer height='40px' />
        <SectionName label="Tatarus — Link Directory" color="black" fontSize={15} />
        <CSpacer height="10px" />
        <TextWithBox label="CLIENT PROJECT · 2025/2026" color="#5c0087" backgroundColor="#d7abeb" textPosition="center" />
        <CSpacer height="10px" />
        <CText label={`Delivered a fully responsive dark fantasy–themed link directory for a gaming content creator. Handled layout, structure, and full implementation based on client direction. Maintained a consistent moody aesthetic with a strong focus on mobile experience and brand cohesion.`} />
        
        
        <CSpacer height='40px' />
        <SectionName label="education" color="gray" fontSize={15} uppdercase={true} />
        <Line color='gray' />
        <SectionName label="FGU Vendsyssel" color="black" fontSize={15} />
        <CSpacer height="10px" />
        <TextWithBox label="Graphic Design — Current" color="#a263bf" textPosition="center" />
        <CSpacer height="10px" />
        <CText label={`Focused on visual composition, typography, and digital tools. Works with Photoshop and Illustrator alongside self-initiated web and e-commerce projects, applying classroom principles to real design challenges.`} />
        
      </section>

      {/* <div className="ticks"></div>*/}
      {/* <section id="spacer"></section>*/}
    </section>
  )
}

export default App
