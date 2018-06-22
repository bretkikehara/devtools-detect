// Skip Firefox b/c it fails to detect.
const isEnabled = /(Chrom(e|ium)|Safari)\//;

// https://stackoverflow.com/questions/7798748/find-out-whether-chrome-console-is-open/30638226#30638226
export function checkToString(window: Window): boolean {
  if (!isEnabled.test(window.navigator.userAgent)) {
    return false;
  }
  const r: any = /./;
  let open = false;
  r.toString = () => {
      open = true;
  };
  // tslint:disable-next-line:no-console
  console.log('%c', r);
  return open;
}
