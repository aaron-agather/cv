export function CCircle() {
  return (
    <svg width="100" height="100"
      style={{
        position: "absolute",
        bottom: 0,
      }}>
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="red"
          />
        </svg>
  )
}

export function Line({color="purple"}) {
  return (
    <div
      style={{
        height: "auto",
        display: "flex",
        placeContent: "center"
      }}>
      <svg width="80%" height="2"
        style={{
          margin: 0,
        }}>
        <rect height="2" width="100%" fill={color}></rect>
      </svg>
    </div>
  )
}