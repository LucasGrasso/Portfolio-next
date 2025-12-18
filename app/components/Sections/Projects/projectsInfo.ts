type Project = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "ERC-5516",
    description:
      "An interface for non-transferrable, Multi-owned NFTs binding to Ethereum accounts.",
    url: "https://eips.ethereum.org/EIPS/eip-5516",
    tags: ["Blockchain", "Solidity"],
  },
  {
    title: "GIC",
    description:
      "A First Order Logic based Progamming language + SLD resolution engine.",
    url: "https://github.com/LucasGrasso/gic",
    tags: ["Rust", "Logic Programming", "Interpreters"],
  },
  {
    title: "Beaconchain utils",
    description: "Typescript utilities for working with the Eth2 Beacon Chain.",
    url: "https://www.npmjs.com/package/@decentstake/beaconchain-utils",
    tags: ["Blockchain", "Typescript"],
  },
  {
    title: "Zerti",
    description:
      "Web3 project whose main objective is to ensure the validity and trust of certifications based on the immutability and transparency of blockchain technology.",
    url: "https://github.com/ZertiApp",
    tags: ["Blockchain", "Solidity", "Typescript", "React"],
  },
  {
    title: "GHG Emissions in Argentina",
    description:
      'My entry for the "Contar con Datos 2022" data visualization contest. It analyzes and visualizes greenhouse gas emissions in Argentina from agriculture and livestock.',
    url: "https://github.com/LucasGrasso/ContarConDatos2022-GEI_Argentina",
    tags: ["Data", "Python"],
  },
  {
    title: "Solidity Scale Codec",
    description: "An implementation of SCALE codec in Solidity.",
    url: "https://www.npmjs.com/package/solidity-scale-codec",
    tags: ["Blockchain", "Solidity", "Polkadot"],
  },
];

const tags = projects.reduce((acc, project) => {
  project.tags.forEach((tag) => {
    if (!acc.includes(tag)) {
      acc.push(tag);
    }
  });
  return acc;
}, [] as string[]);

export { projects, type Project, tags };
