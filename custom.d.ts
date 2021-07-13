declare module '*.svg?sprite' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.svg?include' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
