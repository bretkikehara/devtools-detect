import { checkToString } from './checks/to-string';
import { checkDimensions } from './checks/window-dimensions';

export function isDevtoolsOpen(window: Window, threshold: number = 160): boolean {
  if (checkToString(window)) {
    return true;
  }
  return checkDimensions(window, threshold);
}
