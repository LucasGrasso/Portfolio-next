type Category = "BackEnd" | "FrontEnd" | "Blockchain" | "Python";
type ToolboxItem = {
  name: string;
  category: Category;
};

const toolboxItems: ToolboxItem[] = [
  {
    name: "TypeScript",
    category: "BackEnd",
  },
  {
    name: "Python",
    category: "BackEnd",
  },
  {
    name: "JavaScript",
    category: "BackEnd",
  },
  {
    name: "FastAPI",
    category: "BackEnd",
  },
  {
    name: "Rust",
    category: "BackEnd",
  },
  {
    name: "Sanic",
    category: "BackEnd",
  },
  {
    name: "Node.js",
    category: "BackEnd",
  },
  {
    name: "Express.js",
    category: "BackEnd",
  },
  {
    name: "Nest.js",
    category: "BackEnd",
  },
  {
    name: "MongoDB",
    category: "BackEnd",
  },
  {
    name: "Flask",
    category: "BackEnd",
  },
  {
    name: "React",
    category: "FrontEnd",
  },
  {
    name: "HTML",
    category: "FrontEnd",
  },
  {
    name: "CSS",
    category: "FrontEnd",
  },
  {
    name: "Bootstrap",
    category: "FrontEnd",
  },
  {
    name: "Figma",
    category: "FrontEnd",
  },
  {
    name: "UI Design",
    category: "FrontEnd",
  },
  {
    name: "Solidity",
    category: "Blockchain",
  },
  {
    name: "Rust",
    category: "Blockchain",
  },
  {
    name: "Web3.js",
    category: "Blockchain",
  },
  {
    name: "Ethers.js",
    category: "Blockchain",
  },
  {
    name: "Hardhat",
    category: "Blockchain",
  },
  {
    name: "Foundry",
    category: "Blockchain",
  },
  {
    name: "Wagmi",
    category: "Blockchain",
  },
  {
    name: "Substrate",
    category: "Blockchain",
  },
  {
    name: "Frame",
    category: "Blockchain",
  },
  {
    name: "Ink!",
    category: "Blockchain",
  },
  {
    name: "Jupyter",
    category: "Python",
  },
  {
    name: "Pandas",
    category: "Python",
  },
  {
    name: "Numpy",
    category: "Python",
  },
  {
    name: "Scipy",
    category: "Python",
  },
  {
    name: "Matplotlib",
    category: "Python",
  },
  {
    name: "Seaborn",
    category: "Python",
  },
  {
    name: "Scikit-learn",
    category: "Python",
  },
  {
    name: "BeautifulSoup",
    category: "Python",
  },
  {
    name: "Selenium",
    category: "Python",
  },
];

const toolboxItemsPerCategory = toolboxItems.reduce(
  (acc: Record<string, string[]>, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item.name);
    return acc;
  },
  {} as Record<Category, string[]>
); // Update the type of the accumulator

const categories = Object.keys(toolboxItemsPerCategory) as Category[];

export {
  type ToolboxItem,
  type Category,
  toolboxItems,
  toolboxItemsPerCategory,
  categories,
};
