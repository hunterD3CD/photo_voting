import React from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { flowRight as compose } from "lodash";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

// ----------------------------------------------------MUI------------------------------------------------------
import { Button, Grid, TextField, Typography } from "@mui/material";

function UploadPhoto() {
  const [users, setUsers] = React.useState([]);
  const [file, setFile] = React.useState(null);
  // const [name, setName] = React.useState(null);

  let onDrop = async (files) => {
    setFile(files[0]);
  };

  let onChange = (e) => {
    setUsers(e.target.value);
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

  const submit = async () => {
    const { file } = file;
    let filename = formatFilename(file.name);
    const response = await s3Sign({
      variables: {
        filename: filename,
        filetype: file.type,
      },
    });

    const { signedRequest, url } = response.data.signS3;
    await uploadToS3(file, signedRequest);

    const graphqlResponse = await uploadToS3({
      variables: {
        filename: filename,
        pictureUrl: url,
      },
    });
  };

  // ---------------------------------------------------JSX---------------------------------------------------------
  const paperStyle = {
    padding: 0,
    height: "40vh",
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
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Grid
      container
      spacing={2}
      style={paperStyle}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={9}
        {...getRootProps({ className: "dropzone" })}
        onChange={() => onDrop}
      >
        <input {...getInputProps()} />
        <Typography xs={12} style={{ margin: "20px" }}>
          Drag 'n' drop or Click here to upload a photo!
        </Typography>
      </Grid>

      <Grid item xs={9}>
        <TextField
          onChange={() => onChange}
          required
          fullWidth
          id="Tag"
          label="Tag your friends here"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={9}>
        <Button
          // onClick={submit}
          style={buttonStyle}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
        >
          Upload
        </Button>
      </Grid>
      <br />
    </Grid>
  );
}

const s3Sign = gql`
  mutation ($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;

export default compose(graphql(s3Sign, { name: "s3Sign" }))(UploadPhoto);

// export default UploadPhoto;
