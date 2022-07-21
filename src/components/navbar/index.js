export default function (props) {
    return (
        <div style={{ backgroundColor: '#3a3a3a', color:'white', display:'flex', justifyContent:'space-between', padding:'0.5rem 2rem' }}>
            <h1>Test app</h1>
            <h1>{props.occludedAccount}</h1>
        </div>
    )
}