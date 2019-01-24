import React from 'react';
import { ContainerForOneItemSC, ContainerForPhoto, TextInImageSC } from '../lib/styledComponents';


export default class BuildingView extends React.Component {

    createTagsForImage = (isImage) => {
      if (isImage.hasOwnProperty('children')) {
        return (<ContainerForPhoto key={1}>
          {isImage.images.map((img, i) => {
            return (
              <div key={img}>
                <img src={img} alt={img} key={img} />
                <TextInImageSC>{this.toStreamlineComponents(isImage.children)}</TextInImageSC>
              </div>
            );
          })}
        </ContainerForPhoto>)
      }
      if (isImage.constructor === Array) { 
        return <ContainerForPhoto key={isImage.length}>
          {isImage.map((img, i) => {
            return (
              <div key={img}>
                <img src={img} alt={img} key={img} />
              </div>
            );
          })}
        </ContainerForPhoto>;
      }
      return this.toStreamlineComponents(isImage);
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
