import NabBar from "./navbar";
import { Container } from "react-bootstrap";

export default function Layout(props) {
    return (
        <>
            <NabBar />
            <br />
            <Container>
                {props.children}
            </Container>
        </>
    )
}