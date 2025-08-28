

import { Container, Flex, Text, Heading, Button } from "@radix-ui/themes";
import { FaCode, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container width={{ initial: "85%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span>Q</span>
              <FaCode />
              <span>B</span>
            </div>
            <Text size="3" className="text-gray-300">
              Empowering the next generation of tech professionals with world-class education and hands-on experience.
            </Text>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <Heading size="4">Quick Links</Heading>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white transition-colors">Our Courses</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <Heading size="4">Popular Courses</Heading>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Development</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <Heading size="4">Stay Updated</Heading>
            <Text size="2" className="text-gray-300">
              Get the latest course updates, tech news, and exclusive offers delivered to your inbox.
            </Text>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              {subscribeStatus === 'success' && (
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm">
                  Successfully subscribed!
                </div>
              )}
              {subscribeStatus === 'error' && (
                <div className="bg-red-100 text-red-800 px-3 py-2 rounded text-sm">
                  Something went wrong. Please try again.
                </div>
              )}
              
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
                <Button 
                  type="submit"
                  disabled={isSubscribing}
                  className="rounded-l-none bg-blue-600 hover:bg-blue-700"
                >
                  {isSubscribing ? '...' : 'Subscribe'}
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Text size="2" className="text-gray-400">
              © 2024 Qodebyte Tech Academy. All rights reserved.
            </Text>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
