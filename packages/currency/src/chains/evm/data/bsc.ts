import { CurrencyTypes } from 'types/dist';
import { supportedBSCERC20 } from '../../../erc20/chains/bsc';

export const chainId = 56;
export const currencies: CurrencyTypes.TokenMap = {
  ...supportedBSCERC20,
};
