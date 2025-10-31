import { APP_TITLE } from "@/const";
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
            <h3 className="text-lg font-semibold mb-4">{APP_TITLE}</h3>
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
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {APP_TITLE}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
