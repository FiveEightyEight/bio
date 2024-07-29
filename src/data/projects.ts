type Project = {
    title: string;
    description: string;
    alt: string;
    image: string;
    href: string;
    skills: { icon: string; label: string }[];
}

const projects: Project[] = [
    {
        title: "Encarnacion Service",
        description:
            "Company site for a customs agency based in the Dominican Republic.",
        alt: "Encarnacion Service Site Preview",
        image: "encarnacion_services.png",
        href: "https://encarnacionservice.com.do/",
        skills: [
            { icon: "astro", label: "Astro" },
            { icon: "aws", label: "AWS" },
            { icon: "tailwindcss", label: "Tailwind" },
            { icon: "react", label: "React" },
        ],
    },
    {
        title: "Econic Space",
        description:
            "A website for Econic Space, a digital marketing company built on wordpress.",
        alt: "Econic Space Site Preview",
        image: "econic_space.png",
        href: "https://econic.space/",
        skills: [
            { icon: "wordpress", label: "Wordpress" },
            { icon: "css", label: "CSS" },
        ],
    },
    {
        title: "Junctions: Virtual Friend",
        description:
            "A mobile application for creating and connecting to a virtual AI friend.",
        alt: "Junctions: Virtual Friend Logo",
        image: "junctions_virtual_friend.webp",
        href: "https://apps.apple.com/us/app/junctions-virtual-friend/id6484401708",
        skills: [
            { icon: "react", label: "React Native" },
            { icon: "expo", label: "Expo" },
            { icon: "typescript", label: "Typescript" },
        ],
    },
    {
        title: "Palabrón",
        description:
            "Wordle, but in Español",
        alt: "Screenshot of Palabrón",
        image: "palabron.png",
        href: "https://palabron.app",
        skills: [
            { icon: "astro", label: "Astro" },
            { icon: "react", label: "React" },
            { icon: "tailwindcss", label: "Tailwind" },
            { icon: "typescript", label: "Typescript" },
        ],
    }
];
export default projects;
