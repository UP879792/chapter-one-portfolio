const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/97686570/hLGvNJaaBjQJCwPW.png";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="ChapterOne Logo" className="h-10 w-auto" />
              <h3 className="text-lg font-semibold">ChapterOne</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building digital experiences that drive business growth. We
              specialize in custom web applications, booking systems, and
              data-driven dashboards.
            </p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/demos">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Live Demos
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:welearnfy@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  welearnfy@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+447440238312"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +44 7440 238312
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} ChapterOne - Web Development Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
