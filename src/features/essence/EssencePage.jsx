import React from "react";
import DataDisplayComponent from "../../shared/components/DataDisplayComponent";

const EssencePage = () => {
    return (
        <>
        <DataDisplayComponent url='https://poe-functions-test.azurewebsites.net/api/GetEssence' maxSize={100} graphTitle={'Essence:'} />
        </>
    )
}

export default EssencePage;