import React, { useState, useRef, useMemo } from 'react';
import { usePopper } from 'react-popper';
import { useVirtual } from 'react-virtual';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

// Example data
const options = Array.from({ length: 1000 }, (_, index) => `Option ${index + 1}`);

// Custom Menu using react-window
const VirtualizedMenu = React.forwardRef(function VirtualizedMenu(props, ref) {
  const { children, ...other } = props;
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(popperElement, ref);

  return (
    <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
      <Paper {...other} style={styles.offset}>
        {children}
      </Paper>
    </div>
  );
});

// Custom Option using react-virtual
const VirtualizedOption = ({ index, style, data }) => {
  const option = data[index];

  return (
    <MenuItem key={option} value={option} style={style}>
      {option}
    </MenuItem>
  );
};

// Custom Select component using react-window
const VirtualizedSelect = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef(null);
  const rowVirtualizer = useVirtual({
    size: options.length,
    parentRef: listRef,
    estimateSize: useMemo(() => () => 36, []),
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setSelectedIndex(event.target.value);
    handleClose();
  };

  return (
    <div>
      <Select value={options[selectedIndex]} onClick={handleClick}>
        {options.map((option, index) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>

      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom-start" transition>
        {({ TransitionProps }) => (
          <VirtualizedMenu ref={listRef} {...TransitionProps}>
            {rowVirtualizer.virtualItems.map((virtualRow) => (
              <VirtualizedOption
                key={virtualRow.index}
                index={virtualRow.index}
                style={virtualRow.style}
                data={options}
              />
            ))}
          </VirtualizedMenu>
        )}
      </Popper>
    </div>
  );
};

export default VirtualizedSelect;
