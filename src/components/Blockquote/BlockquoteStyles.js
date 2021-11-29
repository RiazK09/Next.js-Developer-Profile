import styled from "styled-components";

export const Block = styled.blockquote`
  padding-left: 40px;
  border-left: 2px solid #fff;
  max-width: 800px;
  font-size: 40px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 30px;
    max-width: 670px;
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 15px;
    max-width: 670px;
    font-size: 20px;
    line-height: 22px;
  }
`;

export const Span = styled.span`
  display: block;
  text-align: right;
  font-size: 24px;
  line-height: 40px;
  margin-top: 10px;
  text-transform: uppercase;
  max-width: 800px;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 670px;
    font-size: 14px;
    line-height: 22px;
  }
`;
