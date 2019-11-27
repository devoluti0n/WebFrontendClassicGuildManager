import React, { useContext } from 'react';

// Shared Context
import UserContext from "../context/UserContext";

// UI
import { Container, Hero, Field, Label, Button, Control, Icon, Columns, Input } from 'bloomer';
import { Column } from 'bloomer/lib/grid/Column';
import { Checkbox } from 'bloomer/lib/elements/Form/Checkbox';
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';
import { Box } from 'bloomer/lib/elements/Box';

export default (props) => {
    const userContext = useContext(UserContext);

    const [loginData, setLoginData] = React.useState({
        email: "",
        password: "",
        rememberMe: false
    })

    const handleEmailChange = event => {
        const email = event.target.value;
        setLoginData(loginData => { return { ...loginData, email } })
    }

    const handlePasswordChange = event => {
        const password = event.target.value;
        setLoginData(loginData => { return { ...loginData, password } })
    }

    const handleRememberChange = event => {
        const rememberMe = event.target.checked;
        setLoginData(loginData => { return { ...loginData, rememberMe } })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        setTimeout( () => {
            userContext.dispatch({
                type: "LOGIN",
                value: {
                    token: "ABCDEF",
                    user: {
                        email: loginData.email
                    }
                }
            })
        }, 1000)
    }

    return (
        <Hero isFullHeight isColor="primary">
            <HeroBody>
                <Container>
                    <Columns isCentered>
                        <Column isSize={{
                            tablet: "1/2",
                            desktop: "1/3",
                            widescreen: "1/4"
                        }}>
                            <form onSubmit={onSubmit}>
                                <Box>
                                    <Field>
                                        <Label>Email</Label>
                                        <Control hasIcons="left">
                                            <Input type="email" placeholder="Your email..." required onChange={handleEmailChange} />
                                            <Icon isSize='small' isAlign='left' className="fas fa-user" />
                                        </Control>
                                    </Field>

                                    <Field>
                                        <Label>Password</Label>
                                        <Control hasIcons="left">
                                            <Input type="password" placeholder="Your password..." required onChange={handlePasswordChange} />
                                            <Icon isSize='small' isAlign='left' className="fas fa-lock" />
                                        </Control>
                                    </Field>

                                    <Field>
                                        <Control>
                                            <Checkbox onChange={handleRememberChange}>Remember me</Checkbox>
                                        </Control>
                                    </Field>

                                    <Field>
                                        <Control hasTextAlign="centered">
                                            <Button type="submit" isColor='primary'>Login</Button>
                                        </Control>
                                    </Field>
                                </Box>
                            </form>
                        </Column>
                    </Columns>
                </Container>
            </HeroBody>
        </Hero>
    );
};
