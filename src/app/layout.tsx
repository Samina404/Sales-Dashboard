import "./globals.css";
import Providers from "./providers"; // VERY IMPORTANT

export const metadata = {
  title: "Sales Dashboard",
  description: "Sales dashboard using API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>   {/* MUST WRAP ALL CHILDREN */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
