import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import eCommerceProductCard from "./eCommerceProductCard";

export const story = () => createElement("c-eCommerceProductCard", { is: eCommerceProductCard });
