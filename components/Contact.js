import { Container, Row, Col } from 'react-grid-system';

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>

            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>127 S. Washington Avenue<br />
                        Bergenfield, NJ 07621<br />
                        United States of America</span>
                    </div>
                </section>
                <section>
                    <Container>
                        <Row>
                            <Col sm={6}>
                            <div className="contact-method">
                                <span className="icon alt fa-phone"></span>
                                <h3>Phone</h3>
                                <span>+1 (201) 501-0076</span>
                            </div>
                            <br />
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Email</h3>
                                <a href="info@pastelnailspa.com">info@pastelnailspa.com</a>
                            </div>
                            </Col>
                            <Col sm={6}>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Hours</h3>
                                <span>Mon 9:30AM - 7:30PM</span><br />
                                <span>Tue 9:30AM - 7:30PM</span><br />
                                <span>Wed 9:30AM - 7:30PM</span><br />
                                <span>Thu 9:30AM - 7:30PM</span><br />
                                <span>Fri 9:30AM - 7:30PM</span><br />
                                <span>Sat 9:00AM - 6:30PM</span><br />
                                <span>Sun Closed</span><br />
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
