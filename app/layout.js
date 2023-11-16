import { Inter } from "next/font/google";
import "../styles/main.scss";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Custom Ui Components",
  description: "Simple UI Components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
