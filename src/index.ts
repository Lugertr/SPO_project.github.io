import Lexer from "./Lexer";
import Parser from "./Parser";
import StackMachine from "./StackMachine";

const code = './src/TestWhile.txt';

const lexer = new Lexer(code); //создание лексера
lexer.lexAnalysis()            //разборка кода на токены
//lexer.printCode()
//lexer.printTokens()

const parser = new Parser(lexer.tokenList);     //Создание парсера
const rootNode = parser.parseCode();            //Парсинг кода, распределение токенов по дереву,
                                                //Их запись в стек и обработка

const runCode = new StackMachine();
runCode.run(rootNode);                           //Выполнение кода
