import React from "react";
import { SQLite } from "expo";
import { groupBy, sortWith, descend, prop } from "ramda";

import { Layout } from "./ui-components";

const db = SQLite.openDatabase("db.db");

function cleanDBOutput(array) {
  const feedsGroupedByDate = groupBy(
    feed => new Date(feed.time).toISOString().substring(0, 10),
    array
  );
  const feedsMappedOnKey = Object.keys(feedsGroupedByDate).map(key => ({
    date: key,
    feeds: feedsGroupedByDate[key].sort((a, b) => a.time - b.time)
  }));

  const threeLatestDays = sortWith(
    [descend(prop("date"))],
    feedsMappedOnKey
  ).slice(0, 3);

  return threeLatestDays;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      feeds: []
    };

    this.handleSaveFeed = this.handleSaveFeed.bind(this);
    this.updateFeeds = this.updateFeeds.bind(this);
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists feeds (id integer primary key not null, time real, notes text);",
        // "drop table feeds",
        // "delete from feeds",
        error => console.error("failed creating table feeds", error),
        () => {
          console.debug(
            "Successfully created table if it did not exist already"
          );
          this.updateFeeds();
        }
      );
    });
  }

  handleSaveFeed(obj, successCallback) {
    db.transaction(
      tx => {
        tx.executeSql("insert into feeds (time, notes) values (?, ?)", [
          obj.time,
          obj.notes
        ]);
      },
      err => console.error("Failed saving feed", err),
      () => {
        this.updateFeeds();
        successCallback();
      }
    );
  }

  updateFeeds() {
    db.transaction(tx => {
      tx.executeSql(
        "select * from feeds",
        [],
        (_, { rows: { _array } }) => {
          console.debug(
            "Successfully fetched the feeds",
            JSON.stringify(_array)
          );
          const cleanedFeeds = cleanDBOutput(_array);
          console.debug("feeds", cleanedFeeds);
          this.setState({ feeds: cleanedFeeds });
        },
        err => console.error("Failed fetching feeds", err)
      );
    });
  }

  render() {
    return (
      <Layout feeds={this.state.feeds} handleSaveFeed={this.handleSaveFeed} />
    );
  }
}
