import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AccessTime } from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
})

const TourCard = () => {
    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <img src="https://media.istockphoto.com/photos/snowball-picture-id183432102?k=20&m=183432102&s=612x612&w=0&h=LW2aaMakVHqnlHo6Kt4oA90tE7niUoWsKV4eyBy_kNs="
                    alt=""
                    className="img" />
                <Box paddingX={1}>
                    <Typography component="h2" variant="subtitle1">
                        Immerse into the Falls
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                            5 hours
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}
                        marginTop={3}
                    >
                        <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                        <Typography marginLeft={0.5} variant="body2" component="p">
                            4.5
                        </Typography>
                        <Typography marginLeft={0.5} variant="body3" component="p">
                            (655 reviews)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginTop={0}>
                            From C $147
                        </Typography>
                    </Box>
                </Box>
            </Paper>
            </ThemeProvider>
        </Grid>
    );
}

export default TourCard;