import { SVGProps } from "react";
const CallBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 900 126"
    width="900"
    {...props}
  >
    <path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M1.4475 7.245C0 10.08 0 13.8 0 21.225V43.5c0 7.4325 0 11.145 1.4475 13.9875 1.275 2.4975 3.3 4.5225 5.7975 5.7975 2.835 1.4475 6.555 1.4475 13.98 1.4475h19.71c-4.6725 9.5475-14.5275 27.465-17.2875 29.6625l21.45-14.6025c5.415-4.32 11.4-9.1125 13.9575-15.06H197.025c7.425 0 11.145 0 13.98-1.4475 2.4975-1.275 4.5225-3.3 5.7975-5.7975C218.25 54.645 218.25 50.925 218.25 43.5V21.225c0-7.425 0-11.145-1.4475-13.98a13.2675 13.2675 0 0 0-5.7975-5.7975C208.17 0 204.45 0 197.025 0H21.225C13.8 0 10.08 0 7.245 1.4475a13.2675 13.2675 0 0 0-5.7975 5.7975Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CallBubble;
