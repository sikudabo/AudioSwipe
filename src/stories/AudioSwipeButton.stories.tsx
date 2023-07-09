import { ReactNode } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AudioSwipeButton, MusicPlayer } from "../components";
import { AudioSwipeButtonProps } from "../components/AudioSwipeButton";

type MetaContainerProps = {
    numberOfChildren: number;
};

const metaContainer: Meta<MetaContainerProps> = {
    argTypes: {
        numberOfChildren: { defaultValue: 3, type: "number" },
    },
    component: RenderDivs,
    title: "MultiplePlayers",
};

const meta: Meta<typeof AudioSwipeButton> = {
    argTypes: {
        "onClick": { action: "onClick" },
    },
    component: AudioSwipeButton,
    title: 'AudioSwipeButton',
};

export default metaContainer;

function RenderDivs({ numberOfChildren }: MetaContainerProps) {
    return (
        <div>
            {[...Array(numberOfChildren).keys()].map((n: number) => (
                <MusicPlayer />
            ))}
        </div>
    );
}

const Template: StoryFn<typeof RenderDivs> = ({ numberOfChildren }: MetaContainerProps) => {
    return <RenderDivs numberOfChildren={numberOfChildren} />;
}

export const Playas = Template.bind({});

Playas.args = {
    numberOfChildren: 7,
};
