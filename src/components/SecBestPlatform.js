import { Container, Row, Col } from 'react-bootstrap';

function SecBestPlatform() {
  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="PlatformImg">
              <img src="assets/images/platform-img.png" />
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <div className="PlatformCon">
              <h2 className="theme-h2">Development Of Our Best Platform</h2>
              <div id="projectFacts" className="sectionclassName">
                <div className="fullWidth eight columns">
                  <div className="projectFactsWrap ">
                    <div
                      className="item wow fadeInUpBig animated animated"
                      data-number="12"
                      style={{ visibility: 'visible ' }}
                    >
                      <p>Our Users</p>
                      <p id="number1" className="number">
                        12 <span>M+</span>
                      </p>
                    </div>
                    <div
                      className="item wow fadeInUpBig animated animated"
                      data-number="55"
                      style={{ visibility: 'visible ' }}
                    >
                      <p>Active Transaction</p>
                      <p id="number2" className="number">
                        55
                      </p>
                    </div>
                    <div
                      className="item wow fadeInUpBig animated animated"
                      data-number="359"
                      style={{ visibility: 'visible ' }}
                    >
                      <p>Brand Partner</p>
                      <p id="number3" className="number">
                        359
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Your Trade Desk is an interactive site where independent traders convene to share ideas on trades and potential trade ideas. Groups will be formed for those with similar styles, markets traded, etc. Traders are encouraged to share trades they either are in already, close to entering and why, or just monitor what other traders are doing. Trading as an independent is difficult. Your Trade Desk (YTD) offers the advantages of a collaborative group, bouncing ideas off one another, seeing what might be working for others that you may not have thought of. The trades are not chosen by a moderator… for traders, by traders.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SecBestPlatform;
