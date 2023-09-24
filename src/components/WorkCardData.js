import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.jpg"
import pro3 from "../assets/project3.png"

const ProjectCardData=[
    {
        imgsrc:pro1,
        title:"Image Generation AI",
        text:"Generative Adversarial Networks (GANs) are a powerful subset of machine learning models where two neural networks, the Generator and the Discriminator, engage in a fascinating adversarial dance. The Generator, fueled by random noise, attempts to craft realistic images from scratch. At the same time, the Discriminator, trained on a dataset of real images, endeavors to distinguish genuine from counterfeit. This competitive interplay leads to a constant push and pull, with the Generator tirelessly honing its skills to create images that become increasingly indistinguishable from reality. Through this dynamic process of refinement, GANs have emerged as a groundbreaking technology for generating high-quality, synthetic data, and have found applications in art, image generation, and even data augmentation across various domains."
        ,view:"https://imagegen-5b90a.firebaseapp.com/"
    },
    {
        imgsrc:pro2,
        title:"AI Companion",
        text:"On our AI Companion website, you can create your unique digital character and engage in lifelike conversations with them. Customize their personality and knowledge, making them a real presence in your digital life. We've integrated OpenAI API, PlanetScale, and Prisma to enhance your experience, ensuring cutting-edge technology powers your virtual companions. Say hello to a new era of interactive companionship right here on our platform."
        ,view:"https://amay-ai-companion.vercel.app/"
    },
    {
        imgsrc:pro3,
        title:"NFT Marketplace",
        text:"Welcome to our NFT marketplace, where blockchain technology seamlessly integrates with the Web3 SDK to transform digital ownership. Here, creators can tokenize their digital masterpieces, turning them into unique NFTs securely recorded on the blockchain. Collectors can browse, bid on, and own these digital treasures, with transparent and immutable ownership records. With the Web3 SDK, users can effortlessly connect their wallets, mint NFTs, and engage in a vibrant marketplace experience. Join us in shaping the future of digital assets, where scarcity, authenticity, and innovation converge to redefine the way we value and exchange digital content."
        ,view:"https://nftmarketplace-phi.vercel.app/"
    },
  
]

export default ProjectCardData;