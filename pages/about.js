import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerAbout from '../components/BannerAbout'

export default () => (
    <Layout>
        <Head>
            <title>About Pastel</title>
            <meta name="description" content="About Pastel Page" />
        </Head>

        <div>
            <BannerAbout />
            <div id="main">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h2>Our Mission</h2>
                        </header>
                        <blockquote>To provide services personalized to each client to enhance their natural beauty 
                            in a safe and relaxed environment. Pastel Nail & Spa promises a diversity of services to 
                            maintain your youth including low-cost noninvasive procedures, solutions for pigmentation 
                            or wrinkles, facial feature enhancements, and much more. Our ultimate goal is to give our 
                            clients a renewed sense of self by allowing them to look as good as they feel and feel 
                            as good as they look.
                        </blockquote>
                    </div>
                </section>

                <section id="two" className="spotlights">
                    <section>
                        <a className="image"><img src="/static/images/mirror-girl.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h2>Our Story</h2>
                                </header>
                                <p>Established by Hyun Seok Kim, Pastel Nail & Spa has proudly served the greater northern 
                                    New Jersey area for 10 years and counting. From the moment you enter the premises, 
                                    you will be met with top-notch service and professional support. From a warm welcome 
                                    to a refreshing beverage, we do our best to create an inviting and accommodating spa 
                                    experience that you won't find elsewhere. 
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <a className="image"><img src="/static/images/chiro-girl.jpg" alt="" /></a>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h2>Coming Soon</h2>
                                </header>
                                <p>Check again for updates</p>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
