import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./global.scss";
import "./breakpoints.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          {children}
        </div>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
