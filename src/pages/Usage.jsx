import usageImage from '../assets/usage.png'

const Usage = () => {
    return(
        <>
            <div className="usage_container">
                <div className="usage_content">
                    <div className="usage_text">
                        <ul>
                            <li>
                                <div className="heading">
                                    <img src={usageImage} alt="" />
                                    <h1>There are many different ways to access CouchDB, here are the most common ways:</h1>
                                </div>
                            </li>
                            <li>
                                <div className="usage">
                                    <h2>Fauxton Web Interface</h2>
                                    <ul>
                                        <li>Open your web browser and navigate to the URL of your CouchDB instance <a href='http://localhost:5984/_utils' target='_blank'>http://localhost:5984/_utils</a>.</li>
                                        <li>Log in to Fauxton using your CouchDB admin credentials.</li>
                                        <li>From the Fauxton dashboard, you can manage databases, create and edit documents, run queries, and perform other administrative tasks using the graphical interface.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="usage">
                                    <h2>HTTP API</h2>
                                    <ul>
                                        <li>Determine the URL of your CouchDB instance (e.g., http://localhost:5984).</li>
                                        <li>For Web Apps, you could use nano. Nano provides a convenient interface directly from within Node.js for performing CRUD operations on your CouchDB database. For Node.js projects, just do <span>npm install nano</span>.</li>
                                        <li>Use HTTP methods such as GET, PUT, POST, and DELETE to interact with CouchDB resources.</li>
                                        <li>For example, to create a new database named "mydatabase", you would send a PUT request to <span>http://username:password@localhost:5984/mydatabase</span>.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="usage">
                                    <h2>cURL and Command-Line Interface (CLI)</h2>
                                    <ul>
                                        <li>Download cURL from <a href="https://curl.se/download.html" target='_blank'>https://curl.se/download.html</a></li>
                                        <li>Open a terminal or command prompt.</li>
                                        <li>Use the curl command-line tool to send HTTP requests to your CouchDB instance.</li>
                                        <li>For example, to create a new database named "mydatabase", you would run: <span>curl -X PUT http://username:password@localhost:5984/mydatabase</span>.</li>
                                        <li>Here are some guides:
                                            <ul>
                                                <li><a href="https://docs.couchdb.org/en/stable/intro/curl.html">https://docs.couchdb.org/en/stable/intro/curl.html</a></li>
                                                <li><a href="https://www.tutorialspoint.com/couchdb/couchdb_curl_futon.htm">https://www.tutorialspoint.com/couchdb/couchdb_curl_futon.htm</a> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Usage