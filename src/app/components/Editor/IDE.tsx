"use client"

import { useRef } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

const IDE = () => {
    const monacoRef = useRef(null);
    function handleEditorWillMount(monaco: any) {
        monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
    }
    function handleEditorDidMount(editor: any, monaco: any) {
        // here is another way to get monaco instance
        // you can also store it in `useRef` for further usage
        monacoRef.current = monaco;
    }
    const options: monacoEditor.editor.IStandaloneEditorConstructionOptions = {
        readOnly: false,
        minimap: { enabled: false },
        bracketPairColorization: {
            enabled: true,
            independentColorPoolPerBracketType: true,
        },
        acceptSuggestionOnCommitCharacter: true,
    };
    return (
        <Editor
            height="100%"
            defaultLanguage="javascript"
            language='javascript'
            theme='vs-light'
            saveViewState={false}
            keepCurrentModel={false}
            defaultValue="// some comment"
            beforeMount={handleEditorWillMount}
            onMount={handleEditorDidMount}
        />
    )
}

export default IDE