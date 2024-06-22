import { readFileSync } from "fs";
import React from "react";

import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlTitle,
} from "mjml-react";

const css = readFileSync("./assets/styles.css").toString();

export const generate = () => {
    return (
        <Mjml>
            <MjmlHead>
                <MjmlTitle>Evo Email</MjmlTitle>
                <MjmlPreview>Evo Email Template</MjmlPreview>
                <MjmlStyle>{css}</MjmlStyle>
            </MjmlHead>
            <MjmlBody width={640} backgroundColor="#efefef" cssClass="body">
                <MjmlSection fullWidth padding={0} paddingTop={16}>
                    <MjmlColumn cssClass="header">
                        <MjmlImage
                            width={112}
                            mjClass="image"
                            src="https://dev.evo-catalogue.pages.dev/_next/static/media/logo.c08bfe67.svg"
                        />
                    </MjmlColumn>
                </MjmlSection>
                <MjmlSection padding={0}>
                    <MjmlColumn cssClass="content">
                        <MjmlColumn cssClass="content-container"  width={450}>
                            <MjmlButton
                                padding="20px"
                                backgroundColor="#346DB7"
                                href="https://www.wix.com/"
                            >
                                I like it!
                            </MjmlButton>
                        </MjmlColumn>
                    </MjmlColumn>
                </MjmlSection>
            </MjmlBody>
        </Mjml>
    );
};
