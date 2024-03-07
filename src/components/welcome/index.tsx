import Image from "next/image";
import styles from "./styled.module.css";
import { useEffect, useRef, useState } from "react";

const imagesList = [
	"/lifestyle-image.jpeg",
	"/working-image.jpeg",
	"/body-image.jpeg",
	"/business-image.jpeg",
];

export const Welcome = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const shadowRef = useRef();
	const imageRef = useRef();
	useEffect(() => {
		const intervalId = setInterval(() => {
			let newOpacity = Math.random();
			if (newOpacity > 0.8) {
				setTimeout(() => {
					setCurrentImage(
						currentImage < imagesList.length - 1 ? currentImage + 1 : 0,
					);
					if (currentImage === imagesList.length - 1) {
						// @ts-ignore
						imageRef.current.style["object-fit"] = "contain";
					} else {
						// @ts-ignore
						imageRef.current.style["object-fit"] = "cover";
					}
				}, 900);
				newOpacity = 1;
			} else {
				newOpacity /= 3;
			}
			// @ts-ignore
			shadowRef.current.style.opacity = newOpacity;
			setTimeout(() => {
				// @ts-ignore
				shadowRef.current.style.opacity = 0;
			}, 1300);
		}, 1500);
		return () => {
			clearInterval(intervalId);
		};
	}, [shadowRef, currentImage, setCurrentImage, imageRef]);
	return (
		<div className={styles.App}>
			<div>
				<section className={styles.AboutMe}>
					<h1>
						<span className={styles.BlueSpan}>hello</span>
						<span className={styles.GreySpan}>iam</span>
						<span>bguedes</span>
					</h1>
				</section>
				<div className={styles.ImageContainer}>
					{/* @ts-ignore */}
					<div className={styles.Shadow} ref={shadowRef} />
					<Image
						// @ts-ignore
						ref={imageRef}
						className={styles.AvatarImage}
						src={imagesList[currentImage]}
						alt="me"
						width={320}
						height={320}
					/>
				</div>
				<section className={styles.List}>
					<a
						href="https://twitter.com/helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/twitter.svg" alt="twitter" width={28} height={28} />
					</a>
					<a
						href="https://t.me/helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/telegram.svg" alt="telegram" width={28} height={28} />
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
						<Image src="/linkedin.svg" alt="linkedin" width={28} height={28} />
					</a>
					<a
						href="mailto:in@helloiambguedes.com"
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
					<a
						href="https://medium.com/@helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/medium.svg" alt="medium" width={28} height={28} />
					</a>
				</section>
				<div className={styles.WhatDoIDo}>
					<h3>
						from big scale software to
						<br />
						solopreneurship and freelancing
						<br />
						<span className={styles.FunnyRole}>everything but a designer 😅</span>
					</h3>
				</div>
			</div>
		</div>
	);
};
