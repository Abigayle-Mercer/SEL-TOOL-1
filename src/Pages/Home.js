import React, { Component } from "react";
import "../App.css";
import Prompts from "./Prompts";
import Wheel from "./Wheel";
import Banner from "../Components/Banner/Banner.js";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

export default class Home extends Component {
  state = {
    categories: [
    {title: 'RESPONSIBLE DECISION MAKING', _id: '0', surveyId: '66', y: 32},
    {title: 'RELATIONSHIP SKILLS', _id: '1', surveyId: '66', y: 32},
    {title: 'SOCIAL AWARENESS', _id: '2', surveyId: '66', y: 32},
    {title: 'SELF-MANAGEMENT', _id: '3', surveyId: '66', y: 32},
    {title: 'SELF-AWARENESS', _id: '4', surveyId: '66', y: 32}
    ],
    prompts: [
      {text: 'I take time for self reflection and group reflection on progress toward goals and the process used.', title: "RESPONSIBLE DECISION MAKING", categoryId: '0', fill: '#00A9B5', transform: '0.01', y: 1, _id: 1},
      {text: 'I consider how my choices will be viewed through the lens of the young people I serve and the community around them.', title: "", categoryId: '0', fill: '#00A9B5', transform: '0.01', y: 1, _id: 2},
      {text: "I find practical and respectful ways to overcome difficulty, even when it comes to making decisions that may not be popular.", title: "", categoryId: '0', fill: '#00A9B5', transform: '0.01', y: 1, _id: 3},
      {text: "I involve others who are impacted to explore a problem collaboratively before choosing a solution or launching a new project.", title: "", categoryId: '0', fill: '#00A9B5', transform: '0.01', y: 1, _id: 4},

      {text: 'I can work through my discomfort when dealing with conflict, listen to feelings from all parties, and help them understand different perspectives.', title: "RELATIONSHIP SKILLS", categoryId: '1', fill: '#357AFF', transform: '0.01', y: 1, _id: 5},
      {text: 'I openly admit my mistakes to myself and others and work to make things right.', title: "", categoryId: '1', fill: '#357AFF', transform: '0.01', y: 1, _id: 6},
      {text: "When I am upset with someone, I talk to them about how I feel and listen to their perspective.", title: "", categoryId: '1', fill: '#357AFF', transform: '0.01', y: 1, _id: 7},
      {text: "I stay focused when listening to others and carefully consider their meaning.", title: "", categoryId: '1', fill: '#357AFF', transform: '0.01', y: 1, _id: 8},

      {text: 'I learn from those who have different opinions than me.', title: "SOCIAL AWARENESS", categoryId: '2', fill: '#9245FF', transform: '0.01', y: 1, _id: 9},
      {text: 'I show care for others when I see that they have been harmed in some way.', title: "", categoryId: '2', fill: '#9245FF', transform: '0.01', y: 1, _id: 10},
      {text: "I pay attention to the feelings of others and recognize how my words and behavior impact them.", title: "", categoryId: '2', fill: '#9245FF', transform: '0.01', y: 1, _id: 11},
      {text: "I can grasp a person's perspective and feelings from both verbal and nonverbal cues.", title: "", categoryId: '2', fill: '#9245FF', transform: '0.01', y: 1, _id: 12},

      {text: 'I balance my work life with personal renewal time.', title: "SELF-MANAGEMENT", categoryId: '3', fill: '#FF5C00', transform: '0.01', y: 1, _id: 13},
      {text: 'I set measurable, challenging, and attainable goals and have clear steps in place to reach them.', title: "", categoryId: '3', fill: '#FF5C00', transform: '0.01', y: 1, _id: 14},
      {text: "I can calm myself when I feel stressed or nervous.", title: "", categoryId: '3', fill: '#FF5C00', transform: '0.01', y: 1, _id: 15},
      {text: "I consistently find ways to manage strong emotions in ways that don't negatively impact others.", title: "", categoryId: '3', fill: '#FF5C00', transform: '0.01', y: 1, _id: 16},

      {text: 'I recognize and reflect on ways in which my identity shapes my views, biases, and prejudices.', title: "SELF-AWARENESS", categoryId: '4', fill: '#FF234B', transform: '0.01', y: 1, _id: 17},
      {text: 'I consistently recognize and reflect on ways in which my identity is shaped by other people and my race, culture, experiences and environment.', title: "", categoryId: '4', fill: '#FF234B', transform: '0.01', y: 1, _id: 18},
      {text: "I use self-reflection to understand the factors that contribute to my emotions and how my emotions impact me.", title: "", categoryId: '4', fill: '#FF234B', transform: '0.01', y: 1, _id: 19},
      {text: "I can consistently identify and name my emotions in the moment.", title: "", categoryId: '4', fill: '#FF234B', transform: '0.01', y: 1, _id: 20},
    ],
    slices: [
      {
        id: 1,
        question:
          "I can consistently identify and name my emotions in the moment.",
        title: "SELF-AWARENESS",
        rotate: "rotate(46.0000, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        id: 2,
        question:
          "I use self-reflection to understand the factors that contribute to my emotions and how my emotions impact me.",
        title: "",
        rotate: "rotate(64.0000, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        id: 3,
        question:
          "I consistently recognize and reflect on ways in which my identity is shaped by other people and my race, culture, experiences and environment.",
        title: "",
        rotate: "rotate(82.0000, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        id: 4,
        question:
          "I recognize and reflect on ways in which my identity shapes my views, biases, and prejudices.",
        title: "",
        rotate: "rotate(100.0000, 220, 220)",
        fill: "#9245FF",
        transform: "0.01",
      },
      {
        id: 5,
        question:
          "I consistently find ways to manage strong emotions in ways that don’t negatively impact others.",
        title: "SELF-MANAGEMENT",
        rotate: "rotate(118.0000, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        id: 6,
        question: "I can calm myself when I feel stressed or nervous.",
        title: "",
        rotate: "rotate(136.0000, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        id: 7,
        question:
          "I set measurable, challenging, and attainable goals and have clear steps in place to reach them.",
        title: "",
        rotate: "rotate(154.0000, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        id: 8,
        question: "I balance my work life with personal renewal time.",
        title: "",
        rotate: "rotate(172.0000, 220, 220)",
        fill: "#357AFF",
        transform: "0.01",
      },
      {
        id: 9,
        question:
          "I can grasp a person's perspective and feelings from both verbal and nonverbal cues.",
        title: "SOCIAL AWARENESS",
        rotate: "rotate(190.0000, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        id: 10,
        question:
          "I pay attention to the feelings of others and recognize how my words and behavior impact them.",
        title: "",
        rotate: "rotate(208.0000, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        id: 11,
        question:
          "I show care for others when I see that they have been harmed in some way.",
        title: "",
        rotate: "rotate(226.0000, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        id: 12,
        question: "I learn from those who have different opinions than me.",
        title: "",
        rotate: "rotate(244.0000, 220, 220)",
        fill: "#00A9B5",
        transform: "0.01",
      },
      {
        id: 13,
        question:
          "I stay focused when listening to others and carefully consider their meaning.",
        title: "RELATIONSHIP SKILLS",
        rotate: "rotate(262.0000, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        id: 14,
        question:
          "When I am upset with someone, I talk to them about how I feel and listen to their perspective.",
        title: "",
        rotate: "rotate(280.0000, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        id: 15,
        question:
          "I openly admit my mistakes to myself and others and work to make things right.",
        title: "",
        rotate: "rotate(298.0000, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        id: 16,
        question:
          "I can work through my discomfort when dealing with conflict, listen to feelings from all parties, and help them understand different perspectives.",
        title: "",
        rotate: "rotate(316.0000, 220, 220)",
        fill: "#FF5C00",
        transform: "0.01",
      },
      {
        id: 17,
        question:
          "I involve others who are impacted to explore a problem collaboratively before choosing a solution or launching a new project.",
        title: "RESPONSIBLE DECISION MAKING",
        rotate: "rotate(334.0000, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        id: 18,
        question: "I find practical and respectful ways to overcome difficulty, even when it comes to making decisions that may not be popular.",
        title: "",
        rotate: "rotate(352.0000, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        id: 19,
        question: "I consider how my choices will be viewed through the lens of the young people I serve and the community around them.",
        title: "",
        rotate: "rotate(370.0000, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
      {
        id: 20,
        question: "I take time for self reflection and group reflection on progress toward goals and the process used.",
        title: "",
        rotate: "rotate(388.0000, 220, 220)",
        fill: "#E5AC00",
        transform: "0.01",
      },
    ],
  };

  selectScore = (question) => (e) => {
    let targetValue = parseInt(e.target.value) / 100;
    if (targetValue === 1) {
      targetValue = 1.0;
    }
    const newState = { ...this.state };
    newState.prompts[question].transform = targetValue.toString();
    this.setState(newState);
  };
// noah says hi
  render() {
    return (
      <div>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Banner t1={"Prompts"} t2={"SEL Wheel"}></Banner>
              <Routes>
                <Route
                  path="/SEL-Tool-1"
                  element={<Navigate to="/Prompts" />} // Redirect root to Prompts
                /> 
                <Route
                  path="/Prompts"
                  element={
                    <Prompts
                      prompts={this.state.prompts}
                      selectScore={this.selectScore}
                    />
                  }
                />
              </Routes>
              <Routes>
                <Route
                  path="/Wheel"
                  element={<Wheel categories={this.state.categories} prompts={this.state.prompts} />}
                />
              </Routes>
            </div>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}
