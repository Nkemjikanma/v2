export const introItems = [
	{
		value: "Male; 32"
	}, {
		value: "Father and husband"
	}, {
		value: "Guitarist and songwriter"
	}]

export const experiences = [{
	discStyle: 'Active',
	name: "Navro",
	duration: "Nov. 2022 - Current"
},
{
	name: "Thames composite",
	duration: "Jan. 2021 - Oct. 2021"
},
]

export const bookShelf = {
	current: [
		{
			title: 'The road to the country',
			author: 'Chigozie Obioma'
		},
		{
			title: "Javascript: The definitive guide",
			author: "David Flanagan"
		},
		{
			title: "Mickey Baker's Complete Course in Jazz Guitar: Book 1",
			author: "Mickey Baker"
		}
	],
	previous: [{}]
}

export const toolings = [{
	tool: 'Typescript',
	link: '/images/logos/typescript.svg'
}, {
	tool: 'Node',
	link: '/images/logos/node.svg'
}, {
	tool: 'React',
	link: '/images/logos/react.svg'
}, {
	tool: 'Next',
	link: '/images/logos/next.svg'
}, {
	tool: 'Tailwind',
	link: '/images/logos/tailwind.svg'
}, {
	tool: 'Prisma',
	link: '/images/logos/prisma.svg'
}, {
	tool: 'Hono',
	link: '/images/logos/hono.png'
}, {
	tool: 'Reac Testing Library',
	link: '/images/logos/rtl.png'
}, {
	tool: 'Jest',
	link: '/images/logos/jest.svg'
}, {
	tool: 'MSW',
	link: '/images/logos/msw.svg'
}]

export const socials = [{
	name: "Farcaster",
	logo: "/images/logos/farcaster.svg",
	profile: 'https://warpcast.com/nkemjika'
},
{
	name: "Github",
	logo: "/images/logos/github.svg",
	profile: 'https://github.com/Nkemjikanma'
},
{
	name: "Linkedin",
	logo: "/images/logos/linkedin.svg",
	profile: 'https://www.linkedin.com/in/nkemjika-ohanyere/'
},
{
	name: "Mail",
	logo: "/images/logos/email.svg",
	profile: 'mailto:nkemjikaohanyere@gmail.com'
},
]

export const ens = {
	logo: "/images/logos/ens.svg",
	domains: ['nkemjika.eth', "nkem.eth", "keyof.eth"]
}

export const BOOKS_API = import.meta.env.VITE_BOOKS_API_KEY
