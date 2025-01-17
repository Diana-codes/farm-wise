'use client';
import PropTypes from 'prop-types';

import { useEffect, useMemo, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';

// third-party
import { flexRender, useReactTable, getCoreRowModel } from '@tanstack/react-table';

// project-imports
import ScrollX from 'components/ScrollX';
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import { CSVExport, SelectColumnVisibility } from 'components/third-party/react-table';
import LinearWithLabel from 'components/@extended/progress/LinearWithLabel';

import makeData from 'data/react-table';

// assets
const avatarImage = '/assets/images/users';

// ==============================|| REACT TABLE ||============================== //

function ReactTable({ columns, data }) {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility
    },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true
  });

  useEffect(() => setColumnVisibility({ id: false, role: false, contact: false, country: false }), []);

  let headers = [];
  table.getVisibleLeafColumns().map((columns) =>
    headers.push({
      label: typeof columns.columnDef.header === 'string' ? columns.columnDef.header : '#',
      // @ts-ignore
      key: columns.columnDef.accessorKey
    })
  );

  return (
    <MainCard
      content={false}
      title={matchDownSM ? 'Column' : 'Column Visibility'}
      secondary={
        <Stack direction="row" alignItems="center" pl={1} spacing={{ xs: 1, sm: 2 }}>
          <SelectColumnVisibility
            {...{
              getVisibleLeafColumns: table.getVisibleLeafColumns,
              getIsAllColumnsVisible: table.getIsAllColumnsVisible,
              getToggleAllColumnsVisibilityHandler: table.getToggleAllColumnsVisibilityHandler,
              getAllColumns: table.getAllColumns
            }}
          />
          <CSVExport {...{ data, headers, filename: 'column-visibility.csv' }} />
        </Stack>
      }
    >
      <ScrollX>
        <TableContainer component={Paper}>
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

// ==============================|| REACT TABLE - VISIBILITY ||============================== //

export default function ColumnVisibility() {
  const data = makeData(15);

  const columns = useMemo(
    () => [
      {
        header: '#',
        accessorKey: 'id',
        title: 'Id',
        meta: { className: 'cell-center' }
      },
      {
        header: 'Avatar',
        accessorKey: 'avatar',
        cell: (cell) => <Avatar alt="Avatar 1" size="sm" src={`${avatarImage}/avatar-${cell.getValue()}.png`} />,
        meta: { className: 'cell-center' }
      },
      {
        header: 'First Name',
        accessorKey: 'firstName'
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName'
      },
      {
        header: 'Email',
        accessorKey: 'email'
      },
      {
        header: 'Age',
        accessorKey: 'age',
        meta: { className: 'cell-right' }
      },
      {
        header: 'Role',
        accessorKey: 'role'
      },
      {
        header: 'Contact',
        accessorKey: 'contact'
      },
      {
        header: 'Country',
        accessorKey: 'country'
      },
      {
        header: 'Visits',
        accessorKey: 'visits',
        meta: { className: 'cell-right' }
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (cell) => {
          switch (cell.getValue()) {
            case 'Complicated':
              return <Chip color="error" label="Complicated" size="small" variant="light" />;
            case 'Relationship':
              return <Chip color="success" label="Relationship" size="small" variant="light" />;
            case 'Single':
            default:
              return <Chip color="info" label="Single" size="small" variant="light" />;
          }
        }
      },
      {
        header: 'Profile Progress',
        accessorKey: 'progress',
        cell: (cell) => <LinearWithLabel value={cell.getValue()} sx={{ minWidth: 75 }} />
      }
    ],
    []
  );

  return <ReactTable {...{ columns, data }} />;
}

ReactTable.propTypes = { columns: PropTypes.array, data: PropTypes.array };
