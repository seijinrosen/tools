import { ComponentMeta, ComponentStory } from "@storybook/react";

import HelloWorld from ".";

export default {
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = () => <HelloWorld />;

export const Primary = Template.bind({});
