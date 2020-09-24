import Head from "next/head"

import Layout from '../components/Layout'
import BannerServices from '../components/BannerServices'

import { Container, Row, Col } from 'react-grid-system';

export default () => (
    <Layout>
        <Head>
            <title>Services Page</title>
            <meta name="description" content="Services Page" />
        </Head>

        <div>
            <BannerServices />

            <div id="main">
                <section id="one">
                    <div className="inner">
                        
                        <Container>
                            <header className="major">
                                <h2>Hands & Feet</h2>
                            </header>
                            <Row>
                                <Col sm={6}>
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Mini Manicure</td>
                                                <td>$13</td>
                                            </tr>
                                            <tr>
                                                <td>Classic Manicure</td>
                                                <td>$18</td>
                                            </tr>
                                            <tr>
                                                <td>Soak Gel Manicure</td>
                                                <td>$35</td>
                                            </tr>
                                            <tr>
                                                <td>Powder Manicure</td>
                                                <td>$45</td>
                                            </tr>
                                            <tr>
                                                <td>Pedicure</td>
                                                <td>$25</td>
                                            </tr>
                                            <tr>
                                                <td>Manicure + Pedicure</td>
                                                <td>$38</td>
                                            </tr>
                                            <tr>
                                                <td>Kids Manicure</td>
                                                <td>$10</td>
                                            </tr>
                                            <tr>
                                                <td>Kids Pedicure</td>
                                                <td>$20</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Col>
                                <Col sm={6}>
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Callus Removal</td>
                                                <td>$15</td>
                                            </tr>
                                            <tr>
                                                <td>UV Gel Permanent Set</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr>
                                                <td>UV Gel Filling</td>
                                                <td>$80</td>
                                            </tr>
                                            <tr>
                                                <td>Dipping Powder Tips</td>
                                                <td>$75</td>
                                            </tr>
                                            <tr>
                                                <td>Clean Powder Filling</td>
                                                <td>$65</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                        <br /><br />

                        <Container>
                            <Row>
                                <Col sm={6}>
                                <header className="major">
                                    <h2>Waxing</h2>
                                </header>
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Lip / Chin</td>
                                                <td>$10</td>
                                            </tr>
                                            <tr>
                                                <td>Eyebrows</td>
                                                <td>$12</td>
                                            </tr>
                                            <tr>
                                                <td>Half / Full Arm</td>
                                                <td>$25 / $35</td>
                                            </tr>
                                            <tr>
                                                <td>Half / Full Leg</td>
                                                <td>$30 / $45</td>
                                            </tr>
                                            <tr>
                                                <td>Underarm</td>
                                                <td>$16</td>
                                            </tr>
                                            <tr>
                                                <td>Bikini</td>
                                                <td>$20</td>
                                            </tr>
                                            <tr>
                                                <td>Brazilian</td>
                                                <td>$50</td>
                                            </tr>
                                            <tr>
                                                <td>Back</td>
                                                <td>$50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Col>
                                <br />
                                <Col sm={6}>
                                <header className="major">
                                    <h2>Body Work</h2>
                                </header>
                                <div className="table-wrapper">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Massage (10 mins)</td>
                                                <td>$13</td>
                                            </tr>
                                            <tr>
                                                <td>Deep Tissue Massage (30 mins)</td>
                                                <td>$49</td>
                                            </tr>
                                            <tr>
                                                <td>Deep Tissue Massage (60 mins)</td>
                                                <td>$79</td>
                                            </tr>
                                            <tr>
                                                <td>Ear Candling</td>
                                                <td>$50</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                        <br /><br />
                        <Container>
                            <Row>
                                <Col sm={12}>
                                <header className="major">
                                    <h2>Special Services</h2>
                                </header>
                                <div className="table-wrapper" id="spec-opts">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Condition</th>
                                                <th>Recommended Treatment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Acne</td>
                                                <td>Laser Genesis, Acne Clearing Facial, Pore Clarifying Diamond Glow</td>
                                            </tr>
                                            <tr>
                                                <td>Aging Spots, Acne Scars</td>
                                                <td>Laser Genesis, PRP facial, Secret RF, PRP facelift, Acne Clearing Facial, Brighten & Rejuvenate Facial</td>
                                            </tr>
                                            <tr>
                                                <td>Cellulite</td>
                                                <td>Trusculpt iD</td>
                                            </tr>
                                            <tr>
                                                <td>Double Chin</td>
                                                <td>Trusculpt iD, Kybella</td>
                                            </tr>
                                            <tr>
                                                <td>Peach Fuzz</td>
                                                <td>Dermaplaning</td>
                                            </tr>
                                            <tr>
                                                <td>Stretch Marks</td>
                                                <td>Secret RF</td>
                                            </tr>
                                            <tr>
                                                <td>Wrinkles</td>
                                                <td>Botox, Secret RF, PRP facial, PRP facelift, Juvederm Ultra XC, Volbella XC</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                        
                    </div>
                </section>
            </div>
        </div>
    </Layout>
)
