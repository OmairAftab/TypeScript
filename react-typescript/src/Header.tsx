
export interface Props{
    title:string,
    color?:string
}


export const Header= (props: Props)=>{
    return(
        <header>
            <h1 style={{ color: props.color ? props.color : "brown" }}>
                {props.title}
            </h1>
        </header>
    )
}