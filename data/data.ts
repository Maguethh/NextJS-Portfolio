import {
  SiGithub,
  SiReact,
  SiJavascript,
  SiHotjar,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiCss3,
  SiStripe,
  SiAmazonaws,
  SiTailwindcss,
  SiBootstrap,
  SiFigma,
  SiDribbble,
  SiPython,
  SiDjango,
  SiHtmx,
  SiMysql,
  SiSwift,
  SiFirebase,
  SiMapbox,
  SiApple,
  SiExpo,
  SiNpm,
} from "react-icons/si";
import { text } from "stream/consumers";

// Text Generate Words
export const presentation = `I'm a full-stack developer with a passion for creating innovative solutions. I specialize in crafting creative solutions that are both user-friendly and visually appealing. I have experience working with a variety of technologies, including React, Node.js, and MongoDB.`;

// Slide Carousel Cards
export const slides = [
  {
    index: 0,
    title: "My Hotel Project Platform",
    subtitle: "Professionnal Project",
    thumbnail: "/images/mhp-thumbnail.PNG",
    images: [
      "/images/mhp1.PNG",
      "/images/mhp2.PNG",
      "/images/mhp3.PNG",
      "images/mhp4.PNG",
    ],
    textTitle: "Detailed Information",
    textParagraphs: [
      "For over a year, I worked at the startup My Hotel Project, where I developed the entire platform from scratch using the M.E.R.N stack (MongoDB, Express, React, Node.js). My role involved continuously enhancing the platform, implementing new features, and refining the user experience to ensure it was as seamless as possible.",

      "My Hotel Project is a cutting-edge platform designed to connect investors with project owners in the hospitality industry. It features a comprehensive database of over 30,000 professionals in the hospitality sector, facilitating meaningful and impactful connections.",

      "On the front-end, I utilized React and TypeScript, complemented by vanilla CSS to achieve optimal control, flexibility, and maintainability. For the back-end, I employed Node.js with Express. As a proponent of clean code, I ensured the codebase was well-documented and maintainable by separating controllers, middlewares, and adhering to best practices. Additionally, I prioritized user data security using bcrypt and JWT, and implemented cron jobs for scheduled tasks such as email dispatches and alerts.",
    ],
    stack: [
      {
        icon: SiJavascript,
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        tooltip: "JavaScript",
      },
      {
        icon: SiTypescript,
        href: "https://www.typescriptlang.org/",
        tooltip: "TypeScript",
      },
      {
        icon: SiReact,
        href: "https://reactjs.org/",
        tooltip: "React",
      },
      {
        icon: SiNodedotjs,
        href: "https://nodejs.org/",
        tooltip: "Node.js",
      },
      {
        icon: SiMongodb,
        href: "https://www.mongodb.com/",
        tooltip: "MongoDB",
      },

      {
        icon: SiStripe,
        href: "https://stripe.com/",
        tooltip: "Stripe",
      },
      {
        icon: SiAmazonaws,
        href: "https://aws.amazon.com/",
        tooltip: "AWS",
      },
      {
        icon: SiHotjar,
        href: "https://www.hotjar.com/",
        tooltip: "Hotjar",
      },
    ],
  },
  {
    index: 1,
    title: "Some of my front-end projects",
    subtitle: "Personal Project",
    thumbnail: "/images/front-thumbnail.png",
    images: [
      "/images/front1.png",
      "/images/front2.png",
      "/images/front3.png",
      "/images/front5.png",
      "/images/front6.png",
      "/images/front7.png",
    ],
    textTitle: "Detailed Information",
    textParagraphs: [
      "In this section, you will find a showcase of some of my front-end projects. I prioritize using vanilla CSS to achieve better performance and greater flexibility. This approach allows me to have more control over the styling and ensures that the code is lightweight and efficient, leading to faster load times and an improved user experience.",

      "My projects are designed to be fully responsive, providing an optimal viewing experience across a wide range of devices, from mobile phones to desktop computers. Additionally, I adhere to SEO best practices to enhance search engine visibility and ensure that my projects are easily discoverable on the web.",

      "I follow best practices in front-end development, ensuring that my code is clean, maintainable, and well-documented. While I often prefer using vanilla CSS for its performance benefits, I also utilize frameworks like Bootstrap and Tailwind CSS when the project requirements call for it. These frameworks can significantly speed up development time and provide a robust set of pre-designed components, making them ideal for certain scenarios.",

      "All of the projects showcased here are available on my GitHub page. I believe in the importance of open-source contributions and sharing knowledge with the developer community. Feel free to explore the source code to gain insights into my development process and the techniques I employ.",
    ],
    stack: [
      {
        href: "https://example.com",
        icon: SiCss3,
        tooltip: "CSS",
      },
      {
        href: "https://another-example.com",
        icon: SiBootstrap,
        tooltip: "Bootstrap",
      },
      {
        href: "https://another-example.com",
        icon: SiTailwindcss,
        tooltip: "Tailwind CSS",
      },
      {
        href: "https://another-example.com",
        icon: SiFigma,
        tooltip: "Figma",
      },
      {
        href: "https://another-example.com",
        icon: SiDribbble,
        tooltip: "Dribbble",
      },
    ],
  },
  {
    index: 2,
    title: "Creation of a Recipe Maker SaaS",
    subtitle: "Personal Project",
    thumbnail: "/images/recipe-thumbnail.png",
    images: ["/images/recipe1.png", "/images/recipe2.png"],
    textTitle: "Detailed Information",
    textParagraphs: [
      "This project is a SaaS application for recipe creation, developed using HTMX, Python, and Django. The chosen stack facilitates rapid development and efficient handling of dynamic web interactions. HTMX enables modern web applications to be more dynamic with minimal JavaScript reliance, while Python and Django offer robust backend capabilities for quick prototyping and scalable application development.",

      "The application integrates with the Edamam API, providing access to a comprehensive database of foods and their nutritional values, including calories, kilojoules, carbohydrates, and more. Users can create custom recipes by selecting ingredients and specifying their quantities, along with defining the number of portions. The application automatically calculates the complete nutritional information for each dish, offering detailed insights.",

      "To optimize performance and minimize API call costs, the application employs a caching system. This ensures frequently accessed data is stored locally, reducing the number of API requests and maintaining low operational costs. The caching mechanism is designed for high efficiency, ensuring the application remains responsive and cost-effective.",

      "This project exemplifies the effective use of modern web development tools and APIs to create practical and user-friendly applications. The source code and detailed documentation for this project are available on the GitHub page for further exploration.",
    ],
    stack: [
      {
        href: "https://example.com",
        icon: SiPython,
        tooltip: "Python",
      },
      {
        href: "https://another-example.com",
        icon: SiDjango,
        tooltip: "Django",
      },
      {
        href: "https://another-example.com",
        icon: SiHtmx,
        tooltip: "HTMX",
      },
      {
        href: "https://another-example.com",
        icon: SiMysql,
        tooltip: "MySQL",
      },
    ],
  },
  {
    index: 3,
    title: "Spark Mobile Applicaton",
    subtitle: "Personal Project",
    thumbnail: "/images/spark-thumbnail.png",
    images: [
      "/images/spark1.png",
      "/images/spark2.png",
      "/images/spark3.png",
      "/images/spark4.png",
    ],
    textTitle: "Detailed Information",
    textParagraphs: [
      "I am currently developing my own mobile application called Spark, which aims to revolutionize the event management industry. Spark is an open-source project, with the iOS version being built using Swift and Firebase. The app is designed to be the ultimate event companion, allowing users to see real-time events happening around them, create their own events, and communicate with other users through chat rooms.",

      "Spark also includes a version tailored for professionals, such as bars, nightclubs, and other event venues. This professional version offers a range of advantages, enabling businesses to promote their events, engage with customers, and manage their event-related activities more efficiently.",

      "Although the project is still in its early stages, it shows great promise. Pre-registrations for Spark are scheduled to open at the end of the year, inviting users and professionals alike to join the platform and experience its innovative features. The open-source nature of the project encourages collaboration and contributions from the developer community, ensuring continuous improvement and feature enhancements.",
    ],
    stack: [
      {
        href: "https://example.com",
        icon: SiSwift,
        tooltip: "Swift",
      },
      {
        href: "https://another-example.com",
        icon: SiFirebase,
        tooltip: "Firebase",
      },
      {
        href: "https://another-example.com",
        icon: SiMapbox,
        tooltip: "Mapbox",
      },
      {
        href: "https://another-example.com",
        icon: SiApple,
        tooltip: "IOS",
      },
    ],
  },
  {
    index: 4,
    title: "React Native Component Library",
    subtitle: "Personal Project",
    thumbnail: "/images/gradient-thumbnail.png",
    images: ["/images/gradient-1.png"],
    textTitle: "Detailed Information",
    textParagraphs: [
      "I developed a React Native library compatible with Expo that focuses on providing gradient text components. Utilizing TypeScript, React Native, and MaskedView, this library allows developers to effortlessly integrate gradient text effects into their Expo applications. The primary goal was to offer a solution that enhances visual appeal while maintaining high performance and flexibility.",

      "The library features a range of customizable properties, allowing for extensive control over gradient styling and text presentation. It is designed to be responsive, ensuring that gradient text adapts seamlessly to various screen sizes and orientations. The lightweight nature of the library contributes to fast load times and optimal performance, making it an efficient choice for developers looking to enrich their user interfaces with gradient effects.",

      "By focusing on ease of use and customization, the library provides a straightforward API that integrates smoothly with existing Expo projects. Its performance and flexibility are ideal for both simple and complex design requirements, positioning it as a valuable tool in the React Native ecosystem. The source code and documentation are available on my GitHub page for developers to explore and contribute to.",
    ],
    stack: [
      {
        href: "https://example.com",
        icon: SiReact,
        tooltip: "React Native",
      },
      {
        href: "https://another-example.com",
        icon: SiNpm,
        tooltip: "NPM",
      },
      {
        href: "https://another-example.com",
        icon: SiExpo,
        tooltip: "Expo",
      },
      {
        href: "https://another-example.com",
        icon: SiTypescript,
        tooltip: "TypeScript",
      },
    ],
  },
];
