import "./WorkingWithStyles.css"

export default function WorkingWithStyles()
{
    var styleobj={
        color:"red",
        border:"1px solid green",
        padding:"10px"
    }
    return(
        <section class="working-with-style">
            <h1 style={{backgroundColor:"yellow",marginTop:"150px",color:"red",border:"1px green solid",padding:"10px"}}> this is header</h1>
            <b style={styleobj}> lets understand concept styeles</b><br></br>
            <div>this is main block</div>
        </section>
    )
}