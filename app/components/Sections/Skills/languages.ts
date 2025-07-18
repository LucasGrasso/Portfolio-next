const languages: Record<string, string>[] = [
  {
    name: "Python",
    text: "print('Hello, World!')",
    language: "python",
  },
  {
    name: "TypeScript",
    text: "console.log('Hello, World!')",
    language: "typescript",
  },
  {
    name: "Solidity",
    text: "contract HelloWorld is ERC1155 {}",
    language: "solidity",
  },
  {
    name: "Rust",
    text: 'println!("Hello, World!");',
    language: "rust",
  },
  {
    name: "HTML",
    text: "<h1>Hello, World!</h1>",
    language: "html",
  },
  {
    name: "React",
    text: "{ greetings && <HelloWorld /> }",
    language: "tsx",
  },
  {
    name: "Haskell",
    text: "helloworld :: String",
    language: "haskell",
  },
  {
    name: "Git",
    text: "git commit -m 'Hello, World!'",
    language: "git",
  },
  {
    name: "C++",
    text: "std::cout << 'Hello, World!' << std::endl;",
    language: "cpp",
  },
  {
    name: "Css",
    text: "h1::before { content: 'Hello, World!'; }",
    language: "css",
  },
  {
    name: "Latex",
    text: "\\Large{Hello, World!}",
    language: "latex",
  },
  {
    name: "Prolog",
    text: "greet :- write(Hello, World!).",
    language: "prolog",
  },
  {
    name: "Java",
    text: "System.out.println('Hello, World!');",
    language: "java",
  },
  {
    name: "Smalltalk",
    text: "(World new) greet:'Hello!';",
    language: "smalltalk",
  },
];

export default languages;
