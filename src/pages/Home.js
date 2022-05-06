import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Home = () => {
    return (
        <div className="App">
            <Container
                sx={{
                    marginY: '25'
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    marginTop={5}
                    marginBottom={3}
                >
                    Top Mumbai Tours
                </Typography>
                <Grid container spacing={2}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>

                <Typography
                    variant="h4"
                    component="h2"
                    marginTop={5}
                    marginBottom={3}
                >
                    Top Bengaluru Tours
                </Typography>
                <Grid container spacing={2}>
                    <TourCard />
                    <TourCard />
                    <TourCard />
                    <TourCard />
                </Grid>
            </Container>
        </div>
    );
}

export default Home;