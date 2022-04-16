import React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {actionCreators as LoginActions} from '../redux/modules/Login_module'
import { useDispatch } from 'react-redux';
import Signup from './Signup';


const Login =()=>{
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    id: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const login_click = () =>{
    console.log(values)
    const Login_info = {
      userEmail:values.id,
      password :values.password
    }
    dispatch(LoginActions.postLogin(Login_info))
  }

    return (
        <>
        <LoginDesign>
          <div className='Login_container'>
            <div className='contentbox'>
              <div className='logobox'>
                <img src='./logo/facebook_logo.png' alt='로고이미지'/>
                <Typography variant="h5" gutterBottom component="div">
                  Facebook에서 전세계에 있는 친구, 가족 지인들과 함께 이야기를 나눠보세요.
                </Typography>
              </div>
              <Paper elevation={3} sx={{width: '400px', height : '350px', padding : '5px'}}>
                  <FormControl sx={{ m: 1 , width : '96%' }} margin="normal" variant="outlined">
                    <TextField 
                      id="outlined-basic"
                      placeholder="이메일 또는 전화번호"
                      variant="outlined"
                      onChange={handleChange('id')} 
                      />
                  </FormControl>
                  <FormControl sx={{ m: 1 , width : '96%'}} fullWidth variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      placeholder="비밀번호"
                    />
                  </FormControl>
                  <Stack spacing={2} direction="row" >
                      <Button 
                        variant="contained"
                        sx={{m:1, fontWeight:'bold', fontSize: 20 }}
                        fullWidth
                        size='large'
                        onClick={login_click}
                        >로그인</Button>
                  </Stack>
                  <Stack spacing={2} direction="row" >
                    <Button variant="text"  sx={{margin:"auto" }}>비밀번호를 잊으셨나요?</Button>
                  </Stack>
                  <hr/>
                  <Signup />
              </Paper>
            </div>
          </div>
        </LoginDesign>
        </>
      );
};

const LoginDesign = styled.div`
  .Login_container{
    width: 100%;
    height: 100vh;
    background-color: #F0F2F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .contentbox{
    /* background-color: blue; */
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .logobox{
    margin : 0px 50px;
    Width: 420px;
    
  }
  img {
    width: 350px;
    margin-left: -30px;
  }
  .inputbox{
    margin: 50px;
    width: 400px;
    height : 300px;
  }
`
export default Login;