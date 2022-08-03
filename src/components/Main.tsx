import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{/* a form should be here */

      <form className="form" 
      onSubmit={event => {
        event.preventDefault()
        let bestFeatures = []
        let checkboxes = document.querySelectorAll(
          'input[name= "features"]:checked'
        )
        for (let checkbox of checkboxes) {
          bestFeatures.push(checkbox.value)
        }
      }}
      >
      

        <h2>Tell us what u think about your rubber duck!</h2>
        <h3>What would you say that are the best features of your rubber duck?</h3>
        <ul className="checkbox-list">
          <li>
            <label>
              <input type='checkbox' name='features' value='color'/>
              <span>ts yellow!</span>
            </label>
          </li>
          <li><label>
              <input type='checkbox' name='features' value='sound'/>
              <span>It squeaks! </span>
            </label></li>
          <li><label>
              <input type='checkbox' name='features' value='logo'/>
              <span>It has a logo! </span>
            </label></li>
          <li>
          <label>
              <input type='checkbox' name='features' value='size'/>
              <span>It's big!</span>
            </label>
          </li>
        </ul>
        <h3>What would you say that are the worst features of your rubber duck?</h3>
        <ul className="checkbox-list">
          <li>
            <label>
              <input type='checkbox' name='features' value='color'/>
              <span>ts yellow!</span>
            </label>
          </li>
          <li><label>
              <input type='checkbox' name='features' value='sound'/>
              <span>It squeaks! </span>
            </label></li>
          <li><label>
              <input type='checkbox' name='features' value='logo'/>
              <span>It has a logo! </span>
            </label></li>
          <li>
          <label>
              <input type='checkbox' name='features' value='size'/>
              <span>It's big!</span>
            </label>
          </li>
        </ul>
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul className="form__group radio" >
          <li>
            <input id="consistency-1" type='radio' name="consistency" value='1' />
            <label htmlFor="consistency-1">1</label>
          </li>
          <li>
            <input id="consistency-2"  type='radio' name="consistency" value='2'/>
            <label htmlFor="consistency-2" >2</label>
          </li>
          <li>
            <input id="consistency-3"  type='radio' name="consistency" value='3'/>
            <label htmlFor="consistency-3" >3</label>
          </li>
          <li>
            <input id="consistency-4"  type='radio' name="consistency" value='4'/>
            <label htmlFor="consistency-4" >4</label>
          </li>
        </ul>
        <h3>How do you rate your rubber duck colour?</h3>
        <ul className="form__group radio" >
          <li>
            <input id="colour-1" type='radio' name="colour" value='1'/>
            <label htmlFor="colour-1">1</label>
          </li>
          <li>
            <input id="colour-2"  type='radio' name="colour"value='2'/>
            <label htmlFor="colour-2" >2</label>
          </li>
          <li>
            <input id="colour-3"  type='radio' name="colour" value='3'/>
            <label htmlFor="colour-3" >3</label>
          </li>
          <li>
            <input id="colour-4"  type='radio' name="colour" value='4'/>
            <label htmlFor="colour-4" >4</label>
          </li>
        </ul>
        <h3>How do you rate your rubber duck logo?</h3>
        <ul className="form__group radio" >
          <li>
            <input id="logo-1" type='radio' name="logo" value='1'/>
            <label htmlFor="logo-1">1</label>
          </li>
          <li>
            <input id="logo-2"  type='radio' name="logo" value='2'/>
            <label htmlFor="logo-2" >2</label>
          </li>
          <li>
            <input id="logo-3"  type='radio' name="logo" value='3'/>
            <label htmlFor="logo-3" >3</label>
          </li>
          <li>
            <input id="logo-4"  type='radio' name="logo" value='4'/>
            <label htmlFor="logo-4" >4</label>
          </li>
        </ul>
        <h3>How do you like to spend time with your rubber duck?</h3>
        <ul className="checkbox-list">
          <li>
            <label>
              <input type='checkbox' name='features' value='color'/>
              <span>Swimming!</span>
            </label>
          </li>
          <li><label>
              <input type='checkbox' name='features' value='sound'/>
              <span>Bathing! </span>
            </label></li>
          <li><label>
              <input type='checkbox' name='features' value='logo'/>
              <span>Chatting </span>
            </label></li>
          <li>
          <label>
              <input type='checkbox' name='features' value='size'/>
              <span>I dont like to spend time with it!</span>
            </label>
          </li>
        </ul>
        <h3>What else have you got to say about your rubber duck?</h3>
        <textarea></textarea>
        <p>Put your name here ( If u like it )!</p>
        <input className="input[type='text']" type='text' />

        <p>Leave us your email pretty please!</p>
        <input className="input[type='email']" type='text' />

        <button className="form__submit" >SUBMIT SURVEY</button>
      </form>
      }
      </section>
    </main>
  );
}

export default Main;
