export enum PROFILE {
  IMAGE = "https://media.licdn.com/dms/image/D4D03AQHHbBbuWNJzPg/profile-displayphoto-shrink_200_200/0/1696165822126?e=1712793600&v=beta&t=FhocQL41E0YT50P5RgqS2GJB8m6hYPhJp4aQ8yOKbsc",
}

export enum EDUCATION {
  UNIVERSITY_IMAGE = "https://upload.wikimedia.org/wikipedia/en/e/e4/National_University_of_Computer_and_Emerging_Sciences_logo.png",
}

export enum COMPANY {
  XIQ_LOGO = "https://media.xiq.io/wepapp/wp-content/uploads/2020/05/19160335/xiQ-logo.png",
  TINTASH_LOGO = "https://images.softwaresuggest.com/company_logo/1565605957011_b_124.png",
}

export const EXPERIENCE_DATA = [
  {
    designation: "Associate Full Stack",
    company_name: "xiQ,Inc.",
    logo: COMPANY.XIQ_LOGO as string,
    duration: "JULY 2023 - Current",
    description: [
      "WORKED IN GENERATIVE AI",
      "WORKED IN GENERATIVE AI",
      "WORKED IN GENERATIVE AI",
    ],
  },
  {
    designation: "MERN STACK INTERN",
    company_name: "Tintash",
    duration: "JULY 2023 - Current",
    logo: COMPANY.TINTASH_LOGO as string,
    description: ["WORKED IN GENERATIVE AI"],
  },
];

export const PROJECTS_DATA = [
  {
    image: "/images/Artsy.PNG",
    name: "Artsy",
    description:
      "Artsy is an innovative online platform developed to enable seller to customer and customer to seller bidding. It serves as a dynamic marketplace for artists to exhibit their creations, interact with potential buyers, and facilitate seamless transactions.",
    technologies: "REACT NODE FAST API FIREBASE",
    redirection: "https://artsy-delta.vercel.app/",
  },
  {
    image: "/images/EXL.PNG",
    name: "EXL",
    description:
      "This is a React-Java project that provides a generic marketplace service allowing sellers to upload pictures, videos, and associated XML files for approval. The uploaded data is stored in a predefined file structure on a separate file server and can be filtered and searched by potential buyers. Inspired by online marketplaces such as OLX and Ebay.",
    technologies: "REACT JAVA APACHE-TOMCAT",
    redirection: "https://github.com/ahmedazhar2299/EXL",
  },
  {
    image: "/images/Nobiety.PNG",
    name: "Nobiety",
    description:
      "This project utilizes React, Truffle, and Solidity to create a decentralized application (Dapp) for secure and transparent campaign funding on the Ethereum blockchain. It features Metamask login and an escrow wallet for transactions.",
    technologies: "REACT Solidity Truffle",
    redirection: "https://github.com/ahmedazhar2299/Campaign-Funding-Dapp",
  },
];
