import React from 'react';
import Page from '../ui/Page';
import BreadCrumbs from '../ui/BreadCrumbs';
import Image from '../ui/Image';
import { Content, Preview, Info, Title, Author, Details, Section, Data } from './WorkPageStyle';

export default function WorkPageFull ({ breadCrumbs, ...props }) {
  return (
    <Page title="Obras de Arte">
      <BreadCrumbs links={breadCrumbs} />
      <Content>
      {!!props.image && (
        <Preview>
          <Image src={props.image.src} alt={props.title} />
        </Preview>
      )}
        <Info>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
          <p>{props.description}</p>
          <Details>
            <li>
              <Section>Identificación</Section>
              <Data>
                <tbody>
                  <tr>
                    <th>Título</th>
                    <td>{props.title}</td>
                  </tr>
                  <tr>
                    <th>Tipo de obra</th>
                    <td>{props.types.join(', ')}</td>
                  </tr>
                  <tr>
                    <th>Número de obra</th>
                    <td>{props.id}</td>
                  </tr>
                  <tr>
                    <th>Inscripciones/marcas</th>
                    <td>{props.inscriptions.join(', ')}</td>
                  </tr>
                  <tr>
                    <th>Descripción</th>
                    <td>{props.makerLine}</td>
                  </tr>
                </tbody>
              </Data>
            </li>
            <li>
              <Section>Creación</Section>
              <Data>
                <tbody>
                  <tr>
                    <th>Artista</th>
                    <td>{props.authorRoles.join(', ')}</td>
                  </tr>
                  <tr>
                    <th>Lugar</th>
                    <td>{props.location}</td>
                  </tr>
                  <tr>
                    <th>Fecha</th>
                    <td>{props.dating}</td>
                  </tr>
                </tbody>
              </Data>
            </li>
            <li>
              <Section>Material y Técnica</Section>
              <Data>
                <tbody>
                  <tr>
                    <th>Material</th>
                    <td>{props.materials.join(', ')}</td>
                  </tr>
                  <tr>
                    <th>Medidas</th>
                    <td>{props.dimensions}</td>
                  </tr>
                </tbody>
              </Data>
            </li>
          </Details>
        </Info>
      </Content>
    </Page>
  );
}
