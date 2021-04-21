import React from 'react';
import './App.css';


import "modern-normalize/modern-normalize.css";
import Profile from './components/Profile';
import FriendList from "./components/FriendList"
import Statistics from "./components/Statistics"
import TransactionHistory from "./components/TransactionHistory"
import user from "./data/user.json"
import friends from "./data/friends.json"
import statistic from "./data/statistical-data.json"
import transactions from "./data/transactions.json"

const App = () => {
    return(
        <div>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
            <FriendList friends={friends} />
            <Statistics
                title="Upload stats" stats={statistic} />
            <TransactionHistory items={transactions} />
       </div>
   ) 
}

export default App