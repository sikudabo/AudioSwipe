import { ReactElement } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import NavSection from "../components/DashboardNavSection";
import { NavSectionProps } from '../components/DashboardNavSection';
import navConfig from "../components/configs/dashboardNavConfig";

type DataType = {
    data: {
        icon: ReactElement;
        path: string;
        title: string;
    }[];
};

const metaConfig: Meta<typeof NavSection> = {
    argTypes: {
        data: { defaultValue: [] }
    },
    component: NavSection,
    title: "Navigation Section",
}

const Template: StoryFn<typeof NavSection> = (args: NavSectionProps) => <NavSection data={args.data} />;

export default metaConfig;

export const NavSectionExample = Template.bind({});

NavSectionExample.args = {
    data: navConfig,
};