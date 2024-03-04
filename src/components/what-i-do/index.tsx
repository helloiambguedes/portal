import styles from "./styled.module.css";

export const WhatIDo = () => (
	<div className={styles.App}>
		<div className={styles.Container} id="whatido">
			<span>
				<span className={styles.FirstPart}>Driven by</span> curiosity and a love
				for tackling challenges, I&rsquo;m always pushing the boundaries of my comfort
				zone. My days are dedicated to learning, building, or thinking through
				something new, reflecting my zest for life
			</span>
		</div>
		{/* <div className={styles.Container} id="whatido">
			<span>
				<span className={styles.FirstPart}>My services</span>
				<ul>
					<li>Your website or app is slow?</li>
					<li>Are you struggling to scale?</li>
					<li>Do you have a slow delivery pace?</li>
					<li>Do you need a custom solution?</li>
					<li>Are you spending more than what you want?</li>
				</ul>
			</span>
		</div> */}
	</div>
);
