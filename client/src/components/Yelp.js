import React from 'react';

export default (props) => {
    const {results} = props;
    return (
        <div>
            {
                results ? 
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>food</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map( (r, i) => 
                                <tr key={i}>
                                    <td><a href={r.url} target="_blank">{r.name}</a></td>
                                    <td>description</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    :
                    <p>no results yet</p>
            }
        </div>
    )
}




