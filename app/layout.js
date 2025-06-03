import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "Rentals, Real Estate, Property Management",
  description:
    "Find your perfect rental property with Property Pulse, the leading platform for real estate listings and property management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
