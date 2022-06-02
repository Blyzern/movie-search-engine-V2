import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getMovies} from "./store/homeSlice";
import { Wrapper } from "../../components/wrapper/styles";
import { NavBar } from "../../components/NavBar/NavBar";
import { PageContainer, BannerContainer, Banner } from "../../components/PageContainer/PageContainer";
import { FilmCover } from "../../components/FilmCover/FilmCover";
import { Title } from "../../components/Title/Title";

function redirect(path) {
    return  window.location.href = path;
}

export function Home() {
    const series = useSelector((state) => state.home.movie);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovies());
    },[]);
  
    return (
        <Wrapper>
            <NavBar />
            <PageContainer>
                <BannerContainer>
                    <Title>ORIGINALI NETFLIX</Title>
                <Banner>
                    {series.map(serie => <FilmCover src={serie.Copertina} key={serie.id} onClick={() => redirect(serie.link)}/>)}
                </Banner>
                </BannerContainer>
                <BannerContainer>
                <Title>SERIE TV</Title>
                <Banner>
                    {series.map(serie => <FilmCover src={serie.Copertina} key={serie.id} onClick={() => redirect(serie.link)}/>)}
                </Banner>
                </BannerContainer>
            </PageContainer>
        </Wrapper>
    );
}
