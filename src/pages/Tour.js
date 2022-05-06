import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import Accordian from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import Modal from '../components/Modal';

const Tour = () => {
    return (
        <Container
            sx={{
                width: 900
            }}
        >
            <Typography variant="h3" component="h1" marginTop={3}>
                Explore the world in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img src="https://media.istockphoto.com/photos/taj-mahal-hotel-and-gateway-of-india-picture-id539018660?k=20&m=539018660&s=612x612&w=0&h=bkeZQaQ1xyHZxrOM7Wwujj7gcKzVMt7FlKiILC3QyhI="
                    height={325}
                    alt=""
                />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>
                    some random textsome random textsome random textsome random
                    textsome random textsome random textsome random text
                    some random textsome random textsome random textsome random
                    textsome random textsome random textsome random text
                    some random textsome random textsome random textsome random
                    textsome random textsome random textsome random text
                    some random textsome random textsome random textsome random
                    textsome random textsome random textsome random text
                    some random textsome random textsome random textsome
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
                    Frequently Asked Questions
                </Typography>
                <Accordian />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <Modal />
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default Tour;