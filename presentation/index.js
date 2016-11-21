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
            <List style={{marginLeft: 64}}>
              <ListItem>A developers goal: <b>help end users</b></ListItem>
              <ListItem>How can we improve products? Using <b>data</b>!</ListItem>
              <ListItem>Iterative feedback cycles build robust systems</ListItem>
              <ListItem><u>Requests data</u> is City of Surrey "product" data</ListItem>
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
          <Heading fit size={1} textColor="primary">
            The Requests System
          </Heading>
            <List>
              <ListItem>Citizens of Surrey, the user, make categorized requests</ListItem>
              <ListItem><b>60,000+ requests</b> so far in 2016, <b>>91% closed</b></ListItem>
              <ListItem>70,000 requests per year from 2013-2015</ListItem>
              <ListItem>Many requests, active system <b>=></b> inefficiencies??</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Relevant Questions
            </Heading>
            <List>
              <ListItem>What is the <b>average close time</b> for a request?</ListItem>
              <ListItem>Which agencies get the <b>most traffic</b>?</ListItem>
              <ListItem>Are there <b>duplicates</b> in the data? Frequency? Importance?</ListItem>
              <ListItem>How do users <b>interact</b> with the requests system?</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading size={1} textColor="primary">
              Relevant Answers
            </Heading>
            <List style={{marginLeft: 64}}>
              <ListItem>Average close time: <b>9 days</b></ListItem>
              <ListItem>70% of all issues since 2010: <b>Litter</b>, <b>Traffic</b>, <b>Trees</b></ListItem>
              <ListItem>Over <b>700</b> uncategorized requests in 2016 alone</ListItem>
              <ListItem>Some requests had up to <b>52 duplicates</b></ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading size={1} textColor="primary">Problems</Heading>
            <List>
              <ListItem>Inefficiencies caused by duplicates and uncategorized data</ListItem>
              <ListItem>Potential for transparency and community engagement</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading size={1} textColor="primary">Solutions</Heading>
            <br/>
            <Heading fit size={2}><u>Research Goal:</u> Improve efficacy of City of Surrey Request system</Heading>
            <List>
              <ListItem>Target duplicates for consolidation</ListItem>
              <ListItem>Cross validate requests with Twitter data</ListItem>
              <ListItem>Category suggestion algorithm for requests</ListItem>
              <ListItem>Frequently update expected response times on requests</ListItem>
            </List>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Classification
            </Heading>
            <RequestClassifier />
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} textColor="tertiary">
              Suggestions
            </Heading>
            <UserForm />
          </Slide>

          <Slide transition={["spin"]} bgColor="primary">
            <Heading fit size={1} textColor="tertiary">
              Consolidate Duplicates and Tweets
            </Heading>
              <CityDashboard />
          </Slide>

          <Slide bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Expected Time Updates
            </Heading>
            <List style={{marginLeft: 32}}>
              <ListItem>Calculate moving average over 5 day periods</ListItem>
              <ListItem>Weights fresh data more heavily</ListItem>
              <ListItem>Shows active involvement, enhance <b>user experience</b></ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading fit size={1} textColor="primary">
              Effects of Optimization
            </Heading>
            <List style={{marginLeft: 48}}>
              <ListItem>Automated re-routing: <b>> $20,000/year</b> (manual)</ListItem>
              <ListItem>Consolidation: <b>> $2,500/year/employee</b></ListItem>
              <ListItem>Community engagement: <b>priceless!</b></ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={1} textColor="primary">
              Conclusion
            </Heading>
            <List>
              <ListItem><b>Statistics</b> can enhance UX and optimize Requests system</ListItem>
              <ListItem><b>Tools</b> can improve information exchange between parties</ListItem>
              <ListItem>Utilizing user feedback <b>aligns goals</b> of producer and user</ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={1} textColor="primary">
              Technologies
            </Heading>
            <List style={{marginLeft: 96}}>
              <ListItem><u>Web hosting (slides, API):</u> Bluemix</ListItem>
              <ListItem><u>Analysis:</u> TextBlob, Scikit Learn (Python)</ListItem>
              <ListItem><u>Slides:</u> ReactJS (JavaScript)</ListItem>
            </List>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={1} textColor="#4f90ff">
              Acknowledgements
            </Heading>
            <List>
              <ListItem>BlueMix Team</ListItem>
              <ListItem>Allen Devine, Ranjita Ravi, Behdad Jamshidi</ListItem>
              <ListItem>Telus, IEEE, and City of Surrey</ListItem>
            </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
