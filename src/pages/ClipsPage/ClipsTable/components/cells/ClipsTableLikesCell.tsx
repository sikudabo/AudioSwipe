import React from 'react';
import styled from '@emotion/styled'
import { SongTableRowType } from '../../../typings/songTableRowType';

const ClipsTableLikesCellContainer = styled.div`
    .like-text {
        font-weight: 900;
    }
`;

export default function ClipsTableLikesCell({ row }: SongTableRowType) {
    const { likes } = row;

    return (
        <ClipsTableLikesCellContainer>
            <p className="like-text">
                {likes?.length}
            </p>
        </ClipsTableLikesCellContainer>
    );
}