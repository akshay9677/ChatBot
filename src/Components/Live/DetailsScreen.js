import React, { useState } from "react";
import colors from "../../constants/constants";

function DetailsScreen(props) {
  const [detail, setDetail] = useState("");
  return (
    <div style={styles.detailScreen.container}>
      <div
        style={{
          paddingTop: "8rem",
        }}
      >
        <div style={styles.detailScreen.label}>Email</div>
        <input
          value={detail}
          style={styles.detailScreen.textInput}
          onChange={(event) => setDetail(event.target.value)}
          placeholder='Can I have your email?'
        ></input>
        <div style={styles.detailScreen.btnContainer}>
          <button
            style={{ backgroundColor: colors.primary, color: "white" }}
            type='button'
            className='btn btn-outline'
            onClick={() => {
              props.addDetail(detail);
              setDetail("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  detailScreen: {
    container: {
      height: "34rem",
      flex: 2,
      backgroundColor: "#f4f4f4",
    },
    label: {
      display: "flex",
      justifyContent: "center",
      padding: "0rem 0rem 1rem 0rem",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    textInput: {
      outline: "none",
      border: 0,
      borderRadius: 17,
      padding: "1rem",
      alignContent: "flexStart",
      width: "20rem",
    },
    btnContainer: {
      display: "flex",
      justifyContent: "center",
      padding: "1rem 0rem 0rem 0rem",
    },
  },
};

export default DetailsScreen;
