import React from "react";
import { Editor } from "@toast-ui/editor";

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.refElem = React.createRef();
    }

    componentDidMount() {
        const editor = new Editor({
            el: this.refElem.current,
            hideModeSwitch: true,
        });

        editor.addHook("change", () => {
            const content = editor.getMarkdown();
            this.props.onContentChange(content);
        });
    }

    render() {
        return <div id="editor" ref={this.refElem} />;
    }
}

export { MarkdownEditor };