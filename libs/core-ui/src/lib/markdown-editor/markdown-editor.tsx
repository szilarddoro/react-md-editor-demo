import MDEditor, { ContextStore, MDEditorProps } from '@uiw/react-md-editor';
import { ForwardedRef, forwardRef } from 'react';

export type MarkdownEditorProps = MDEditorProps & {
  /**
   * Label for the input field.
   */
  label?: string;
};

export default forwardRef(function MarkdownEditor(
  { label, textareaProps, ...props }: MarkdownEditorProps,
  ref: ForwardedRef<ContextStore>
) {
  // assume that here are a lot of different stylings via MUI in a traditional
  // environment
  return (
    <div style={{ display: `grid`, gap: 8 }}>
      {<label htmlFor={props.id}>{label}</label>}

      <MDEditor
        ref={ref}
        textareaProps={{ id: props.id, ...textareaProps }}
        {...props}
      />
    </div>
  );
});
