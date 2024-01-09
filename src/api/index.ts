import { apiOptions, matchesType } from "@/types";
import { get } from "http";

const options:apiOptions = {
    next: { revalidate: 30 },
    headers:{
        'X-Auth-Token': process.env.SOCCER_API_TOKEN,
        'Content-Type': 'application/json'
    }
}

const todaysDate = new Date();
const getDateMonth = new Date(todaysDate.getTime());
getDateMonth.setDate(todaysDate.getDate() - 1);
const year = getDateMonth.getFullYear();
const month = String(getDateMonth.getMonth() + 1).padStart(2, '0');
const day = String(getDateMonth.getDate() + 1).padStart(2, '0');

const yesterday = [year, month, day].join('-');

export const getMatchesfootball = async () => {
  const matchData = await fetch('https://api.football-data.org/v4/matches',options);
  return matchData.json();
}

export const getMatchesFootballFinished = async () => {
    const matchData = await fetch(`https://api.football-data.org/v4/matches?date=${yesterday}`,options)
    return matchData.json();
}

export const getNewsInfo = async () => {
  const newsData = await fetch(`https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_TOKEN}&q=soccer&pageSize=5`,{next:{revalidate:30}})
  return newsData.json();
}

export const filterLeague = async (filterData:string) => {
    const getEnglishLeague = await getMatchesfootball();
    const filterPremierLeague:matchesType[] = getEnglishLeague?.matches;
    const getData = filterPremierLeague.filter((data) => data.competition.name === filterData);
    return getData;
}