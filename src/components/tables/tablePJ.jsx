import { 
  Body, 
  Column, 
  Container, 
  ContainerTable, 
  Footer, 
  Header, 
  NameFooter, 
  TitlePJ, 
  TitleHeader, 
  ValueFooter, 
  ValueHeader 
} from './style';

import { tableInfosPJ } from '../../utils';

import ProjectionsPJ from '../projections/projectionsPJ';

const TablePJ = () => {

  return (
    <Container>
      {
        tableInfosPJ.map((tableInfosPJ)=> (
          <>
            <TitlePJ>{`${tableInfosPJ.type}:`}</TitlePJ>
            <ContainerTable>
              <Header>
                <TitleHeader>
                  <span>Dados</span>
                </TitleHeader>
                <ValueHeader>
                  <span>Valor</span>
                </ValueHeader>
              </Header>
              {
                tableInfosPJ.columnData.map((columnData, i) => (
                  <Body key={i}>
                    <Column>
                      <strong>{columnData.name}</strong>
                    </Column>
                    <Column>
                      <span>{`R$ ${columnData.value}`}</span>
                    </Column>
                  </Body>
                ))
              }
              <Footer>
                <NameFooter>
                  <strong>Líquido</strong>
                </NameFooter>

                <ValueFooter>
                  <span>{`R$ ${tableInfosPJ.total}`}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
      <ProjectionsPJ />

    </Container>
  );
};

export default TablePJ;