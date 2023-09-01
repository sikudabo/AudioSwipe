import React from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { AudioSwipeButton, colors } from '../../components';
import PartnershipsPhoto from '../../audio-media/partnerships.jpeg';
import { deviceBreakPointsMaxWidth } from '../../utils/helpers';

const PartnershipsPageContainer = styled(Grid)`
    background-color: ${colors.white};
    height: 100%;
    
    p {
        color: ${colors.white};
    }

    .partnerships-section {
        padding-top: 50px;

        .partnerships-section-img-container {
            width: 50%;

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            img {
                height: 100%;
                width: 100%;
            }
        }

        .partnerships-section-text-container {
            background-color: ${colors.hotPink};
            padding-left: 20px;
            padding-right: 20px;
            width: 50%; 

            @media ${deviceBreakPointsMaxWidth.laptop} {
                width: 100%;
            }

            .partnerships-section-header-text {
                font-size: 32px;
                font-weight: 700;
            }

            .partnerships-section-body-text {
                font-size: 20px;
                font-weight: 500;
            }

            .btn-container {
                padding-bottom: 10px;
            }
        }
    }
`;

export default function PartnershipsPage() {
    const navigate = useNavigate();

    return (
        <PartnershipsPageContainer container>
            <Grid className="partnerships-section" columnSpacing={0} container>
                <Grid className="partnerships-section-text-container" md={6} sm={12} container>
                    <p className="partnerships-section-header-text">
                        Partner
                    </p>
                    <p className="partnerships-section-body-text">
                        We are interested in building partnerships with companies that 
                        support our mission. We can promise you that a partnership with 
                        AudioSwipe will add value to your company. Strategic partnerships 
                        can help your company grow along with ours. We are excited about building something
                        that is mutually beneficial for both you and us. Our budding platform can 
                        be a growth engine for your company. If you are interested in growing 
                        with us, please contact us on our contact page!
                    </p>
                    <div className="btn-container">
                        <AudioSwipeButton 
                            color="secondary"
                            onClick={() => navigate('contact')}
                            text="Contact"
                            variant="contained"
                        />
                    </div>
                </Grid>
                <Grid className="partnerships-section-img-container" md={6} sm={12}>
                    <img alt="Investors Photo" aria-label="Investors Photo" src={PartnershipsPhoto} />
                </Grid>
            </Grid>
        </PartnershipsPageContainer>
    );
}