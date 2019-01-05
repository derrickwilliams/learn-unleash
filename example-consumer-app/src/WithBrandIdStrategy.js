import { Strategy } from 'unleash-client';

export default class WithBrandIdStrategy extends Strategy {
    constructor() {
        super('withBrandId');
    }

    isEnabled(params, ctx) {
        const { brandIds } = params;
        const { brandId } = ctx;

        return brandIds.includes(brandId);
    }
}
