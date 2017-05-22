var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.player1result = "";
    this.player2result = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.score = "";
};

TennisGame2.prototype.getScore = function() {

    if (this.P1point === this.P2point && this.P1point < 3) {
        if (this.P1point === 0) {
            this.score = "Love";
        }
        else if (this.P1point === 1) {
            this.score = "Fifteen";
        } else if (this.P1point === 2) {
            this.score = "Thirty";
        }
        this.score += "-All";
    }
    if (this.P1point === this.P2point && this.P1point > 2)
        this.score = "Deuce";

    if (this.P1point > 0 && this.P2point === 0) {
        if (this.P1point === 1)
            this.player1result = "Fifteen";
        if (this.P1point === 2)
            this.player1result = "Thirty";
        if (this.P1point === 3)
            this.player1result = "Forty";

        this.player2result = "Love";
        this.score = this.player1result + "-" + this.player2result;
    }
    if (this.P2point > 0 && this.P1point === 0) {
        if (this.P2point === 1)
            this.player2result = "Fifteen";
        if (this.P2point === 2)
            this.player2result = "Thirty";
        if (this.P2point === 3)
            this.player2result = "Forty";

        this.player1result = "Love";
        this.score = this.player1result + "-" + this.player2result;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.P1point === 2)
            this.player1result = "Thirty";
        if (this.P1point === 3)
            this.player1result = "Forty";
        if (this.P2point === 1)
            this.player2result = "Fifteen";
        if (this.P2point === 2)
            this.player2result = "Thirty";
        this.score = this.player1result + "-" + this.player2result;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.P2point === 2)
            this.player2result = "Thirty";
        if (this.P2point === 3)
            this.player2result = "Forty";
        if (this.P1point === 1)
            this.player1result = "Fifteen";
        if (this.P1point === 2)
            this.player1result = "Thirty";
        this.score = this.player1result + "-" + this.player2result;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        this.score = "Advantage player1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        this.score = "Advantage player2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        this.score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        this.score = "Win for player2";
    }
    return this.score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}