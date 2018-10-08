import React from 'react';
import PropTypes from 'prop-types';
import { CommentIcon, ShareIcon, SaveIcon } from './Icons';
import { Wrapper, Actions } from './ImageStyle';

function Image ({ src, alt }) {
  return (
    <Wrapper>
      <img src={src} alt={alt} />
      <Actions>
        <button>
          <CommentIcon />
        </button>
        <button>
          <ShareIcon />
        </button>
        <button>
          <SaveIcon />
        </button>
      </Actions>
    </Wrapper>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
