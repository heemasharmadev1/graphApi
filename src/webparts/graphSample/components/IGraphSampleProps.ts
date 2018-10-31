import { ClientMode } from "./ClientMode";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IGraphSampleProps {
  clientMode: ClientMode;
  context: WebPartContext;
}
