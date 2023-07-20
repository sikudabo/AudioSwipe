import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import { SongTableRowType } from '../../../typings/songTableRowType';

const ClipsTableNameCellContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;

    .avatar-container {

        .avatar {
            height: 35px;
            width: 35px;
        }
    }

    .name-container {
        font-weight: 900;
        margin-left: 20px;    
    }
`;

export default function ClipsTableNameCell({ row }: SongTableRowType) {
    const { albumCover, name } = row;

    return (
        <ClipsTableNameCellContainer>
           <div className="avatar-container">
                <Avatar 
                    alt={`Album Cover for the clip ${name}`}
                    className="avatar"
                    src={`${process.env.REACT_APP_BASE_URI}api/get-photo/${albumCover}`}
                />
           </div>
            <div className="name-container">
                <p>
                    {name}
                </p>
            </div>
        </ClipsTableNameCellContainer>
    );
}