import "./Footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <p className="text-uppercase colorDesign footer-p"> Get in touch!</p>
            <button class="button phone">Contact Us</button>
            </div>
        
          <div className="col-lg-3 col-md-6">
            <p className="text-uppercase colorDesign footer-p">Links</p>
            <ul className="list-unstyled mb-0">
              <li>
                <a
                  href="#"
                  className="text-dark"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nim-nambi/BackTrack"
                  className="text-dark"
                >
                  Github
                </a>

                
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark"
                >
                  Projects
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="text-dark"
                >
                  Android App
                </a>
                </li>
                
            </ul>
          </div>
          
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
