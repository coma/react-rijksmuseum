import React from 'react';
import Page from '../ui/Page';
import BreadCrumbs from '../ui/BreadCrumbs';
import Image from '../ui/Image';
import { Content, Preview, Info, Title, Author } from './WorkPageStyle';

export default function WorkPagePartial ({ breadCrumbs }) {
  return (
    <Page title="Obras de Arte">
      <BreadCrumbs links={breadCrumbs} />
      <Content>
        <Preview>
          <Image src="https://hdqwalls.com/download/rick-and-morty-5k-artwork-hy-480x800.jpg" alt="Rick & Morty" />
        </Preview>
        <Info>
          <Title>Morty true colors</Title>
          <Author>Internetz Guy</Author>
        </Info>
      </Content>
    </Page>
  );
}
