grammar Logica;

programa
    : usuario+ EOF
    ;

usuario
    : USUARIO identificador L_LLAVE atributo* R_LLAVE
    ;

atributo
    : identificador IGUAL valor PUNTOYCOMA
    ;

valor
    : numero
    | cadena
    | booleano
    ;

numero : NUMERO ;

cadena : COMILLAS caracter* COMILLAS ;

booleano
    : VERDADERO
    | FALSO
    ;

identificador : IDENTIFICADOR ;

// Tokens léxicos y símbolos
USUARIO     : 'usuario' ;
VERDADERO   : 'verdadero' ;
FALSO       : 'falso' ;
L_LLAVE     : '{' ;
R_LLAVE     : '}' ;
IGUAL       : '=' ;
PUNTOYCOMA  : ';' ;
COMILLAS    : '"' ;

IDENTIFICADOR : [a-zA-Z][a-zA-Z0-9]* ;
NUMERO        : [0-9]+ ;
SIMBOLO       : '.' | ',' | '!' | '?' | ':' | ';' ;

caracter : SIMBOLO | IDENTIFICADOR | NUMERO ;

// Ignorar espacios, tabs y saltos de línea
WS      : [ \t\r\n]+ -> skip ;
