# GitHub Pages Portfolio

A collection of web applications by 6uclz1, hosted on GitHub Pages.

## Overview

This website automatically fetches and displays all GitHub Pages-enabled repositories from the 6uclz1 GitHub account. It provides an organized view of web applications with descriptions, technologies used, and direct links to both the live sites and their source code.

## Features

- 🔍 **Automatic Discovery**: Fetches repository data from GitHub API
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🏷️ **Technology Tags**: Shows the primary language and topics for each project
- 🔗 **Quick Access**: Direct links to live sites and GitHub repositories
- 📅 **Last Updated**: Sorted by most recently updated projects

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **GitHub API** - Repository data source

## Development

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/6uclz1/github-pages-portfolio.git

# Navigate to the project directory
cd github-pages-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
# Create a production build
npm run build

# The static files will be generated in the 'out' directory
```

### Deploy to GitHub Pages

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy the site
3. The site will be available at `https://6uclz1.github.io/github-pages-portfolio/`

## API Usage

This project uses the GitHub REST API to fetch repository information:

- **Endpoint**: `https://api.github.com/users/6uclz1/repos`
- **Rate Limit**: 60 requests per hour for unauthenticated requests
- **Filtering**: Only repositories with `has_pages: true` are displayed

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── WebAppCard.tsx    # Individual app card component
├── lib/
│   └── github.ts         # GitHub API functions
└── types/
    └── github.ts         # TypeScript type definitions
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to open issues or submit pull requests if you have suggestions for improvements!
