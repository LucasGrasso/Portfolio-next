const languages: Record<string, string>[] = [
  {
    name: "Python",
    text: "print('Hello world!')",
    language: "python",
  },
  {
    name: "TypeScript",
    text: "console.log('Hello world!')",
    language: "typescript",
  },
  {
    name: "Solidity",
    text: "contract HelloWorld is ERC1155 {}",
    language: "solidity",
  },
  {
    name: "Rust",
    text: 'println!("Hello world!");',
    language: "rust",
  },
  {
    name: "HTML",
    text: "<h1> Hello world! </h1>",
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
    text: "git commit -m 'Hello world!'",
    language: "git",
  },
  {
    name: "C++",
    text: "std::cout << 'Hello world!' << std::endl;",
    language: "cpp",
  },
  {
    name: "Css",
    text: "h1::before { content: 'Hello world!'; }",
    language: "css",
  },
  {
    name: "Latex",
    text: "\\Large{Hello world!}",
    language: "latex",
  },
  {
    name: "Prolog",
    text: "?- print(HELLO_WORLD).",
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
