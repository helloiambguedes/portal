import Head from "next/head";
import Script from "next/script";
import { BrandMark } from "@/components/brand-mark";
import { Services } from "@/components/services";

const TITLE = "helloiambguedes";
const DESCRIPTION =
	"Welcome to my portal, the starting point to discover more about my career.";

export default function Home() {
	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name="description" content={DESCRIPTION} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content={TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:image" content="/image.png" />

				<style>
					{`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');`}
					{`@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')`}
				</style>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<BrandMark />
				<Services />
			</main>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-D75SLEP2XJ"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-D75SLEP2XJ');`}
			</Script>
		</>
	);
}
