import React from "react";
import {
  NFBigText,
  NFPageContainer,
  NFSubtext,
  NFTextContainer,
} from "./404.styles";

export default function NotFoundPage() {
  return (
    <NFPageContainer className="full-view">
      <NFTextContainer>
        <NFBigText>404: Page Not found</NFBigText>
        <NFSubtext>
          If you were looking for a 404 error, you're in the right place!
        </NFSubtext>
      </NFTextContainer>
    </NFPageContainer>
  );
}
