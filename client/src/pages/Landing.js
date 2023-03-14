import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/*info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            JobFlow is a useful job application app that empowers job seekers to take control of their job search. With JobFlow, you can track your job search progress, it enables users to create a comprehensive record of job applications and other important details related to the job search process. JobFlow simplifies and streamlines the job search process, helping you stay organized and motivated. Say goodbye to job search overwhelm and hello to landing your dream job.
          </p>
          <Link to="/register" className='btn btn-hero'>Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};


export default Landing;
