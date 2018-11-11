import React from "react";
import { SQLite } from "expo";

import { UI } from "./ui-components";

const db = SQLite.openDatabase("db.db");

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: [
        { day: "Monday", feeds: [{ time: "2018-11-11T16:05:00.000Z" }] },
        {
          day: "Sunday",
          feeds: [
            { time: "2018-11-10T22:35:00.000Z" },
            { time: "2018-11-10T16:25:00.000Z", notes: "amazing feed" },
            { time: "2018-11-10T07:15:00.000Z" }
          ]
        }
      ] //todo get pre-sorted and grouped from database
    };

    this.handleSaveFeed = this.handleSaveFeed.bind(this);
    this.updateFeeds = this.updateFeeds.bind(this);
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists feeds (id integer primary key not null, time int, notes text);"
      );
    });
  }

  handleSaveFeed(obj) {
    db.transaction(
      tx => {
        tx.executeSql("insert into feeds (time, notes) values (?, ?)", [
          obj.time,
          obj.notes
        ]);
      },
      null,
      this.updateFeeds
    );
  }

  updateFeeds() {
    db.transaction(tx => {
      tx.executeSql("select * from feeds", [], (_, { rows }) =>
        console.log("did it work?", JSON.stringify(rows))
      );
    });
  }

  render() {
    return <UI feeds={this.state.feeds} handleSaveFeed={this.handleSaveFeed} />;
  }
}
