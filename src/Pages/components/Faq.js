import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
const Faq = () => {
  return (
    <>
      <div className="faq">
        <h1 className="main-heading">Frequently Asked Questions</h1>

        <div>
          <Accordion style={{ margin: "0 5em" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "black", fontWeight: "600" }}>
                What is Netflix?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "black" }}>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: "0 5em" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography style={{ color: "black", fontWeight: "600" }}>
                How much Netflix will charge?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "black" }}>
                <Typography style={{ color: "black" }}>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ margin: "0 5em" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ color: "black", fontWeight: "600" }}>
                Where can I watch?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ color: "black" }}>
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <h3 className="faq-tail">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <form action="">
          <input type="text" placeholder="Email address" />
          <Link to="/" className="started">
            Get Started
          </Link>
        </form>
      </div>
    </>
  );
};

export default Faq;
