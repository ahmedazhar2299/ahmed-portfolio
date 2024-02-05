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
