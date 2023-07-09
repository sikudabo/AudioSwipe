import { Meta, StoryFn } from '@storybook/react';
import { AudioSwipeButton } from "../components";
import { AudioSwipeButtonProps } from "../components/AudioSwipeButton";

const meta: Meta<typeof AudioSwipeButton> = {
    component: AudioSwipeButton,
    title: 'AudioSwipeButton',
};

export default meta;

const Template: StoryFn<typeof AudioSwipeButton> = (args: AudioSwipeButtonProps) => <AudioSwipeButton {...args} />;

export const TestButton = Template.bind({});

TestButton.args = {
    color: "success",
    text: "This these are dynmaic args",
    variant: "contained",
};
