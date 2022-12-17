import React, { useState } from "react";
import Form from "components/Form";
import View from "components/View";
import axios from "axios";

const Main = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [media, setMedia] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set error and loading state
      setLoading(true);
      setError(false);

      //   Make api call
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        { model: "image-alpha-001", prompt: description },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_DALL_E_KEY}`,
          },
        }
      );
      const data = response?.data.data[0]?.url;

      // Reset error and loading state
      setLoading(false);
      setMedia(data);
    } catch (err) {
      // Set error and loading state again
      setLoading(false);
      setError(false);
      setMedia("");
    }
  };

  return (
    <>
      <Form {...{ loading, description, setDescription, handleSubmit }} />
      <View {...{ loading, error, media }} />
    </>
  );
};

export default Main;
