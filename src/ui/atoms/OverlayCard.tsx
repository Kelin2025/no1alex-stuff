import * as React from "react";
import styled from "styled-components";

const TitleSlot = styled.div`
  color: #7d7d7d;
  padding: 10px;
  border-bottom: 1px solid #353535;
`;

const ChildrenSlot = styled.div`
  color: #bcbcbc;
  padding: 10px;
`;

const Inner = styled.div`
  border-radius: 5px;
  overflow: hidden;
`;

const OverlayCardView = ({ title, children, className }) => {
  return (
    <div className={className}>
      <Inner>
        <TitleSlot>{title}</TitleSlot>
        <ChildrenSlot>{children}</ChildrenSlot>
      </Inner>
    </div>
  );
};

export const OverlayCard = styled(OverlayCardView)`
  background: #262727;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.25);
  padding: 5px;
`;
