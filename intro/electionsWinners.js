function electionsWinners(votes, k) 
{
    const winner = Math.max(...votes),
          winnerIndex = votes.indexOf(winner);
    
    if(k == 0)
    {
        if(votes.lastIndexOf(winner) != winnerIndex) return 0;
        return 1;
    }
    
    return votes.map(i => i +k).filter(i => i > winner).length;
}