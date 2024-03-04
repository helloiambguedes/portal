import Head from "next/head";
import Script from "next/script";
import { Welcome } from "@/components/welcome";
import { WhatIDo } from "@/components/what-i-do";
import { BrandMark } from "@/components/brand-mark";
import "animate.css";
import { useState } from "react";
import { MyBackground } from "@/components/my-background";

const TITLE = "helloiambguedes";
const DESCRIPTION =
	"Welcome to my portal, the starting point to discover more about my career.";

export default function Home() {
	const [slides, setSlides] = useState({
		1: undefined,
		2: undefined,
	});
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
				</style>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<BrandMark />
				<Welcome />
				<WhatIDo />
				<MyBackground />
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
