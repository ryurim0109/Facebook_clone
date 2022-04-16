import React from "react";
import styled from "styled-components";

const Image =(props)=>{
    const {shape, src, size,_onClick,backgroundPosition} =props;

    const styles ={
        src:src,
        size:size,
        backgroundPosition,
    };
    if(shape==="circle"){
        return(
            <ImageCircle {...styles}  onClick={_onClick} ></ImageCircle>
        );
    };
    if(shape==="rectangle"){
        return(
            <AspectOutter>
                <AspectInner {...styles}  onClick={_onClick}></AspectInner>
            </AspectOutter>
        );
    }
    if(shape==="rectan"){
        return(
            <AspectOutter>
                <AspectInn {...styles}  onClick={_onClick}></AspectInn>
            </AspectOutter>
        );
    }

    return(
        <React.Fragment>

        </React.Fragment>
    );
};

Image.defaultProps={
    shape:"circle",
    src: "",
    padding: null,
    size: 36,
    _onClick: () => {},
    borderRadius: false,
    backgroundPosition:false,
};
const AspectOutter = styled.div`
    width:100%;
    height:250px;
    min-width:250px;
`;
const AspectInner = styled.div`
    position:relative;
    padding-top: 75%;
    overflow:hidden;
    background-image: url('${(props)=>props.src}');
    background-size: cover;
    background-repeat:no-repeat;
    ${props => (props.borderRadius ? `border-radius: ${props.borderRadius}` : '')};
    ${props => (props.backgroundPosition ? `background-position: ${props.backgroundPosition}` : '')};
`;

const AspectInn = styled.div`
    position:relative;
    padding-top: 75%;
    overflow:hidden;
    background-image: url('${(props)=>props.src}');
    background-size:cover;
    ${props => (props.borderRadius ? `border-radius: ${props.borderRadius}` : '')};
    ${props => (props.backgroundPosition ? `background-position: ${props.backgroundPosition}` : '')};
`;


const ImageCircle =styled.div`
    --size: ${(props)=>props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius:  var(--size);
    padding: ${props => props.padding};
    background-image: url("${(props)=>props.src}");
    background-size: cover;
    margin:4px;
`;

export default Image;