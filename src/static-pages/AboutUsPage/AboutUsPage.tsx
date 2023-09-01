import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../components';
import JesusPhoto from '../../audio-media/jesus-1.jpeg';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';

const AboutUsPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    
    p {
        color: ${colors.white};
    }

    .get-noticed-section {
        background-color: ${colors.hotPink};

        .get-noticed-text-section {
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .get-noticed-header-text {
                padding-top: 50px;
                font-size: 32px;
                font-weight: 700;
            }

            .get-noticed-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .get-noticed-image-section {
            padding-top: 10px;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .data-an-section {

        .data-an-text-container {
            background-color: ${colors.darkBlue};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .data-an-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .data-an-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .data-an-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }
            
            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .mission-section {
        padding-top: 50px;

        .mission-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .mission-section-text-container {
            background-color: ${colors.primary};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .mission-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .mission-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }
    }

    .dashboard-section {

        .dashboard-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .dashboard-section-text-container {
            background-color: ${colors.white};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptopL} {
                width: 100%;
            }

            p {
                color: ${colors.black};
            }

            .dashboard-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .dashboard-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }
        }
    }
`;

export default function AboutUsPage() {
    const navigate = useNavigate();

    return (
        <AboutUsPageContainer container>
            <Grid className="mission-section" columnSpacing={0} container>
                <Grid className="mission-section-text-container" md={6} sm={12} container>
                    <p className="mission-section-header-text">
                        Christ Focused Mission
                    </p>
                    <p className="mission-section-body-text">
                        Our mission is to spread the love of Jesus and the word of God through the artists 
                        on our platform. We want to give fans, musicians, podcasters and artists a platform 
                        to learn, worship and serve God. We are an accepting platform and also want content 
                        that is non-religious; but truthful, honest, informative, entertaining and clean. 
                        We believe that starting a clean platform that allows people to express how they feel and what 
                        they believe benefits all of us, shares knowledge and helps us grow. We believe in the value 
                        of free speech and free expression. We accept fans and artists from all walks of life
                        and believe in diversity, equity and inclusion with everything we do; just like Jesus wants. 
                    </p>
                </Grid>
                <Grid className="mission-section-img-container" md={6} sm={12}>
                    <img alt="Magnifying Glass" aria-label="Magnifying Glass" src={JesusPhoto} />
                </Grid>
            </Grid>
        </AboutUsPageContainer>
    );
}