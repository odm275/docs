import React from "react"
import { Link } from "gatsby"

const CardPreviews = ({ title, link }) => (
  <div
    className="preview-cards"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderStyle: "solid",
      borderColor: "#0b0c0d",
      marginTop: 10,
    }}
  >
    <Link to={link} style={{ width: "100%" }}>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
    </Link>
  </div>
)

export default CardPreviews
