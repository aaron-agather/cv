export function CSpacer({height="20px"}) {
  return <section
    style={{
      height: height,
      width: "100%",
      // background: "yellow",
      position: "relative"
    }}>
  </section>
}

export function ListToView({ list }) {
  return (
    <div>
      {list.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "center",
            marginBottom: "8px"
          }}
        >
          <span style={{ color:"white", width: "100px" }}>
            {item.name}
          </span>

          <FillBar value={item.progress} />
        </div>
      ))}
    </div>
  );
}

function FillBar({ value }) {
  return (
    <div style={{
      width: "150px",
      height: "10px",
      background: "#333",
      borderRadius: "5px",
      overflow: "hidden",
      display: "inline-block",
      marginLeft: "10px"
    }}>
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "white",
          transition: "width 0.3s"
        }}
      />
    </div>
  );
}