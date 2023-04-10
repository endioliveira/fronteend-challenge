import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FAFAFA;
    overflow-x: hidden;
     
     ::-webkit-scrollbar {
       width: 8px;
     }
 
     ::-webkit-scrollbar-track {
       background: #F1F1F1;
       border-radius: 30px;
     }
 
     ::-webkit-scrollbar-thumb {
       background: #A8A8A8;
       border-radius: 30px;
     }
   }
`;
