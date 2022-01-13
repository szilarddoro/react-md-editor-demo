import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import MarkdownEditor from './markdown-editor';

export default {
  title: `Markdown Editor`,
  component: MarkdownEditor,
} as ComponentMeta<typeof MarkdownEditor>;

const Template: ComponentStory<typeof MarkdownEditor> = (args) => {
  const [value, setValue] = useState<string | undefined>(`# Hello Storybook!`);

  return <MarkdownEditor value={value} onChange={setValue} {...args} />;
};

export const Default = Template.bind({});

export const Label = Template.bind({});
Label.args = {
  id: `markdown-editor`,
  label: `Input label`,
};
