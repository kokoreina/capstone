export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="search-form">
                        <div className="button-search">
                            <i className="fa-solid fa-magnifying-glass" />
                            <input
                                className="form-control"
                                id="disabledInput"
                                type="text"
                                placeholder="Search"
                                disabled
                            />
                        </div>
                        <div className="popular">
                            <span>Popular</span>
                            <ul>
                                <li>
                                    <a>Lightning®</a>
                                </li>
                                <li>
                                    <a>Bronco®</a>
                                </li>
                                <li>
                                    <a>Maverick®</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main-footer">
                        <div className="information-main">
                            <div className="vehicles-column-item">
                                <h2>All Vehicles</h2>
                                <ul>
                                    <li>SUVs &amp; Crossovers</li>
                                    <li>Trucks &amp; Vans</li>
                                    <li>Cars</li>
                                    <li>Electrified</li>
                                    <li>Commercial Vehicles</li>
                                    <li>Future Vehicles</li>
                                    <li>Certified Used</li>
                                    <li>All Vehicles</li>
                                    <li>Performance Vehicles</li>
                                </ul>
                            </div>
                            <div className="shop-column-item">
                                <h2>Shop</h2>
                                <ul>
                                    <li>Build &amp; Price</li>
                                    <li>Search Inventory</li>
                                    <li>Get a Quote</li>
                                    <li>Current Offers</li>
                                    <li>Trade-In Value</li>
                                    <li>Towing Guides</li>
                                    <li>Compare Vehicles</li>
                                    <li>Get Updates</li>
                                    <li>Certified Used</li>
                                    <li>Inventory</li>
                                    <li>First Responder</li>
                                    <li>Accessories Store</li>
                                    <li>Ford Merchandise</li>
                                    <li>Accessibility Program</li>
                                </ul>
                            </div>
                            <div className="finance-column-item">
                                <h2>Finance</h2>
                                <ul>
                                    <li>Ford Credit Home</li>
                                    <li>Why Ford Credit</li>
                                    <li>Finance Options</li>
                                    <li>Payment Calculator</li>
                                    <li>Credit Education</li>
                                    <li>Customer Support</li>
                                    <li>Qualify for Financing</li>
                                    <li>Ford Credit Account</li>
                                    <li>Ford Insure</li>
                                    <li>Ford Interest Advantage</li>
                                    <li>Investor Center</li>
                                </ul>
                            </div>
                            <div className="support-column-item">
                                <h2>Support</h2>
                                <ul>
                                    <li>Support Home</li>
                                    <li>Maintenance Schedule</li>
                                    <li>Coupons &amp; Offers</li>
                                    <li>Redeem Rebates</li>
                                    <li>SYNC &amp; Technology</li>
                                    <li>Warranty &amp; Owner Manuals</li>
                                    <li>Locate a Dealer</li>
                                    <li>Ford Parts</li>
                                    <li>Contact Us</li>
                                    <li>Roadside Assistance</li>
                                    <li>Ford Protect</li>
                                    <li>Recalls</li>
                                    <li>Takata Airbag Recalls</li>
                                    <li>Tire Finder</li>
                                    <li>How-To Videos</li>
                                    <li>Collision Assistance</li>
                                </ul>
                            </div>
                            <div className="experience-ford-column-item">
                                <h2>Experience Ford</h2>
                                <ul>
                                    <li>Corporate</li>
                                    <li>Careers</li>
                                    <li>Investors</li>
                                    <li>Company News</li>
                                    <li>About Ford</li>
                                    <li>Ford Pro</li>
                                    <li>Racing</li>
                                    <li>Warriors in Pink</li>
                                    <li>Ford Philanthropy</li>
                                    <li>SYNC</li>
                                    <li>Connected Navigation</li>
                                    <li>FordPass</li>
                                    <li>Ford Co-Pilot360 Technology</li>
                                    <li>Owner Benefits</li>
                                    <li>Going Electric</li>
                                    <li>Ford Heritage Vault</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="secondary-footer">
                        <div className="secondary-update">
                            <button>
                                <i className="fa-regular fa-envelope" />
                            </button>
                            <span>Get Updates</span>
                        </div>
                        <div className="secondary-social-link">
                            <p>Follow Ford</p>
                            <ul>
                                <li>
                                    <i className="fa-brands fa-facebook" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-twitter" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-youtube" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-instagram" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-threads" />
                                </li>
                                <li>
                                    <i className="fa-brands fa-tiktok" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="finall-footer">
                        <div className="top-link">
                            <div className="language">
                                <i className="fa-solid fa-earth-europe" />
                                <span>Change Language</span>
                            </div>
                            <div className="logo-ford">
                                <i className="fa-solid fa-car" />
                            </div>
                        </div>
                        <div className="bot-link">
                            <ul>
                                <li>© 2024 Ford Motor Company</li>
                                <li>Site Map</li>
                                <li>Site Feedback</li>
                                <li>Glossary</li>
                                <li>Contact Us</li>
                                <li>Accessibility</li>
                                <li>Terms &amp; Conditions</li>
                                <li>Privacy Notice</li>
                                <li>Cookie Settings</li>
                                <li>
                                    <span>Your Privacy Choices</span>
                                    <i className="fa-solid fa-check" />
                                </li>
                                <li>Interest Based Ads</li>
                            </ul>
                            <div className="finall">
                                <span>Interest Based Ads</span>
                                <span>Third-Party Trademarks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
