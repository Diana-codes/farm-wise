'use client';

import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';

// assets
import { ArrowDown2, ArrowRight2 } from 'iconsax-react';

// ==============================|| TREE VIEW - CONTROLLED ||============================== //

export default function ControlledTreeView() {
  const [expanded, setExpanded] = useState(['1']);
  const [selected, setSelected] = useState([]);

  const handleToggle = (event, itemIds) => {
    setExpanded(itemIds);
  };

  const handleSelect = (event, itemIds) => {
    setSelected(itemIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []));
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) => (oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : []));
  };

  const controlledTreeviewCodeString = `<Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
  <Box sx={{ mb: 1 }}>
    <Button onClick={handleExpandClick}>{expanded.length === 0 ? 'Expand all' : 'Collapse all'}</Button>
    <Button onClick={handleSelectClick}>{selected.length === 0 ? 'Select all' : 'Unselect all'}</Button>
  </Box>
  <SimpleTreeView
    aria-label="controlled"
    slots={{ collapseIcon: ArrowDown2, expandIcon: ArrowRight2 }}
    expandedItems={expanded}
    selectedItems={selected}
    onExpandedItemsChange={handleToggle}
    onSelectedItemsChange={handleSelect}
    multiSelect
  >
    <TreeItem itemId="5" label="Documents">
      <TreeItem itemId="6" label="MUI">
        <TreeItem itemId="7" label="src">
          <TreeItem itemId="8" label="index.js" />
          <TreeItem itemId="9" label="tree-view.js" />
        </TreeItem>
      </TreeItem>
    </TreeItem>
  </SimpleTreeView>
</Box>`;

  return (
    <MainCard title="Controlled" codeString={controlledTreeviewCodeString}>
      <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
        <Box sx={{ mb: 1 }}>
          <Button onClick={handleExpandClick}>{expanded.length === 0 ? 'Expand all' : 'Collapse all'}</Button>
          <Button onClick={handleSelectClick}>{selected.length === 0 ? 'Select all' : 'Unselect all'}</Button>
        </Box>
        <SimpleTreeView
          aria-label="controlled"
          slots={{ collapseIcon: ArrowDown2, expandIcon: ArrowRight2 }}
          expandedItems={expanded}
          selectedItems={selected}
          onExpandedItemsChange={handleToggle}
          onSelectedItemsChange={handleSelect}
          multiSelect
        >
          <TreeItem itemId="5" label="Documents">
            <TreeItem itemId="6" label="MUI">
              <TreeItem itemId="7" label="src">
                <TreeItem itemId="8" label="index.js" />
                <TreeItem itemId="9" label="tree-view.js" />
              </TreeItem>
            </TreeItem>
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </MainCard>
  );
}
