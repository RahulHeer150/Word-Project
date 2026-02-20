import { createContext,useState } from "react";
import wordsData from "../Data/WordsData";


//context creation 

export const WordContext = createContext();

//context provider

export const WordProvider = ({children})=>{
    const [words,setWords] = useState(wordsData);
    return(
        <WordContext.Provider value={{words,setWords}}>
            {children}
        </WordContext.Provider>
    )
}