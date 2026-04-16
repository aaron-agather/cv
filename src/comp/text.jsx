export function H0Custom({label, cfont, paddingTop, color}) {
  return (
    <h0
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        // fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h0>
  )
}

export function H1Custom({ label, cfont, paddingTop, color }) {
  return (
    <h1
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        // fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h1>
  )
}

export function H2Custom({ label, cfont, paddingTop, color }) {
  return (
    <h2
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        // fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h2>
  )
}

export function H3Custom({ label, cfont, paddingTop, color, position="center" }) {
  return (
    <h3
      style={{
        color: color,
        marginLeft: "10px",
        textAlign: position,
        fontFamily: cfont,
        whiteSpace: "pre-line",
        // fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h3>
  )
}

export function H4Custom({label, cfont, paddingTop, color, fontSize, uppdercase=false, position="center"}) {
  if (uppdercase) {
    return (
      <h4
        style={{
          position: "relative",
          color: color,
          // background: "black",
          textAlign: position,
          fontFamily: cfont,
          whiteSpace: "pre-line",
          fontSize: fontSize,
          margin: 0,
          // padding: 20,
          paddingTop: paddingTop,
          width: "100%",
          textTransform: "uppercase"
        }}
      >{label}</h4>
    )
  }
  return (
    <h4
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        fontSize: fontSize,
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h4>
  )
}

export function SectionName({ label, cfont, paddingTop, color, fontSize, uppdercase=false, position="center" }) {
  if (uppdercase) {
    return (
      <div
        style={{
          height: "auto",
          display: "flex",
          placeContent: position
        }}>
        <h4
          style={{
            position: "relative",
            color: color,
            textAlign: position,
            fontFamily: cfont,
            whiteSpace: "pre-line",
            fontSize: fontSize,
            margin: 0,
            marginLeft: "10px",
            paddingTop: paddingTop,
            width: "100%",
            textTransform: "uppercase"
          }}
        >{label}</h4>
      </div>
    )
  }
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        placeContent: position
      }}>
      <h4
        style={{
          position: "relative",
          color: color,
          fontFamily: cfont,
          whiteSpace: "pre-line",
          fontSize: fontSize,
          margin: 0,
          paddingTop: paddingTop,
          width: "auto",
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >{label}</h4>
    </div>
  )
}

export function CText({label}) {
  return (
    <div
      style={{
        position: "relative",
        whiteSpace: "pre-line",
        padding: "0 40px",   // 👈 THIS
        maxWidth: "900px",   // 👈 optional but clean
        margin: "0 auto" 
      }}>
      {label}
    </div>
  )
}

export function CLink({ label, link, color, fontSize }) {
  return (
    <a
      href={link}
      style={{
        // display: "inline-block", // THIS is the fix
        color: color,
        fontSize: fontSize,
        position: "relative",
        margin: "5px",
        padding: "5px 10px", // give it breathing room
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        // textDecoration: "none", // optional but cleaner
      }}
    >
      {label}
    </a>
  );
}

export function TextWithBox({ label, color, backgroundColor, textPosition }) {
  return (
    <div style={{
      display: "flex",
      marginLeft: "10px",
      justifyContent: textPosition,
      height: "auto",
      alignItems: "flex-start",
    }}>
      <h6
        style={{
          padding: "4px",
          textAlign: "center",
          color,
          backgroundColor,
          borderRadius: "5px",
          margin: 0,
        }}>
      {label}
      </h6>
    </div>
  )
}