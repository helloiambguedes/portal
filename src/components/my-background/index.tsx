import Image from "next/image";
import { useGSAP } from "@gsap/react";
import styles from "./styled.module.css";

export const MyBackground = () => {
	return (
		<div className={styles.App}>
			<span className={styles.FirstPart}>My journey.</span>
			<div className={styles.PartContainer}>
				<div className={styles.Container}>
					<div>
						<p>
							<span className={styles.FirstPart}>4.</span>Had the opportunity to
							join Talent Protocol venture at the start of 2023. I was hyped to
							learn about crypto, meet people from the space and learn about all
							the things that were going on. I learned a lot about the thirst of
							building and companionship and will never forget this experience.
						</p>
						<ul>
							<li><a href="https://mates.talentprotocol.com/" target="_blank">Talent Mates</a></li>
							<li><a href="https://ds.talentprotocol.com/?path=/docs/" target="_blank">Design System</a></li>
							<li>Talent Homepage</li>
							<li>Season 3 Website</li>
							<li>Season 2 Website</li>
						</ul>
					</div>
				</div>
				<div className={styles.ImagesContainer}>
					<Image
						alt="Talent Mate"
						src="/image.png"
						width={280}
						height={280}
						style={{ objectFit: "cover", borderTopLeftRadius: 124 }}
					/>
					<Image
						alt="Talent Protocol"
						src="/talent-protocol.png"
						width={280}
						height={100}
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<div className={styles.ReversedPartContainer}>
				<div className={styles.Container}>
					<p>
						<span className={styles.FirstPart}>3.</span>I was part of the
						MindSwap bootcamp during 2023 and had the
						opportunity to help students grow in the IT sector. It was a truly
						fulfilling experience in personal and professional levels.
					</p>
					<ul>
						<li>Designed and lectured Frontend Upskill</li>
						<li>Frontend Teacher</li>
					</ul>
				</div>
				<div className={styles.ImagesContainer}>
					<Image
						alt="Mindswap"
						src="/mindswap.png"
						width={200}
						height={160}
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			<div className={styles.PartContainer}>
				<div className={styles.Container}>
					<p>
						<span className={styles.FirstPart}>2.</span>Since I was young, I
						wanted to build something meaningful that I'd be proud of for years.
						So, I co-founded Mozantech, a place where we offer consulting and
						software solutions based on what we believe is important in our
						field.
					</p>
					<ul>
						<li>CTO</li>
						<li>Consultant</li>
						<li>Building turn key projects</li>
					</ul>
				</div>
				<div className={styles.ImagesContainer}>
					<Image
						alt="Mozantech"
						src="/mozantech.png"
						width={200}
						height={100}
						style={{ objectFit: "contain" }}
					/>
				</div>
			</div>
			<div className={styles.ReversedPartContainer}>
				<div className={styles.Container}>
					<p>
						<span className={styles.FirstPart}>1.</span>Finding the words to
						describe what I’ve lived here is very difficult but I feel that this
						journey made me grew in levels I couldn’t even think of before.
						Either personally and professionally, this made me take the next
						steps in my life. Going from junior level to leading a team of 40+
						developers truly refined my approach to both technical challenges
						and interpersonal dynamics.
					</p>
					<ul>
						<li><a href="tvg.com" target="_blank">TVG Web App</a></li>
						<li><a href="https://apps.apple.com/us/app/tvg-horse-racing-betting-app/id839488130" target="_blank">TVG Native App</a></li>
						<li>Internal tools</li>
					</ul>
				</div>
				<div className={styles.ImagesContainer}>
					<Image
						alt="TVG"
						src="/tvg.jpg"
						width={200}
						height={200}
						style={{ objectFit: "contain", borderRadius: 4 }}
					/>
				</div>
			</div>
		</div>
	);
};
