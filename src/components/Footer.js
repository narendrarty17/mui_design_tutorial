import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material";
import { FaGift, FaBriefcase } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiMastercard, SiAmericanexpress } from "react-icons/si";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "footer"
                    },
                    style: {
                        fontSize: 13
                    }
                },
                {
                    props: {
                        variant: "icons"
                    },
                    style: {
                        fontSize: 15
                    }
                }
            ]
        }
    }
})

const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    textAlign: "left",
                    backgroundColor: "black",
                    color: "white",
                }}
            >
                <Grid container columnSpacing={1} sx={{ px: 6, py: 6 }}>
                    <Grid item xs={1.5}>
                        <Grid item container direction="column" rowSpacing={0.5}>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Contact Us
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    About Us
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Careers
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    ApnaCart Stories
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Grid item container direction="column" rowSpacing={0.5}>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Payments
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Shipping
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Cancellation & Returns
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Grid item container direction="column" rowSpacing={0.5}>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Return Policy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Terms Of use
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Security
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Privacy
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5}>
                        <Grid item container direction="column" rowSpacing={0.5}>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Facebook
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    Twitter
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="footer" display="block" gutterBottom>
                                    YouTube
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: "left" }}>
                        <Typography variant="footer" gutterBottom>
                            ApnaCart Internet Private Limited,
                            <br />
                            Buildings Alyssa, Begonai &
                            <br />
                            Clove Embassy Tech Village,
                            <br />
                            Outer Ring Road, Devarabeesanahalli Village,
                            <br />
                            Bengaluru, 560103,
                            <br />
                            Karnataka, India
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{ textAlign: "left" }}>
                        <Typography variant="footer" gutterBottom>
                            ApnaCart Internet Private Limited,
                            <br />
                            Buildings Alyssa, Begonai &
                            <br />
                            Clove Embassy Tech Village,
                            <br />
                            Outer Ring Road, Devarabeesanahalli Village,
                            <br />
                            Bengaluru, 560103,
                            <br />
                            Karnataka, India
                            <br />
                            CIN: U51119KA2012PTC066107
                            <br />
                            Telephone: 1801 202 9898
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={1} sx={{ py: 6 }}>
                    <Grid item xs={8} sx={{ textAlign: "left" }}>
                        <FaBriefcase style={{ verticalAlign: "center", fontSize: "16" }} />
                        &nbsp;&nbsp;
                        <Typography variant="icons">
                            Become a seller
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <MdStars style={{ verticalAlign: "center", fontSize: "16" }} />
                        &nbsp;&nbsp;
                        <Typography variant="icons">
                            Advertise
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <FaGift style={{ verticalAlign: "center", fontSize: "16" }} />
                        &nbsp;&nbsp;
                        <Typography variant="icons">
                            Gift Card
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <BiHelpCircle style={{ verticalAlign: "center", fontSize: "16" }} />
                        &nbsp;&nbsp;
                        <Typography variant="icons">
                            Help Center
                        </Typography>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &copy; 2007-2022 ApnaCart.com
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: "right" }}>
                        <RiVisaFill style={{ verticalAlign: "bottom", paddingLeft: "1", fontSize: "28" }} />
                        <FaCcMastercard style={{ verticalAlign: "bottom", paddingLeft: "1", fontSize: "28" }} />
                        <SiMastercard style={{ verticalAlign: "bottom", paddingLeft: "1", fontSize: "28" }} />
                        <SiAmericanexpress style={{ verticalAlign: "bottom", paddingLeft: "1", fontSize: "28" }} />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default Footer;