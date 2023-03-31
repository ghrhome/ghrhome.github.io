import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import { Box, ThemeProvider,styled } from '@mui/system';
import {SimInput} from '../components/SimInput'

const StyledButton = styled(ButtonUnstyled)(
    ({ theme }) => `
  color: #321;
  font-size: 16px;
  vertical-alignment: sub;
  background-color:#ddd;
  :hover{
     color: #fff;
  }
`,
);

export default function page() {

    const buttons = [
        <Button key="one">One</Button>,
        <Button key="two">Two</Button>,
        <Button key="three">Three</Button>,
    ];

    return (
        <div>
            <SimInput/>
            <Button variant="contained">Hello World</Button>
            <ButtonUnstyled>Hello World</ButtonUnstyled>
            <BadgeUnstyled/>
            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: '#007FFF',
                            dark: '#0059B2',
                        },
                    },
                }}
            >
                <StyledButton sx={{height:100, width:200}}>Hello World</StyledButton>
                <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                            m:3 ,
                        },
                    }}
                >
                    <div>test</div>
                    <div>test</div>
                </Box>

            </ThemeProvider>

        </div>
    );
}
