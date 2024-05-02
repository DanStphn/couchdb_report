import homeImage1 from '../assets/webTitleImage.png'
import structureImage from '../assets/structure.png'
import useImage from '../assets/use.png'
import serviceImage from '../assets/services.png'
import chartImage from '../assets/flowchart.png'
import edgeImage from '../assets/edge.png'
import revenueImage from '../assets/revenue.png'
import prosImage from '../assets/pros.png'
import consImage from '../assets/cons.png'
import hostingImage from '../assets/hosting.png'

const Home = () => {
    return(
        <>
            <div className="home_container">
                <div className="home_content">
                    <div className="home_text start">
                        <img src={homeImage1} className='startImage' alt="couch" />
                        <p><b>CouchDB</b>, short for "<i>Cluster Of Unreliable Commodity Hardware DataBase</i>," is an open-source NoSQL database system developed by the Apache Software Foundation. It falls under the category of document-oriented databases, which means it stores and manages data as JSON-like documents.</p>
                    </div>
                    <div className="home_text">
                        <img src={structureImage} />
                        <div className="text">
                            <h2>Structure</h2>
                            <p><b>CouchDB</b> is a document-oriented NoSQL database system, which means it stores and manages data as JSON-like documents.</p>
                        </div>
                    </div>
                    <div className="home_text">
                        <img src={useImage} />
                        <div className="text">
                        <h2>Use</h2>
                            <p><b>CouchDB</b> is used for a wide range of applications, including web and mobile development, content management systems, IoT (Internet of Things) platforms, and more. Its flexible document-based structure and distributed architecture make it suitable for handling diverse data types and scaling horizontally.</p>
                        </div>
                    </div>
                    <div className="home_text">
                        <div className="list">
                            <h2>Services</h2>
                            <ul>
                                <li>✔ Document storage and retrieval</li>
                                <li>✔ Distributed replication</li>
                                <li>✔ Query support through MapReduce views</li>
                                <li>✔ A built-in RESTful HTTP API</li>
                            </ul>
                        </div>
                        <img src={serviceImage} />
                    </div>
                    <div className="home_text">
                        <img src={hostingImage} />
                        <div className="text">
                        <h2>Hosting</h2>
                            <p><b>Self-hosting:</b> Install CouchDB on your own servers or machines.</p><p><b>Cloud Hosting:</b> Utilize cloud platforms such as AWS, Azure, or Google Cloud for CouchDB deployment.</p><p><b>Managed Hosting:</b> Opt for managed CouchDB hosting services provided by third-party vendors for easier maintenance and support.</p>
                        </div>
                    </div>
                    <div className="home_text">
                        <div className="chart">
                            <h2>How does CouchDB work?</h2>
                            <img src={chartImage} />
                        </div></div>
                    <div className="home_text">
                        <img src={prosImage} />
                        <div className="pros list">
                            <h2>Pros</h2>
                            <ul>
                                <li><b>Schema-less document structure</b> allows for flexibility in data modeling.</li>
                                <li><b>Distributed architecture</b> enables horizontal scaling and fault tolerance.</li>
                                <li><b>ACID compliance</b> ensures data integrity.</li>
                                <li><b>RESTful HTTP API</b> simplifies application integration.</li>
                                <li><b>Built-in conflict resolution mechanisms</b> handle concurrent updates gracefully.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="home_text">
                        <img src={consImage} />
                        <div className="cons list">
                            <h2>Cons</h2>
                            <ul>
                                <li><b>MapReduce views</b> may require a learning curve for developers unfamiliar with the paradigm.</li>
                                <li><b>Limited tooling and ecosystem</b> compared to more widely adopted databases like MongoDB or PostgreSQL.</li>
                                <li><b>Performance may vary</b> depending on data access patterns and query complexity.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="home_text">
                        <div className="text">
                            <h2>Edge of CouchDB</h2>
                            <p>CouchDB's strengths lie in its distributed architecture, built-in conflict resolution, and seamless integration with web applications through its RESTful API. These features make it well-suited for scenarios requiring high availability, offline-first architectures, and flexible data models.</p>
                        </div><img src={edgeImage} />
                    </div>
                    <div className="home_text end">
                        <img src={revenueImage} />
                        <div className="text">
                            <h2>CouchDB's Revenue Stream</h2>
                            <p>CouchDB is primarily funded through donations to the Apache Software Foundation, which oversees the development and maintenance of the project. Additionally, companies offering CouchDB-related services, such as hosting, support, and consulting, may generate revenue from their offerings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home