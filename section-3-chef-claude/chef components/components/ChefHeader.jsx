import chefLogo from "../assets/2chef-claude-icon.svg"
export default function ChefHeader(){
    return(
        <>
            <div className="header-bar">
                <img className="chef-logo" src={chefLogo} alt="logo"/>
                <h1 className="header-text">STEM - AGUINALDO GRP 2</h1>
            </div>
        </>
    )
}