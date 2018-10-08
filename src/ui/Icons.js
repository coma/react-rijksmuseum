import styled from 'styled-components';

const Icon = styled.span`
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
`;

export const ChevronLeftIcon = styled(Icon)`
  &::before {
    content: "\\e900";
  }
`;

export const ChevronRightIcon = styled(Icon)`
  &::before {
    content: "\\e901";
  }
`;

export const CrossIcon = styled(Icon)`
  &::before {
    content: "\\e902";
  }
`;

export const SaveIcon = styled(Icon)`
  &::before {
    content: "\\e903";
  }
`;

export const MenuIcon = styled(Icon)`
&::before {
  content: "\\e904";
}
`;

export const SearchIcon = styled(Icon)`
  &::before {
    content: "\\e905";
  }
`;

export const ShareIcon = styled(Icon)`
  &::before {
    content: "\\e906";
  }
`;

export const CommentIcon = styled(Icon)`
  &::before {
    content: "\\e907";
  }
`;
