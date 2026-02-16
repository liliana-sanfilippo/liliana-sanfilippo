import React from "react";
import TagIndexPageWrapper from "../../routes/TagIndexWrapper";
import Container from "react-bootstrap/Container";

export function Footer() {


    return (<footer className="px-3 mt-5 print:hidden">
        <Container className="">
            <div className="row align-items-center" style={{}}>
                <div className="col grid">
          <span className="text-start no-pad no-marg">

          </span>
                </div>
                <div className="col ">

                </div>

            </div>
            <hr/>


            <br/>
            <div className="d-flex align-items-baseline">

                <div className="col-sm-6">
                    <h6>Contact</h6>

                    <br/>

                </div>

                <div className="col-sm-6" style={{paddingLeft: "20px"}}>
                    <h6 className="sticky-top">Tags</h6>
                    <TagIndexPageWrapper></TagIndexPageWrapper>
                </div>

            </div>
        </Container>
    </footer>);
}
