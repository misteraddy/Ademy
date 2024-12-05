export const combineProviders = (...providers) => ({ children }) => 
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
  