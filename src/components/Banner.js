import { useState,useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner=() =>{
    const[loopNum, setLoopNum]  = useState(0);
    const[isDeleting, setIsDeleting]  = useState(false);
    const [index, setIndex] = useState(1);
    const toRotate= ["Web Developer", "Web Designer", "UI/UX Designer"];
    const[text,setText]  = useState("");
    const[delta, setDelta]  = useState(300-Math.random()*100);
    const period = 2000;
    
    
useEffect(() => {
    let ticker = setInterval(()=>
        {
            tick();
        },delta)
return ()=>{clearInterval(ticker)};

},[text])
const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
}



return(
    <section className="banner" id = "home">
    <Container>
        <Row className = "align-items-center">
            <Col xs = {12} md={6} xl={7}>
      
            <TrackVisibility>


            {({isVisible})=>
            <div className={isVisible? "animate__animated animate__fadeInLeft" : ""}>
        
           <span className="tagline">Welcome to my Portfolio</span>
        <h1>{"Hi! I am Izah,"}<span className="wrap">{text}</span></h1>
         <p>
        I’m a dedicated web developer and graphic designer with a passion for creating visually compelling and user-focused designs. My expertise lies in crafting seamless digital experiences and innovative graphics that truly engage and inspire. Dive into my work to see how I blend creativity with technology to bring ideas to life.</p>
         <button onClick={()=>console.log("connect")}>Let's Connect<ArrowRightCircle size = {25}/></button>
         </div>}
         </TrackVisibility>
            </Col>
            <Col xs = {12} md={6} xl={5}>
     
            
            <div className="image-container"> {/* Your container with emerald background */}
        
              <img src={headerImg} alt="Header Img" className="circular-img" />
           
  
    
    </div>
   


            </Col>
        </Row>
    </Container>
    </section>
)


}
 