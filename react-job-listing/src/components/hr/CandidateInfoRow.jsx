


const CandidateInfoRow = ({application_id,candidate_id,name,email,mobile,resume}) =>{
    return(
        <>
            <tbody>
                <tr>
                <th scope="row">{application_id}</th>
                <td>{candidate_id}</td>
                <td>{name}</td>
                <td><a href={'mailto:'+email}>{email}</a></td>
                <td><a href={'tel:'+mobile}>{mobile}</a></td>
                <td><a target="_blank" href={resume}>Resume Link</a></td>
                </tr>
           </tbody>
        </>
    )
}
export default CandidateInfoRow;