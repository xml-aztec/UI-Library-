import React, { useState } from "react";
import Button from "./components/Buttons";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";

const App = () => {
  const [inputValue, setInputValue] = useState(""); 

  const handleInputChange = (newValue) => {
    setInputValue(newValue); 
  };
  return (
    

    <div className="parent-container">
      <div className="main-container">

        <div className="container-1">

          <div className="first-block">
            <Button size="lg" variant="primary">
              lg, primary
            </Button>
            <Button size="md" variant="primary">
              md, primary
            </Button>
            <Button size="sm" variant="primary">
              sm, primary
            </Button>
          </div>

          <div className="second-block">
            <Button size="lg" variant="bordered">
              lg, bordered
            </Button>
            <Button size="md" variant="bordered">
              md, bordered
            </Button>
            <Button size="sm" variant="bordered">
              sm, bordered
            </Button>
          </div>

        </div>

        <div className="container-2">
          <Input
          label="Name"
          type="text"
          placeholder="Enter your name"
          value={inputValue}
          onChange={handleInputChange}
        />
        </div>    

        <div className="container-3">
          <Typography textSize="sm">
            SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>

          <Typography textSize="md">
            MD. Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </Typography>

          <Typography textSize="lg">
            LG. Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </div>

        <div className="container-4">
          <Heading level={1} className="primary">
            H1. Heading
          </Heading>
          <Heading level={2} className="secondary">
            H2. Heading
          </Heading>
          <Heading level={3}>
            H3. Heading
          </Heading>
          <Heading level={4}>
            H4. Heading
          </Heading>
          <Heading level={5}>
            H5. Heading
          </Heading>
          <Heading level={6}>
            H6. Heading
          </Heading>
        </div>

        <div className="container-5">

          <Tooltip text="This is a top tooltip" position="top">
            <p className="p-tooltip">Tooltip Top</p>
          </Tooltip>
          <Tooltip text="This is a bottom tooltip" position="bottom">
            <p className="p-tooltip">Tooltip Top</p>
          </Tooltip>
          <Tooltip text="This is a left tooltip" position="left">
            <p className="p-tooltip">Tooltip Top</p>
          </Tooltip>
          <Tooltip text="This is a right tooltip" position="right">
            <p className="p-tooltip">Tooltip Top</p>  
          </Tooltip>

        </div>

        <div className="container-6">

          <Accordion title="Accordion">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat
            eros ut dolor venenatis, sit amet egestas enim bibendum.
          </Accordion>

          <Accordion title="Accordion Expanded" defaultOpen>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Accordion>

        </div>

      </div>

    </div>
  );
};

export default App;
