import '../styles/globals.css';



const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      {/* <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" /> */}
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Gorditas:wght@400;700&display=swap" rel="stylesheet" /></link>
      </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
