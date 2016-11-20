// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import RequestClassifier from '../assets/request-classifier';
import UserForm from '../assets/user-form';
import CityDashboard from '../assets/city-dashboard';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  requests: require('../assets/requests-system.png'),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#4d8335"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading fit size={1} textColor="secondary">
              UBC Launch Pad Team 1
            </Heading>
            <Heading fit size={2} textColor="secondary">
              IEEE/TELUS Smart Cities Datathon
            </Heading>
            <Text lineHeight={5}>
              Eric Stroczynski, Jordan Schalm, Mohamed Ali, James Park
            </Text>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Motivations and Data
            </Heading>
            <List>
              <ListItem>As developers, we want to help end users</ListItem>
              <ListItem>We can improve products through data</ListItem>
              <ListItem>Requests data = City of Surrey "product" data</ListItem>
              <ListItem>Iterative feedback cycles build robust systems</ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              The Requests System
            </Heading>
            <Layout>
              <Image height={500} style={{marginTop: 16}} src={images.requests.replace("/", "")} />
            </Layout>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <List>
              <ListItem>Citizens of Surrey, the user, make categorized requests</ListItem>
              <ListItem>60,000+ requests made in 2016, 57,000 (>91%) closed</ListItem>
              <ListItem>70,000 requests per year from 2013-2015</ListItem>
              <ListItem>Many requests, active system -> inefficiencies??</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Relevant Questions
            </Heading>
            <List>
              <ListItem>What is the average close time for a request?</ListItem>
              <ListItem>Which agencies get the most traffic</ListItem>
              <ListItem>Are there duplicates in the data? Frequency? Importance?</ListItem>
              <ListItem>How do users know their requests have been heard?</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Some Answers
            </Heading>
            <List>
              <ListItem>Average close time: 9 days</ListItem>
              <ListItem>70% of all issues since 2010: Litter, Traffic, Trees</ListItem>
              <ListItem>Over 700 uncategorized requests in 2016 alone</ListItem>
              <ListItem>Some requests had up to 52 duplicates</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">Problems</Heading>
            <List>
              <ListItem>Inefficiencies caused by duplicates and uncategorized</ListItem>
              <ListItem>Transparency and Community Engagement</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={2} textColor="primary">Solutions</Heading>
            <List>
              <ListItem>Target duplicates for consolidation</ListItem>
              <ListItem>Cross validate requests with Twitter data</ListItem>
              <ListItem>Category suggestion algorithm for requests</ListItem>
              <ListItem>Update expected response times on requests in real time</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Consolidate Duplicates and Tweets
            </Heading>
              <CityDashboard />
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Classification
            </Heading>
            <RequestClassifier />
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Suggestions
            </Heading>
            <UserForm />
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Periodically Updated Expected Time
            </Heading>
            <List>
              <ListItem>Calculate moving average over 5 day periods</ListItem>
              <ListItem>Weights fresh data more heavily</ListItem>
              <ListItem>Shows active involvement with city</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Material Savings
            </Heading>
            <List>
              <ListItem>OTHER re-routing: > $20,000/year (clerk at minimum wage)</ListItem>
              <ListItem>Consolidation: > 1 hour/day (manual consolidation)</ListItem>
              <ListItem>Community engagement: priceless</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Technologies
            </Heading>
            <List>
              <ListItem>Web hosting: Bluemix</ListItem>
              <ListItem>Analysis: TextBlob, Scikit Learn (Python)</ListItem>
              <ListItem>Slides: ReactJS (JavaScript)</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Acknowledgements
            </Heading>
            <List>
              <ListItem>BlueMix Team</ListItem>
              <ListItem>Alan Devine, Ranjita Ravi, Behdad Jamshidi</ListItem>
              <ListItem>Telus, IEEE, and City of Surrey</ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
