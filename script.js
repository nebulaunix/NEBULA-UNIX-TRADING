/* Global Styles */
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --accent-color: #00cec9;
    --dark-color: #2d3436;
    --light-color: #f5f6fa;
    --success-color: #00b894;
    --warning-color: #fdcb6e;
    --danger-color: #d63031;
    --text-color: #636e72;
    --white: #ffffff;
    --black: #000000;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-color);
    overflow-x: hidden;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

h1, h2, h3, h4 {
    color: var(--dark-color);
    margin-bottom: 1rem;
}

p {
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: var(--transition);
}

a:hover {
    color: var(--accent-color);
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    border: none;
}

.btn.primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn.primary:hover {
    background-color: #5649d1;
    transform: translateY(-2px);
}

.btn.secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn.secondary:hover {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn.login {
    background-color: transparent;
    color: var(--dark-color);
    margin-right: 10px;
}

.btn.login:hover {
    color: var(--primary-color);
}

.btn.signup {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn.signup:hover {
    background-color: #5649d1;
}

section {
    padding: 80px 0;
}

/* Header Styles */
header {
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    padding: 15px 0;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
    margin-right: 10px;
}

.logo span {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--dark-color);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    margin-left: 30px;
}

.nav-links a {
    color: var(--dark-color);
    font-weight: 600;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
    color: var(--white);
    padding: 150px 0 80px;
    margin-top: 70px;
}

.hero-content {
    max-width: 600px;
}

.hero h1 {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
}

.cta-buttons .btn {
    margin-right: 15px;
}

.hero-image {
    position: absolute;
    right: 0;
    top: 150px;
    width: 50%;
    max-width: 600px;
}

.hero-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Features Section */
.features {
    background-color: var(--white);
}

.features h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.feature-card {
    background-color: var(--light-color);
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: var(--transition);
    box-shadow: var(--box-shadow);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.feature-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.feature-card h3 {
    margin-bottom: 15px;
}

/* Markets Section */
.markets {
    background-color: var(--light-color);
}

.markets h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.markets-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.market-item {
    background-color: var(--white);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
    box-shadow: var(--box-shadow);
    transition: var(--transition);
}

.market-item:hover {
    background-color: var(--primary-color);
    color: var(--white);
    transform: translateY(-5px);
}

/* Benefits Section */
.benefits {
    background-color: var(--white);
}

.benefits h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.benefits-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.benefits-text {
    flex: 1;
}

.benefits-text h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
}

.benefits-text ul {
    margin-bottom: 30px;
    list-style-type: none;
}

.benefits-text ul li {
    margin-bottom: 15px;
    position: relative;
    padding-left: 30px;
}

.benefits-text ul li:before {
    content: "\f00c";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--success-color);
}

.limited-time {
    color: var(--danger-color);
    font-weight: 600;
    margin: 20px 0;
}

.benefits-image {
    flex: 1;
}

.benefits-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
}

/* Considerations Section */
.considerations {
    background-color: var(--light-color);
}

.considerations h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.tab-btn {
    padding: 10px 30px;
    background-color: transparent;
    border: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.tab-btn.active {
    border-bottom: 3px solid var(--primary-color);
    color: var(--primary-color);
}

.tab-content {
    display: none;
    background-color: var(--white);
    padding: 30px;
    border-radius: 10px;
    box-shadow: var(--box-shadow);
}

.tab-content.active {
    display: block;
}

.tab-content h3 {
    margin-bottom: 20px;
    color: var(--primary-color);
}

.tab-content ul {
    list-style-type: none;
}

.tab-content ul li {
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
}

.tab-content ul li:before {
    content: "\f054";
    font-family: "Font Awesome 6 Free";
    font-weight: 900;
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-size: 0.8rem;
}

/* Contact Section */
.contact {
    background-color: var(--white);
}

.contact h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 2.5rem;
}

.contact-content {
    display: flex;
    gap: 50px;
}

.contact-info {
    flex: 1;
}

.contact-info p {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.contact-info i {
    margin-right: 10px;
    color: var(--primary-color);
    width: 20px;
    text-align: center;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--light-color);
    color: var(--primary-color);
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--primary-color);
    color: var(--white);
}

.contact-form {
    flex: 1;
}

.contact-form form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    transition: var(--transition);
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.2);
}

.contact-form textarea {
    min-height: 120px;
    resize: vertical;
}

/* Footer */
footer {
    background-color: var(--dark-color);
    color: var(--white);
    padding: 60px 0 0;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-logo img {
    height: 40px;
    margin-bottom: 15px;
}

.footer-logo p {
    color: rgba(255, 255, 255, 0.7);
}

.footer-links h4 {
    color: var(--white);
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 10px;
}

.footer-links ul li a {
    color: rgba(255, 255, 255, 0.7);
}

.footer-links ul li a:hover {
    color: var(--white);
}

.footer-newsletter h4 {
    color: var(--white);
    margin-bottom: 20px;
    font-size: 1.2rem;
}

.footer-newsletter input {
    width: 100%;
    padding: 12px 15px;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.footer-disclaimer {
    margin-top: 15px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
}

/* Responsive Styles */
@media (max-width: 992px) {
    .hero-content {
        max-width: 100%;
        text-align: center;
    }

    .hero-image {
        position: static;
        width: 100%;
        margin-top: 40px;
    }

    .benefits-content {
        flex-direction: column;
    }

    .contact-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .nav-links {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .auth-buttons {
        display: none;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    section {
        padding: 60px 0;
    }
}

@media (max-width: 576px) {
    .hero h1 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .cta-buttons .btn {
        display: block;
        width: 100%;
        margin-bottom: 15px;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}
