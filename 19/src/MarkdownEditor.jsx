import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)
export default class MarkdownEditor extends React.Component
{
    constructor(props)
    {
        super(props)
        this.MdRef = React.createRef()
    }
    componentDidMount()
    {
        const {onContentChange} = this.props
        const editor = new Editor({
            el: this.MdRef.current,
            hideModeSwitch: true,
          });

          editor.addHook("change", () => {
            const content = editor.getMarkdown();
            onContentChange(content)
          });
    }
    render()
    {
        const {onContentChange} = this.props
        return<div ref={this.MdRef}></div>
    }
}
// END
