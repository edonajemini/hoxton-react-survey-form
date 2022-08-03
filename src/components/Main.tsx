import { useState } from "react";

export function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  const [review, setReview] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [consistency, setConsistency] = useState(0);
  const [colour, setColour] = useState(0);
  const [logo, setLogo] = useState(0);
  const [bestFeatures, setBestFeatures] = useState([]);
  const [worstFeatures, setWorstFeatures] = useState([]);
  const [timeSpent, setTimeSpent] = useState([]);

  type Form = {
    review: string;
    email: string;
    username: string;
    consistency: number;
    colour: number;
    logo: number;
    bestFeatures: string[];
    worstFeatures: string[];
    timeSpent: string[];
  };
  return (
    <>
    <main className="main">
        <section className={`main__list ${open ? "open" : ""}`}>
          <h2>Answers list</h2>
          {/* answers should go here */}
        </section>
        <section className="main__form">
          <form
            className="form"
            onSubmit={(event) => {
              event.preventDefault();

              let survey = {
                review,
                email,
                username,
                consistency,
                colour,
                logo,
                bestFeatures,
                worstFeatures,
                timeSpent,
              };

              setReview("");
              setEmail("");
              setUsername("");
              setConsistency(0);
              setColour(0);
              setLogo(0);
              setBestFeatures([]);
              setWorstFeatures([]);
              setTimeSpent([]);
              console.log(survey);
            } }
          >
            <h2>Tell us what you think about your rubber duck!</h2>

            <label htmlFor="best-feature">
              What would you say that are the best features of your rubber duck?
            </label>
            <div className="checkbox-list">
              <input
                type="checkbox"
                id="best-feature"
                name="bestFeatures"
                value="colour"
                required
                onChange={(event) => {
                  setBestFeatures(...bestFeatures, event.target.value);
                } }
              ></input>
              <span>It's yellow!</span>
              <input
                type="checkbox"
                id="best-feature"
                name="bestFeatures"
                value="sound"
                onChange={(event) => {
                  setBestFeatures(...bestFeatures, event.target.value);
                } }
              ></input>
              <span>It squeaks!</span>
              <input
                type="checkbox"
                id="best-feature"
                name="bestFeatures"
                value="logo"
                onChange={(event) => {
                  setBestFeatures(...bestFeatures, event.target.value);
                } }
              ></input>
              <span>It has a logo!</span>
              <input
                type="checkbox"
                id="best-feature"
                name="bestFeatures"
                value="size"
                onChange={(event) => {
                  setBestFeatures(...bestFeatures, event.target.value);
                } }
              ></input>
              <span>It's big!</span>
            </div>

            <label htmlFor="worst-feature">
              What would you say that are the best features of your rubbr duck?
            </label>
            <div className="checkbox-list">
              <input
                type="checkbox"
                id="worst-feature"
                name="worstFeatures"
                value="colour"
                onChange={(event) => {
                  setWorstFeatures(...worstFeatures, event.target.value);
                } }
              ></input>
              <span>It's yellow!</span>
              <input
                type="checkbox"
                id="worst-feature"
                name="worstFeatures"
                value="sound"
                onChange={(event) => {
                  setWorstFeatures(...worstFeatures, event.target.value);
                } }
              ></input>
              <span>It squeaks!</span>
              <input
                type="checkbox"
                id="worst-feature"
                name="worstFeatures"
                value="logo"
                onChange={(event) => {
                  setWorstFeatures(...worstFeatures, event.target.value);
                } }
              ></input>
              <span>It has a logo!</span>
              <input
                type="checkbox"
                id="worst-feature"
                name="worstFeatures"
                value="size"
                onChange={(event) => {
                  setWorstFeatures(...worstFeatures, event.target.value);
                } }
              ></input>
              <span>It's big!</span>
            </div>

            <h3>How do you rate your rubber duck consistency?</h3>
            <ul className="form__group radio">
              <li>
                <input
                  id="consistency-1"
                  type="radio"
                  name="consistency"
                  value="1"
                  onChange={(event) => {
                    setConsistency(Number(event.target.value));
                  } } />
                <label htmlFor="consistency-1">1</label>
              </li>
              <li>
                <input
                  id="consistency-2"
                  type="radio"
                  name="consistency"
                  value="2"
                  onChange={(event) => {
                    setConsistency(Number(event.target.value));
                  } } />
                <label htmlFor="consistency-2">2</label>
              </li>
              <li>
                <input
                  id="consistency-3"
                  type="radio"
                  name="consistency"
                  value="3"
                  onChange={(event) => {
                    setConsistency(Number(event.target.value));
                  } } />
                <label htmlFor="consistency-3">3</label>
              </li>
              <li>
                <input
                  id="consistency-4"
                  type="radio"
                  name="consistency"
                  value="4"
                  onChange={(event) => {
                    setConsistency(Number(event.target.value));
                  } } />
                <label htmlFor="consistency-4">4</label>
              </li>
            </ul>

            <h3>How do you rate your rubber duck colour?</h3>
            <ul className="form__group radio">
              <li>
                <input
                  id="colour-1"
                  type="radio"
                  name="colour"
                  value="1"
                  onChange={(event) => {
                    setColour(Number(event.target.value));
                  } } />
                <label htmlFor="colour-1">1</label>
              </li>
              <li>
                <input
                  id="colour-2"
                  type="radio"
                  name="colour"
                  value="2"
                  onChange={(event) => {
                    setColour(Number(event.target.value));
                  } } />
                <label htmlFor="colour-2">2</label>
              </li>
              <li>
                <input
                  id="colour-3"
                  type="radio"
                  name="colour"
                  value="3"
                  onChange={(event) => {
                    setColour(Number(event.target.value));
                  } } />
                <label htmlFor="colour-3">3</label>
              </li>
              <li>
                <input
                  id="colour-4"
                  type="radio"
                  name="colour"
                  value="4"
                  onChange={(event) => {
                    setColour(Number(event.target.value));
                  } } />
                <label htmlFor="colour-4">4</label>
              </li>
            </ul>

            <h3>How do you rate your rubber duck logo?</h3>
            <ul className="form__group radio">
              <li>
                <input
                  id="logo-1"
                  type="radio"
                  name="logo"
                  value="1"
                  onChange={(event) => {
                    setLogo(Number(event.target.value));
                  } } />
                <label htmlFor="logo-1">1</label>
              </li>
              <li>
                <input
                  id="logo-2"
                  type="radio"
                  name="logo"
                  value="2"
                  onChange={(event) => {
                    setLogo(Number(event.target.value));
                  } } />
                <label htmlFor="logo-2">2</label>
              </li>
              <li>
                <input
                  id="logo-3"
                  type="radio"
                  name="logo"
                  value="3"
                  onChange={(event) => {
                    setLogo(Number(event.target.value));
                  } } />
                <label htmlFor="logo-3">3</label>
              </li>
              <li>
                <input
                  id="logo-4"
                  type="radio"
                  name="logo"
                  value="4"
                  onChange={(event) => {
                    setLogo(Number(event.target.value));
                  } } />
                <label htmlFor="logo-4">4</label>
              </li>
            </ul>

            <label htmlFor="spent-time">
             How do you like to spend time with your rubber duck? 
            </label>
            <div className="checkbox-list">
              <input
                type="checkbox"
                id="spent-time"
                onChange={(event) => {
                  setTimeSpent(...timeSpent, event.target.value);
                } }
              ></input>
              <span>Swimming</span>

              <input
                type="checkbox"
                id="spent-time"
                onChange={(event) => {
                  setTimeSpent(...timeSpent, event.target.value);
                } }
              ></input>
              <span>Bathing</span>

              <input
                type="checkbox"
                id="spent-time"
                onChange={(event) => {
                  setTimeSpent(...timeSpent, event.target.value);
                } }
              ></input>
              <span>Chatting</span>

              <input
                type="checkbox"
                id="spent-time"
                onChange={(event) => {
                  setTimeSpent(...timeSpent, event.target.value);
                } }
              ></input>
              <span>I don't like to spend time with it</span>
            </div>

            <label htmlFor="comment">
                What else do you got to say about your rubber duck? 
            </label>
            <textarea id="comment" rows={10} onChange={event => {
              setReview(event.target.value);
            } }></textarea>

            <label htmlFor="name">
              Put your name here (if your feel like it): 
            </label>
            <input
              type="text"
              id="name"
              onChange={(event) => {
                setUsername(event.target.value);
              } }
            ></input>

            <label htmlFor="name">Leave us your email pretty please??</label>
            <input
              type="email"
              id="name"
              onChange={(event) => {
                setEmail(event.target.value);
              } }
            ></input>

            <button className="form__submit">Submit Survey!</button>
          </form>
        </section>
      </main></>
  );
}