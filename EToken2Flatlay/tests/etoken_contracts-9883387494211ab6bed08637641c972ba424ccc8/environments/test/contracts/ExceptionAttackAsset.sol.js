// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"multiAsset","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_stackDepthLib","type":"address"}],"name":"setupStackDepthLib","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"getAddress","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"emitApprove","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"emitTransfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_multiAsset","type":"address"},{"name":"_symbol","type":"bytes32"}],"name":"init","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"index","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferFromWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[],"name":"sendToOwner","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"transferToICAP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferToICAPWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_cosigner","type":"address"}],"name":"setCosignerAddress","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferFromToICAPWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_icap","type":"bytes32"},{"name":"_value","type":"uint256"}],"name":"transferFromToICAP","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_reference","type":"string"}],"name":"transferWithReference","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_addr","type":"address"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_from","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approve","type":"event"}],
    binary: "60606040526000805460a060020a60ff0219168155610f3c90819061002390396000f3606060405236156101115760e060020a6000350463029a8bf78114610113578063095ea7b31461012557806312ab72421461017057806318160ddd146101a357806321f8a72114610219578063233850891461023c57806323b872dd1461024d57806323de66511461023c5780632cc0b2541461027a5780635250fec71461029a5780636461fe39146102bb5780636620a9351461031e57806370a082311461033c578063733480b7146103c457806377fe38a4146103ed57806382fc49b81461044f57806395d89b411461046a578063a48a663c14610473578063a525f42c146104d6578063a9059cbb14610503578063ac35caee1461052c578063ca446dd91461058e578063dd62ed3e146105ba575b005b61064d600254600160a060020a031681565b61066a600435602435600060003411156106905761069033345b610f3182825b604051600090600160a060020a0384169083908381818185876185025a03f193505050505b92915050565b61066a60043560008054600160a060020a03168082141561074257508054600160a060020a031916821790556001610744565b61067e604080516002546003547fb524abcf00000000000000000000000000000000000000000000000000000000835260048301529151600092600160a060020a03169163b524abcf916024828101926020929190829003018187876161da5a03f11561000257505060405151915061074d9050565b61064d600435600081815260016020526040902054600160a060020a0316610744565b610111600435602435604435610002565b61066a600435602435604435600061082f8484846020604051908101604052806000815260200150610309565b61066a60043560243560006000600034111561085c5761085c333461013f565b61064d600435600160205260009081526040902054600160a060020a031681565b604080516020606435600481810135601f810184900484028501840190955284845261066a948135946024803595604435956084949201919081908401838280828437509496505050505050505b600060003411156108d1576108d1333461013f565b61066a600060006000600060003411156109d8576109d8333461013f565b61067e6004355b604080516002546003547f4d30b6be000000000000000000000000000000000000000000000000000000008352600160a060020a038581166004850152602484019190915292516000939190911691634d30b6be916044828101926020929190829003018187876161da5a03f1156100025750506040515191506107449050565b61066a6004356024356000610af28383602060405190810160405280600081526020015061043a565b604080516020604435600481810135601f810184900484028501840190955284845261066a9481359460248035959394606494929391019181908401838280828437509496505050505050505b60006000341115610af957610af9333461013f565b61066a60043560006000341115610bd157610bd1333461013f565b61067e60035481565b604080516020606435600481810135601f810184900484028501840190955284845261066a948135946024803595604435956084949201919081908401838280828437509496505050505050505b60006000341115610c5c57610c5c333461013f565b61066a600435602435604435600061082f84848460206040519081016040528060008152602001506104c1565b61066a6004356024356000610af283836020604051908101604052806000815260200150610579565b604080516020604435600481810135601f810184900484028501840190955284845261066a9481359460248035959394606494929391019181908401838280828437509496505050505050505b60006000341115610d4a57610d4a333461013f565b61011160043560243560008281526001602052604090208054600160a060020a031916821790555b5050565b61067e600435602435600254600354604080517f1c8d5d38000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301528581166024830152604482019390935290516000939290921691631c8d5d3891606481810192602092909190829003018187876161da5a03f11561000257505060405151915061016a9050565b60408051600160a060020a03929092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b6106b85b6000610749600032600160a060020a031633600160a060020a03161415905061074d565b1561016a57604080516002546003547f4f09eba7000000000000000000000000000000000000000000000000000000008352600160a060020a0387811660048501526024840187905260448401919091529251921691634f09eba79160648181019260209290919082900301816000876161da5a03f11561000257505060405151915061016a9050565b505b919050565b1590505b90565b610b0157600260009054906101000a9004600160a060020a0316600160a060020a031663a48a663c338686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156108075780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515190505b90505b9392505050565b60028054600160a060020a031916821790556003839055600191505b5092915050565b506002548390600160a060020a031660001415806108c3575080600160a060020a0316632f553d31846040518260e060020a02815260040180826000191681526020019150506020604051808303816000876161da5a03f115610002575050604051511590505b156108395760009150610855565b6108d9610694565b156109d057600260009054906101000a9004600160a060020a0316600160a060020a031663f0cbe059868686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156109a65780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f115610002575050604051519150505b949350505050565b604080516002546003547f02571be300000000000000000000000000000000000000000000000000000000835260048301529151600160a060020a0392909216916302571be39160248181019260209290919082900301816000876161da5a03f115610002575050604051519350505030600160a060020a031631905060016000821115610a6d57610a6a8383610145565b90505b600254600160a060020a03166357cfeeee84610a8881610343565b6003600050546040518460e060020a0281526004018084600160a060020a031681526020018381526020018260001916815260200193505050506020604051808303816000876161da5a03f1156100025750506040515190508015610aea5750805b935050505090565b905061016a565b610750610694565b600260009054906101000a9004600160a060020a0316600160a060020a031663c54876618585856040518460e060020a0281526004018084600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610ba45780820380516001836020036101000a031916815260200191505b509450505050506020604051808303816000876161da5a03f1156100025750506040515190509050610832565b610bd9610694565b1561074457604080516002546003547fe82b7cb2000000000000000000000000000000000000000000000000000000008352600160a060020a0386811660048501526024840191909152925192169163e82b7cb29160448181019260209290919082900301816000876161da5a03f1156100025750506040515191506107449050565b610c64610694565b156109d057600260009054906101000a9004600160a060020a0316600160a060020a031663ea98e540868686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610d1c5780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515191506109d09050565b610d52610694565b610e4b57600260009054906101000a9004600160a060020a0316600160a060020a03166331c6c4cf338686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610e1e5780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f11561000257505060405151905061082f565b600260009054906101000a9004600160a060020a0316600160a060020a03166364ef212e8585600360005054866040518560e060020a0281526004018085600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610f035780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515190509050610832565b15156105b65761000256",
    unlinked_binary: "60606040526000805460a060020a60ff0219168155610f3c90819061002390396000f3606060405236156101115760e060020a6000350463029a8bf78114610113578063095ea7b31461012557806312ab72421461017057806318160ddd146101a357806321f8a72114610219578063233850891461023c57806323b872dd1461024d57806323de66511461023c5780632cc0b2541461027a5780635250fec71461029a5780636461fe39146102bb5780636620a9351461031e57806370a082311461033c578063733480b7146103c457806377fe38a4146103ed57806382fc49b81461044f57806395d89b411461046a578063a48a663c14610473578063a525f42c146104d6578063a9059cbb14610503578063ac35caee1461052c578063ca446dd91461058e578063dd62ed3e146105ba575b005b61064d600254600160a060020a031681565b61066a600435602435600060003411156106905761069033345b610f3182825b604051600090600160a060020a0384169083908381818185876185025a03f193505050505b92915050565b61066a60043560008054600160a060020a03168082141561074257508054600160a060020a031916821790556001610744565b61067e604080516002546003547fb524abcf00000000000000000000000000000000000000000000000000000000835260048301529151600092600160a060020a03169163b524abcf916024828101926020929190829003018187876161da5a03f11561000257505060405151915061074d9050565b61064d600435600081815260016020526040902054600160a060020a0316610744565b610111600435602435604435610002565b61066a600435602435604435600061082f8484846020604051908101604052806000815260200150610309565b61066a60043560243560006000600034111561085c5761085c333461013f565b61064d600435600160205260009081526040902054600160a060020a031681565b604080516020606435600481810135601f810184900484028501840190955284845261066a948135946024803595604435956084949201919081908401838280828437509496505050505050505b600060003411156108d1576108d1333461013f565b61066a600060006000600060003411156109d8576109d8333461013f565b61067e6004355b604080516002546003547f4d30b6be000000000000000000000000000000000000000000000000000000008352600160a060020a038581166004850152602484019190915292516000939190911691634d30b6be916044828101926020929190829003018187876161da5a03f1156100025750506040515191506107449050565b61066a6004356024356000610af28383602060405190810160405280600081526020015061043a565b604080516020604435600481810135601f810184900484028501840190955284845261066a9481359460248035959394606494929391019181908401838280828437509496505050505050505b60006000341115610af957610af9333461013f565b61066a60043560006000341115610bd157610bd1333461013f565b61067e60035481565b604080516020606435600481810135601f810184900484028501840190955284845261066a948135946024803595604435956084949201919081908401838280828437509496505050505050505b60006000341115610c5c57610c5c333461013f565b61066a600435602435604435600061082f84848460206040519081016040528060008152602001506104c1565b61066a6004356024356000610af283836020604051908101604052806000815260200150610579565b604080516020604435600481810135601f810184900484028501840190955284845261066a9481359460248035959394606494929391019181908401838280828437509496505050505050505b60006000341115610d4a57610d4a333461013f565b61011160043560243560008281526001602052604090208054600160a060020a031916821790555b5050565b61067e600435602435600254600354604080517f1c8d5d38000000000000000000000000000000000000000000000000000000008152600160a060020a0386811660048301528581166024830152604482019390935290516000939290921691631c8d5d3891606481810192602092909190829003018187876161da5a03f11561000257505060405151915061016a9050565b60408051600160a060020a03929092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b6106b85b6000610749600032600160a060020a031633600160a060020a03161415905061074d565b1561016a57604080516002546003547f4f09eba7000000000000000000000000000000000000000000000000000000008352600160a060020a0387811660048501526024840187905260448401919091529251921691634f09eba79160648181019260209290919082900301816000876161da5a03f11561000257505060405151915061016a9050565b505b919050565b1590505b90565b610b0157600260009054906101000a9004600160a060020a0316600160a060020a031663a48a663c338686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156108075780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515190505b90505b9392505050565b60028054600160a060020a031916821790556003839055600191505b5092915050565b506002548390600160a060020a031660001415806108c3575080600160a060020a0316632f553d31846040518260e060020a02815260040180826000191681526020019150506020604051808303816000876161da5a03f115610002575050604051511590505b156108395760009150610855565b6108d9610694565b156109d057600260009054906101000a9004600160a060020a0316600160a060020a031663f0cbe059868686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156109a65780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f115610002575050604051519150505b949350505050565b604080516002546003547f02571be300000000000000000000000000000000000000000000000000000000835260048301529151600160a060020a0392909216916302571be39160248181019260209290919082900301816000876161da5a03f115610002575050604051519350505030600160a060020a031631905060016000821115610a6d57610a6a8383610145565b90505b600254600160a060020a03166357cfeeee84610a8881610343565b6003600050546040518460e060020a0281526004018084600160a060020a031681526020018381526020018260001916815260200193505050506020604051808303816000876161da5a03f1156100025750506040515190508015610aea5750805b935050505090565b905061016a565b610750610694565b600260009054906101000a9004600160a060020a0316600160a060020a031663c54876618585856040518460e060020a0281526004018084600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610ba45780820380516001836020036101000a031916815260200191505b509450505050506020604051808303816000876161da5a03f1156100025750506040515190509050610832565b610bd9610694565b1561074457604080516002546003547fe82b7cb2000000000000000000000000000000000000000000000000000000008352600160a060020a0386811660048501526024840191909152925192169163e82b7cb29160448181019260209290919082900301816000876161da5a03f1156100025750506040515191506107449050565b610c64610694565b156109d057600260009054906101000a9004600160a060020a0316600160a060020a031663ea98e540868686866040518560e060020a0281526004018085600160a060020a0316815260200184600019168152602001838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610d1c5780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515191506109d09050565b610d52610694565b610e4b57600260009054906101000a9004600160a060020a0316600160a060020a03166331c6c4cf338686600360005054876040518660e060020a0281526004018086600160a060020a0316815260200185600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610e1e5780820380516001836020036101000a031916815260200191505b5096505050505050506020604051808303816000876161da5a03f11561000257505060405151905061082f565b600260009054906101000a9004600160a060020a0316600160a060020a03166364ef212e8585600360005054866040518560e060020a0281526004018085600160a060020a0316815260200184815260200183600019168152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f168015610f035780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303816000876161da5a03f1156100025750506040515190509050610832565b15156105b65761000256",
    address: "0xd073420a375ecfbf31e5ce5e7f605a6f30ec3bc2",
    generated_with: "2.0.9",
    contract_name: "ExceptionAttackAsset"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("ExceptionAttackAsset error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExceptionAttackAsset error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExceptionAttackAsset error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("ExceptionAttackAsset error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.ExceptionAttackAsset = Contract;
  }

})();
