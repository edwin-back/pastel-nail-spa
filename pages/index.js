import Link from 'next/link'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Subscribe from '../components/Subscribe'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                <article style={{backgroundImage: `url('/static/images/ball-candle.jpg')`}}>
                        <header className="major">
                            <h3>About</h3>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/spa-foam-girl.jpg')`}}>
                        <header className="major">
                            <h3>Services</h3>
                        </header>
                        <Link href="/services"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/flowers-table.jpg')`}}>
                        <header className="major">
                            <h3>Gallery</h3>
                        </header>
                        <Link href="/gallery"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/sleeping-girl.jpg')`}}>
                        <header className="major">
                            <h3>Treatment</h3>
                        </header>
                        <Link href="/landing"><a className="link primary"></a></Link>
                    </article>
                </section>

                <section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Subcribe</h2>
                        </header>
                        <Subscribe />
                    </div>
                </section>
            </div>

        </div>
    </Layout>
)
