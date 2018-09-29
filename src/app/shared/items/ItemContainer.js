import React, { Component } from "react";
import ItemComponent from "./ItemComponent.jsx";
import CardContainer from "./../../cards/CardContainer.js";
import itemLogo from "./../../images/itemLogo.JPG";

class ItemContainer extends Component {
	render() {
		const props = {
			// src: itemLogo,
			card: <CardContainer />,
			header: "Marvin Moise",
			meta: "An existential Being",
			description:
				"As a supporter of Viktor Frankl, the celebrated Austrian psychiatrist, and Holocaust survivor, I too have found myself finding meaning in situations to which I felt void of it. One such example as insignificant as it may seem, changed my own view of my existential reality. Over the course of five months in Fort Leonard Wood Missouri, I had gone through rigorous military training that had left me physically and mentally exhausted, incapable of thinking logically or clearly for myself; I began noticing subconscious signs to an imminent mental approach towards a feeling of existential vacuum. My daily duties made it so that I was operating on average with a little over 4 hours of sleep every day for weeks, every other day at four am sharp we would run miles, never truly knowing how long or how far we would run to. One day we run for what felt like an eternity, during this run I came to a point where I literally wanted to give up and I began questioning why I joined the army in the first place. My life at that instant was literally void of all meaning; I had lost all possible aspirations in ever completing my training. Within that minute, time within my perception had halted. In that minute I began to think, attempting to find hope; reason; meaning anything that would trigger me to continue to push onwards. For a slight second, I snapped out of my perpetual sense of hopelessness and I noticed the person in front of me, Montez, he was one of my best friends while I was at training. I saw the look anguish and resentment on his face as he struggled to keep pace. That picture that is now engraved in my memory was all I needed to keep pushing myself, in an instant all meaning and hope had returned to me. I no longer thought of myself as an individual but as a member of a unit. Witnessing Montez struggle allowed me to feel as if I was not struggling alone, but that I was struggling collectively with others who were right here living in the moment next to me, men and women who were just as tired and miserable as I was. This experience has shown me the reality to Frankl’s claim from Man’s Search for Meaning that “everything can be taken from a man but one thing; the last of the human freedoms-to choose one’s attitude in any given set of circumstances, to choose one’s own way” (Frankl). Through my struggle, it was not until I had reached my breaking point was I able to find meaning and purpose for my own struggling.",
			extra: "Nothing extra yet"
		};

		return <ItemComponent {...props} />;
	}
}
export default ItemContainer;
