# Qodebyte Tech Academy Website

A modern, responsive website for Qodebyte Tech Academy, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth GSAP animations and transitions
- **SEO Optimized**: Comprehensive meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **Accessibility**: ARIA labels, keyboard navigation, and focus management

### User Experience
- **Hero Section**: Compelling landing with clear CTAs and social proof
- **Course Catalog**: 5 featured courses with filtering and search
- **Interactive Forms**: Working contact form with validation
- **Testimonials**: Student success stories with carousel navigation
- **Newsletter Signup**: Email subscription in footer
- **Social Integration**: Social media links and sharing

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **Component Architecture**: Modular, reusable components
- **State Management**: React hooks for local state
- **Form Handling**: Controlled inputs with validation
- **Responsive Images**: Next.js Image optimization
- **Performance Monitoring**: Loading states and error handling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + CSS Modules
- **UI Components**: Radix UI Themes
- **Animations**: GSAP (GreenSock)
- **Icons**: React Icons
- **Fonts**: Oswald (Google Fonts)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
qodebyte/
├── app/                    # Next.js app directory
│   ├── components/        # Reusable components
│   ├── courses/          # Course-related components
│   ├── hero/             # Hero section
│   ├── testimonial/      # Testimonials
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
│   ├── imgs/            # Images
│   ├── fonts/           # Custom fonts
│   ├── robots.txt       # SEO robots file
│   └── sitemap.xml      # SEO sitemap
├── package.json          # Dependencies
└── README.md            # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qodebyte.git
   cd qodebyte
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors and Themes
- Primary colors are defined in Tailwind config
- Custom CSS variables in `globals.css`
- Radix UI theme integration

### Content Updates
- **Courses**: Edit `app/courses/Courses.tsx`
- **Testimonials**: Update `app/testimonial/Testimonials.tsx`
- **Hero Content**: Modify `app/Animations.tsx` (LandInAnimation)
- **Contact Info**: Update `app/Animations.tsx` (ContactAnimation)

### Adding New Pages
1. Create new component in `app/` directory
2. Add route in `app/layout.tsx` if needed
3. Update navigation in `app/Animations.tsx`
4. Add to sitemap.xml

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=https://qodebyte.com
```

### SEO Settings
- Update metadata in `app/layout.tsx`
- Modify `public/robots.txt`
- Edit `public/sitemap.xml`
- Update verification codes in metadata

### Analytics
Add Google Analytics or other tracking:
```typescript
// In layout.tsx or specific pages
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## 🚀 Performance

- Image optimization with Next.js
- Lazy loading for components
- Efficient animations with GSAP
- CSS optimization
- Bundle size optimization

## 🔒 Security

- Form validation
- XSS protection
- CSRF protection
- Secure headers
- Input sanitization

## 📊 Analytics & Monitoring

- Performance monitoring
- Error tracking
- User analytics
- SEO tracking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Configure build settings
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: contact@qodebyte.com
- Website: https://qodebyte.com
- Documentation: [Add your docs link]

## 🎯 Roadmap

- [ ] User authentication system
- [ ] Course enrollment functionality
- [ ] Payment integration
- [ ] Learning management system
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode toggle

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- GSAP for smooth animations
- Radix UI for accessible components
- All contributors and supporters

---

**Built with ❤️ by the Qodebyte Team**
