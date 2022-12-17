import React from "react";

const Form = ({ description, setDescription, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        spellCheck="false"
        autoComplete="off"
        placeholder="Write your text here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="flex-1 p-2 ring-2 ring-indigo-200 focus:ring-primary rounded-l-md duration-500"
      />
      <button
        type="submit"
        disabled={!description}
        className="p-2 text-white font-semibold bg-primary ring-2 ring-primary rounded-r-md duration-500"
      >
        {description ? "Generate" : "Write First"}
      </button>
    </form>
  );
};

export default Form;
