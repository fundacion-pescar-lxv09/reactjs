import { navModel } from '../../models'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

function NavBar(){
    return (
    <BottomNavigation sx={{position: "sticky", bottom: 0}} showLabels>
        { navModel.map((props,i) => 
        <BottomNavigationAction key={i} {...props}/>) }
    </BottomNavigation>
)}
export default NavBar;