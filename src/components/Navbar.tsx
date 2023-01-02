import { BiArrowBack } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../styles/Navbar";

export default function NavbarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Navbar.Container>
        {location.pathname !== "/" && (
          <Navbar.Button onClick={() => navigate(-1)}>
            <BiArrowBack />
          </Navbar.Button>
        )}

        <Navbar.Brand>
          <img
            src="https://uploads-ssl.webflow.com/62235d098ddf9185c2d74422/62235d7c6c3db99f41e74ca4_logo.svg"
            alt="driven education"
          />
        </Navbar.Brand>
      </Navbar.Container>
    </>
  );
}
