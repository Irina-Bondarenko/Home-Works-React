import React from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { MarkdownEditor } from "./MarkdwonEditor";

class MarkdownEditorRender extends React.Component {
    render() {
        return <MarkdownEditor onContentChange={console.log} />;
    }
}

export { MarkdownEditorRender };