import React from "react";
import styled from "styled-components";

const Image =(props)=>{
    const {shape, src, size,_onClick} =props;

    const styles ={
        src:src,
        size:size,
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
};
const AspectOutter = styled.div`
    width:100%;
    min-width:250px;
`;
const AspectInner = styled.div`
    position:relative;
    padding-top: 75%;
    overflow:hidden;
    background-image: url('${(props)=>props.src}');
    background-size:cover;
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