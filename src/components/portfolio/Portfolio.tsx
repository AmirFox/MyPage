import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import { info } from '../../info/Info';

export default function Portfolio() {
    return (
        <Box  component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
        justifyContent={'center'} minHeight={'100vh'}>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project : {image: string, live: string, source: string, title: string}, index: number) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};