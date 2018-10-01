import React from "react";
import { Link } from "react-router-dom";
import { Image, Icon } from "semantic-ui-react";
import CardContainer from "./../app/shared/cards/CardContainer.js";
import * as images from "./images";
import * as routes from "./routes.js";
import * as externalRoutes from "./externalRoutes.js";

export const GALLERY_CARD_ITEMS = {
	CARD_ONE: {
		image: <Image src={images.GALLERY_ITEM_IMG} size={"large"} centered />,
		header: "The Sphinx",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "olive"
	},
	CARD_TWO: {
		image: <Image src={images.SCULPTURE_IMG} size={"large"} centered />,
		header: "The Bearded Man",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "purple"
	},
	CARD_THREE: {
		image: <Image src={images.CHOPPER_IMG} size={"large"} centered />,
		header: "The Chopper",
		meta: "Museum of Modern Art (MoMA)",
		description: "Random Text That Is Placed Here For Looks",
		color: "orange"
	},
	CARD_FOUR: {
		image: <Image src={images.PANTHER_IMG} size={"large"} centered />,
		header: "The Jungle Book",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "pink"
	},
	CARD_FIVE: {
		image: <Image src={images.SPHINX_IMG} size={"large"} centered />,
		header: "The Dark Sphinx",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "teal"
	},
	CARD_SIX: {
		image: <Image src={images.GOOSE_BOY} size={"large"} centered />,
		header: "The Boy",
		meta: "MET museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "red"
	},
	CARD_SEVEN: {
		image: <Image src={ images.MUMMY_IMG } size={ "large" } centered />,
		header: "The Mummy",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "yellow"
	},
	CARD_EIGHT: {
		image: <Image src={ images.MONUMENT_IMG } size={ "large" } centered />,
		header: "The Wall of Souls",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "blue"
	},
	CARD_NINE: {
		image: <Image src={ images.KNIGHT_IMG } size={ "large" } centered />,
		header: "The Golden Knight",
		meta: "MET Museum",
		description: "Random Text That Is Placed Here For Looks",
		color: "brown"
	}
};

export const HOME_ITEMS = {
	HOME_CARD: {
		image: images.ABOUT_ME_IMG,
		header: "Marvin Moise",
		meta: "Undergraduate",
		description: [
			"I am a self-driven, dedicated and focused Kennesaw State Univeristy undergraduate. Curiosity is my super ",
			"power and giving up is my weakness. I strive to achieve all my goals and never ",
			"cease to learn from my mistakes. I’m always seeking new and exciting activities, ",
			"challenges and projects to tackle."
		].join(""),
		color: "red"
	}
};

export const HOME_ABOUT_ME = {
	ABOUT_ME: {
		card: <CardContainer {...HOME_ITEMS.HOME_CARD} />,
		header: "Marvin Moise",
		meta: "An existential Being",
		description: [
			"As a supporter of Viktor Frankl, the celebrated Austrian psychiatrist, ",
			"and Holocaust survivor, I too have found myself finding meaning in situations ",
			"to which I felt void of it. One such example as insignificant as it may seem, ",
			"changed my own view of my existential reality. Over the course of five months in ",
			"Fort Leonard Wood Missouri, I had gone through rigorous military training that had ",
			"left me physically and mentally exhausted, incapable of thinking logically or clearly ",
			"for myself; I began noticing subconscious signs to an imminent mental approach towards ",
			"a feeling of existential vacuum. My daily duties made it so that I was operating on average ",
			"with a little over 4 hours of sleep every day for weeks, every other day at four am sharp we ",
			"would run miles, never truly knowing how long or how far we would run to. One day we run for ",
			"what felt like an eternity, during this run I came to a point where I literally wanted to give up ",
			"and I began questioning why I joined the army in the first place. My life at that instant was ",
			"literally void of all meaning; I had lost all possible aspirations in ever completing my training.",
			"Within that minute, time within my perception had halted. In that minute I began to think, attempting ",
			"to find hope; reason; meaning anything that would trigger me to continue to push onwards. ",
			"For a slight second, I snapped out of my perpetual sense of hopelessness and I noticed the person ",
			"in front of me, Montez, he was one of my best friends while I was at training. I saw the look ",
			"anguish and resentment on his face as he struggled to keep pace. That picture that is now ",
			"engraved in my memory was all I needed to keep pushing myself, in an instant all meaning and ",
			"hope had returned to me. I no longer thought of myself as an individual but as a member of a ",
			"unit. Witnessing Montez struggle allowed me to feel as if I was not struggling alone, ",
			"but that I was struggling collectively with others who were right here living in the moment next to ",
			"me, men and women who were just as tired and miserable as I was. This experience has shown me the ",
			"reality to Frankl’s claim from Man’s Search for Meaning that “everything can be taken from a ",
			"man but one thing; the last of the human freedoms-to choose one’s attitude in any given set of ",
			"circumstances, to choose one’s own way” (Frankl). Through my struggle, it was not until I had ",
			"reached my breaking point was I able to find meaning and purpose for my own struggling. "
		].join(""),
		extra: "Nothing extra yet, more personal writings to come"
	}
};

export const NAV_BAR_LINKS = {
	NAV_BAR_LOGO: {
		as: "a",
		logo: <Image size="tiny" src={images.NAV_BAR_LOGO} avatar />,
		dropDownText: "Dropdown",
		to: "/"
	},
	NAV_BAR_HOME_ABOUT_ME: {
		name: 'den stories',
		to: routes.ABOUT_ME
	},
	NAV_BAR_GALLERY: {
		name: 'gallery',
		to: routes.GALLERY
	},
	NAV_BAR_GIT_HUB: {
		as: "a",
		href: externalRoutes.GIT_HUB,
		icon: <Icon name="github" size="big" color="teal" />
	},
	NAV_BAR_LINKEDIN: {
		as: "a",
		href: externalRoutes.LINKEDIN, 
		icon: <Icon name="linkedin" size="big" color="violet" />
	}
};
