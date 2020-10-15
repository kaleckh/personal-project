import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTournament } from "../ducks/tournaments";
import "./Createtournament.css";
import axios from "axios";

function CreateTournament({ history }) {
  let [teamName, setTeamName] = useState();
  let [type, setType] = useState();
  let [date, setDate] = useState();
  let dispatch = useDispatch();
  let username = useSelector((state) => state.user.username);
  return (
    <body>
      {username}
      <div className="newBox">
        <div>
          <label>Game type</label>{" "}
          <input
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
          <label>Team names</label>{" "}
          <input
            onChange={(event) => {
              setTeamName(event.target.value.split(" "));
            }}
          />
          <label>Date</label>
          <input
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <button
            onClick={() => {
              axios({
                method: "post",
                url: "http://localhost:3001/tournaments",
                data: {
                  type: type,
                  teamName: teamName,
                  enrolled: 0,
                  date: date,
                },
              }).then((res) => {
                let tournament = res.data;

                dispatch(
                  createTournament({
                    type: tournament.type,
                    teamName: tournament.teamName,
                    enrolled: tournament.enrolled,
                    date: tournament.date,
                  })
                );
                history.push("/home");
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </body>
  );
}

export default CreateTournament;
