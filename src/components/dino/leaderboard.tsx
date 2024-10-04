import { useQuery } from "convex/react";
import styled from "styled-components";
import { api } from "../../../convex/_generated/api";

const LeaderBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-family: "Handjet-Regular", sans-serif;

  > h3 {
    font-size: 30px;
  }

  > ul {
    list-style: none;
    font-size: 20px;

    > li {
      margin-top: -10px;

      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;

      > span:nth-child(1) {
        text-align: right;
      }
    }
  }
`;

export function LeaderBoard() {
  const data = useQuery(api.scores.get);

  return (
    <LeaderBoardWrapper>
      <h3>Leaderboard</h3>
      <ul>
        {data?.map((score) => (
          <li key={score._id}>
            <span>{score.name} : </span>
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
    </LeaderBoardWrapper>
  );
}
