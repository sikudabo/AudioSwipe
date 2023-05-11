import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: 'auto',
    marginTop: 20,
    maxWidth: 400,
    padding: 10,
}));

export default function GridExample() {
    const message = `Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support. `;
    return (
        <>
            <StyledPaper elevation={3}>
                <Grid columns={12} spacing={2} container>
                    <Grid>
                        <Avatar>
                            W
                        </Avatar>
                    </Grid>  
                    <Grid xs>
                        <Typography noWrap>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
            <StyledPaper elevation={3}>
                <Grid spacing={2} wrap="nowrap" container>
                    <Grid>
                        <Avatar>
                            W
                        </Avatar>
                    </Grid>
                    <Grid xs>
                        <Typography noWrap>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
            <StyledPaper elevation={3}>
                <Grid spacing={2} container wrap="nowrap">
                    <Grid>
                        <Avatar>
                            W
                        </Avatar>
                    </Grid>
                    <Grid xs>
                        <Typography>
                            {message}
                        </Typography>
                    </Grid>
                </Grid>
            </StyledPaper>
        </>
    );
}