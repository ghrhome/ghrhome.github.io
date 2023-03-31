// pages/index.js

import React from 'react';
import {Typography, Paper, Grid} from '@mui/material';

import { Toolbox } from '../components/Toolbox';
import { SettingsPanel } from '../components/SettingPanel';
import { Topbar } from '../components/Topbar';

import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { Card, CardTop, CardBottom } from '../components/Card';
import { Text } from '../components/Text';

import {Editor, Frame, Element} from "@craftjs/core";

export default function App() {

    return (
        <div style={{margin: "0 auto", width: "800px"}}>
            <Typography variant="h5" align="center">A super simple page editor</Typography>
            <Editor resolver={{Card, Button, Text, Container, CardTop, CardBottom}}>
                <Topbar />
                <Grid container spacing={3} style={{paddingTop: "10px"}}>
                    <Grid item xs>
                        <Frame>
                             <Element is={Container} padding={5} background="#333"  canvas>

                             </Element>
                           {/* <Element is={Container} padding={5} background="#333" canvas  >
                                <div>
                                    <p>test</p>
                                </div>
                                <Card />
                                <Button size="small" variant="outlined">Click</Button>
                                <Text size="small" text="Hi world!" />
                                <Element is={Container} padding={5} background="#999" canvas >
                                    <Text size="small" text="It's me again!" />
                                </Element>
                            </Element>*/}
                        </Frame>
                    </Grid>
                    <Grid item xs={3} px={2}>
                        <Paper>
                            <Toolbox />
                            <SettingsPanel />
                        </Paper>
                    </Grid>
                </Grid>
            </Editor>

        </div>
    );
}
