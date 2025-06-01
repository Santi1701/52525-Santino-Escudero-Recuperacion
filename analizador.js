import antlr4 from 'antlr4';
import LogicaLexer from './LogicaLexer.js';
import LogicaParser from './LogicaParser.js';
import TraductorJS from './TraductorJS.js';
import fs from 'fs';

// 1. Configuración inicial
const inputFile = 'input.txt';
const outputFile = 'output.js';

// 2. Leer entrada
console.log(`Leyendo archivo de entrada: ${inputFile}`);
const input = fs.readFileSync(inputFile, 'utf8');

// 3. Análisis léxico
console.log('\n=== Fase de Análisis Léxico ===');
const chars = new antlr4.InputStream(input);
const lexer = new LogicaLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
tokens.fill();

// Mostrar tabla de tokens
console.log('\nTokens encontrados:');
console.log('| Línea | Tipo            | Valor        |');
console.log('|-------|-----------------|--------------|');
tokens.tokens.forEach(token => {
    if (token.type !== -1) {
        const tokenType = LogicaLexer.symbolicNames[token.type];
        console.log(`| ${token.line.toString().padEnd(5)} | ${tokenType.padEnd(15)} | ${token.text.padEnd(12)} |`);
    }
});

// 4. Análisis sintáctico
console.log('\n=== Fase de Análisis Sintáctico ===');
const parser = new LogicaParser(tokens);
parser.buildParseTrees = true;

// Construir el árbol
console.log('\nConstruyendo árbol de análisis...');
const tree = parser.programa();

// Mostrar árbol en formato texto
function printTree(node, indent = '') {
    if (node.children) {
        console.log(indent + (parser.ruleNames[node.ruleIndex] || 'terminal'));
        node.children.forEach(child => printTree(child, indent + '  '));
    } else {
        console.log(indent + `TOKEN: ${node.getText()}`);
    }
}

console.log('\nÁrbol de análisis sintáctico:');
printTree(tree);

// 5. Traducción a JavaScript
console.log('\n=== Fase de Traducción ===');
const visitor = new TraductorJS();
visitor.debug = true;

console.log('\nIniciando traducción...');
const jsCode = visitor.visit(tree);

// 6. Resultados
console.log('\n=== Resultado Final ===');


// 7. Guardar en archivo
fs.writeFileSync(outputFile, typeof jsCode === 'string' ? jsCode : JSON.stringify(jsCode, null, 2));
console.log(`\nTraducción guardada en: ${outputFile}`);

// 8. Mostrar contenido del archivo output en terminal
console.log('\n=== Traduccion a Java Script ===');
try {
    const outputContent = fs.readFileSync(outputFile, 'utf8');
    console.log('\n' + outputContent);
} catch (error) {
    console.error('\nError al leer el archivo de salida:', error);
}

console.log('\nProceso completado exitosamente!');