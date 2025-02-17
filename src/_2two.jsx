import { useState } from "react";

function TextAnalyzer() {
    const [words, setWords] = useState("");

    const handleChange=(e)=>{setWords(e.target.value)}
    const convertToLower=()=>{setWords(words.toLowerCase())}
    const convertToUpper=()=>{setWords(words.toUpperCase())}
    const copyToClipboard=()=>{
        navigator.clipboard.writeText(words)
        alert("copied to the clipboard")
    }
    const clearText=()=>{setWords("")}
    const trimSpaces=()=>{setWords(words.trim())}
    const removeNumbers=()=>{setWords(words.replace(/\d/g,''))}
    const capitalizeWords=()=>{setWords(words.replace(/\b\w/g,(c)=>c.toUpperCase()))}
    const reverseText=()=>{setWords(words.split(' ').reverse().join(' '))}
    const removeExtraSpaces=()=>{setWords(words.replace(/\s+/g,' '))}
    const countVowelsConsonants = () => {
        const vowels = words.match(/[aeiouAEIOU]/g)?.length || 0;
        const consonants = words.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
        alert(`Vowels: ${vowels}, Consonants: ${consonants}`);
    };
    const sentenceCase = () => {
        setWords(words.charAt(0).toUpperCase() + words.slice(1).toLowerCase());
    };
    const wordCount = words.split(/\s+/g).length-1;
    const charCount = words.length
    const minutesRead = Math.ceil(wordCount / 200); // Assuming 200 words per minute reading speed



    return (
        <div className="main">
            <h2>Enter the text to analyze below</h2>
            <textarea rows="8" cols="100" value={words} onChange={handleChange} placeholder="Enter Text" />
            
            <div className="button">
                <button onClick={convertToUpper}>Uppercase</button>
                <button onClick={convertToLower}>Lowercase</button>
                <button onClick={copyToClipboard}>Copy</button>
                <button onClick={trimSpaces}>Trim Spaces</button>
                <button onClick={clearText}>Clear Text</button>
                <button onClick={capitalizeWords}>Capitalize Words</button>
                <button onClick={reverseText}>Reverse Text</button>
                <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button onClick={countVowelsConsonants}>Count Vowels & Consonants</button>
                <button onClick={sentenceCase}>Sentence Case</button>
                <button onClick={removeNumbers}>Remove Numbers</button>
            </div>

            <hr />
            <div className="summary">
                <h2>Your Text Summary</h2>
                <p>{wordCount} words and {charCount} characters</p>
                <p>Estimated Read Time: {minutesRead} minutes</p>
            </div>
            <hr />
            <div className="summary">
                <h2>Your Text</h2>
                <p>{words}</p>
            </div>
        </div>
    );
}

export default TextAnalyzer;
