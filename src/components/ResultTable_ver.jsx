import React from 'react'

export default function ResultTable_ver({attempts,earnPoints,flag,userId}) {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>{userId}</td>
                    <td>{attempts}</td>
                    <td>{earnPoints}</td>
                    <td>{flag}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
