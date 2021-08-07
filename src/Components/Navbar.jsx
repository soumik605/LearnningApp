import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"


const useStyle = makeStyles({
    header:{
        background: "green"
    },
    tabs:{
        color: "white",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle()
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="../" exact>Home Page</NavLink>
                <NavLink className={classes.tabs} to="/getreact" exact>Learn React</NavLink>
                <NavLink className={classes.tabs} to="/getnode" exact>Learn Node</NavLink>
                <NavLink className={classes.tabs} to="/add" exact>Add Question</NavLink>
                
            </Toolbar>
        </AppBar>
    )
}


export default Navbar