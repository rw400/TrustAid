pragma solidity ^0.4.24;

contract TrustAidToken is ERC20Interface{

	address public owner;
	uint public totalSupply;

    struct Transaction {
        
		//address recipient
		uint tokens;
        uint totalValue;
        bool verified;
        bool bulkorder;
    }
    mapping(address => uint) balances;	
    mapping(address => Transaction) TransactionData;

    constructor() public {
        owner = msg.sender;
		totalSupply = _totalSupply;
		transactionID = 0;
		verfied[owner] = false;
		bulkorder[owner] = false;

    }	
	// Token Balance
    function balanceOf(address _owner, uint _totalSupply) public view returns (uint balance) {
		return balances[_owner] = _totalSupply;
    }
	//_totalSupply.balances[address(0)];


	// Donating to charities
	// Transfer tokens to owner's account
    function transferFrom(address _from, address _to, uint _tokens) public returns (bool success) {
        if (verfied[msg.sender] == true || bulkorder[msg.sender] == true){
			tokens = tokens*1.1;	//incentive reward for being verified, donating in bulk
			require(balances[_from] >= tokens){
				balances[from] = balances[from].sub(tokens);
				balances[to] = balances[to].add(tokens);
		}
		emit Transfer(from, to, tokens);
        return true;
    }

	// Purchasing discount, use reward token
    function transfer(address _from, address _to, uint tokens) public returns (bool success) {
        require(balances[_msg.sender] >= tokens && totalValue > 0){
			balances[msg.sender] = balances[msg.sender].sub(tokens);
		    balances[to] = balances[to].add(tokens);
		}
		emit Transfer(msg.sender, to, tokens);
        return true;
    }

    // function newTransaction (address _recipient) payable public {
    //     transactionID += 1;
    //     TransactionInfo[transactionID].sender = msg.sender;
    //     TransactionInfo[transactionID].recipient = _recipient;
    //     TransactionInfo[transactionID].totalValue = msg.value;
    // }
    
	// Check for verified account
    function verified (transactionData) public returns (bool) {
        require(TransactionData[_verified] == true && TransactionData[_transactionID] > 0 && TransactionData[_totalValue]>0){
			return verified[_msg.sender] = true;
		}
    }

	// Check for bulk orders account
    function bulkorder (transactionData) public returns (bool) {
        require(verified[msg.sender] == true && TransactionData[_totalValue]>500){
			return bulkorder[_msg.sender] = true;
		}
    }

	//default payable
    function () public payable {
        revert("invalid transaction");
    }
}
