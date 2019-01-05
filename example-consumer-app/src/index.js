import { initialize as initUnleash } from 'unleash-client';
import checker from './checker';
import WithBrandIdStrategy from './WithBrandIdStrategy';

const flags = initUnleash({
    url: 'http://localhost:4242/api/',
    appName: 'ExampleConsumerApp',
    instanceId: process.env.TERM_SESSION_ID,
    refreshInterval: 1000,
    strategies: [new WithBrandIdStrategy()]
});

flags.on('error', console.error);
flags.on('warn', console.warn);
flags.on('ready', console.log);

flags.on('registered', clientData => console.log('registered', clientData));
// flags.on('sent', payload => console.log('metrics bucket/payload sent', JSON.stringify(payload, null, 2)));
// flags.on('count', (name, enabled) => console.log(`isEnabled(${name}) returned ${enabled}`));

console.log('TGGLE DEF', JSON.stringify(flags.getFeatureToggleDefinition('allowFeatureForBrand'), null, 2));

checker.start();

setTimeout(checker.stop, 100000);
