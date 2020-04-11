# Fundamentus Unofficial API

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

This module provides an api to get data from Brazilian stock shares.

The truth of source is Fundamentus, a website that provides financial and fundamentalist information about companies listed on the Bovespa.

## Installation

```bash
$ npm install fundamentus-unofficial-api --save
```

## Usage

```js
const FundamentusAPI = require('fundamentus-unofficial-api') // CommonJS
// or
import FundamentusAPI from 'fundamentus-unofficial-api' // ESM


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
  cotacao: 16.86,
  cresRec5A: 0.009,
  dataUltCot: '09/04/2020',
  dia: -0.0366,
  disponibilidades: 33294000000,
  divBrPorPatrim: 1.19,
  divBruta: 351161000000,
  divLiquida: 317867000000,
  divYield: 0.03,
  ebit: 28649000000,
  ebitPorAtivo: 0.104,
  empresa: 'PETROBRAS ON',
  evPorEbit: 5.6,
  evPorEbitda: 3.38,
  giroAtivos: 0.33,
  liquidezCorr: 0.97,
  lpa: 3.08,
  lucroLiquido: 8153000000,
  margBruta: 0.404,
  margEbit: 0.318,
  margLiquida: 0.136,
  max52Sem: 33.28,
  mes: 0.1924,
  min52Sem: 11.05,
  nroAcoes: 13044500000,
  pPorAtivCircLiq: -0.43,
  pPorAtivos: 0.24,
  pPorCapGiro: -54.36,
  pPorEbit: 2.29,
  pPorL: 5.48,
  pPorVp: 0.74,
  papel: 'PETR3',
  patrimLiq: 295541000000,
  psr: 0.73,
  receitaLiquida: 72628000000,
  roe: 0.136,
  roic: 0.11,
  setor: 'Petróleo, Gás e Biocombustíveis',
  subsetor: 'Exploração e/ou Refino e Distribuição',
  tipo: 'ON',
  ultBalancoProcessado: '31/12/2019',
  ultimos12Meses: -0.4728,
  ultimos30Dias: -0.0035,
  valorDaFirma: 537797000000,
  valorDeMercado: 219930000000,
  volMed2M: 852007000,
  vpa: 22.66
}
```

## Getting help

If you need help, want to make a suggestion or encounter a bug, please contact me:
<br/>
https://github.com/margato/fundamentus-unofficial-api/issues
