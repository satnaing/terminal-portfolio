import styled from "styled-components";

export const AboutWrapper = styled.div`
  p {
    margin-top: 0.5rem;
    line-height: 1.5rem;
  }
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HighlightAlt = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;
