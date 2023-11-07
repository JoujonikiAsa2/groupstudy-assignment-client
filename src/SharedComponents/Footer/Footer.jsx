const Footer = () => {
    return (
        <footer class="footer p-10 bg-[#F4F9FD] text-base-content">
            <nav>
                <header class="footer-title">Services</header>
                <a class="link link-hover">Learning</a>
                <a class="link link-hover">Design</a>
                <a class="link link-hover">Marketing</a>
                <a class="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header class="footer-title">Company</header>
                <a class="link link-hover">About us</a>
                <a class="link link-hover">Assignemnts</a>
                <a class="link link-hover">Features</a>
                <a class="link link-hover">Contact</a>
                <a class="link link-hover">FAQ</a>
            </nav>
            <nav>
                <header class="footer-title">Legal</header>
                <a class="link link-hover">Terms of use</a>
                <a class="link link-hover">Privacy policy</a>
                <a class="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <header class="footer-title">Newsletter</header>
                <fieldset class="form-control w-80">
                    <label class="label">
                        <span class="label-text">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn bg-[#55c360] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;