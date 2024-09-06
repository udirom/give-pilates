# Give Pilates Website

This project is an inspirational website for Give Pilates, a Pilates Reformer Studio. It uses React with TypeScript and Material-UI (MUI) for the frontend and Node.js with Express for the backend. The website is designed to support Hebrew (RTL) content and features a modern, clean design with a focus on the studio's branding and aesthetics.

## Project Structure

```
give-pilates/
├── frontend/         # React frontend
│   ├── public/
│   │   └── images/   # Place your images here
│   └── src/
│       ├── components/
│       ├── App.tsx
│       └── index.tsx
├── backend/          # Node.js backend
│   └── src/
│       └── server.ts
└── README.md
```

## Setup and Running the Project

### Frontend

1. Navigate to the frontend directory:
   ```
   cd give-pilates/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### Backend

1. Navigate to the backend directory:
   ```
   cd give-pilates/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

   The backend will be available at `http://localhost:3001`.

## Updating Content

To update the website content, modify the respective component files in the `frontend/src/components/` directory. Each section of the website has its own component file:

- `Header.tsx`: Update the navigation menu items (RTL layout)
- `Hero.tsx`: Update the main hero image and text
- `About.tsx`: Modify the introduction and team information
- `Schedule.tsx`: Update studio location, working hours, and class schedule
- `Gallery.tsx`: Add or remove images in the `itemData` array (rotating gallery)
- `Testimonials.tsx`: Update client testimonials
- `Contact.tsx`: Update contact information and social media links

## Adding Images

1. Place your images in the `frontend/public/images/` directory.
2. The following images are required:
   - `give-logo.png`: The main logo used in the header
   - `give-logo-with-pattern.png`: The logo with the leaf pattern used in the hero section
   - `leaf-pattern.png`: The leaf pattern used as the background for the entire website
   - `about-image.jpg`: The image used in the About section
   - `gallery-image1.jpg` to `gallery-image6.jpg`: Images for the gallery section (rotating)
   - `avatar1.jpg` to `avatar3.jpg`: Avatar images for testimonials
3. Update the image paths in the respective components if necessary.

## Customizing the Theme

To customize the Material-UI theme, modify the `theme` object in `frontend/src/App.tsx`. The current theme uses the following color scheme:

- Primary color: #41675E (dark green from the logo)
- Secondary color: #F0F0F0 (light gray for backgrounds)

You can change colors, typography, and other design elements to match your brand.

## RTL Support

The website is designed to support Right-to-Left (RTL) layout for Hebrew content. The `Header` component has been updated to use RTL layout. If you need to make further RTL adjustments, consider the following:

1. Use `flexDirection: 'row-reverse'` for horizontal layouts.
2. Use `textAlign: 'right'` for text alignment.
3. Use Material-UI's RTL support by wrapping your app with `<ThemeProvider>` and `<CssBaseline>` components, and setting the `direction` property in your theme to 'rtl'.

## Rotating Gallery

The `Gallery` component now features a rotating image carousel. Images change automatically every 5 seconds. To modify this behavior:

1. Adjust the interval in the `useEffect` hook in `Gallery.tsx`.
2. To add or remove images, modify the `itemData` array in the same file.
3. You can customize the transition effect by changing the CSS transitions in the image container Box component.

## Building for Production

1. Build the frontend:
   ```
   cd give-pilates/frontend
   npm run build
   ```

2. Start the production server:
   ```
   cd ../backend
   npm start
   ```

   The production version of the website will be served at `http://localhost:3001`.

## Maintenance

- Regularly update dependencies by running `npm update` in both frontend and backend directories.
- Keep the content up-to-date by editing the respective component files.
- Backup your project regularly.
- To add new pages or sections, create new components in the `frontend/src/components/` directory and add corresponding routes in `App.tsx`.

For any questions or issues, please contact the developer.