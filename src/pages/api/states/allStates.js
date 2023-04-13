import { entity } from 'simpler-state'

export const pageValue = entity(0);
export const SetPageValue = page => pageValue.set(page);

