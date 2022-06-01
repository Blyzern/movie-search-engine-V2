import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setLoading} from "./store/homeSlice";
import { Body } from "../../components/Body/Body";
import { NavBar } from "../../components/NavBar/NavBar";
import { PageContainer, BannerContainer, Banner } from "../../components/PageContainer/PageContainer";
import { FilmCover } from "../../components/FilmCover/FilmCover";
import { Title } from "../../components/Title/Title";

function redirect(path) {
    return  window.location.href = path;
}

export function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setLoading());
    },[]);
  
    const Serie = useSelector((state) => state.home.movie);
    return (
        <Body>
            <NavBar />
            <PageContainer>
                <BannerContainer>
                    <Title>ORIGINALI NETFLIX</Title>
                <Banner>
                {Serie.map(x => <FilmCover src={x.Copertina} key={x.id} onClick={() => redirect(x.link)}/>)}
                </Banner>
                </BannerContainer>
                <BannerContainer>
                <Title>SERIE TV</Title>
                <Banner>
                    {Serie.map(x => <FilmCover src={x.Copertina} key={x.id} onClick={() => redirect(x.link)}/>)}
                </Banner>
                </BannerContainer>
            </PageContainer>
        </Body>
    );
}
