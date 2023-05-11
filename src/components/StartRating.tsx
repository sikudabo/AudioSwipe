import React, { useState } from 'react';
import styled from '@emotion/styled';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)`
    & .MuiRating-iconEmpty .MuiSvgIcon-root {
        color: #9e9e9e;
    }
`;

const customIcons: { [key: string]: {
        icon: React.ReactElement;
        label: string;
    }

} = {
    '1': {
        icon: <SentimentVeryDissatisfiedIcon color="error" />,
        label: 'Very dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="secondary" />,
        label: 'Satisfeid',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" />,
        label: 'Very satisfied',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

export default function StartRating() {
    const [rating, setRating] = useState(0);

    return(
        <>
            <Typography component="legend">
                Rate your experience with BlockVotez 
            </Typography>
            <StyledRating 
                defaultValue={2}
                IconContainerComponent={IconContainer}
                name="satisfactionSurvey"
                onChange={(event, newVal) => setRating(newVal as number)}
                value={rating}
                highlightSelectedOnly
            />
        </>
    );
}