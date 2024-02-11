import React from "react";
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homePage">
            <header className="header">
                <h1>PoE Currency Tracker</h1>
            </header>
            <main className="content">
                <p>Small application to track my currency in <a href="https://www.pathofexile.com/" target="_blank">Path of Exile</a>, a game created by Grinding Gear Games</p>
                <br />
                <p>How it works!</p>
                <p>I have a function app hosted in Azure that pulls data from Path of Exile's API every hour.</p>
                <p>I use Timer Triggers to pull the data on the hour and HttpTriggers to query the Redis cache.</p>
                <p>It then stores the data in Cosmos and in Redis, Redis is hosted inside a K8 cluster in Azure.</p>
                <p>I also use Azure devops for CI/CD</p>
                <br />
                <p>I use a myriad of technologies</p>
                <ul>
                    <li>
                        C#
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        Azure Function App (Timer Triggers, HTTP Triggers) 
                    </li>
                    <li>
                        K8
                    </li>
                    <li>
                        Redis
                    </li>
                    <li>
                        Cosmos DB
                    </li>
                </ul>
            </main>
            <footer className="footer">
            </footer>
        </div>
    );
};

export default HomePage;
