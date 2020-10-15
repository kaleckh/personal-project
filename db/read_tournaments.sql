select * from tournament t
join tournament_players tp on t.id = tp.tournamentId;
