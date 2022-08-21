import { Controller, Get, Param } from '@nestjs/common';

export let Funds = [
  {
    assetName: 'U.S. 500 Stock Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE0032126645',
    assetRegion: 'USA',
    active: true,
  },
  {
    assetName: 'European Stock Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE0007987708',
    assetRegion: 'EUROPE',
    active: true,
  },
  {
    assetName: 'Emerging Markets Stock Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE0031786696',
    assetRegion: 'EMERGING',
    active: true,
  },
  {
    assetName: 'Global Small-Cap Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE00B42W4L06',
    assetRegion: 'GLOBAL',
    active: true,
  },
  {
    assetName: 'Japan Stock Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE0007286036',
    assetRegion: 'JAPAN',
    active: true,
  },
  {
    assetName: 'Pacific ex-Japan Stock Index Fund EUR Acc',
    assetType: 'equity',
    assetIsin: 'IE0007201266',
    assetRegion: 'APAC',
    active: true,
  },

  // Bonds
  {
    assetName: 'U.S. Government Bond Index Fund EUR Hedged Acc',
    assetType: 'bond',
    assetIsin: 'IE0007471471',
    assetRegion: 'USA',
    active: true,
  },
  {
    assetName: 'Global Corporate Bond Index Fund EUR Hedged Acc',
    assetType: 'bond',
    assetIsin: 'IE00BDFB5N63',
    assetRegion: 'GLOBAL',
    active: true,
  },
  {
    assetName: 'Euro Government Bond Index Fund EUR Acc',
    assetType: 'bond',
    assetIsin: 'IE0007472990',
    assetRegion: 'EUROPE',
    active: true,
  },
  {
    assetName: 'Japan Government Bond Index Fund EUR Hedged Acc',
    assetType: 'bond',
    assetIsin: 'IE00BLPJRH48',
    assetRegion: 'JAPAN',
    active: true,
  },
  {
    assetName: 'U.K. Government Bond Index Fund EUR Hedged Acc',
    assetType: 'bond',
    assetIsin: 'IE00BLPJRG31',
    assetRegion: 'UK',
    active: true,
  },
  {
    assetName: 'Global Short-Term Corporate Bond Index Fund EUR Hedged Acc',
    assetType: 'bond',
    assetIsin: 'IE00BDFB7290',
    assetRegion: 'GLOBAL',
    active: true,
  },
  // Cash
  {
    assetName: 'Global Short-Term Bond Index Fund EUR Hedged Acc',
    assetType: 'CASH',
    assetIsin: 'IE00BH65QP47',
    assetRegion: 'GLOBAL',
    active: true,
  },
];

interface Funds {
  assetName: string;
  assetType: string;
  assetIsin: string;
  assetRegion: string;
  active: boolean;
}

@Controller('funds')
export class FundsController {
  constructor() {}

  @Get()
  async index() {
    return Funds.map(({ assetName, assetIsin }) => ({
      assetIsin,
      assetName,
    }));
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Funds> {
    return Funds.find((fund) => fund.assetIsin === id);
  }
}
