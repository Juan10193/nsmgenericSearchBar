import "@lwc/synthetic-shadow";
import "https://unpkg.com/@salesforce-ux/design-system@2.13.1/assets/styles/salesforce-lightning-design-system.min.css";
import { createElement } from "lwc";
import ECommerceSearchProdctsContainer from "./eCommerceSearchProdctsContainer/eCommerceSearchProdctsContainer";

export const story = () => createElement("c-eCommerceSearchProdctsContainer", { is: ECommerceSearchProdctsContainer });
