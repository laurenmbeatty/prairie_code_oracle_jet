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
