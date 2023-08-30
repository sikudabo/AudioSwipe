import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { colors } from './colors';

const AudioSwipeBottomNavigationContainer = styled.div`
    align-items: center;
    background-color: ${colors.white};
    display: flex;
    flex-direction: row;

    .top-header-container {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-bottom: 30px;
        text-align: center;
        width: 100vw;

        .top-header {
            color: ${colors.secondary};
            font-size: 40px;
            font-weight: 900;
        }
    }

    .categories-section {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
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
        
                    </div>
                </AudioSwipeBottomNavigationContainer>
            }
        </>
    );
}