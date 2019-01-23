import React from 'react';

export default class BuildingsView extends React.Component{

    render() {
        const { buildingsData } = this.props;

        buildingsData && console.log(buildingsData.data);

        const buildingToView = buildingsData && buildingsData.data.length > 0 ? buildingsData.data.map((buildingInfo) => {
            console.log(buildingInfo);
            return (
                <div>
                    {buildingInfo.id}
                </div>
            )

        })
        : <p>No buildings to show:(</p>;

        return (
            <div>
                {buildingToView}
            </div>
        );
    }
}

BuildingsView.defaultProps = {
    buildingsData: {
        data: 0
    } ,
  };
