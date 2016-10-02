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
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fill caps lineHeight={1} textColor="black">
              A Designer's Introduction to Oracle JET
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textFont="primary" textColor="black">
              Overview
            </Heading>
            <List textColor="white">
              <Appear><ListItem>What is Oracle JET?</ListItem></Appear>
              <Appear><ListItem>Features & Benefits</ListItem></Appear>
              <Appear><ListItem>JET's Modularity</ListItem></Appear>
              <Appear><ListItem>Using Oracle JET with Yeoman</ListItem></Appear>
              <Appear><ListItem>JET app with Oracle DoCS REST API</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} fill caps lineHeight={1} textColor="black">
              What is Oracle JET?
            </Heading>
            <List textColor="white">
              <Appear><ListItem>JavaScript Extension Toolkit</ListItem></Appear>
              <Appear><ListItem>NOT a framework or library</ListItem></Appear>
              <Appear><ListItem>Tried and True JS Libraries</ListItem></Appear>
              <Appear><ListItem>Pre-built UI Components</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Features and Benefits
            </Heading>
            <List textColor="white">
              <Appear><ListItem>Utilizes popular open source libraries</ListItem></Appear>
              <Appear><ListItem>Flexible!</ListItem></Appear>
              <Appear><ListItem>Future-proof</ListItem></Appear>
              <Appear><ListItem>Accessibility and Internationalization</ListItem></Appear>
              <Appear><ListItem>70 UI Components</ListItem></Appear>
              <Appear><ListItem>2-way data binding with Knockout</ListItem></Appear>
              <Appear><ListItem>Powerful routing system</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fill>Based on MVVM Design</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              JET is built on tried and tested JS libraries
            </Heading>
            <Layout fit>
                <Appear><Image display="flex" src={images.markdown.replace("/", "")}/></Appear>
                <Appear><Image src={images.markdown.replace("/", "")}/></Appear>
                <Appear><Image src={images.markdown.replace("/", "")}/></Appear>
                <Appear><Image src={images.markdown.replace("/", "")}/></Appear>
            </Layout>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Knockout
            </Heading>
            <List>
              <Appear><ListItem>2-way data binding: Model View View-Model</ListItem></Appear>
              <Appear><ListItem>Automatic UI refresh</ListItem></Appear>
              <Appear><ListItem>Straightforward, readable syntax</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              View Model
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/viewmodel.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="white">
            <Heading caps fit size={1} textColor="tertiary">
              The View
            </Heading>
            <CodePane
              lang="html"
              source={require("raw!../assets/view.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              RequireJS
            </Heading>
            <List>
              <Appear><ListItem>JavaScript file and module loader</ListItem></Appear>
              <Appear><ListItem>Loads only the files and modules needed</ListItem></Appear>
              <Appear><ListItem>As applications get larger, loading of resources gets complicated</ListItem></Appear>
              <Appear><ListItem>Improves speed an quality of code</ListItem></Appear>
              <Appear><ListItem>Essentially: loads your modules and files only when needed!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
              RequireJS Configuration
            </Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/requireconfig.example")}
              margin="20px auto"
            />
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="primary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="tertiary">
            Top-Level Require Block
          </Heading>
          <CodePane
            lang="js"
            source={require("raw!../assets/requireblock.example")}
            margin="20px auto"
          />
        <List textColor="tertiary">
          <Appear><ListItem>In main.js</ListItem></Appear>
          <Appear><ListItem>In viewModel files, require block becomes a define block</ListItem></Appear>
          <Appear><ListItem>Loads components needed to start application</ListItem></Appear>
        </List>
      </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
