import React from "react";
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <Button 
      startIcon={<SaveIcon/>} 
      variant="contained">
        Hello World
      </Button>
    </div>
  );
}



export default App;
