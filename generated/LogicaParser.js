// Generated from c:/Users/celin/52525-SantinoEscudero/Logica.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LogicaListener from './LogicaListener.js';
import LogicaVisitor from './LogicaVisitor.js';

const serializedATN = [4,1,12,64,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,
1,3,1,3,3,3,45,8,3,1,4,1,4,1,5,1,5,5,5,51,8,5,10,5,12,5,54,9,5,1,5,1,5,1,
6,1,6,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,2,3,1,0,9,
11,59,0,19,1,0,0,0,2,25,1,0,0,0,4,36,1,0,0,0,6,44,1,0,0,0,8,46,1,0,0,0,10,
48,1,0,0,0,12,57,1,0,0,0,14,59,1,0,0,0,16,61,1,0,0,0,18,20,3,2,1,0,19,18,
1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,
0,0,1,24,1,1,0,0,0,25,26,5,1,0,0,26,27,3,14,7,0,27,31,5,4,0,0,28,30,3,4,
2,0,29,28,1,0,0,0,30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,34,1,0,0,
0,33,31,1,0,0,0,34,35,5,5,0,0,35,3,1,0,0,0,36,37,3,14,7,0,37,38,5,6,0,0,
38,39,3,6,3,0,39,40,5,7,0,0,40,5,1,0,0,0,41,45,3,8,4,0,42,45,3,10,5,0,43,
45,3,12,6,0,44,41,1,0,0,0,44,42,1,0,0,0,44,43,1,0,0,0,45,7,1,0,0,0,46,47,
5,10,0,0,47,9,1,0,0,0,48,52,5,8,0,0,49,51,3,16,8,0,50,49,1,0,0,0,51,54,1,
0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,5,8,
0,0,56,11,1,0,0,0,57,58,7,0,0,0,58,13,1,0,0,0,59,60,5,9,0,0,60,15,1,0,0,
0,61,62,7,1,0,0,62,17,1,0,0,0,4,21,31,44,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LogicaParser extends antlr4.Parser {

    static grammarFileName = "Logica.g4";
    static literalNames = [ null, "'usuario'", "'verdadero'", "'falso'", 
                            "'{'", "'}'", "'='", "';'", "'\"'" ];
    static symbolicNames = [ null, "USUARIO", "VERDADERO", "FALSO", "L_LLAVE", 
                             "R_LLAVE", "IGUAL", "PUNTOYCOMA", "COMILLAS", 
                             "IDENTIFICADOR", "NUMERO", "SIMBOLO", "WS" ];
    static ruleNames = [ "programa", "usuario", "atributo", "valor", "numero", 
                         "cadena", "booleano", "identificador", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LogicaParser.ruleNames;
        this.literalNames = LogicaParser.literalNames;
        this.symbolicNames = LogicaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LogicaParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.usuario();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 23;
	        this.match(LogicaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	usuario() {
	    let localctx = new UsuarioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LogicaParser.RULE_usuario);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(LogicaParser.USUARIO);
	        this.state = 26;
	        this.identificador();
	        this.state = 27;
	        this.match(LogicaParser.L_LLAVE);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 28;
	            this.atributo();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 34;
	        this.match(LogicaParser.R_LLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atributo() {
	    let localctx = new AtributoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LogicaParser.RULE_atributo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.identificador();
	        this.state = 37;
	        this.match(LogicaParser.IGUAL);
	        this.state = 38;
	        this.valor();
	        this.state = 39;
	        this.match(LogicaParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LogicaParser.RULE_valor);
	    try {
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.numero();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 42;
	            this.cadena();
	            break;
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 43;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LogicaParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(LogicaParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LogicaParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(LogicaParser.COMILLAS);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0)) {
	            this.state = 49;
	            this.caracter();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 55;
	        this.match(LogicaParser.COMILLAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LogicaParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===3)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identificador() {
	    let localctx = new IdentificadorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LogicaParser.RULE_identificador);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(LogicaParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LogicaParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3584) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

LogicaParser.EOF = antlr4.Token.EOF;
LogicaParser.USUARIO = 1;
LogicaParser.VERDADERO = 2;
LogicaParser.FALSO = 3;
LogicaParser.L_LLAVE = 4;
LogicaParser.R_LLAVE = 5;
LogicaParser.IGUAL = 6;
LogicaParser.PUNTOYCOMA = 7;
LogicaParser.COMILLAS = 8;
LogicaParser.IDENTIFICADOR = 9;
LogicaParser.NUMERO = 10;
LogicaParser.SIMBOLO = 11;
LogicaParser.WS = 12;

LogicaParser.RULE_programa = 0;
LogicaParser.RULE_usuario = 1;
LogicaParser.RULE_atributo = 2;
LogicaParser.RULE_valor = 3;
LogicaParser.RULE_numero = 4;
LogicaParser.RULE_cadena = 5;
LogicaParser.RULE_booleano = 6;
LogicaParser.RULE_identificador = 7;
LogicaParser.RULE_caracter = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(LogicaParser.EOF, 0);
	};

	usuario = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UsuarioContext);
	    } else {
	        return this.getTypedRuleContext(UsuarioContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UsuarioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_usuario;
    }

	USUARIO() {
	    return this.getToken(LogicaParser.USUARIO, 0);
	};

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	L_LLAVE() {
	    return this.getToken(LogicaParser.L_LLAVE, 0);
	};

	R_LLAVE() {
	    return this.getToken(LogicaParser.R_LLAVE, 0);
	};

	atributo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtributoContext);
	    } else {
	        return this.getTypedRuleContext(AtributoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterUsuario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitUsuario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitUsuario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtributoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_atributo;
    }

	identificador() {
	    return this.getTypedRuleContext(IdentificadorContext,0);
	};

	IGUAL() {
	    return this.getToken(LogicaParser.IGUAL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	PUNTOYCOMA() {
	    return this.getToken(LogicaParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterAtributo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitAtributo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitAtributo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(LogicaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_cadena;
    }

	COMILLAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LogicaParser.COMILLAS);
	    } else {
	        return this.getToken(LogicaParser.COMILLAS, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_booleano;
    }

	VERDADERO() {
	    return this.getToken(LogicaParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(LogicaParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentificadorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_identificador;
    }

	IDENTIFICADOR() {
	    return this.getToken(LogicaParser.IDENTIFICADOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterIdentificador(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitIdentificador(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitIdentificador(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LogicaParser.RULE_caracter;
    }

	SIMBOLO() {
	    return this.getToken(LogicaParser.SIMBOLO, 0);
	};

	IDENTIFICADOR() {
	    return this.getToken(LogicaParser.IDENTIFICADOR, 0);
	};

	NUMERO() {
	    return this.getToken(LogicaParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LogicaListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof LogicaVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




LogicaParser.ProgramaContext = ProgramaContext; 
LogicaParser.UsuarioContext = UsuarioContext; 
LogicaParser.AtributoContext = AtributoContext; 
LogicaParser.ValorContext = ValorContext; 
LogicaParser.NumeroContext = NumeroContext; 
LogicaParser.CadenaContext = CadenaContext; 
LogicaParser.BooleanoContext = BooleanoContext; 
LogicaParser.IdentificadorContext = IdentificadorContext; 
LogicaParser.CaracterContext = CaracterContext; 
