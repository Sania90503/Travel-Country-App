import global from './global.png'

export default function (){
    return(
        <>
        <div className="navbar">
            <img src={global} alt='Global Image' className='logo'/>
            <h3>my travel journal</h3>
        </div>
        </>
    )
}