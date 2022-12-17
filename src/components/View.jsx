import React from "react";

const View = ({ loading, error, media }) => {
  // Decide what to render
  let content = null;
  if (loading) content = <p>Loading...</p>;
  if (error) content = <p>Something went wrong</p>;
  if (!loading && !error && media) content = <p>Try with different input</p>;
  if (!loading && !error && media)
    content = (
      <img
        src={media}
        alt=""
        className="rounded-md block w-full md:w-7/12 mx-auto"
      />
    );

  return <div className="py-4">{content}</div>;
};

export default View;
