import React from "react";

const List = ({ people, removeFunction }) => {
  return (
    <>
      <h1 className="main-title">birthday remainder</h1>
      <section className="main-box">
        <h1 className="title">
          <span>{people.length}</span> Birthday Remaining
        </h1>

        {people.map((item) => {
          const { id, years, image, name, button } = item;
          return (
            <div className="details" key={id}>
              <img src={image} alt={name} className="img" />
              <div className="data-container">
                <h2>{name}</h2>
                <h4>{years} years old</h4>
              </div>
              <div className="button-container">
                <button
                  type="button"
                  className="btn"
                  onClick={() => removeFunction(id)}
                >
                  {button}
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default List;
