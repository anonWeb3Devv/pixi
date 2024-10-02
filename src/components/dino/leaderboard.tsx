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
    }
  }
`;

export function LeaderBoard() {
  const data = useQuery(api.scores.get);

  return (
    <LeaderBoardWrapper>
      <h3>Leaderboard</h3>
      <ul>
        {/* {leaderboard.map((leader) => (
      <li key={leader.id}>
        <span>{leader.score}</span>
      </li>
    ))} */}
        {data?.map((score) => (
          <li key={score._id}>
            <span>{score.score}</span>
          </li>
        ))}
      </ul>
    </LeaderBoardWrapper>
  );
}
