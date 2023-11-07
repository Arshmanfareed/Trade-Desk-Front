import SingleSlider from '../components/SingleSlider';
import MultiSlider from '../components/MultiSlider';
import TestimonialSlider from '../components/TestimonialSlider';
import SecBestPlatform from '../components/SecBestPlatform';
import { Container, Row, Col } from 'react-bootstrap';
import SecVideo from '../components/SecVideo';
import SecNewsLetter from '../components/SecNewsletter';
import SecBestFeatures from '../components/SecBestFeatures';
import Register from "../components/Register";

function Home() {
    return (
        <>
            <section className="BannerSlider">
                <Container fluid>
                    <div id="banner_slide">
                        <SingleSlider />
                    </div>
                </Container>
            </section>

            <section className="OurBestPlatform">
                <SecBestPlatform />
            </section>

            <section className="BestFeatures">
                <Container>
                    <div className="section-title">
                        <Row className="align-items-center">
                            <Col sm={12} md={8} lg={8}>
                                <h2 className="theme-h2">
                                    Best Features For Users Convenience
                                </h2>
                            </Col>
                            <Col lg={4} md={4} sm={12}>
                                <p className="theme-para">
                                    Here our features that we present to make it easier for each
                                    of our users <a href="#">Let’s know more</a>
                                </p>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <SecBestFeatures
                            title="Easy Payment"
                            description="Easier payments with many options to sell or buy in our
                    transactions"
                            src="assets/images/security.png"
                        />
                        <SecBestFeatures
                            title="High Security"
                            description="Security system with high technology and encryption of every"
                            src="assets/images/payment.png"
                        />
                        <SecBestFeatures
                            title="Best Ecosystem"
                            description="The services we provide with full support for the
                    convenience of our"
                            src="assets/images/ecosystem.png"
                        />
                    </Row>
                </Container>
            </section>

            {/*<section className="VideoSec">*/}
            {/*    <SecVideo />*/}
            {/*</section>*/}

            {/*<section className="CurrencySec">*/}
            {/*    <Container>*/}
            {/*        <div className="section-title">*/}
            {/*            <h2 className="theme-h2">Top Forex Currency</h2>*/}
            {/*            <p className="theme-para">*/}
            {/*                Here are the most popular forex assets and you must have for*/}
            {/*                investment <a href="#">Let’s know more</a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*    <Container fluid>*/}
            {/*        <div id="currency_slider" className="owl-carousel owl-theme">*/}
            {/*            <MultiSlider />*/}
            {/*        </div>*/}
            {/*        <div className="slideState">*/}
            {/*            <span></span>*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*</section>*/}

            {/*<section className="TestimonialSec">*/}
            {/*    <Container>*/}
            {/*        <div className="section-title">*/}
            {/*            <h2 className="theme-h2">*/}
            {/*                Testimonials From Our <br /> Platform Users*/}
            {/*            </h2>*/}
            {/*        </div>*/}
            {/*        <div id="testimonial_slider" className="testimonial_slider">*/}
            {/*            <TestimonialSlider />*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*</section>*/}

            <section className="NewsletterSec">
                <SecNewsLetter />
            </section>
        </>
    );
}

export default Home;
