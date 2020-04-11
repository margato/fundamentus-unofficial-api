# Fundamentus Unofficial API

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


This is an module to scrap stock market data from https://fundamentus.com.br, a website that makes available financial and fundamentalist information about companies listed in Bovespa.

## Installation

```bash
$ npm install fundamentus-unofficial-api --save
```

## Usage

```js
const FundamentusAPI = require('../index')
const share = await FundamentusAPI.fetch('petr3')
```

#### Output

- All fields are parsed to its correct data type
	- *i.e.* '"1,78%" => 0.0178
- If a field is `null`, it means there is no data available from Fundamentus
```js

// console.log(share)
{
	ano2015: -0.0455,
	ano2016: 0.9738,
	ano2017: -0.0018,
	ano2018: 0.5154,
	ano2019: 0.2774,
	ano2020: -0.4731,
	ativo: 926011000000,
	ativoCirculante: 112101000000,
	cotacao: 16,
	cresRec5A: null,
	dataUltCot: '09/04/2020',
	dia: -0.0366,
	disponibilidades: 33294000000,
	divBrPorPatrim: null,
	divBruta: 351161000000,
	divLiquida: 317867000000,
	divYield: 0.03,
	ebit: 28649000000,
	ebitPorAtivo: 0.104,
	empresa: 'PETROBRAS ON',
	evPorEbit: null,
	evPorEbitda: null,
	giroAtivos: null,
	liquidezCorr: null,
	lpa: 3,
	lucroLiquido: 8153000000,
	margBruta: null,
	margEbit: null,
	margLiquida: null,
	max52Sem: 33,
	mes: 0.1924,
	min52Sem: 11,
	nroAcoes: 13044500000,
	pPorAtivCircLiq: null,
	pPorAtivos: null,
	pPorCapGiro: null,
	pPorEbit: null,
	pPorL: 5,
	pPorVp: 0,
	papel: 'PETR3',
	patrimLiq: 295541000000,
	psr: null,
	receitaLiquida: 72628000000,
	roe: null,
	roic: null,
	setor: 'Petr',
	subsetor: 'Explora',
	tipo: 'ON',
	ultBalancoProcessado: '31/12/2019',
	ultimos12Meses: -0.4728,
	ultimos30Dias: -0.0035,
	valorDaFirma: 537797000000,
	valorDeMercado: 219930000000,
	volMed2M: 852007000,
	vpa: 22
}
```

## Getting help

If you need help, want to make a suggestion or encounter a bug, please contact me:
<br/>
https://github.com/margato/fundamentus-unofficial-api/issues
