import { tableInfosCLT } from '../../utils';
import ProjectionsCLt from '../projections/projectionsCLt';

import { 
  Body, 
  Column, 
  Container, 
  ContainerTable, 
  Footer, 
  Header, 
  NameFooter, 
  TitleCLT, 
  TitleHeader, 
  ValueFooter, 
  ValueHeader 
} from './style';

const TableCLT = () => {

  return (
    <Container>
      {
        tableInfosCLT.map((tableInfosCLT)=> (
          <>
            <TitleCLT>{`${tableInfosCLT.type}:`}</TitleCLT>
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
                tableInfosCLT.columnData.map((columnData, i) => (
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
                  <span>{`R$ ${tableInfosCLT.total}`}</span>
                </ValueFooter>
              </Footer>

            </ContainerTable>
          </>
        ))
      } 
      <ProjectionsCLt />

    </Container>
  );
};

export default TableCLT;
