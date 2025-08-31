-- DStake Token Contract Deployment Script
-- This script contains the Solidity contracts for deployment on Base network

/*
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract DStakeToken is ERC20, Ownable {
    uint256 public constant MAX_SUPPLY = 100_000_000 * 10**18; // 100M tokens
    bool public initialMintCompleted = false;
    
    constructor() ERC20("DStake Token", "DSTAKE") {}
    
    function mintInitialSupply() external onlyOwner {
        require(!initialMintCompleted, "Initial mint already completed");
        _mint(owner(), MAX_SUPPLY);
        initialMintCompleted = true;
    }
    
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");
        _mint(to, amount);
    }
}

contract DStakeStaking is ReentrancyGuard, Ownable {
    DStakeToken public immutable dstakeToken;
    
    uint256 public constant MONTHLY_RATE = 250; // 2.5% (250/10000)
    uint256 public constant DAILY_RATE = 83; // ~0.083% daily (83/100000)
    uint256 public constant WITHDRAWAL_FEE = 100; // 1% (100/10000)
    uint256 public constant REGISTRATION_BONUS = 1 * 10**18; // 1 DStake token
    
    struct StakeInfo {
        uint256 amount;
        uint256 lastRewardTime;
        uint256 pendingRewards;
        bool isRegistered;
    }
    
    mapping(address => StakeInfo) public stakes;
    uint256 public totalStaked;
    
    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardsClaimed(address indexed user, uint256 amount);
    event WalletRegistered(address indexed user);
    
    constructor(address _dstakeToken) {
        dstakeToken = DStakeToken(_dstakeToken);
    }
    
    function registerWallet() external {
        require(!stakes[msg.sender].isRegistered, "Already registered");
        
        stakes[msg.sender].isRegistered = true;
        stakes[msg.sender].lastRewardTime = block.timestamp;
        
        // Mint registration bonus
        dstakeToken.mint(msg.sender, REGISTRATION_BONUS);
        
        emit WalletRegistered(msg.sender);
    }
    
    function stake(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(stakes[msg.sender].isRegistered, "Must register wallet first");
        
        updateRewards(msg.sender);
        
        dstakeToken.transferFrom(msg.sender, address(this), amount);
        
        stakes[msg.sender].amount += amount;
        totalStaked += amount;
        
        emit Staked(msg.sender, amount);
    }
    
    function unstake(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(stakes[msg.sender].amount >= amount, "Insufficient staked amount");
        
        updateRewards(msg.sender);
        
        stakes[msg.sender].amount -= amount;
        totalStaked -= amount;
        
        // Apply withdrawal fee
        uint256 fee = (amount * WITHDRAWAL_FEE) / 10000;
        uint256 amountAfterFee = amount - fee;
        
        dstakeToken.transfer(msg.sender, amountAfterFee);
        
        emit Unstaked(msg.sender, amount);
    }
    
    function claimRewards() external nonReentrant {
        updateRewards(msg.sender);
        
        uint256 rewards = stakes[msg.sender].pendingRewards;
        require(rewards > 0, "No rewards to claim");
        
        stakes[msg.sender].pendingRewards = 0;
        dstakeToken.mint(msg.sender, rewards);
        
        emit RewardsClaimed(msg.sender, rewards);
    }
    
    function updateRewards(address user) internal {
        StakeInfo storage userStake = stakes[user];
        
        if (userStake.amount > 0 && userStake.lastRewardTime > 0) {
            uint256 timeElapsed = block.timestamp - userStake.lastRewardTime;
            uint256 dailyReward = (userStake.amount * DAILY_RATE) / 100000;
            uint256 reward = (dailyReward * timeElapsed) / 1 days;
            
            userStake.pendingRewards += reward;
        }
        
        userStake.lastRewardTime = block.timestamp;
    }
    
    function getStakedAmount(address user) external view returns (uint256) {
        return stakes[user].amount;
    }
    
    function getPendingRewards(address user) external view returns (uint256) {
        StakeInfo memory userStake = stakes[user];
        
        if (userStake.amount == 0 || userStake.lastRewardTime == 0) {
            return userStake.pendingRewards;
        }
        
        uint256 timeElapsed = block.timestamp - userStake.lastRewardTime;
        uint256 dailyReward = (userStake.amount * DAILY_RATE) / 100000;
        uint256 newReward = (dailyReward * timeElapsed) / 1 days;
        
        return userStake.pendingRewards + newReward;
    }
    
    function isRegistered(address user) external view returns (bool) {
        return stakes[user].isRegistered;
    }
}
*/

-- Instructions for deployment:
-- 1. Deploy DStakeToken contract first
-- 2. Deploy DStakeStaking contract with DStakeToken address
-- 3. Transfer ownership of DStakeToken to DStakeStaking contract
-- 4. Call mintInitialSupply() on DStakeToken
-- 5. Update CONTRACT_ADDRESSES in /contracts/addresses.ts with deployed addresses
