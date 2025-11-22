import { motion } from "motion/react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
    { label: "Security", href: "#security" },
    { label: "Cookies", href: "#cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden" style={{ backgroundColor: '#014325' }}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 180, 11, 0.05)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="mb-4" style={{ color: '#FFFFFF' }}>MindDish</h4>
              <p className="mb-6 leading-relaxed" style={{ color: '#FFFFFF', opacity: 0.7 }}>
                AI-powered cooking discovery that transforms how you learn from
                culinary content. Master any recipe, understand any technique.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-yellow/20 border border-white/10 hover:border-yellow/30 flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-yellow transition-colors" style={{ color: '#FFFFFF', opacity: 0.6 }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Product links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-6 text-sm uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-yellow transition-colors text-sm"
                    style={{ color: '#FFFFFF', opacity: 0.6 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-6 text-sm uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-yellow transition-colors text-sm"
                    style={{ color: '#FFFFFF', opacity: 0.6 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-6 text-sm uppercase tracking-wider" style={{ color: '#FFFFFF' }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-yellow transition-colors text-sm"
                    style={{ color: '#FFFFFF', opacity: 0.6 }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
        >
          <p className="text-sm" style={{ color: '#FFFFFF', opacity: 0.4 }}>
            © {new Date().getFullYear()} MindDish. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="hover:text-yellow transition-colors text-sm"
              style={{ color: '#FFFFFF', opacity: 0.4 }}
            >
              Status
            </a>
            <a
              href="#"
              className="hover:text-yellow transition-colors text-sm"
              style={{ color: '#FFFFFF', opacity: 0.4 }}
            >
              Documentation
            </a>
            <a
              href="#"
              className="hover:text-yellow transition-colors text-sm"
              style={{ color: '#FFFFFF', opacity: 0.4 }}
            >
              API
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}