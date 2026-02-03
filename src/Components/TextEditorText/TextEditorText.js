import React from 'react';
import { Editor, EditorState, convertFromRaw } from "draft-js";

const TextEditorText = ({ data }) => {
  let editorState;

  try {
    const contentState = convertFromRaw(data);
    editorState = EditorState.createWithContent(contentState);
  } catch (e) {
    console.error("Content parsing error:", e);
    return null;
  }

  return (
    <div className="data-container" style={{ fontFamily: 'Nimbus-Regular', lineHeight: '160%' }}>
      <Editor editorState={editorState} readOnly={true} />
    </div>
  );
}

export default TextEditorText;