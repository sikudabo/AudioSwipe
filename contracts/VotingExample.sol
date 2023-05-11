// SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.19;

contract VotingExample {
    address public blockvotez;
    mapping(string => uint) public candidates;
    struct Candidate {
        string name;
        string id;
        uint votes;
        string[] voters;
    }

    struct Voter {
        string id;
        string votedFor;
    }
    struct Election {
        string name;
        string id;
        Candidate[] candidates;
        Voter[] voters;
    }
    struct Voters {
        string name;
        string candidate;
    }
    struct CandidateStruct {
        string name;
        string electionId;
        uint voteCount;
    }

    Election[] public electionsArray;

    event ElectionExists(string message);

    event ElectionCreated(string message);

    event SuccessfullyVoted(string message);

    event AlreadyVoted(string message);

    mapping(string => Election) public elections;
    mapping(string => CandidateStruct) public candidateStructs;
    mapping(string => Voters) public voters;
    string[] public voterIds;

    constructor() public {
        blockvotez = msg.sender;
    }

    function checkVoter(string memory voterId) private view returns(bool) {
        for (uint i = 0; i < voterIds.length; i++) {
            if (keccak256(bytes(voterIds[i])) != keccak256(bytes(voterId))) {
                return false;
            }
        }

        return true;
    }

    function sayHi() public pure returns(string memory) {
        return "Hello world";
    }

    function makeNewElection(string memory electionId, string memory electionName, Candidate[] memory newCandidates) public  {
        for (uint i = 0; i < electionsArray.length; i++) {
            if (keccak256(bytes(electionsArray[i].id)) == keccak256(bytes(electionId))) {
                revert('Election Already Exists');
            }
        }
        elections[electionId].name = electionName;
        elections[electionId].id = electionId;
        for (uint i = 0; i < newCandidates.length; i++) {
            elections[electionId].candidates.push(newCandidates[i]);
        }
        electionsArray.push(elections[electionId]);
        emit ElectionCreated('Your election was successfully created!');
    }

    function addNewVote(string memory electionId, string memory voterId, string memory votedFor, string memory candidateId) public  {
        if (msg.sender != blockvotez) {
            revert('Only BlockVotez can send votes');
        }
        if (keccak256(bytes(elections[electionId].id)) != keccak256(bytes(electionId))) {
            revert('Election does not exist');
        }
        for (uint i = 0; i < elections[electionId].voters.length; i++) {
            if (keccak256(bytes(elections[electionId].voters[i].id)) == keccak256(bytes(voterId))) {
                emit AlreadyVoted('A voter attempted to vote in this election who already voted');
                return;
            }
        }

        for (uint i = 0; i < elections[electionId].candidates.length; i++) {
            if (keccak256(bytes(elections[electionId].candidates[i].id)) == keccak256(bytes(candidateId))) {
                elections[electionId].candidates[i].votes += 1;
                Voter memory newVoter;
                newVoter.id = voterId;
                newVoter.votedFor = votedFor;
                elections[electionId].voters.push(newVoter);
                emit SuccessfullyVoted('Your vote has successfully been cast!');
            }
        }
    }

    function getVoteCount(string memory electionId, string memory candidateId) public view returns(uint) {
       for (uint i = 0; i < elections[electionId].candidates.length; i++) {
            if (keccak256(bytes(elections[electionId].candidates[i].id)) == keccak256(bytes(candidateId))) {
                return elections[electionId].candidates[i].votes;
            }
        }

        revert('Invalid value');
    }
    function addCandidate(string memory candidateId, string memory candidateName, string memory electionId) public  {
        CandidateStruct memory newCandidate;
        newCandidate.name = candidateName;
        newCandidate.electionId = electionId;
        newCandidate.voteCount = 0;
        candidateStructs[candidateId] = newCandidate;
    }

    function addCandidateVote(string memory candidateId, string memory electionId) public {
        CandidateStruct memory currentCandidate;
        currentCandidate.electionId = electionId;
        if (keccak256(bytes(candidateStructs[candidateId].electionId)) == keccak256(bytes(electionId))) {
                candidateStructs[candidateId].voteCount += 1;
        }
    }

    function newVote(string memory candidate, string memory voterId, string memory voterName) public returns(string memory successMessage) {
        require(checkVoter(voterId) == true, "Duplicate Voter");
        candidates[candidate] += 1;
        Voters memory newVoters;
        newVoters.name = voterName;
        newVoters.candidate = candidate;
        voters[voterId] = newVoters;
        voterIds.push(voterId);
        return "Success";
    }
}