import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { AudioSwipeButton, colors } from '../../components';
import InvestorsPhoto from '../../audio-media/investors.jpeg';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';

const InvestorsPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    
    p {
        color: ${colors.white};
    }

    .investors-section {
        padding-top: 50px;

        .investors-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .investors-section-text-container {
            background-color: ${colors.darkBlue};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .investors-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .investors-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }

            .btn-container {
                padding-bottom: 10px;
            }
        }
    }
`;

export default function InvestorsPage() {
    const navigate = useNavigate();

    return (
        <InvestorsPageContainer container>
            <Grid className="investors-section" columnSpacing={0} container>
                <Grid className="investors-section-text-container" md={6} sm={12} container>
                    <p className="investors-section-header-text">
                        Vision
                    </p>
                    <p className="investors-section-body-text">
                        We are excited for the prospect of gaining funding from investors 
                        in our pre-seed funding stage. We are seeking investors who believe 
                        in our mission, are honest, have good character, and are focused on 
                        getting a return on investment in an honest and positive way. The most 
                        important value we seek in investors is honesty and respect. We promise to always 
                        honor and respect you, and we expect the same in return so that we can build 
                        a mutually beneficial partnership that can help us all accomplish our goals. 
                        If you are interested in becoming a pre-seed investor and want to hear our pitch, 
                        contact us on our contact page!
                    </p>
                    <div className="btn-container">
                        <AudioSwipeButton 
                            color="primary"
                            onClick={() => navigate('/contact')}
                            text="Contact"
                            variant="contained"
                        />
                    </div>
                </Grid>
                <Grid className="investors-section-img-container" md={6} sm={12}>
                    <img alt="Investors Photo" aria-label="Investors Photo" src={InvestorsPhoto} />
                </Grid>
            </Grid>
        </InvestorsPageContainer>
    );
}