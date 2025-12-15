# My Portfolio Site

A premium animated portfolio designed to showcase technical expertise and creativity. Built with React, Vite, Tailwind CSS, Framer Motion, and AOS.

## Features

- Responsive design that works on all devices
- Animated background effects with blob movements
- Interactive project cards with tech stack tags
- Contact form with FormSubmit integration
- Comment section (with Supabase integration)
- Smooth scrolling navigation
- Dark mode aesthetic

- ## Featured Projects

### 1. Gamified Learning Platform (Frontend)
**Tech Stack:** `SolidJS` `UnoCSS` `Vite` `Anime.js` `PWA` `Bun`
Modern interactive learning platform for rural education built with SolidJS and advanced animations for enhanced user engagement.

### 2. Face Recognition System
**Tech Stack:** `Python` `OpenCV` `Computer Vision` `ML`
End-to-end facial recognition system with data collection, detection, and real-time classification modules for biometric applications.

### 3. Personal Portfolio Website
**Tech Stack:** `React` `Vite` `Tailwind CSS` `Framer Motion` `Supabase`
Responsive animated portfolio showcasing projects and technical skills with interactive components and Supabase-powered comments.


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Debasis-Behera4143/My-Portfolio-site.git
   ```

2. Navigate to the project directory:
   ```bash
   cd My-Portfolio-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Supabase Configuration (Optional)

To enable the comment functionality, you need to set up a Supabase account:

1. Create a Supabase account at https://supabase.io
2. Create a new project
3. Copy your Supabase URL and Anon Key
4. Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```
5. Create a table named `portfolio_comments` with the following columns:
   - `id` (UUID, primary key)
   - `content` (text)
   - `user_name` (text)
   - `profile_image` (text, optional)
   - `is_pinned` (boolean)
   - `created_at` (timestamp)

## Deployment

To build the project for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Framer Motion
- AOS (Animate On Scroll)
- Lucide React Icons
- Supabase (for comments)
- FormSubmit (for contact form)

## Author

Debasis Behera

## License

This project is open source and available under the MIT License.
