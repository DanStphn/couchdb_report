import step1 from '../assets/step1.png'
import step2 from '../assets/step2.png'
import step3 from '../assets/step3.png'
import install1 from '../assets/install1.png'
import install2 from '../assets/install2.png'
import install3 from '../assets/install3.png'
import install4 from '../assets/install4.png'
import install5 from '../assets/install5.png'
import install7 from '../assets/install7.png'
import install8 from '../assets/install8.png'
import install9 from '../assets/install9.png'

const Installation = () => {
    return(
        <>
            <div className="installation_container">
                <div className="installation_content">
                    <div className="install_text">
                        <h1>Step 1</h1>
                        <h3>You can download the latest version of CouchDB from the official CouchDB website: <a href="https://couchdb.apache.org/" target="_blank">https://couchdb.apache.org/.</a></h3>
                        <div className="scrollable_steps">
                            <div className="step">
                                <p>1. Once in the couchdb apache website, click on the download button.</p>
                                <img src={step1} alt="" />
                            </div>
                            <div className="step">
                                <p>2. Next, find your preferred version and click on which OS your system currently has.</p>
                                <img src={step2} alt="" />
                            </div>
                            <div className="step">
                                <p>3. You will be redirected to Neighbourhoodie website for the official download link. Click "Download CouchDB" and it will start downloading.</p>
                                <img src={step3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="install_text">
                        <h1>Step 2</h1>
                        <h3>Once you have downloaded your selected version of CouchDB, install it on your computer. </h3>
                        <div className="scrollable_steps">
                            <div className="step2">
                                <p>1. Open the downloaded CouchDB installer.</p>
                                <img src={install1} alt="" />
                            </div>
                            <div className="step2">
                                <p>2. Read and accept the End-User License Agreement.</p>
                                <img src={install2} alt="" />
                            </div>
                            <div className="step2">
                                <p>3. Select an installation path.</p>
                                <img src={install3} alt="" />
                            </div>
                            <div className="step2">
                                <p>4. In the newer versions of CouchDB, it is required to create an Admin User on installation. Create an account name and password.</p>
                                <img src={install4} alt="" />
                            </div>
                            <div className="step2">
                                <p>5. It is also required to set a cookie as it is used for secure communication between CouchDB nodes in a cluster. For more information, <a>Click Here</a>. Click on 'Random Cookie' to generate a random cookie or you could input your own generated cookie and click on 'Validate Cookie' to see if its valid.</p>
                                <img src={install5} alt="" />
                            </div>
                            <div className="step2">
                                <p>6. After all is setup and ready, click 'Install'. If you want to review the setup before installing, click 'Back'.</p>
                                <img src={install7} alt="" />
                            </div>
                            <div className="step2">
                                <p>7. Wait for the installation to finish.</p>
                                <img src={install8} alt="" />
                            </div>
                            <div className="step2">
                                <p>8. Once installed, you can close and delete the downloaded installer.</p>
                                <img src={install9} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="install_text">
                        <h1>Congratulations! Now you have CouchDB up and running in your system.</h1> 
                        <h3>To check if it is running, click or open this link, <a href='http://localhost:5984/_utils' target='_blank' >http://localhost:5984/_utils</a>.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Installation