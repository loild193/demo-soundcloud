import React from 'react'

function Loading(props) {
  return (
    <div style={{
      textAlign: "center",
      marginTop: "3rem",
      padding: "2rem"
      }}
    >
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden" />
      </div>
    </div>
  )
}

Loading.propTypes = {}

export default Loading

