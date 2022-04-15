import React from 'react'
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {actionCreators as LoginActions} from '../redux/modules/Login_module'
import { useDispatch } from 'react-redux';

const Signup = () => {
	const [values, setValues] = React.useState({
		lastname : '',
		name : '',
		email : '',
		password : '',
		gender : '',
	})
	const [years, setYear] = React.useState('');
	const [months, setMonth] = React.useState('');
	const [days, setDay] = React.useState('');
	const dispatch = useDispatch();

	const default_ymd = {
		year : [...Array(118).keys()].map(key => key + 1905).reverse(),
		month : [...Array(12).keys()].map(key => key + 1),
		day : [...Array(31).keys()].map(key => key + 1)
	}
	const style = {
		position: 'absolute',
		top: '55%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 480,
		height : 520,
		bgcolor: 'background.paper',
		border: '1px solid #000',
		boxShadow: 20,
		
		p: 1,
	};

	const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

	const signup_click = () => {
		console.log(values);
		const Signup_info = {
			userEmail:values.email,
			password:values.password,
			userName:values.lastname+values.name,
		}
		dispatch(LoginActions.postSignup(Signup_info))
	}

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

    return (
			<>
				<Stack spacing={2} direction="row" sx={{margin : '20px'}} >
					<ThemeProvider theme={theme}>
					<Button 
						variant="contained"
						sx={{margin:"auto" ,fontWeight:'bold', fontSize: 20}}
						color="neutral"
						size='large'
						onClick={handleOpen}
						>
							새 계정 만들기
					</Button>
					</ThemeProvider>
				</Stack>
				<Modal
					keepMounted
					open={open}
					onClose={handleClose}
					aria-labelledby="keep-mounted-modal-title"
					aria-describedby="keep-mounted-modal-description"
				>
					<Paper elevation={3} sx={style}>
						<Typography 
							id="keep-mounted-modal-title" 
							variant="h4" 
							fontWeight={'bold'} 
							component="h2"
							>
							가입하기
						</Typography>
						<Typography 
							id="keep-mounted-modal-description" 
							sx={{ mt: 1, color : '#92979E' }}
						
							>
							빠르고 쉽습니다.
						</Typography>
						<hr/>
						<div>
							<TextField label="" placeholder='성(姓)' variant="outlined" onChange={handleChange('lastname')} sx={{margin : '0px 5px'}} />
							<TextField label="" placeholder='이름(성은 제외)' variant="outlined" onChange={handleChange('name')} sx={{margin : '0px 5px'}} />
						</div>
						<div>
							<TextField label="" placeholder='휴대폰 번호 또는 이메일' variant="outlined" onChange={handleChange('email')} sx={{margin : '10px 5px', width : '95%'}} />
						</div>
						<div>
							<TextField label="" placeholder='새 비밀번호' type={'password'} onChange={handleChange('password')} variant="outlined" sx={{margin : '0px 5px', width : '95%'}} />
						</div>
						<div>
							<div>
								생일
							</div>
							<FormControl sx={{ m: 1, minWidth: 120, width: '30%' }} size="small">
								<Select
									labelId="demo-select-small"
									id="demo-select-small"
									value={years}
									onChange={(e) => {setYear(e.target.value)}}
									defaultValue={30}
									>
									{default_ymd.year.map((el) => {
										return(
											<MenuItem value={el}>{el}</MenuItem>		
										);
									})}
								</Select>
							</FormControl>
							<FormControl sx={{ m: 1, minWidth: 120, width: '30%' }} size="small">
								<Select
									labelId="demo-select-small"
									id="demo-select-small"
									value={months}
									onChange={(e) => {setMonth(e.target.value)}}
									>
									{default_ymd.month.map((el) => {
										return(
											<MenuItem value={el}>{el}</MenuItem>		
										);
									})}
								</Select>
							</FormControl>
							<FormControl sx={{ m: 1, minWidth: 120, width: '30%' }} size="small">
								<Select
									labelId="demo-select-small"
									id="demo-select-small"
									value={days}
									onChange={(e)=>{setDay(e.target.value)}}
									>
									{default_ymd.day.map((el) => {
										return(
											<MenuItem value={el}>{el}</MenuItem>		
										);
									})}
								</Select>
							</FormControl>
						</div>
						<div>
							<div>성별</div>
							<FormControl sx={{ m: 1 }} >
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
									>
										<FormControlLabel value="male" control={<Radio />  }  checked = {values.gender === "male"}  onChange={handleChange('gender')} label="남성" />
										<FormControlLabel value="female" control={<Radio />} checked = {values.gender === "female"}  onChange={handleChange('gender')} label="여성" />
								</RadioGroup>
							</FormControl>
						</div>
						<Stack spacing={2} direction="row" sx={{margin : '20px'}} >
						<ThemeProvider theme={theme}>
						<Button 
							variant="contained"
							sx={{margin:"auto" ,fontWeight:'bold', fontSize: 20 , width: 300 }}
							color="neutral"
							onClick={signup_click}
							>
								가입하기
						</Button>
					</ThemeProvider>
				</Stack>
					</Paper>
				</Modal>
			</>
    );

}

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#42B72A',
      contrastText: '#fff',
    },
  },
});


export default Signup;