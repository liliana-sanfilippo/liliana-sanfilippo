import {Link} from "react-router-dom";
import React from "react";
import TagIndexPageWrapper from "../routes/TagIndexWrapper";
import Container from "react-bootstrap/Container";

export function Footer() {


    return (
        <footer className="px-3">
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

                    <div className="col-sm-4">
                        <h6>Contact</h6>

                        <br/>

                    </div>

                    <div className="col-sm-4 align-top">
                        <a href="./partners">
                            <h6 className="sticky-top">Sponsors and partners</h6>
                        </a>

                    </div>

                    <div className="col-sm-4" style={{paddingLeft: "20px"}}>
                        <h6 className="sticky-top">Tags</h6>
                        <div className="col">
                           <TagIndexPageWrapper></TagIndexPageWrapper>
                        </div>
                    </div>

                </div>



                <hr />
                {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
                <div className="mt-4">
                    <div className="col">
                        <p className="mb-0">

                        </p>
                        <p>

                        </p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
