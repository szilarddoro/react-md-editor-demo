import Box, { BoxProps } from '@mui/material/Box';
import MDEditor, { ContextStore, MDEditorProps } from '@uiw/react-md-editor';
import { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';

export type MarkdownEditorProps = MDEditorProps & {
  /**
   * Label for the input field.
   */
  label?: string;
  /**
   * Name of the input field.
   */
  name?: string;
  /**
   * Props passed to the wrapper element.
   */
  wrapperProps?: BoxProps;
};

export default forwardRef(function MarkdownEditor(
  {
    label,
    id,
    name,
    textareaProps,
    wrapperProps,
    ...props
  }: MarkdownEditorProps,
  ref: ForwardedRef<ContextStore>
) {
  const { sx: wrapperSx, ...restWrapperProps } = wrapperProps || {};
  // assume that here are a lot of different stylings via MUI in a traditional
  // environment
  return (
    <Box sx={{ display: `grid`, gap: 2, ...wrapperSx }} {...restWrapperProps}>
      {<label htmlFor={id}>{label}</label>}

      <MDEditor
        ref={ref}
        renderTextarea={(textareaProps, { dispatch, onChange }) => {
          const typeSafeProps =
            textareaProps as TextareaHTMLAttributes<HTMLTextAreaElement>;

          return (
            <textarea
              {...typeSafeProps}
              id={id}
              name={name}
              onChange={(event) => {
                if (dispatch) {
                  dispatch({ markdown: event.target.value });
                }

                if (onChange) {
                  onChange(event);
                }
              }}
            />
          );
        }}
        {...props}
      />
    </Box>
  );
});
