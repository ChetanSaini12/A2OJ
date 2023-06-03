import { Fade } from "react-reveal";
import SectionTitle from "../SectionTitle";
import "./codeEditor.css";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

const CodeEditor = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  const [code, setCode] = useState(
    '#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n  cout << "Hello, world! This is NITA CP_HUB";\n  return 0;\n}'
  );
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function submitCode(e) {
    console.log("Clicked");
    axios
      .post("https://glamorous-sunglasses-toad.cyclic.app/run", {
        code: code,
        input: input,
      })
      .then((res) => {
        // console.log(res.data)
        setOutput(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setOutput(err.message);
      });
  }

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <section
      id="code-editor"
      data-aos="zoom-in-down"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <SectionTitle title="Code Editor" />
      {/* <Issue title="We are working on this page. Explore others!!" /> */}
      <Fade bottom>
        <div className="codeEditor max-w-full  mx-4 rounded-md p-2 bg-slate-400 bg-opacity-10 backdrop-blur-md shadow-indigo-600 overflow-auto md:mx-11 ">
          <Editor
            height="100%"
            theme="vs-dark"
            className="rounded-lg shadow-lg p-2 h-[60vh] md:h-[78vh] md:p-4"
            defaultLanguage="cpp"
            value={code}
            onChange={setCode}
            onMount={handleEditorDidMount}
          ></Editor>
          <div className="grid-rows-3 gap-2 pt-3">
            <div className="Input py-2 px-1">
              <h2 className="text-2xl pb-3 font-medium text-slate-300">
                Input
              </h2>
              <textarea
                className="bg-zinc-900 overflow-auto w-full h-36 lg:h-44 text-stone-200  text-sm
              focus:outline-0"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="Output py-2 px-1">
              <h2 className="text-2xl pb-3 font-medium text-slate-300">
                Output
              </h2>
              <textarea
                className="bg-zinc-900 overflow-auto w-full h-32 lg:h-40 text-stone-200  text-sm focus:outline-0"
                value={output}
                onChange={(e) => {
                  setOutput(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              type="button"
              class="px-14 py-2 mx-2 text-base md:text-xl mb-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 active:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={submitCode}
            >
              Run
            </button>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default CodeEditor;
