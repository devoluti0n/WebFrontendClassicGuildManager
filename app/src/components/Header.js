import React, { useContext } from "react";

// UI
import Navbar from 'react-bulma-components/lib/components/navbar';

// Shared Context
import UserContext from "../context/UserContext";

export default (props) => {
    const userContext = useContext(UserContext);

    console.log(userContext);

    return (
        <Navbar>
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </Navbar.Item>
                <Navbar.Burger />
            </Navbar.Brand>
            <Navbar.Menu >
                <Navbar.Container>
                    <Navbar.Item dropdown hoverable href="#">
                        <Navbar.Link>
                            First
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href="#">
                                Subitem 1
                            </Navbar.Item>
                            <Navbar.Item href="#">
                                Subitem 2
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item href="#">
                        Second
                    </Navbar.Item>
                </Navbar.Container>
                <Navbar.Container position="end">
                    <Navbar.Item href="#">
                        At the end
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};
