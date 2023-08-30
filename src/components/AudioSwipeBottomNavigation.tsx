import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { colors } from './colors';

const AudioSwipeBottomNavigationContainer = styled.div`
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;

    p {
        color: ${colors.secondary};
    }

    .top-header-container {
        align-items: center;
        display: flex;
        justify-content: center;;
        margin-bottom: -20px;
        text-align: center;
        width: 100vw;

        .top-header {
            color: ${colors.secondary};
            font-size: 40px;
            font-weight: 900;
        }
    }

    .categories-section {
        align-items: center;
        display: flex;
        flex-direction: row;
        padding-left: 30px;
        padding-right: 30px;
        width: 100vw;

        .site-link {
            cursor: pointer;
        }

        .users-section {
            .users-section-header-container {
                .users-section-header-text {
                    font-size: 30px;
                    font-weight: 700;
                }
            }
        }

        .company-section {
            align-self: flex-end;
            margin-left: auto;
            padding-left: 20px;

            .company-section-header-container {
                .company-section-header-text {
                    font-size: 30px;
                    font-weight: 700;
                }
            }
        }
    }
`;

export default function AudioSwipeBottomNavigation() {
    const { pathname } = useLocation();
    const paths = [
        "/login/artist",
        "/signup/artist",
    ];

    const shouldDisplay = useMemo(() => {
        return !paths.includes(pathname) && !pathname.includes('dashboard');
    }, [pathname]);

    return (
        <>
            {shouldDisplay &&
                <AudioSwipeBottomNavigationContainer>
                    <div className="top-header-container">
                        <p className="top-header">
                            Site Links
                        </p>
                    </div>
                    <div className="categories-section">
                        <div className="users-section">
                            <div className="users-section-header-container">
                                <p className="users-section-header-text">
                                    Users 
                                </p>
                            </div>
                            <div className="links-container">
                                <p className="site-link">
                                    Artist Sign Up 
                                </p>
                                <p className="site-link">
                                    Artist Login 
                                </p>
                                <p className="site-link">
                                    Get Discovered 
                                </p>
                                <p className="site-link">
                                    Listener Sign Up
                                </p>
                                <p className="site-link">
                                    Listener Login 
                                </p>
                                <p className="site-link">
                                    Discover 
                                </p>
                            </div>
                        </div>
                        <div className="company-section">
                            <div className="company-section-header-container">
                                <p className="company-section-header-text">
                                    Company
                                </p>
                            </div>
                            <div className="links-container">
                                <p className="site-link">
                                    About Us 
                                </p>
                                <p className="site-link">
                                    Investors
                                </p>
                                <p className="site-link">
                                    Partnerships
                                </p>
                                <p className="site-link">
                                    Blog 
                                </p>
                                <p className="site-link">
                                    Press Releases 
                                </p>
                                <p className="site-link">
                                    Contact 
                                </p>
                            </div>
                        </div>
                    </div>
                </AudioSwipeBottomNavigationContainer>
            }
        </>
    );
}