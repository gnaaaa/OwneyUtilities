var cryptoZombiesABI = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_description",
          "type": "bytes32"
        },
        {
          "name": "_Fee",
          "type": "uint256"
        },
        {
          "name": "_certificationType",
          "type": "bool"
        }
      ],
      "name": "createPayedCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_n",
          "type": "uint256"
        }
      ],
      "name": "getObject",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "assignFreeCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "proposePayedCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "getObjectPayedCertificationsProposals",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "getObjectPayedCertifications",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_newAddress",
          "type": "address"
        }
      ],
      "name": "changePayToAddress",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "freeCertifications",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "description",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_acceptedCertificationIndex",
          "type": "uint256"
        },
        {
          "name": "_reason",
          "type": "bytes32"
        }
      ],
      "name": "removePayedCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_proposalIndex",
          "type": "uint256"
        }
      ],
      "name": "acceptPayedCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "getObjectPayedCertificationsRemoved",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_newPrice",
          "type": "uint256"
        }
      ],
      "name": "changeObjectPrice",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "changePayedCertificationOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_description",
          "type": "bytes32"
        },
        {
          "name": "_object",
          "type": "bytes"
        },
        {
          "name": "_finite",
          "type": "bool"
        },
        {
          "name": "_nOfCopies",
          "type": "uint64"
        },
        {
          "name": "_currentPrice",
          "type": "uint256"
        }
      ],
      "name": "registerObject",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_description",
          "type": "bytes32"
        }
      ],
      "name": "createFreeCertification",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        }
      ],
      "name": "getObjectFreeCertifications",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_n",
          "type": "uint256"
        }
      ],
      "name": "getEProperty",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_newManagerAddress",
          "type": "address"
        }
      ],
      "name": "changeManager",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "objects",
      "outputs": [
        {
          "name": "creator",
          "type": "address"
        },
        {
          "name": "description",
          "type": "bytes32"
        },
        {
          "name": "objectHash",
          "type": "bytes32"
        },
        {
          "name": "finite",
          "type": "bool"
        },
        {
          "name": "nOfCopies",
          "type": "uint256"
        },
        {
          "name": "maxCopies",
          "type": "uint256"
        },
        {
          "name": "currentPrice",
          "type": "uint256"
        },
        {
          "name": "manager",
          "type": "address"
        },
        {
          "name": "payTo",
          "type": "address"
        },
        {
          "name": "payedCertificationsTotalCosts",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "payedCertifications",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "description",
          "type": "bytes32"
        },
        {
          "name": "payTo",
          "type": "address"
        },
        {
          "name": "certificationType",
          "type": "bool"
        },
        {
          "name": "fee",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_certificationId",
          "type": "uint256"
        },
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_removedCertificationIsAtIndex",
          "type": "uint256"
        }
      ],
      "name": "proposePayedCertificationAfterRemoval",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ePropertyId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "fee",
          "type": "uint256"
        }
      ],
      "name": "ePropertyChangeOwnership",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ePropertyId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "atPrice",
          "type": "uint256"
        }
      ],
      "name": "ePropertyForSale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "ePropertyId",
          "type": "uint256"
        }
      ],
      "name": "ePropertyNotForSale",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "description",
          "type": "bytes32"
        }
      ],
      "name": "freeCertificationCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "freeCertificationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        }
      ],
      "name": "freeCertificationAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "description",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "payTo",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "certificationType",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "Fee",
          "type": "uint256"
        }
      ],
      "name": "PayedCertificationCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "PayedCertificationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "proposer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "proposalId",
          "type": "uint256"
        }
      ],
      "name": "PayedCertificationProposed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "PayedCertificationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        }
      ],
      "name": "PayedCertificationAccepted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "PayedCertificationId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "deactivator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "reason",
          "type": "bytes32"
        }
      ],
      "name": "PayedCertificationRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "description",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "objectHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "finite",
          "type": "bool"
        },
        {
          "indexed": false,
          "name": "nOfCopies",
          "type": "uint64"
        },
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "currentPrice",
          "type": "uint256"
        }
      ],
      "name": "ObjectCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "objectId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newPrice",
          "type": "uint256"
        }
      ],
      "name": "ObjectPriceChanged",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_objectId",
          "type": "uint256"
        },
        {
          "name": "_toOwner",
          "type": "address"
        }
      ],
      "name": "registerEProperty",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_propertyId",
          "type": "uint256"
        },
        {
          "name": "_atPrice",
          "type": "uint256"
        }
      ],
      "name": "setEPropertyPrice",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_propertyId",
          "type": "uint256"
        }
      ],
      "name": "transactEProperty",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    }
  ]
