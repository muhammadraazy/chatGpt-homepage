import "./Header.css"
import{ people, ai } from "../../assets"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="">
       <div className="gpt3__header-content">
           <h1 className="gradient__text"> Lets Build Something <br /> Amazing With ChatGPT <br />  OpenAI </h1>
           <p> 
           Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>

           <div className="gpt3__header-content_input">
              <input type="email" placeholder="Your Email Address" />
              <button type="button"> Get Started </button>
           </div>


           <div className="gpt3__header-content_people">
              <img src={people} alt="people" />
              <p> 1,600 people requested access a visit in last 24 hours </p>
           </div>

       </div>

        <div className="gpt3__header-image">
            <img src={ai} alt="Ai" />
        </div>
    </div>
  )
}

export default Header