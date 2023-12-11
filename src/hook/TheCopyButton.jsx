import React from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import useCopyToClipboard from "./useCopyToClipboard";

  
 export default function TheCopyButton() {
  const [isCopied, handleCopy] = useCopyToClipboard(3000);

  return (
    <button 
    onClick={() => handleCopy("code")}
    >
      {isCopied ? <CheckBoxIcon /> : <AssignmentIcon />}
    </button>
  );
 }
 