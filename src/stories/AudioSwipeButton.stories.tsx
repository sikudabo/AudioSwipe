import { colors, AudioSwipeButton } from "../components";

const audioSwipeButtonObj = {
    component: AudioSwipeButton,
    title: 'AudioSwipeButton',
};

export default audioSwipeButtonObj;

export const TestButton = () => <AudioSwipeButton color="primary" onClick={() => console.log('Pressed')} text="Press me" variant="contained" />;