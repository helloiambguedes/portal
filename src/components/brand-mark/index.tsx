import Image from "next/image";
import styles from "./styled.module.css";
import Link from "next/link";

let toggleCallback = () => {};
export const toggleBrandMark = toggleCallback;

export const BrandMark = () => {
	return (
		<div className={styles.Container}>
			<div>
				<section className={styles.AboutMe}>
					<h1><Link href="/">
						<span className={styles.BlueSpan}>hello</span>
						<span className={styles.GreySpan}>iam</span>
						<span>bguedes</span>
						</Link>
					</h1>
				</section>
				<section className={styles.List}>
					<a
						href="https://twitter.com/helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/twitter.svg" alt="twitter" width={22} height={22} />
					</a>
					<a
						href="https://t.me/helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/telegram.svg" alt="telegram" width={22} height={22} />
					</a>
					<a
						href="https://www.instagram.com/helloiambguedes/"
						target="_blank"
						rel="noreferrer"
					>
						<Image
							src="/instagram.svg"
							alt="instagram"
							width={22}
							height={22}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/brunoacguedes/"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/linkedin.svg" alt="linkedin" width={22} height={22} />
					</a>
					<a
						href="mailto:in@helloiambguedes.com"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/mail.svg" alt="mail" width={22} height={22} />
					</a>
					<a
						href="https://github.com/helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/github.svg" alt="github" width={22} height={22} />
					</a>
					<a
						href="https://medium.com/@helloiambguedes"
						target="_blank"
						rel="noreferrer"
					>
						<Image src="/medium.svg" alt="medium" width={28} height={28} />
					</a>
				</section>
			</div>
		</div>
	);
};
