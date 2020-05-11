# Fundamentus Unofficial API

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

This module provides an api to get data from Brazilian stock shares.

The truth of source is Fundamentus, a website that provides financial and fundamentalist information about companies listed on the Bovespa.


## Content
- [Fetching details](#fetching-details-about-share)
- [Fetching quotation history](#fetching-quotation-history)
- [Fetching earnings history](#fetching-earnings-history)

## Installation

```bash
$ npm install fundamentus-unofficial-api --save
```

## Usage


### Importing

```js
const FundamentusAPI = require('fundamentus-unofficial-api') // CommonJS
// or
import FundamentusAPI from 'fundamentus-unofficial-api' // ESM
```


### Fetching details about share

```js
const share = await FundamentusAPI.fetch('petr3')
```

#### Output

- All fields are parsed to its correct data type
	- *i.e.* '"1,78%" => 0.0178
- If a field is `null`, it means there is no data available from Fundamentus

<details>
  <summary>console.log(share)</summary>
  
```js
{
  ano2015: -0.0455,
  ano2016: 0.9738,
  ano2017: -0.0018,
  ano2018: 0.5154,
  ano2019: 0.2774,
  ano2020: -0.3891,
  ativo: 926011000000,
  ativoCirculante: 112101000000,
  cotacao: 19.55,
  cresRec5A: 0.009,
  dataUltCot: '08/05/2020',
  dia: 0.0683,
  disponibilidades: 33294000000,
  divBrPorPatrim: 1.19,
  divBruta: 351161000000,
  divLiquida: 317867000000,
  divYield: 0.026,
  ebit: 95991000000,
  ebitPorAtivo: 0.104,
  ebitUltimos3Meses: 28649000000,
  empresa: 'PETROBRAS ON',
  evPorEbit: 5.97,
  evPorEbitda: 3.6,
  giroAtivos: 0.33,
  liquidezCorr: 0.97,
  lpa: 3.08,
  lucroLiquido: 40137000000,
  lucroLiquidoUltimos3Meses: 8153000000,
  margBruta: 0.404,
  margEbit: 0.318,
  margLiquida: 0.136,
  max52Sem: 33.28,
  mes: 0.0483,
  min52Sem: 11.05,
  nroAcoes: 13044500000,
  pPorAtivCircLiq: -0.5,
  pPorAtivos: 0.28,
  pPorCapGiro: -63.03,
  pPorEbit: 2.66,
  pPorL: 6.35,
  pPorVp: 0.86,
  papel: 'PETR3',
  patrimLiq: 295541000000,
  psr: 0.84,
  receitaLiquida: 302245000000,
  receitaLiquidaUltimos3Meses: 72628000000,
  roe: 0.136,
  roic: 0.11,
  setor: 'Petróleo, Gás e Biocombustíveis',
  subsetor: 'Exploração e/ou Refino e Distribuição',      
  tipo: 'ON',
  ultBalancoProcessado: '31/12/2019',
  ultimos12Meses: -0.3437,
  ultimos30Dias: 0.1171,
  valorDaFirma: 572887000000,
  valorDeMercado: 255020000000,
  volMed2M: 607192000,
  vpa: 22.66
}
```
  
</details>

### Fetching quotation history

```js
const quotationHistory = await FundamentusAPI.fetchQuotationHistory('petr3')
```

#### Output

```js
// console.log(history)
QuotationHistory {
  share: 'PETR3',
  history: [
    { date: '2020-04-09', quotation: 16.86 },
    ...
  ]
}
```

#### Methods
`fetchQuotationHistory` returns a `QuotationHistory` instance which we can manipulate to get only a specific range of timeline or quotation value using the following methods:
- last
- minDate
- maxDate
- minQuotation
- maxQuotation

*Examples*

```js
const quotationHistory = await FundamentusAPI.fetchQuotationHistory('petr3')

// Returns the history range which the quotation value was, at least, R$11.43 since January 1st, 2020
quotationHistory.minQuotation(11.43).minDate('2020-01-01')
```

```js
const quotationHistory = await FundamentusAPI.fetchQuotationHistory('petr3')

// Returns the history in the last 10 days
quotationHistory.last(10)
```
### Fetching earnings history

```js
const earningsHistory = await FundamentusAPI.fetchEarningsHistory('petr3')
```

#### Output

```js
// console.log(history)
EarningsHistory {
  share: 'PETR3',
  history: [
    { date: '2008-04-04', value: 0.05, type: 'DIVIDENDO', perShare: 1 },
    ...
  ]
}
```

#### Methods
`fetchEarningsHistory` returns a `EarningsHistory` instance which we can manipulate to get only a specific range of timeline, value or by type using the following methods:
- minDate
- maxDate
- minValue
- maxValue
- filterByType

*Examples*

```js
const earningsHistory = await FundamentusAPI.fetchEarningsHistory('petr3')

// Returns all the earnings of 2019
earningsHistory.minDate('2019-01-01').maxDate('2019-12-31')
```

```js
const earningsHistory = await FundamentusAPI.fetchEarningsHistory('petr3')

// Returns earnings by dividends with min value of 0.5
earningsHistory.filterByType('DIVIDENDO').minValue(0.5)
```

## Getting help

If you need help, want to make a suggestion or encounter a bug, please contact me:
<br/>
https://github.com/margato/fundamentus-unofficial-api/issues
