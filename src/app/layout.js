import './globals.css';

export const metadata = {
  title: 'Landing Page',
  description: 'Basic Next.js Landing Page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        {children}
      </body>
    </html>
  );
}
