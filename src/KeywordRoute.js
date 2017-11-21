import React from 'react';

import KeywordGallery from './KeywordGallery';

export default props => {
  return <KeywordGallery keyword={props.keyword || props.match.params.keyword} />
}