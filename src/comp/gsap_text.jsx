import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText, useGSAP);

export function G_H4Custom({
  label,
  cfont,
  paddingTop,
  color,
  animation_color,
  fontSize,
  uppdercase=false,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;

    const split = SplitText.create(ref.current, {
      type: "chars",
    });

    const chars = split.chars;
    let index = 0;

    const tl = gsap.timeline({
      repeat: -1,
    });

    tl.to({}, {
      duration: 0.2,
      repeat: -1,
      onRepeat: () => {
        // reset all to base color
        gsap.set(chars, { color, textDecoration: "none" });

        // highlight one letter
        gsap.set(chars[index], { color: animation_color, textDecoration: "underline" });

        // move to next letter
        index = (index + 1) % chars.length;
      }
    });

    return () => {
      tl.kill();
      split.revert();
    };
  }, { scope: ref });

  if (uppdercase) {
    return (
      <h4
        ref={ref}
        style={{
          color,
          textAlign: "center",
          fontFamily: cfont,
          whiteSpace: "pre-line",
          fontSize,
          margin: 0,
          paddingTop,
          width: "100%",
          textTransform: "uppercase"
        }}
      >
        {label}
      </h4>
    )
  }
  return (
    <h4
      ref={ref}
      style={{
        color,
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        fontSize,
        margin: 0,
        paddingTop,
        width: "100%",
      }}
    >
      {label}
    </h4>
  );
}

export function G_MH4Custom({
  label,
  cfont,
  paddingTop,
  color,
  animation_color,
  fontSize,
  uppdercase = false,

  slabel,
  scfont,
  scolor,
  sanimation_color,
  sfontSize,
  Suppdercase = false,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;
  
    const split = SplitText.create(ref.current, {
      type: "chars",
    });
  
    const chars = split.chars;
    let index = 0;
  
    const tween = gsap.to({}, {
      duration: 0.15,
      repeat: -1,
      onRepeat: () => {
  
        chars.forEach((char) => {
          const isSecondLine = char.parentNode?.dataset?.line === "2";
  
          gsap.set(char, {
            color: isSecondLine ? scolor : color,
            textDecoration: "none",
          });
        });
  
        const active = chars[index];
        const isSecondLine = active.parentNode?.dataset?.line === "2";
  
        gsap.set(active, {
          color: isSecondLine ? sanimation_color : animation_color,
          textDecoration: "underline",
        });
  
        index = (index + 1) % chars.length;
      },
    });
  
    return () => {
      tween.kill();
      split.revert();
    };
  }, { scope: ref });



  return (
    <div ref={ref} style={{ textAlign: "center", paddingTop, width: "100%" }}>
      
      <h4
        data-line="1"
        style={{
          color,
          fontFamily: cfont,
          fontSize,
          margin: 0,
          textTransform: uppdercase ? "uppercase" : "none",
        }}
      >
        {label}
      </h4>

      <h4
        data-line="2"
        style={{
          color: scolor,
          fontFamily: scfont,
          fontSize: sfontSize,
          margin: 0,
          textTransform: Suppdercase ? "uppercase" : "none",
        }}
      >
        {slabel}
      </h4>

    </div>
  );
}
