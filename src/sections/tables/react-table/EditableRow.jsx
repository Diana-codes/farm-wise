'use client';
import PropTypes from 'prop-types';

import { useMemo, useState } from 'react';

// material-ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

// third-party
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

// project-imports
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { CSVExport, RowEditable } from 'components/third-party/react-table';

import makeData from 'data/react-table';

// assets
import { CloseCircle, Edit2, Send } from 'iconsax-react';

function EditAction({ row, table }) {
  const meta = table?.options?.meta;
  const setSelectedRow = (e) => {
    meta?.setSelectedRow((old) => ({
      ...old,
      [row.id]: !old[row.id]
    }));

    // @ts-ignore
    meta?.revertData(row.index, e?.currentTarget.name === 'cancel');
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      {meta?.selectedRow[row.id] && (
        <Tooltip title="Cancel">
          <IconButton color="error" name="cancel" onClick={setSelectedRow}>
            <CloseCircle size="15" variant="Outline" />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title={meta?.selectedRow[row.id] ? 'Save' : 'Edit'}>
        <IconButton color={meta?.selectedRow[row.id] ? 'success' : 'primary'} onClick={setSelectedRow}>
          {meta?.selectedRow[row.id] ? <Send size="15" variant="Outline" /> : <Edit2 variant="Outline" />}
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data, setData }) {
  const [originalData, setOriginalData] = useState(() => [...data]);
  const [selectedRow, setSelectedRow] = useState({});

  const table = useReactTable({
    data,
    columns,
    defaultColumn: {
      cell: RowEditable
    },
    getCoreRowModel: getCoreRowModel(),
    meta: {
      selectedRow,
      setSelectedRow,
      revertData: (rowIndex, revert) => {
        if (revert) {
          setData((old) => old.map((row, index) => (index === rowIndex ? originalData[rowIndex] : row)));
        } else {
          setOriginalData((old) => old.map((row, index) => (index === rowIndex ? data[rowIndex] : row)));
        }
      },
      updateData: (rowIndex, columnId, value) => {
        setData((old) =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value
              };
            }
            return row;
          })
        );
      }
    },
    debugTable: true
  });

  let headers = [];
  table.getAllColumns().map(
    (columns) =>
      // @ts-ignore
      columns.columnDef.accessorKey &&
      headers.push({
        label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
        // @ts-ignore
        key: columns.columnDef.accessorKey
      })
  );

  return (
    <MainCard
      content={false}
      title="Editable Row"
      secondary={
        <CSVExport {...{ data: table.getRowModel().flatRows.map((row) => row.original), headers, filename: 'editable-row.csv' }} />
      }
    >
      <ScrollX>
        <TableContainer>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id} {...header.column.columnDef.meta}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} {...cell.column.columnDef.meta}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ScrollX>
    </MainCard>
  );
}

// ==============================|| REACT TABLE - EDITABLE ROW ||============================== //

export default function EditableRow() {
  const [data, setData] = useState(() => makeData(10));

  const columns = useMemo(
    () => [
      {
        header: 'First Name',
        accessorKey: 'firstName',
        dataType: 'text'
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName',
        dataType: 'text'
      },
      {
        header: 'Email',
        accessorKey: 'email',
        dataType: 'text'
      },
      {
        header: 'Age',
        accessorKey: 'age',
        dataType: 'text',
        meta: {
          className: 'cell-right'
        }
      },
      {
        header: 'Visits',
        accessorKey: 'visits',
        dataType: 'text',
        meta: {
          className: 'cell-right'
        }
      },
      {
        header: 'Status',
        accessorKey: 'status',
        dataType: 'select'
      },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        dataType: 'progress'
      },
      {
        header: 'Actions',
        id: 'edit',
        cell: EditAction,
        meta: {
          className: 'cell-center'
        }
      }
    ],
    []
  );

  return <ReactTable {...{ data, columns, setData }} />;
}

EditAction.propTypes = { row: PropTypes.object, table: PropTypes.object };

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array, setData: PropTypes.any };
