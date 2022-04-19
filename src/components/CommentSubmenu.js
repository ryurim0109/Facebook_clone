import React from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    '수정',
    '삭제',
  ];
  
  const ITEM_HEIGHT = 48;
  
  const CommentSubmenu = (props) => {
    console.log(props)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
      console.log('클릭')
      console.log(event.target.value)
      if(event.target.value == '0')
        console.log('수정')
      else if(event.target.value == '1')
        console.log('삭제')
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option,idx) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} value={idx}>
            {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }

  export default CommentSubmenu