import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { useMutation } from "@apollo/react-hooks";
import axios from "axios";

import { S3_SIGN } from "../utils/mutations";

// ----------------------------------------------------MUI------------------------------------------------------
import { Button, TextField } from "@mui/material";

const UploadPhoto = () => {
  const [tag, setTag] = useState([]);
  const [file, setFile] = useState(null);

  const [s3Sign, { error }] = useMutation(S3_SIGN);

  const handlePhotoUpload = async (files) => {
    setFile(files[0]);
  };

  const handleTextChange = (e) => {
    setTag(e.target.value);
  };

  const uploadToS3 = async (file, signedRequest) => {
    const options = {
      headers: {
        "Content-Type": file.type,
      },
    };
    await axios.put(signedRequest, file, options);
  };

  const formatFilename = (filename) => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const newFilename = `images/${randomString}-${cleanFileName}`;
    return newFilename.substring(0, 60);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    console.log(tag, file);
    // const { tag, file } = state;
    let filename = formatFilename(file.name);
    const response = await s3Sign({
      variables: {
        filename: filename,
        filetype: file.type,
      },
    });

    const { signedRequest, url } = s3Sign;
    await uploadToS3(file, signedRequest);
  };

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));
  // importFile({ variables: { file: file![0] } });

  // ---------------------------------------------------styles---------------------------------------------------------
  const paperStyle = {
    padding: "25px 25px",
    width: "70%",
    margin: 100,
    background: "white",
    borderRadius: 8,
    boxShadow: "15px 15px 10px 1px rgba(255, 105, 135, .3)",
  };

  const buttonStyle = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 8,
    boxShadow: "0 3px 20px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "100%",
  };

  // ---------------------------------------------------JSX---------------------------------------------------------
  return (
    <div style={paperStyle} spacing={2}>
      <form onSubmit={handleSubmit}>
        <DropzoneArea
          acceptedFiles={["image/png", "image/jpeg", "image/bmp"]}
          filesLimit={1}
          clearOnUnmount
          dropzoneText={`Upload your photo!`}
          justifyText={"center"}
          onChange={handlePhotoUpload}
        />
        <TextField
          required
          fullWidth
          id="Tag"
          label="Tag friends in this photo!"
          variant="outlined"
          onChange={handleTextChange}
        />
        <Button
          type="submit"
          variant="contained"
          style={buttonStyle}
          // disabled={file?.length ? false : true}
        >
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadPhoto;
