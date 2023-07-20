import React from 'react';
import styled from '@emotion/styled'
import { SongTableRowType } from '../../../typings/songTableRowType';

const ClipsTableDisLikesCellContainer = styled.div`
    .like-text {
        font-weight: 900;
    }
`;

export default function ClipsTableLikesCell({ row }: SongTableRowType) {
    const { disLikes } = row;
    const disLikesNum = typeof disLikes !== 'undefined' ? disLikes.length : 0;

    return (
        <ClipsTableDisLikesCellContainer>
            <p className="like-text">
                {disLikesNum}
            </p>
        </ClipsTableDisLikesCellContainer>
    );
}