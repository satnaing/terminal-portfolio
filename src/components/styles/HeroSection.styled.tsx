import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  div {
    flex-basis: 50%;
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  border-bottom: 2px dashed ${({ theme }) => theme.colors.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
