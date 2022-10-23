import React from 'react';

function Company({company}) {
    console.log(company);

    return(<div>
        <h1>{company.trade_nm}</h1>
    </div>);

}

export default Company

