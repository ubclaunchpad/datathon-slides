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
            <Markdown>
              {`
Eric Stroczynski, Jordan Schalm, Mohamed Ali, James Park
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Motivations and Data
            </Heading>

            <Markdown>
              {`
* As developers, we want to help end users
* How can we improve our products?
  * Through **data**!
* Requests data == City of Surrey "product" data
* Iterative _feedback/improvement_ cycles build robust systems
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              The Requests System
            </Heading>

            <Markdown>
              {`
* Citizens of Surrey, the user, make categorized requests
* 60,000+ requests made in 2016, 57,000 (>91%) closed
  * 70,000 requests per year from 2013-2015
* Many requests, active system -> inefficiencies??
  * Time and resource bottlenecks
  * Low end-user transparency
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Pertinent Questions
            </Heading>

            <Markdown>
              {`
1. What is the **average close time** for a request
2. Which agencies get the most **request traffic**
  * Which agencies take the longest to close issues
3. Are there **duplicates** and null values in the data
  * How frequently are they generated
  * Are they important to redirect appropriately
4. How do users know their requests have been heard
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Some Answers
            </Heading>

            <Markdown>
              {`
1. Average close time: **9 days**
  * All but one agency within 1 std dev of average
2. 70% of all issues: **garbage, roads/traffic related, trees**
  * Reflects distribution over all years since 2010
3. **700 "OTHER" requests** in 2016 alone
4. Some requests had up to **52 duplicates**
  * Semantically and geospatially grouped
              `}
            </Markdown>
          </Slide>

          <Slide transition={["spin"]} bgColor="tertiary">
            <Heading fit size={4} textColor="primary">
              Hypotheses
            </Heading>

            <Markdown>
              {`
Problems:
1. Inefficiencies caused by duplicates and OTHER's
2. Transparency and community engagement

Solutions:
1. **Target duplicates** for consolidation
2. Cross-validate requests with **Twitter data**
3. **Category suggestion algorithm** for requests, OTHER's
4. Update **expected response** times on requests in real time
              `}
            </Markdown>
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
            <Markdown>
            {`
* Calculate **exponential moving average** over 5 day periods
* Weighs fresh data more heavily
* Creates transparency for user
  * Shows **active involvement** with requests by the City
            `}
            </Markdown>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Material Savings
            </Heading>
            <Markdown>
            {`
* OTHER re-routing: > **$20,000/year** (clerk at minimum wage)
* Consolidation: > **1 hour/day** (manual consolidation)
* Community engagement: **priceless**.
            `}
            </Markdown>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Technologies
            </Heading>
            <Markdown>
            {`
* Web hosting: BlueMix
* Analysis: TextBlob, Scikit Learn (Python)
* Slides: ReactJS (JavaScript)
            `}
            </Markdown>
          </Slide>

          <Slide bgColor="primary">
            <Heading fit size={4} textColor="tertiary">
              Acknowledgements
            </Heading>
            <Markdown>
            {`
BlueMix Team
Alan Devine
Telus
IEEE

_**Thank you!**_
            `}
            </Markdown>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Spectacle
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
