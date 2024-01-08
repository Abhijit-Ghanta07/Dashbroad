import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import { sidebarMenu } from "../../constants/constant";

const Sidebar = () => {
  return (
    <>
      <Container sx={{ bgcolor: "orange" }}>
        <Box sx={{ p: 3 }}>
          <Accordion sx={{ boxShadow: 0, borderRadius: 0 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Stack direction={"row"} gap={2}>
                <img src="" alt="profile-img" />
                <Box>
                  <Typography>Nik Patel</Typography>
                  <Typography>Admin</Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
          <Accordion>
            <AccordionSummary>This is link</AccordionSummary>
            <AccordionDetails>thsi summary</AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default Sidebar;
