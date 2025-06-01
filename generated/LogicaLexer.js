// Generated from c:/Users/celin/52525-SantinoEscudero/Logica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,12,80,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,
0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,5,8,62,
8,8,10,8,12,8,65,9,8,1,9,4,9,68,8,9,11,9,12,9,69,1,10,1,10,1,11,4,11,75,
8,11,11,11,12,11,76,1,11,1,11,0,0,12,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,
17,9,19,10,21,11,23,12,1,0,5,2,0,65,90,97,122,3,0,48,57,65,90,97,122,1,0,
48,57,5,0,33,33,44,44,46,46,58,59,63,63,3,0,9,10,13,13,32,32,82,0,1,1,0,
0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,1,
25,1,0,0,0,3,33,1,0,0,0,5,43,1,0,0,0,7,49,1,0,0,0,9,51,1,0,0,0,11,53,1,0,
0,0,13,55,1,0,0,0,15,57,1,0,0,0,17,59,1,0,0,0,19,67,1,0,0,0,21,71,1,0,0,
0,23,74,1,0,0,0,25,26,5,117,0,0,26,27,5,115,0,0,27,28,5,117,0,0,28,29,5,
97,0,0,29,30,5,114,0,0,30,31,5,105,0,0,31,32,5,111,0,0,32,2,1,0,0,0,33,34,
5,118,0,0,34,35,5,101,0,0,35,36,5,114,0,0,36,37,5,100,0,0,37,38,5,97,0,0,
38,39,5,100,0,0,39,40,5,101,0,0,40,41,5,114,0,0,41,42,5,111,0,0,42,4,1,0,
0,0,43,44,5,102,0,0,44,45,5,97,0,0,45,46,5,108,0,0,46,47,5,115,0,0,47,48,
5,111,0,0,48,6,1,0,0,0,49,50,5,123,0,0,50,8,1,0,0,0,51,52,5,125,0,0,52,10,
1,0,0,0,53,54,5,61,0,0,54,12,1,0,0,0,55,56,5,59,0,0,56,14,1,0,0,0,57,58,
5,34,0,0,58,16,1,0,0,0,59,63,7,0,0,0,60,62,7,1,0,0,61,60,1,0,0,0,62,65,1,
0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,18,1,0,0,0,65,63,1,0,0,0,66,68,7,2,
0,0,67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,20,1,0,0,
0,71,72,7,3,0,0,72,22,1,0,0,0,73,75,7,4,0,0,74,73,1,0,0,0,75,76,1,0,0,0,
76,74,1,0,0,0,76,77,1,0,0,0,77,78,1,0,0,0,78,79,6,11,0,0,79,24,1,0,0,0,4,
0,63,69,76,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class LogicaLexer extends antlr4.Lexer {

    static grammarFileName = "Logica.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'usuario'", "'verdadero'", "'falso'", "'{'", 
                         "'}'", "'='", "';'", "'\"'" ];
	static symbolicNames = [ null, "USUARIO", "VERDADERO", "FALSO", "L_LLAVE", 
                          "R_LLAVE", "IGUAL", "PUNTOYCOMA", "COMILLAS", 
                          "IDENTIFICADOR", "NUMERO", "SIMBOLO", "WS" ];
	static ruleNames = [ "USUARIO", "VERDADERO", "FALSO", "L_LLAVE", "R_LLAVE", 
                      "IGUAL", "PUNTOYCOMA", "COMILLAS", "IDENTIFICADOR", 
                      "NUMERO", "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

LogicaLexer.EOF = antlr4.Token.EOF;
LogicaLexer.USUARIO = 1;
LogicaLexer.VERDADERO = 2;
LogicaLexer.FALSO = 3;
LogicaLexer.L_LLAVE = 4;
LogicaLexer.R_LLAVE = 5;
LogicaLexer.IGUAL = 6;
LogicaLexer.PUNTOYCOMA = 7;
LogicaLexer.COMILLAS = 8;
LogicaLexer.IDENTIFICADOR = 9;
LogicaLexer.NUMERO = 10;
LogicaLexer.SIMBOLO = 11;
LogicaLexer.WS = 12;



