import { Meta, StoryFn } from '@storybook/react';
import { AudioSwipeButton } from "../components";
import { AudioSwipeButtonProps } from "../components/AudioSwipeButton";

const meta: Meta<typeof AudioSwipeButton> = {
    argTypes: {
        "onClick": { action: "onClick" },
    },
    component: AudioSwipeButton,
    title: 'AudioSwipeButton',
};

export default meta;

const Template: StoryFn<typeof AudioSwipeButton> = (args: AudioSwipeButtonProps) => <AudioSwipeButton {...args} />;

export const  ContainedButton = Template.bind({});
export const OutlinedButton = Template.bind({});
export const TextButton = Template.bind({});

ContainedButton.args = {
    color: "success",
    onClick: () => console.log('Click me'),
    size: 'small',
    text: "This these are dynmaic args",
    variant: "contained",
};

OutlinedButton.args = {
    color: "success",
    size: "large",
    text: "Outlined",
    variant: "outlined",
};

TextButton.args = {
    color: "error",
    size: "medium",
    text: "Text",
    variant: "text",
};
