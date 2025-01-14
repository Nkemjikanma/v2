export const introItems = [
	{
		value: "Father and husband",
	},
	{
		value: "Fullstack developer",
	},
	{
		value: "Guitarist and songwriter",
	},
];

export const experiences = [
	{
		discStyle: "Past",
		name: "Navro",
		duration: "Nov. 2022 - Sept. 2024",
	},
	{
		discStyle: "Past",
		name: "Thames composite",
		duration: "Jan. 2021 - Oct. 2021",
	},
];

// all items have the same width, delay = total duration / number of elements
export const bookShelf = {
	current: [
		{
			title: "The road to the country",
			author: "Chigozie Obioma",
		},
		{
			title: "Javascript: The definitive guide",
			author: "David Flanagan",
		},
		{
			title: "Mickey Baker's Complete Course in Jazz Guitar: Book 1",
			author: "Mickey Baker",
		},
		{
			title: "Sankofa",
			author: "Chibundu Onuzo",
		},
	],
	previous: [{}],
};

export const toolings = [
	{
		tool: "Typescript",
		link: "/images/logos/typescript.svg",
	},
	{
		tool: "NodeJS",
		link: "/images/logos/node.svg",
	},
	{
		tool: "React",
		link: "/images/logos/react.svg",
	},
	{
		tool: "NextJS",
		link: "/images/logos/next.svg",
	},
	{
		tool: "TailwindCSS",
		link: "/images/logos/tailwind.svg",
	},
	{
		tool: "Prisma",
		link: "/images/logos/prisma.svg",
	},
	{
		tool: "Hono",
		link: "/images/logos/hono.png",
	},
	{
		tool: "Reac Testing Library",
		link: "/images/logos/rtl.png",
	},
	{
		tool: "Jest",
		link: "/images/logos/jest.svg",
	},
	{
		tool: "MSW",
		link: "/images/logos/msw.svg",
	},
	{
		tool: "Solidity",
		link: "/images/logos/solidity.svg",
	},
	{
		tool: "Rust",
		link: "/images/logos/rust.svg",
	},
	{
		tool: "foundry",
		link: "/images/logos/foundry.png",
	},
];

export const socials = [
	{
		name: "Github",
		logo: "/images/logos/github.svg",
		profile: "https://github.com/Nkemjikanma",
	},
	{
		name: "Linkedin",
		logo: "/images/logos/linkedin.svg",
		profile: "https://www.linkedin.com/in/nkemjika-ohanyere/",
	},
	{
		name: "Mail",
		logo: "/images/logos/email.svg",
		profile: "mailto:nkemjikaohanyere@gmail.com",
	},
	{
		name: "Farcaster",
		logo: "/images/logos/farcaster.svg",
		profile: "https://warpcast.com/nkemjika",
	},
];

export const ens = {
	logo: "/images/logos/ens.svg",
	domains: ["nkemjika.eth", "nkem.eth", "keyof.eth"],
};

export const BOOKS_API = import.meta.env.VITE_BOOKS_API_KEY;
