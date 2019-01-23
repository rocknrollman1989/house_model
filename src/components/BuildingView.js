import React from 'react';

export default class BuildingView extends React.Component{

    createTagsForImage = (isImage) =>{
        if (isImage.constructor === Array){ 
            return isImage.map((img, i) => {
                return (
                    <div key={i}>
                        <img src={img} alt={img} />
                    </div>
                );
            });
        }

        this.toStreamlineComponents(isImage);
    }

    toStreamlineComponents = (componentProps) => {
        if (componentProps && Object.keys(componentProps).length !== 0 ){
            return  Object.keys(componentProps).map((key) =>{
                    if (key === 'images'){ return this.createTagsForImage(componentProps[key]);}
                    return key === 'id' || key === 'description' ? null : <p key={key}>{componentProps[key]}</p>;
                });
        }
        return <span>{componentProps}</span>;
    }

    render() {
        const { buildingToShow } = this.props;
        return (
            <div>
                {this.toStreamlineComponents(buildingToShow)}
            </div>
        );
    }
}

// BuildingsView.defaultProps = {
//     buildingsData: {}
//   };
