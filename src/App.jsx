import IconMemory from "./assets/images/icon-memory.svg";
import IconReaction from "./assets/images/icon-reaction.svg";
import IconVerbal from "./assets/images/icon-verbal.svg";
import IconVisual from "./assets/images/icon-visual.svg";

function App() {
	return (
		<main>
			<div className="results">
				<div className="results__myresults">
					<p className="myresults__title">Your Result</p>

					<div className="myresults__score">
						<p className="score__accent">76</p>
						<p>of 100</p>
					</div>

					<div className="myresults__information">
						<p className="information__title">Great</p>
						<p className="information__text">
							You scored higher than 65% of the people who have taken these
							tests.
						</p>
					</div>
				</div>

				<div className="results__summary">
					<p className="summary__title">Summary</p>

					<div className="summary__categories">
						<div
							className="summary__category"
							style={{
								"--clr-bg": "var(--clr-red-opacity)",
								"--clr-text": "var(--clr-red)",
							}}
						>
							<div className="category__info">
								<img src={IconReaction} alt="" />
								<p>Reaction</p>
							</div>
							<p className="category__rating">
								<span>80</span> / 100
							</p>
						</div>
						<div
							className="summary__category"
							style={{
								"--clr-bg": "var(--clr-yellow-opacity)",
								"--clr-text": "var(--clr-yellow)",
							}}
						>
							<div className="category__info">
								<img src={IconMemory} alt="" />
								<p>Memory</p>
							</div>
							<p className="category__rating">
								<span>92</span> / 100
							</p>
						</div>
						<div
							className="summary__category"
							style={{
								"--clr-bg": "var(--clr-teal-opacity)",
								"--clr-text": "var(--clr-teal)",
							}}
						>
							<div className="category__info">
								<img src={IconVerbal} alt="" />
								<p>Verbal</p>
							</div>
							<p className="category__rating">
								<span>61</span> / 100
							</p>
						</div>
						<div
							className="summary__category"
							style={{
								"--clr-bg": "var(--clr-cobalt-blue-opacity)",
								"--clr-text": "var(--clr-cobalt-blue)",
							}}
						>
							<div className="category__info">
								<img src={IconVisual} alt="" />
								<p>Visual</p>
							</div>
							<p className="category__rating">
								<span>72</span> / 100
							</p>
						</div>
					</div>

					<div>
						<button className="summary__button">Continue</button>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
