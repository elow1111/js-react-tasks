import React from 'react';
import Editor from '@toast-ui/editor';

// BEGIN (write your solution here)

class MarkdownEditor extends React.Component {
  componentDidMount() {
    const { onContentChange } = this.props;

    this.editor = new Editor({
      el: this.editorRef,
      hideModeSwitch: true,
    });

    this.editor.addHook('change', () => {
      const content = this.editor.getMarkdown();
      onContentChange(content); 
    });
  }

  componentWillUnmount() {

    this.editor.destroy();
  }

  render() {
    return (
      <div ref={(el) => (this.editorRef = el)} />
    );
  }
}
export default MarkdownEditor;
// END
