import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "@/styles/Home.module.css";

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
				</style>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.App}>
					<div>
						<div className={styles.ImageContainer}>
							<div className={styles.Shadow} />
							<Image
								className={styles.AvatarImage}
								src="/image.png"
								alt="me"
								width={320}
								height={320}
							/>
						</div>
						<section className={styles.AboutMe}>
							<h1>
								<span className={styles.BlueSpan}>hello</span>
								<span className={styles.GreySpan}>iam</span>
								<span>bguedes</span>
							</h1>
						</section>
						<section className={styles.List}>
							<a
								href="https://twitter.com/helloiambguedes"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/twitter.svg"
									alt="twitter"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://t.me/helloiambguedes"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/telegram.svg"
									alt="telegram"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://www.instagram.com/helloiambguedes/"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/instagram.svg"
									alt="instagram"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="https://www.linkedin.com/in/brunoacguedes/"
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src="/linkedin.svg"
									alt="linkedin"
									width={28}
									height={28}
								/>
							</a>
							<a
								href="mailto:bguedesdev@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<Image src="/mail.svg" alt="mail" width={28} height={28} />
							</a>
							<a
								href="https://github.com/helloiambguedes"
								target="_blank"
								rel="noreferrer"
							>
								<Image src="/github.svg" alt="github" width={28} height={28} />
							</a>
						</section>
					</div>
				</div>
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
