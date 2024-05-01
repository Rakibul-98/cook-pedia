import { FaFacebookF, FaGithub, FaLinkedinIn, FaMedium } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <img className="h-12" src="https://i.ibb.co/YTdvmbb/logo.png" alt="" />
                <div className="flex">
                    <p>© All Rights Reserved by</p>
                    <a className="underline text-blue-700 ms-2 hover:text-black" href="https://portfolio-rakibul.netlify.app/">Rakibul Hasan</a>
                </div>
                <div className="flex gap-3 text-xl">
                    <a href="https://www.facebook.com/rakibul.rupom2001"><FaFacebookF /></a>
                    <a href="https://github.com/Rakibul-98"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/rakibul-98/"><FaLinkedinIn /></a>
                    <a href="https://rakibul-98.medium.com/"><FaMedium /></a>
                </div>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}
