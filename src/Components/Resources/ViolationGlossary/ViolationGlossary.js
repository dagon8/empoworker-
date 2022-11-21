import React from 'react'
import violationsDescription from './violationsDescription.json'

export default function ViolationGlossary() {
    let childLabor = violationsDescription.child_labor
    let undocumentedImm = violationsDescription.migrant
    let wageTheft = violationsDescription.wage_theft
    let accident = violationsDescription.workplace_accident

    return (
        <>
            <p>{childLabor.category_description}</p>
            <ul>
                {Object.keys(childLabor.violations).map((key) => <li>{childLabor.violations[key].expanded_name}: {childLabor.violations[key].violation_description}</li>)}
            </ul>
        </>
    )
}
