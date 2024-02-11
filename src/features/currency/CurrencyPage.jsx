import React from "react";
import DataDisplayComponent from "../../shared/components/DataDisplayComponent";

const CurrencyPage = () => {
    return (
        <>
        <DataDisplayComponent url='https://poe-functions-test.azurewebsites.net/api/GetCurrency' maxSize={5000} graphTitle={'Currency:'} />
        </>
    )
    
}

export default CurrencyPage;