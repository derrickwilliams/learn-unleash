import { isEnabled } from 'unleash-client';

let interval1 = null;
let interval2 = null;

const start = () => {
    interval1 = setInterval(() => {
            console.log(`allowFeatureForBrand enabled [1]: ${isEnabled('allowFeatureForBrand', { brandId: 1 })}`);
    }, 2000);

    interval2 = setInterval(() => {
        console.log(`allowFeatureForBrand enabled [20]: ${isEnabled('allowFeatureForBrand', { brandId: 20 })}`);
    }, 2000);
}

const stop = () => {
    if (interval1 !== null) {
        clearInterval(interval1);
    }

    if (interval2 !== null) {
        clearInterval(interval2);
    }
}

export default { start, stop };
