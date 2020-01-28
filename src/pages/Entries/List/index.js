import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import {
  GroupingState,
  IntegratedGrouping,
  SortingState,
  IntegratedSorting
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableGroupRow,
  GroupingPanel,
  DragDropProvider,
  Toolbar,
  TableColumnResizing,
  TableColumnReordering
} from '@devexpress/dx-react-grid-material-ui';

const EntriesList = props => {
  // console.log(props);
  const { pathname } = props.location;
  const [rows] = useState([
    { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
    { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
    { id: 2, product: 'Sistema', owner: 'Allims' },
    { id: 3, product: 'Solo', owner: 'IBRA' },
    { id: 4, product: 'Teste', owner: 'Outros' },
    { id: 5, product: 'React Native', owner: 'Outros' },
    { id: 6, product: 'Novo', owner: 'Econsulting' },
    { id: 7, product: 'Old', owner: 'Allims' },
    { id: 8, product: 'React JS', owner: 'Facebook' },
    { id: 9, product: 'Angular JS', owner: 'Google' },
    { id: 10, product: 'Native', owner: 'Google' },
    { id: 11, product: 'Lims', owner: 'Allims' }
  ]);
  const [columns] = useState([
    { name: 'id', title: 'ID' },
    { name: 'product', title: 'Product' },
    { name: 'owner', title: 'Owner' }
  ]);
  const [columnWidths, setColumnWidths] = useState([
    { columnName: 'id', width: 100 },
    { columnName: 'product', width: 180 },
    { columnName: 'owner', width: 180 }
  ]);
  const [columnOrder, setColumnOrder] = useState(['id', 'product', 'owner']);

  // const indexTab = props.tabs.findIndex(tab => tab.url === pathname);
  const changeTab = tab => {
    props.changeTab(tab);
  };

  const newChildTab = tab => {
    const exists = props.tabs.filter(propsTab => propsTab.url === tab.url);

    if (exists.length > 0) {
      changeTab(tab.url);
    } else {
      props.newChildTab(tab);
    }
  };

  const newTab = tab => {
    const exists = props.tabs.filter(propsTab => propsTab.url === tab.url);

    if (exists.length > 0) {
      changeTab(tab.url);
    } else {
      props.newTab(tab);
    }
  };

  const createSO = () => {
    // console.log(Math.floor(Math.random() * 10))

    const id = Math.floor(Math.random() * 10) + 1;
    // console.log(id);
    newChildTab({
      url: `/app/service-order/${id}`,
      label: `S.O. ${id}`,
      selected: true,
      editing: false,
      tabId: `so-${id}`,
      urlParent: pathname
    });

    props.history.push(`/app/service-order/${id}`);
  };

  return (
    <div>
      <h1>
        <button
          type='button'
          className='primaryButton'
          onClick={() => createSO()}
        >
          Adicionar
        </button>
      </h1>

      <Paper>
        <Grid rows={rows} columns={columns}>
          <SortingState
            defaultSorting={[{ columnName: 'product', direction: 'asc' }]}
          />
          <DragDropProvider />
          <GroupingState />
          <IntegratedSorting />
          <IntegratedGrouping />
          <Table />

          <TableColumnResizing
            columnWidths={columnWidths}
            onColumnWidthsChange={setColumnWidths}
          />
          <TableColumnReordering
            order={columnOrder}
            onOrderChange={setColumnOrder}
          />
          <TableHeaderRow showSortingControls />
          <TableGroupRow />
          <Toolbar />
          <GroupingPanel />
        </Grid>
      </Paper>
    </div>
  );
}

export default EntriesList