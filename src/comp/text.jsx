export function H3Custom({label, cfont, paddingTop, color}) {
  return (
    <h3
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h3>
  )
}

export function H4Custom({label, cfont, paddingTop, color}) {
  return (
    <h4
      style={{
        color: color,
        // background: "black",
        textAlign: "center",
        fontFamily: cfont,
        whiteSpace: "pre-line",
        fontSize: "50px",
        margin: 0,
        // padding: 20,
        paddingTop: paddingTop,
        width: "100%",
      }}
    >{label}</h4>
  )
}

export function SectionName({ label }) {
  return (
    <h5
      style={{
        color: "color-mix(in oklab, white, purple 50%)",
        // textShadow: `
        //     -1px -1px 0 white,
        //     1px -1px 0 white,
        //     -1px  1px 0 white,
        //     1px  1px 0 white
        //   `,
        textTransform: "uppercase",
        fontSize: "20px",
        margin: "0",
        marginTop: "20px",
      }}
    >{label}</h5>
  )
}

export function CText({label}) {
  return (
    <div
      style={{
        whiteSpace: "pre-line"
      }}>
      {label}
    </div>
  )
}