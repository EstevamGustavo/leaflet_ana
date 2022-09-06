import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        ::-webkit-scrollbar {
    width: 15px;
    height: 15px;
  }

  ::-webkit-scrollbar-track {
    background: #f5f5f5;    
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ECECEC;
    border-radius: 50px;
    border: 3px solid #ECECEC;
  }
    }
    body{      
        background: #f5f5f5;
        color: #000;
        font: 400 16px "IBM Plex Sans", sans-serif;
        overflow: hidden;
    }
`;
