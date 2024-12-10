import { Container,ShoppingCart } from "./style";

import { FiList, FiShoppingCart, FiSearch } from "react-icons/fi";
import { PiSignOutFill } from "react-icons/pi";

import { Logo} from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

export function Header(){
    return( 
        <Container>
            <FiList id="List" />

            <Logo />

            <Input 
            id="input"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            />
            
            <Button
            id="CartItems"
            icon={FiShoppingCart}
            title="Pedidos (0)"
            />

            <Button
            id="signOut"
            icon={PiSignOutFill}
            />

            <ShoppingCart id="ShoppingCart">
                <FiShoppingCart/>
                <div id="numberCart">
                    <p>0</p>
                </div>
            </ShoppingCart>

        </Container>
    )

}