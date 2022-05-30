import * as React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';


const tableStyle = {
  border: '0',
  width: '70%'
}

export default function ColumnOrderingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 20,
  });
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);
  return (
    <>
    <div style={{ height: 400, width: '100%', display: 'flex', alignItems: 'center' }}>
      <DataGridPro checkboxSelection={checkboxSelection} sx={tableStyle} {...data} />
    </div>
    </>
  );
}
