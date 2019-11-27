import React, { useContext } from "react";

// UI
import { Navbar, NavbarBrand, NavbarItem, NavbarMenu, NavbarStart, NavbarEnd, Icon, NavbarBurger, Field, Control, Button } from "bloomer";

// Shared Context
import UserContext from "../context/UserContext";

export default (props) => {
    const userContext = useContext(UserContext);

    const [isActive, setIsActive] = React.useState(false);
    const onClickNav = () => setIsActive(!isActive);

    console.log(userContext);

    return (
        <Navbar>
            <NavbarBrand>
                <NavbarItem>

                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-github' />
                </NavbarItem>
                <NavbarItem isHidden='desktop'>
                    <Icon className='fa fa-twitter' style={{ color: '#55acee' }} />
                </NavbarItem>
                <NavbarBurger isActive={isActive} onClick={onClickNav} />
            </NavbarBrand>
            <NavbarMenu isActive={isActive} onClick={onClickNav}>
                <NavbarStart>
                    <NavbarItem href='/'>Home</NavbarItem>
                </NavbarStart>
                <NavbarEnd>
                    <NavbarItem>
                        <Field isGrouped>
                            <Control>
                                <Button href="/user/login">
                                    <Icon className="fas fa-sign-in-alt" />
                                    <span>Login</span>
                                </Button>
                            </Control>
                        </Field>
                    </NavbarItem>
                </NavbarEnd>
            </NavbarMenu>
        </Navbar>
    );
};
