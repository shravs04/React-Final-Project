import React from 'react'
import classes from "./Footer.module.css"
function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerItemContainer}>
                <div className={classes.footerLinkSection}>
                    <div className={classes.footerSectionHeading}>
                        Edyoda
            </div>
                    <div className={classes.footerItem}><a href="#">About Us</a></div>
                    <div className={classes.footerItem}><a href="#">Contact Us</a></div>
                    <div className={classes.footerItem}><a href="#">Terms Of Use</a></div>
                    <div className={classes.footerItem}><a href="#">Privacy Policy</a></div>
                </div>

                <div className={classes.footerLinkSection}>
                    <div className={classes.footerSectionHeading}>
                        Resources
            </div>
                    <div className={classes.footerItem}><a href="#"> Courses </a></div>
                    <div className={classes.footerItem}><a href="#"> Learning Videos </a></div>
                    <div className={classes.footerItem}><a href="#"> EdYoda Stories </a></div>
                    <div className={classes.footerItem}><a href="#">University</a></div>
                </div>

                <div className={classes.footerLinkSection}>
                    <div className={classes.footerSectionHeading}>
                        For Enterprises
            </div>
                    <div className={classes.footerItem}><a href="#"> Hire EdYoda Graduates </a></div>
                    <div className={classes.footerSectionHeading}>
                        Quick Links
            </div>
                    <div className={classes.footerItem}><a href="#" >Learn and Earn</a></div>
                    <div className={classes.footerItem}><a href="#">Become a Learning-Enabler</a></div>
                    <div className={classes.footerItem}><a href="#">Tips for Learning-Enabler</a></div>
                    <div className={classes.footerItem}><a href="#">Request New Topic</a></div>
                </div>
                <div className={classes.footerLinkSection}>
                    <div className={classes.footerSectionHeading}>
                        Connect
            </div>
                    <div className={classes.footerItem}>
                        2nd Floor #188, Survey No. - 123/1,
                        Incubes Building Next to McDonalds,
                        ITPL Main Rd, Brookefield,
                        Bengaluru, Karnataka-560037,
                        India
            </div>
                    <div className={classes.footerItemWithIcon}>
                        <img src="https://assessments.edyoda.com/static/images/Email.svg" alt="email" />
                hello@edyoda.com
            </div>
                    <div className={classes.footerItemWithIcon}>
                        <img src="https://assessments.edyoda.com/static/images/Call.svg" alt="email" />
                +91 8971554184
            </div>
                    <div className={classes.footerSectionSocialLinks}>
                        <img src="https://assessments.edyoda.com/static/images/landmark.png" alt="lo" className={classes.land} />
                        <img src="https://assessments.edyoda.com/static/images/twitter.svg" alt="tw" className={classes.tweet} />
                        <img src="https://assessments.edyoda.com/static/images/fbimage.png" alt="fb" className={classes.fb} />
                        <img src="https://assessments.edyoda.com/static/images/linkden.png" alt="li" className={classes.linkden} />
                    </div>
                    <div className={classes.footerSectionCopyright}>
                        2020 zekeLabs Technologies Private Limited
            </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
