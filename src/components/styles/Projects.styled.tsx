import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const ProjectTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors.text[200]};
  /* background-color: #ddd; */
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
  /* min-width: 490px; */
`;

export const UsageDiv = styled.div`
  margin-top: 1.5rem;
  line-height: 1.5rem;
`;
