// app/layout.tsx
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata = {
  title: "EventDp",
  description: "Дипломийн ажил",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <Header />
        </div>

        {/* <div className="h-24"/>  */}
        {/* Header-ийн өндөр */}

        <main className="pt-20">
          {children} {/* Энэ хэсэгт тухайн route-ийн агуулга харагдана */}
        </main>

        <Footer />
      </body>
    </html>
  );
}
