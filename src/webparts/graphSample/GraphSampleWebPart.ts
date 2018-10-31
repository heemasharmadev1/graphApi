import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneChoiceGroup
} from '@microsoft/sp-webpart-base';

import * as strings from 'GraphSampleWebPartStrings';
import GraphSample from './components/GraphSample';
import { IGraphSampleProps } from './components/IGraphSampleProps';
import { ClientMode } from './components/ClientMode';

export interface IGraphSampleWebPartProps {
  //description: string;
  clientMode: ClientMode;
}

export default class GraphSampleWebPart extends BaseClientSideWebPart<IGraphSampleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGraphSampleProps > = React.createElement(
      GraphSample,
      {
        clientMode: this.properties.clientMode,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneChoiceGroup('clientMode',{
                  label: strings.ClientModeLabel,
                  options:[
                    {key: ClientMode.aad, text:"AadHttpClient"},
                    {key: ClientMode.graph, text:"MSGraphClient"},
                  ]
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}
