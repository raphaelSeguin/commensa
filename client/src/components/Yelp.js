import React from 'react';

export default ({infos}) => {
    const {restaurantsAround} = infos;
    return (
        <div id="yelp-list">
            {
                restaurantsAround ? 
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {restaurantsAround.map( (r, i) => 
                                <tr key={i}>
                                    <td><a href={r.url} target="_blank">{r.name}</a></td>
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




