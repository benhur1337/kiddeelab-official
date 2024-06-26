import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from "next/script";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

import { Footer, Navbar, NavbarInvis, PhoneBar } from "@/components/client";

export const metadata: Metadata = {
  title: "Kiddee Lab",
  description: "More than coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        id="headScript"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5TWRF58');`,
        }}
      ></Script>
      <body
        style={{ scrollBehavior: "smooth", userSelect: "none" }}
        className={inter.className}
      >
        <Navbar />
        <NavbarInvis />
        <div>
          {children}
          <PhoneBar />
        </div>
        <Analytics />
        <SpeedInsights />

        <Script
          strategy="afterInteractive"
          id="agentScript"
          dangerouslySetInnerHTML={{
            __html: `(function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '664d75fb0d2a56fe55e6f2fb' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script');`,
          }}
        ></Script>
        <Footer />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5TWRF58"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
