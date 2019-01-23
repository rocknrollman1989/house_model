import React from 'react';
import { ContainerForOneItemSC, ContainerForPhoto } from '../lib/styledComponents';


export default class BuildingView extends React.Component {

    createTagsForImage = (isImage) => {
      if (isImage.constructor === Array) { 
        return <ContainerForPhoto>
          {isImage.map((img, i) => {
            return (
              <div key={i}>
                <img src={img} alt={img} />
              </div>
            );
          })}
        </ContainerForPhoto>;
      }

      this.toStreamlineComponents(isImage);
    }

toStreamlineComponents = (componentProps) => {
  if (componentProps && Object.keys(componentProps).length !== 0 ) {
    return  Object.keys(componentProps).map((key) => {
      if (key === 'images') { return this.createTagsForImage(componentProps[key]); }
      return key === 'id' || key === 'description' ? null : <p key={key}>{componentProps[key]}</p>;
    });
  }
  return <span>{componentProps}</span>;
}

render() {
  const { buildingToShow } = this.props;
  return (
    <ContainerForOneItemSC>
      {this.toStreamlineComponents(buildingToShow)}
    </ContainerForOneItemSC>
  );
}
}
