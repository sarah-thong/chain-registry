import { Chain } from '@chain-registry/types';
const chains: Chain[] = [
  {
    $schema: '../chain.schema.json',
    chain_name: 'agoric',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Agoric',
    chain_id: 'agoric-3',
    bech32_prefix: 'agoric',
    daemon_name: 'ag0',
    node_home: '$HOME/.agoric',
    genesis: {
      genesis_url: 'https://main.agoric.net/genesis.json'
    },
    slip44: 564,
    explorers: [
      {
        kind: 'explorers.guru',
        url: 'https://agoric.explorers.guru/',
        tx_page: 'https://agoric.explorers.guru/transaction/{txHash}'
      }
    ],
    codebase: {
      git_repo: 'https://github.com/Agoric/ag0/',
      recommended_version: 'agoric-3.1',
      compatible_versions: ['agoric-3.1']
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: 'a26158a5cbb1df581dd6843ac427191af76d6d5d',
          address: '104.154.240.50:26656'
        },
        {
          id: '6e26a1b4afa6889f841d7957e8c2b5d50d32d485',
          address: '95.216.53.26:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://main.rpc.agoric.net:443'
        },
        {
          address: 'https://agoric-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.agoric.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://main.api.agoric.net:443'
        },
        {
          address: 'https://api.agoric.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.agoric.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'aioz',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'AIOZ Network',
    chain_id: 'aioz_168-1',
    bech32_prefix: 'aioz',
    daemon_name: 'aiozd',
    node_home: '$HOME/.aioz',
    genesis: {
      genesis_url: 'https://archive.aioz.network/aioz_168-1/genesis.json'
    },
    key_algos: ['ethsecp256k1'],
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'attoaioz',
          fixed_min_gas_price: 1000000000
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/AIOZNetwork/go-aioz',
      recommended_version: 'v1.2.0',
      compatible_versions: ['v1.2.0'],
      binaries: {
        'linux/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-linux-amd64.tar.gz',
        'darwin/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-darwin-amd64.tar.gz',
        'windows/amd64':
          'https://archive.aioz.network/aiozd-v1.2.0-windows-amd64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: 'aab202d5648772a8b5be3db575a8a7dd577db78f',
          address: '167.172.6.76:26656'
        },
        {
          id: 'ef834ca8044d345db334fbf6a6bfe7230f429739',
          address: '35.236.45.174:26656'
        },
        {
          id: 'b13a849f59ff3e0558d248c3e9eb9bf4a360bb77',
          address: '20.187.94.254:26656'
        },
        {
          id: '849e6023440355412bc9a9d5bc0731143e7d657a',
          address: '13.53.208.41:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'aab202d5648772a8b5be3db575a8a7dd577db78f',
          address: '167.172.6.76:26656'
        },
        {
          id: 'ef834ca8044d345db334fbf6a6bfe7230f429739',
          address: '35.236.45.174:26656'
        },
        {
          id: 'b13a849f59ff3e0558d248c3e9eb9bf4a360bb77',
          address: '20.187.94.254:26656'
        },
        {
          id: '849e6023440355412bc9a9d5bc0731143e7d657a',
          address: '13.53.208.41:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-dataseed.aioz.network:443',
          provider: 'AIOZ Network'
        }
      ],
      rest: [
        {
          address: 'https://lcd-dataseed.aioz.network',
          provider: 'AIOZ Network'
        }
      ],
      grpc: [
        {
          address: 'https://grpc-dataseed.aioz.network:443',
          provider: 'AIOZ Network'
        }
      ],
      'evm-jsonrpc': [
        {
          address: 'https://eth-dataseed.aioz.network',
          provider: 'AIOZ Network'
        }
      ]
    },
    explorers: [
      {
        kind: 'aioz',
        url: 'https://explorer.aioz.network',
        tx_page: 'https://explorer.aioz.network/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'akash',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Akash',
    chain_id: 'akashnet-2',
    bech32_prefix: 'akash',
    daemon_name: 'akash',
    node_home: '$HOME/.akash',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ovrclk/net/master/mainnet/genesis.json'
    },
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/ovrclk/akash/',
      recommended_version: 'v0.16.3',
      compatible_versions: ['v0.16.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/ovrclk/akash/releases/download/v0.16.3/akash_0.16.3_linux_amd64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '4acf579e2744268f834c713e894850995bbf0ffa',
          address: '50.18.31.225:26656'
        },
        {
          id: '3691ac1f56389ffec8579c13a6eb8eca41cf8ae3',
          address: '54.219.88.246:26656'
        },
        {
          id: '86afe23f116ba4754a19819a55d153008eb74b48',
          address: '15.164.87.75:26656'
        }
      ],
      persistent_peers: [
        {
          id: '4acf579e2744268f834c713e894850995bbf0ffa',
          address: '50.18.31.225:26656'
        },
        {
          id: '3691ac1f56389ffec8579c13a6eb8eca41cf8ae3',
          address: '54.219.88.246:26656'
        },
        {
          id: '86afe23f116ba4754a19819a55d153008eb74b48',
          address: '15.164.87.75:26656'
        },
        {
          id: '43544bc781b88d6785420427926d86a5332940b3',
          address: '142.132.131.184:26656'
        },
        {
          id: '30b8008d4ea5069a8724a0aa73833493efa88e67',
          address: '65.108.140.62:26656'
        },
        {
          id: '2b19780ea3de3553f03847a397ac2dfda1d2e89e',
          address: '65.108.6.185:26656'
        },
        {
          id: 'be3a538cebb28e7224db10920bb7fe32456e1aad',
          address: '116.202.244.153:26656'
        },
        {
          id: 'd2643edd1b3dce6615bc9925e20122c44d2ff763',
          address: '172.106.17.158:26656'
        },
        {
          id: '08fd59378ec5845a667f8608bd228f9251aec035',
          address: '3.64.67.110:27002'
        },
        {
          id: '6acf80cdbfba5ffbee23bd9e5b3ecac3234f3420',
          address: '147.75.32.107:26656'
        },
        {
          id: '20180c45451739668f6e272e007818139dba31e7',
          address: '88.198.62.198:2020'
        },
        {
          id: '89b5c363babe7c4983c3ef06c3c9ed1e39ec4246',
          address: '51.79.176.202:56656'
        },
        {
          id: '1c03b13f5f24f59ecc3cfe5d5fc36dabee3a5d78',
          address: '144.202.77.146:26656'
        },
        {
          id: '070b3c936e2995bc269a2981702b87de05411baa',
          address: '148.251.13.186:28656'
        },
        {
          id: '05c30fd95b888ca8df8171ce65a06f1de683d6e3',
          address: '84.252.129.17:26656'
        },
        {
          id: 'b618556645ddac41dc871f7a0f6aa68feb0cc2a7',
          address: '38.75.137.161:26656'
        },
        {
          id: '97edd562862a905f087ccb02a39e6f660939e314',
          address: '216.202.234.76:26656'
        },
        {
          id: '06788f62811879e1d0774c4e9152543e17fe8576',
          address: '145.40.65.227:26656'
        },
        {
          id: '2ecb6e24df48ee037234222c67ef963daa58bcfc',
          address: '65.108.102.99:29656'
        },
        {
          id: '4e95c8f651de136b48c324ea9a687739a945f452',
          address: '185.107.95.88:26656'
        },
        {
          id: '1bfbbf77beeb2c1ace50443478035a255a7e510f',
          address: '136.24.44.100:26656'
        },
        {
          id: 'ce137ea95720b2d4e196920d12170d1a6aebcf69',
          address: '35.215.43.253:26656'
        },
        {
          id: 'fb42bcf141eecc7a8a66fcfbf7d2573b3b8d00e6',
          address: '75.119.133.59:26656'
        },
        {
          id: 'c6e0e5460aefcf3c5d5d26dee1ef1e99e5ed90b8',
          address: '198.57.27.14:26656'
        },
        {
          id: '2640152c6359b03a3a4559b12110e96fcb95cd68',
          address: '74.91.27.138:26656'
        },
        {
          id: 'aa01698ec0d8bb96398e89b57ecb08bcca50fa21',
          address: '65.21.199.148:26636'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.akash.forbole.com:443',
          provider: 'forbole'
        },
        {
          address: 'https://rpc-akash.ecostake.com:443',
          provider: 'ecostake'
        },
        {
          address: 'https://akash-rpc.polkachu.com:443',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-akash-ia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'http://akash.c29r3.xyz:80/rpc',
          provider: 'c29r3'
        }
      ],
      rest: [
        {
          address: 'https://api.akash.forbole.com:443',
          provider: 'forbole'
        },
        {
          address: 'https://rest-akash.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://akash-api.polkachu.com:443',
          provider: 'Polkachu'
        },
        {
          address: 'https://api-akash-ia.notional.ventures',
          provider: 'Notional'
        },
        {
          address: 'https://akash.c29r3.xyz:443/api',
          provider: 'c29r3'
        }
      ],
      grpc: [
        {
          address: 'grpc-akash-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/akash',
        tx_page: 'https://www.mintscan.io/akash/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/akash-network',
        tx_page: 'https://ping.pub/akash-network/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://akash.bigdipper.live/',
        tx_page: 'https://akash.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/akash',
        tx_page: 'https://atomscan.com/akash/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'arkh',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Arkhadian',
    chain_id: 'arkh',
    bech32_prefix: 'arkh',
    daemon_name: 'arkhd',
    node_home: '$HOME/.arkhd',
    genesis: {
      genesis_url:
        'https://github.com/vincadian/arkh-blockchain/blob/master/genesis/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uarkh',
          fixed_min_gas_price: 1e-9
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/vincadian/arkh-blockchain',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_linux_amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/vincadian/arkh-blockchain/releases/download/latest/arkh-blockchain_latest_darwin_amd64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '808f01d4a7507bf7478027a08d95c575e1b5fa3c',
          address: 'asc-dataseed.arkhadian.com:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://asc-dataseed.arkhadian.com/',
          provider: 'arkhnetwork'
        }
      ],
      rest: [
        {
          address: 'https://asc-blockchain-api.arkhadian.com/',
          provider: 'arkhnetwork'
        }
      ]
    },
    explorers: [
      {
        kind: 'Ping',
        url: 'https://testnet.ping.pub/arkh',
        tx_page: 'https://testnet.ping.pub/arkh/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'assetmantle',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'AssetMantle',
    chain_id: 'mantle-1',
    bech32_prefix: 'mantle',
    daemon_name: 'mantleNode',
    node_home: '$HOME/.mantleNode',
    genesis: {
      genesis_url:
        'https://github.com/AssetMantle/genesisTransactions/blob/main/mantle-1/final_genesis.json?raw=true'
    },
    codebase: {
      git_repo: 'https://github.com/AssetMantle/node.git',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0']
    },
    peers: {
      persistent_peers: [
        {
          id: '95a7b7eed1f5cd2894574bf0da4b884243e7d0f3',
          address: '43.204.38.118:26656'
        },
        {
          id: '0a58c9bbb5d7551eebb8e4ac79bd97f580aaf269',
          address: '65.0.131.189:26656'
        },
        {
          id: '800a9f991c0bf2dba8ec9370f41951dab5927b32',
          address: '3.110.89.133:26656'
        },
        {
          id: '5f72cdfd9adbb20cd880fd0d93943d40c426b5c2',
          address: '35.154.27.208:26656'
        },
        {
          id: '1048f75cdd92eedbe3935d07ccf662b45aa6c5f7',
          address: '15.206.189.215:26656'
        },
        {
          id: 'a2289be9268ad08db32a59ef8dc243476d5c6f6a',
          address: '3.108.2.18:26656'
        },
        {
          id: '4923caf1572e8925519fcd9eca27cc70c803d7d6',
          address: '3.108.218.178:26656'
        },
        {
          id: '4c39bda705c8c8993f8a989e1375720352d9573f',
          address: '65.0.45.61:26656'
        },
        {
          id: '8392653526200f757190c1f88ffd69726a20055b',
          address: '3.110.74.167:26656'
        },
        {
          id: '7da33184073d211e625848ce4ef2ba50cf5eeb36',
          address: '13.234.225.229:26656'
        },
        {
          id: '880a8fc1a21d2908bd109dab1a2a074ebddec18a',
          address: '65.108.192.170:26656'
        },
        {
          id: '88873cf28bc552d39d4cb10523167aa24c3a4e85',
          address: '95.217.118.96:26876'
        },
        {
          id: 'f96b29b7df3fe6a59fc11bde6936d7109e66515b',
          address: '65.21.237.29:26656'
        },
        {
          id: 'b5c9a4607fc0494b25b703d08c4601ce44027215',
          address: '162.55.246.236:26656'
        },
        {
          id: '5d3d2807baa4cd191205749a63cc30aab6a3caa1',
          address: '65.108.7.28:26656'
        },
        {
          id: '615e815366defb4c194233ea03c9879f183d49b9',
          address: '65.108.199.26:26656'
        },
        {
          id: '4654c8bed4349e4800238cff1f88e97c1f880080',
          address: '207.244.245.125:26656'
        },
        {
          id: '5622cc659818baa12ae9fa7f58bb8c0be23366fe',
          address: '52.8.59.124:26656'
        },
        {
          id: 'c27d512e10d48e921e4fe88f0221a4e2c80567f1',
          address: '13.56.34.84:26656'
        },
        {
          id: 'a7aafd3330e57d3104be5b2820b6ad2d52ac19ec',
          address: '3.39.94.36:26656'
        },
        {
          id: '9c97f6143d3fae032af5f155d472bbc52f4d90b3',
          address: '194.34.232.225:26656'
        },
        {
          id: 'f61e5c1d7897dd445508a873248e57ae553ac258',
          address: '91.230.111.86:26656'
        },
        {
          id: 'f073d57107004268a7c0f1e24433401f892eff94',
          address: 'sentry-1.asset-mantle.ezstaking.io:26229',
          provider: 'EZStaking.io'
        },
        {
          id: '68692140af51d0c41163340f6f1222eec914c18f',
          address: 'sentry-2.asset-mantle.ezstaking.io:26746',
          provider: 'EZStaking.io'
        },
        {
          id: '01e2e8547bd17890a7af54d236ae19d16cb1b224',
          address: '65.108.201.154:2050'
        },
        {
          id: 'ac4512cf8969a9602b6c046be6fd24b9b3ecc2d7',
          address: '142.132.202.10:26656'
        },
        {
          id: 'fd096224f9c918089410ac7ab6d42d21ec87db60',
          address: '65.21.230.230:26656'
        },
        {
          id: 'cc938d4354c61e4f59b9626737c2aa1e448f4d57',
          address: '5.161.80.214:26656'
        },
        {
          id: 'cbb1bb6b073e65bb5a9a349e8ac2bb86348b5da1',
          address: '142.132.210.135:26656'
        },
        {
          id: 'ab19fe08d8587df7a0aaec966198425a91de6278',
          address: '159.89.162.214:26656'
        },
        {
          id: 'efcdd119e9a0f1ac5718c225e425aa1c0121b020',
          address: '65.20.97.129:26656'
        },
        {
          id: 'f33b2125c3b3a7c4838e22a060e38d2cefd66e78',
          address: '65.108.140.109:26656'
        },
        {
          id: '202c1e6de51f0d89872e62c8b8f998f479f17f12',
          address: '51.195.233.194:26656'
        },
        {
          id: 'f3210561bcfb3252343192c14f8364c14084749a',
          address: '135.125.5.48:26656'
        },
        {
          id: '60a13d44a8ae4165e83e4c3564b0bf36f5ae2615',
          address: '43.254.41.55:26656'
        },
        {
          id: 'c64d745a479936d0b482c28239effd2e9fe24bf5',
          address: '45.77.144.250:26656'
        },
        {
          id: '6261de9dac635a8fd8d19a70afc41f845c59db96',
          address: '116.203.35.46:26656'
        },
        {
          id: 'af80c95f95301fab1778a722a0d8596ca10006cc',
          address: '136.243.105.182:26656'
        },
        {
          id: 'df406a21ac70fbcd7ae06448fe0e7b428385ec6f',
          address: '65.21.195.98:26656'
        },
        {
          id: 'e401ef970f15ed0da7321eb9401ada0729b12c8d',
          address: '157.90.248.195:26656'
        },
        {
          id: 'e0deea2d5c15e77c9d5934305bb23148ce836709',
          address: '185.252.232.79:26656'
        },
        {
          id: 'bbf9c162fbcfbf3dc2c07a7a4ad19d84570ee290',
          address: '161.97.140.10:26656'
        },
        {
          id: 'f2b185dbf88277878b4989db31ac40a606829429',
          address: '65.108.41.72:26656'
        },
        {
          id: '8034d1f19724d11be0ad108ac54c63ead4705237',
          address: '3.110.47.238:26656'
        },
        {
          id: '1f28c7cd884a76a022038f22923eea8101d3538f',
          address: '168.119.89.31:26656'
        },
        {
          id: 'd0dc9234db7b9e5bb853afbd96055c46990aa55f',
          address: '65.21.131.144:29656'
        },
        {
          id: '7eeb595f1205c2c7230b3812badb1844185b3727',
          address: '65.108.99.224:46656'
        },
        {
          id: '553d4a0727b3ee95208d3553e8e82175302ebeb9',
          address: '95.217.109.143:56656'
        },
        {
          id: '606b884008171f6fa8a475d4e63a79fb8dd77c38',
          address: '51.250.107.51:26656'
        },
        {
          id: 'd2515865c79d286da7abe1007959af1b238278bf',
          address: '212.109.220.122:26656'
        },
        {
          id: '4fc4fa6ec44f6da10830ffcb6344a8635156e11e',
          address: '141.95.65.26:26656'
        },
        {
          id: '2968bf003604fc82ead6a0aea7b718d97a307892',
          address: '54.205.3.65:26656'
        },
        {
          id: '306f47eba6711ec325ddb692c988cadadb83b4b7',
          address: '144.126.136.22:26656'
        },
        {
          id: 'adfcaf7a4d5b388aff901136a9d64423ef2215f9',
          address: '88.99.216.14:26456'
        },
        {
          id: '77d64fd4c97a849d781913c8fe1b737cfb31957a',
          address: '134.209.139.2:15656'
        },
        {
          id: '7362b3c4d082680aeffe137d18cea0e37cab5037',
          address: '146.19.24.101:26656'
        },
        {
          id: '5e8e8e7071259beb3b32e39cb3d2bb059cff4d66',
          address: '65.108.137.22:26656'
        },
        {
          id: 'eef583258a773765e556fa723bae76d572933eaa',
          address: '23.88.37.143:21356'
        },
        {
          id: '37648e05b086bb98432a1115fdacd9ce36c70a4d',
          address: '142.4.216.69:26656'
        },
        {
          id: 'ae4f04cea40f6d6047ed2baf3483b5ca6fce3482',
          address: '154.12.242.63:26656'
        },
        {
          id: '8f47445897afc72dec187d65f8cbf14f5ed5c86f',
          address: '88.99.166.120:26656'
        },
        {
          id: '201aa01ed819a3544c77b8e12343c832a20f8136',
          address: '49.12.189.127:26656'
        },
        {
          id: '8a152dd74a1f1f43895d3065686bdec7fb4510e7',
          address: '65.21.89.42:29656'
        },
        {
          id: '169a3e12d45903d961ace560a384d3bcb55092e2',
          address: '3.137.211.131:26656'
        },
        {
          id: '38f4504f74a9fd70f158270751c31a4d146f987c',
          address: '65.21.226.249:26616'
        },
        {
          id: 'aa4cbf8284512c7d10dbc0542604f1fb89e1646b',
          address: '95.165.150.165:26956'
        },
        {
          id: '20dbc8f0c0fe5aeadde86976149b70e20fb2e87d',
          address: '95.217.73.93:24656'
        },
        {
          id: '7170a9a965b53966b5232fb64f02fbd260e26b82',
          address: '116.203.47.250:26656'
        },
        {
          id: '5b3c90e6c07e03ffddc5dc3aae786a2990bc5bd3',
          address: '148.251.81.179:26656'
        },
        {
          id: '7ae8a8e62efcccf15198525868b0873b3c9bd698',
          address: '65.108.121.37:36656'
        },
        {
          id: '681ffbadff88c900660d2bc6bce0920929b529f7',
          address: '62.171.153.122:26656'
        },
        {
          id: '13e82c193914d0db037566ff0e59dfd38ccf5193',
          address: '35.154.66.182:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.assetmantle.one/',
          provider: 'AssetMantle'
        },
        {
          address: 'https://rpc-assetmantle.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://assetmantle-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.asset-mantle.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc.assetmantle.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://rest.assetmantle.one/',
          provider: 'AssetMantle'
        },
        {
          address: 'https://rest-assetmantle.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://lcd.asset-mantle.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api.assetmantle.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.assetmantle.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/asset-mantle',
        tx_page: 'https://www.mintscan.io/asset-mantle/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://explorer.postcapitalist.io/AssetMantle',
        tx_page: 'https://explorer.postcapitalist.io/AssetMantle/tx/${txHash}'
      },
      {
        kind: 'other',
        url: 'https://explorer.assetmantle.one',
        tx_page: 'https://explorer.assetmantle.one/transactions/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://assetmantle.explorers.guru',
        tx_page: 'https://assetmantle.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/assetmantle',
        tx_page: 'https://atomscan.com/assetmantle/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'axelar',
    chain_id: 'axelar-dojo-1',
    pretty_name: 'Axelar',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'axelar',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/axelarnetwork/axelarate-community/main/resources/mainnet/genesis.json'
    },
    daemon_name: 'axelard',
    node_home: '$HOME/.axelard',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uaxl',
          fixed_min_gas_price: 0.00005
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/axelarnetwork/axelar-core',
      recommended_version: 'v0.17.3',
      compatible_versions: ['v0.17.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/axelarnetwork/axelar-core/releases/download/v0.17.3/axelard-linux-amd64-v0.17.3',
        'darwin/amd64':
          'https://github.com/axelarnetwork/axelar-core/releases/download/v0.17.3/axelard-darwin-amd64-v0.17.3'
      }
    },
    peers: {
      seeds: [
        {
          id: '3d67d0646cddcc203b41434aceea64ade22ba6fc',
          address:
            'k8s-mainnet-axelarco-79b464ee93-f03cb16c57cf7cb2.elb.us-east-2.amazonaws.com:26656',
          provider: 'axelar-core'
        },
        {
          id: '9c9b8eb8cad8648f31d3c9da3d14e825f11a7b52',
          address: 'public-seed.mainnet.axelar.lunanova.tech:26656',
          provider: 'lunanova'
        },
        {
          id: '82846f20e20dc80191bc96aa4c72321dd338faa7',
          address: '207.180.252.206:26656',
          provider: 'chainode'
        }
      ],
      persistent_peers: [
        {
          id: '353f7d0962594bcbfb63c81594e35e39c4c89a1a',
          address: '18.223.127.165:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://axelar-rpc.quickapi.com:443',
          provider: 'chainlayer'
        },
        {
          address: 'https://axelar-rpc.chainode.tech:443',
          provider: 'chainode'
        },
        {
          address: 'https://axelar-rpc.pops.one:443',
          provider: 'p-ops'
        },
        {
          address: 'https://rpc-1.axelar.nodes.guru:443',
          provider: 'nodes.guru'
        },
        {
          address: 'https://rpc-axelar-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://axelar-lcd.quickapi.com:443',
          provider: 'chainlayer'
        },
        {
          address: 'https://api-1.axelar.nodes.guru:443',
          provider: 'nodes.guru'
        },
        {
          address: 'https://api-axelar-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-axelar-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'axelarscan',
        url: 'https://axelarscan.io',
        tx_page: 'https://axelarscan.io/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/axelar',
        tx_page: 'https://www.mintscan.io/axelar/txs/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://axelar.explorers.guru',
        tx_page: 'https://axelar.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/axelar',
        tx_page: 'https://atomscan.com/axelar/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bandchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'BandChain',
    chain_id: 'laozi-mainnet',
    daemon_name: 'bandd',
    node_home: '$HOME/.band',
    bech32_prefix: 'band',
    slip44: 494,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/bandprotocol/launch/master/laozi-mainnet/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/bandprotocol/chain',
      recommended_version: 'v2.3.2',
      compatible_versions: ['v2.3.2']
    },
    peers: {
      seeds: [
        {
          id: '8d42bdcb6cced03e0b67fa3957e4e9c8fd89015a',
          address: '34.87.86.195:26656'
        },
        {
          id: '543e0cab9c3016a0e99775443a17bcf163038912',
          address: '34.150.156.78:26656'
        }
      ],
      persistent_peers: [
        {
          id: '98823087b61d442a4ab86998709c77b2e517ee78',
          address: '35.240.152.216:26656'
        },
        {
          id: '3ea84babead3d6bc488810a0f2cf0744cf5c68fe',
          address: '34.86.22.251:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://rpc.laozi1.bandchain.org:80',
          provider: 'bandprotocol'
        },
        {
          address: 'https://rpc-bandchain-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://laozi1.bandchain.org/api',
          provider: 'bandprotocol'
        },
        {
          address: 'https://api-bandchain-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-bandchain-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'cosmoscan',
        url: 'https://cosmoscan.io',
        tx_page: 'https://cosmoscan.io/tx/{txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/band',
        tx_page: 'https://www.mintscan.io/band/txs{txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/band-protocol',
        tx_page: 'https://ping.pub/band-protocol/tx/{txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/band-protocol',
        tx_page: 'https://atomscan.com/band-protocol/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bitcanna',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'BitCanna',
    chain_id: 'bitcanna-1',
    bech32_prefix: 'bcna',
    daemon_name: 'bcnad',
    node_home: '$HOME/.bcna',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/BitCannaGlobal/bcna/main/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ubcna',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/BitCannaGlobal/bcna',
      recommended_version: 'v1.3.1',
      compatible_versions: ['v1.3.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/BitCannaGlobal/bcna/releases/download/v.1.3.1/bcnad'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd6aa4c9f3ccecb0cc52109a95962b4618d69dd3f',
          address: 'seed1.bitcanna.io:26656',
          provider: 'bitcanna'
        },
        {
          id: '23671067d0fd40aec523290585c7d8e91034a771',
          address: 'seed2.bitcanna.io:26656',
          provider: 'bitcanna'
        }
      ],
      persistent_peers: [
        {
          id: 'bee230fb347722d7f87d22414f57bf9cbe37a410',
          address: '95.217.226.95:26039',
          provider: 'EZStaking.io'
        },
        {
          id: '90ee680b1738344354c48c23ba1e1fd68e071d80',
          address: '65.108.128.241:26696',
          provider: 'EZStaking.io'
        },
        {
          id: '21484408a7bcf0134689ddf52a7d9c8299cb65b5',
          address: '176.9.139.74:36656',
          provider: 'BitCanna'
        },
        {
          id: '7b2d10d188926ea25eb209f037fe4e67e16e06b6',
          address: '92.222.25.18:26656',
          provider: 'StakeLab'
        },
        {
          id: '5eb75c20a77ccf960df396b187b86d6324b40123',
          address: '51.68.226.61:26656',
          provider: 'StakeLab'
        },
        {
          id: '6bd989f063b89be680fb3c55c4cf1720a892b12c',
          address: '161.97.96.253:26656',
          provider: 'StakeLab'
        },
        {
          id: '3cdfe02efd4432280707d2949e064a9d8db412b3',
          address: '178.62.98.158:26656',
          provider: 'Stakely'
        },
        {
          id: 'd806bb39349751c142627a547c23c586a787ef26',
          address: '138.68.78.210:26656',
          provider: 'Stakely'
        },
        {
          id: 'ddb620e7c7a6b5a8a53352037cde927681012ab4',
          address: '65.21.229.209:37656',
          provider: 'Blockscope'
        },
        {
          id: 'df99de6cec9152c517990317b340b8b9a307493c',
          address: '193.34.144.156:26656',
          provider: 'ParanormalBrothers'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.bitcanna.io/',
          provider: 'bitcanna'
        },
        {
          address: 'http://bcna.paranorm.pro:26657/',
          provider: 'ParanormalBrothers'
        },
        {
          address: 'https://rpc.bitcanna.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-bitcanna.itastakers.com/',
          provider: 'itastaker'
        },
        {
          address: 'https://bitcanna-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-bitcanna-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://bitcannarpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.bitcanna.io',
          provider: 'bitcanna'
        },
        {
          address: 'grpc-bitcanna-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd.bitcanna.io',
          provider: 'bitcanna'
        },
        {
          address: 'https://lcd.bitcanna.ezstaking.io/',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://lcd-bitcanna.itastakers.com/',
          provider: 'itastaker'
        },
        {
          address: 'https://api-bitcanna-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://bitcannaapi.panthea.eu',
          provider: 'Panthea EU'
        }
      ]
    },
    explorers: [
      {
        kind: 'forbole',
        url: 'https://cosmos-explorer.bitcanna.io',
        tx_page: 'https://cosmos-explorer.bitcanna.io/transactions/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/bitcanna',
        tx_page: 'https://ping.pub/bitcanna/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/bitcanna/',
        tx_page: 'https://www.mintscan.io/bitcanna/txs/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bitcanna',
        tx_page: 'https://atomscan.com/bitcanna/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bitsong',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'BitSong',
    chain_id: 'bitsong-2b',
    bech32_prefix: 'bitsong',
    slip44: 639,
    daemon_name: 'bitsongd',
    node_home: '$HOME/.bitsongd',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/bitsongofficial/networks/master/bitsong-2b/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/bitsongofficial/go-bitsong',
      recommended_version: 'v0.11.0',
      compatible_versions: ['v0.11.0']
    },
    peers: {
      persistent_peers: [
        {
          id: 'a62038142844828483dbf16fa6dd159f6857c81b',
          address: '173.212.247.98:26656'
        },
        {
          id: 'e9fea0509b1a2d16a10ef9fdea0a4e3edc7ca485',
          address: '185.144.83.158:26656'
        },
        {
          id: '8208adac8b09f3e2499dfaef24bb89a2d190a7a3',
          address: '164.68.109.246:26656'
        },
        {
          id: 'cf031ac1cf44c9c311b5967712899391a434da9a',
          address: '161.97.97.61:26656'
        },
        {
          id: 'd6b2ae82c38927fa7b7630346bd84772e632983a',
          address: '157.90.95.104:15631'
        },
        {
          id: 'a5885669c1f7860bfe28071a7ec00cc45b2fcbc3',
          address: '144.91.85.56:26656'
        },
        {
          id: '325a5920a614e2375fea90f8a08d8b8d612fdd1e',
          address: '137.74.18.30:26656'
        },
        {
          id: 'ae2787a337c3599b16410f3ac09d6918da2e5c37',
          address: '46.101.238.149:26656'
        },
        {
          id: '9336f75cd99ff6e5cdb6335e8d1a2c91b81d84b9',
          address: '65.21.0.232:26656'
        },
        {
          id: '9c6e52e78f112a55146b09110d1d1be47702df27',
          address: '135.181.211.184:36656'
        }
      ],
      seeds: [
        {
          id: 'ffa27441ca78a5d41a36f6d505b67a145fd54d8a',
          address: '95.217.156.228:26656'
        },
        {
          id: 'efd52c1e56b460b1f37d73c8d2bd5f860b41d2ba',
          address: '65.21.62.83:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-bitsong.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rpc.bitsong.interbloc.org',
          provider: 'interbloc'
        },
        {
          address: 'https://rpc-bitsong-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.explorebitsong.com',
          provider: 'stake.systems'
        }
      ],
      rest: [
        {
          address: 'https://lcd-bitsong.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://api.bitsong.interbloc.org',
          provider: 'interbloc'
        },
        {
          address: 'https://api-bitsong-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd.explorebitsong.com/',
          provider: 'stake.systems'
        }
      ],
      grpc: [
        {
          address: 'grpc-bitsong-ia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'bitsong.stakesystems.io:2083',
          provider: 'stake.systems'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/bitsong',
        tx_page: 'https://ping.pub/bitsong/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/bitsong',
        tx_page: 'https://www.mintscan.io/bitsong/txs/${txHash}'
      },
      {
        kind: 'big-dipper',
        url: 'https://explorebitsong.com',
        tx_page: 'https://explorebitsong.com/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bitsong',
        tx_page: 'https://atomscan.com/bitsong/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'bostrom',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'bostrom',
    chain_id: 'bostrom',
    bech32_prefix: 'bostrom',
    daemon_name: 'cyber',
    node_home: '$HOME/.cyber',
    genesis: {
      genesis_url:
        'https://cloudflare-ipfs.com/ipfs/QmYubyVNfghD4xCrTFj26zBwrF9s5GJhi1TmxvrwmJCipr'
    },
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/cybercongress/go-cyber',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_linux-amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/cybercongress/go-cyber/releases/download/v0.2.0/cyber_v0.2.0_darwin-amd64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd0518ce9881a4b0c5872e5e9b7c4ea8d760dad3f',
          address: '85.10.207.173:26656',
          provider: 'cybercongress'
        }
      ],
      persistent_peers: [
        {
          id: '5d542c0eb40ae48dc2cac0c140aedb605ded77dc',
          address: '195.201.105.229:26656'
        },
        {
          id: 'c72de1e20beed51b779d89b1cf08d8146016eec4',
          address: '185.186.208.37:26656'
        },
        {
          id: '4c130ed1c58f6d6be981c59a748511e581969c51',
          address: '93.180.175.201:36656'
        },
        {
          id: 'df79a86dc236b8dff250c402e95cd6853e8ad7c4',
          address: '46.166.165.4:26656'
        },
        {
          id: '39a20a7d84c6e91c6638f5a685a13f655e050ee0',
          address: '176.37.214.146:26656'
        },
        {
          id: '77d27615009fc703ece46901792cc8750cccd0de',
          address: '185.230.90.71:26656'
        },
        {
          id: 'dd22cffccafaece970cfa9e7eb3c8468f6fa1c84',
          address: '46.166.165.14:26656'
        },
        {
          id: '5e8522bef5ceca507e05aa0d5f67f37a70222c73',
          address: '185.230.90.202:26656'
        },
        {
          id: '55937c36959ea3984cc6e6ebd3354d73bbbdbcda',
          address: '95.165.24.115:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.bostrom.cybernode.ai',
          provider: 'cybercongress'
        },
        {
          address: 'https://rpc.cyber.posthuman.digital',
          provider: 'posthuman'
        },
        {
          address: 'https://rpc-cyber-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd.bostrom.cybernode.ai',
          provider: 'cybercongress'
        },
        {
          address: 'https://lcd.cyber.posthuman.digital',
          provider: 'posthuman'
        },
        {
          address: 'https://api-cyber-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-cyber-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'cyb',
        url: 'https://cyb.ai/',
        tx_page: 'https://cyb.ai/network/bostrom/tx/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/bostrom',
        tx_page: 'https://ping.pub/bostrom/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/bostrom',
        tx_page: 'https://atomscan.com/bostrom/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'carbon',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Carbon',
    chain_id: 'carbon-1',
    bech32_prefix: 'swth',
    daemon_name: 'carbond',
    node_home: '$HOME/.carbond',
    genesis: {
      genesis_url:
        'https://github.com/Switcheo/carbon-bootstrap/raw/master/carbon-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'swth',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Switcheo/carbon-bootstrap',
      recommended_version: 'v2.3.1',
      compatible_versions: ['v2.3.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.3.1/carbond2.3.1-mainnet.linux-amd64.tar.gz',
        'linux/arm64':
          'https://github.com/Switcheo/carbon-bootstrap/releases/download/v2.3.1/carbond2.3.1-mainnet.linux-ard64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'd93ed6a1f43dd0904dc5e2ab8680d4049b057b17',
          address: '13.215.17.91:26656',
          provider: 'switcheo-labs'
        },
        {
          id: '70581c625fc1933bc273ca7a8d5e9ded3d1bcc97',
          address: '13.213.113.113:26656',
          provider: 'switcheo-labs'
        },
        {
          id: 'e3f02a9f3ca22724b3a67bba9183113645c9c7d9',
          address: '54.179.11.177:26656',
          provider: 'switcheo-labs'
        }
      ],
      persistent_peers: [
        {
          id: 'b638cc8fc5b3d7867281081efce15e5a989339ac',
          address: '188.166.191.195:26656',
          provider: 'intsol'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://tm-api.carbon.network',
          provider: 'switcheo-labs'
        }
      ],
      rest: [
        {
          address: 'https://api.carbon.network',
          provider: 'switcheo-labs'
        }
      ]
    },
    explorers: [
      {
        kind: 'carbonscan',
        url: 'https://scan.carbon.network',
        tx_page: 'https://scan.carbon.network/transaction/${txHash}?net=main'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cerberus',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Cerberus',
    chain_id: 'cerberus-chain-1',
    bech32_prefix: 'cerberus',
    daemon_name: 'cerberusd',
    node_home: '$HOME/.cerberus',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cerberus-zone/cerberus_genesis/main/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/cerberus-zone/cerberus',
      recommended_version: 'v1.0.1',
      compatible_versions: ['v1.0.1']
    },
    peers: {
      seeds: [
        {
          id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
          address: 'seeds.polkachu.com:38656',
          provider: 'Polkachu'
        }
      ],
      persistent_peers: [
        {
          id: 'd8a04beba9fb95c70368b303f701c36b4e3b4a63',
          address: '185.215.165.29:26656'
        },
        {
          id: 'aaa2eba32286074fb575a48e033ac2ba7f4c94e6',
          address: '98.113.93.139:26661'
        },
        {
          id: '89ee9a502d4d84e5632a1f5b17cbedfb0aaae088',
          address: '116.202.133.77:26656'
        },
        {
          id: '1d7be8ba88c4d1d36d94f493b31018b832ecb5be',
          address: '116.202.223.110:26656'
        },
        {
          id: '7bc4a76ea8ada51695bb2797ae24eec011f4bb86',
          address: '194.163.175.85:26656'
        },
        {
          id: '17e1441d760583ab5cf79a93ea01ced685948bf7',
          address: '168.119.110.93:26656'
        },
        {
          id: 'd7f578c4295c7cf05164a2f786601050bf2f2356',
          address: '142.132.202.98:46656',
          provider: 'ecostake'
        },
        {
          id: '21cca2db122c48a11f426799131ef08235d46671',
          address: '148.251.177.45:10656'
        },
        {
          id: 'bae90c7f3aca48e7ae8b3e28dc3b01a2143f068e',
          address: '194.163.169.187:26656'
        },
        {
          id: '2cee125f1f1d852b08ef3530154da2eb54ed72ac',
          address: '66.94.127.8:26656'
        },
        {
          id: '081e114c7452e3b148cc1a796d75f702b60b0219',
          address: '85.237.192.125:26656'
        },
        {
          id: '22e0968f91aba1b3d4d9ad2db2ae47af8cc0a81a',
          address: '34.139.66.39:26656'
        },
        {
          id: 'c346db0db91a940e87e9ae7df28c3d4947672f54',
          address: '65.108.121.239:26656'
        },
        {
          id: '5180ecb20880706a14f99b8982f37a5c23da21ec',
          address: '65.21.235.249:26656'
        },
        {
          id: 'f03e64d46713068da60b096d528053a57e0e5fec',
          address: '157.90.36.33:29563'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cerberus.zone:26657/',
          provider: 'Cerberus'
        },
        {
          address: 'https://rpc-cerberus.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://cerberus-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-cerberus-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://cerberusrpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://api.cerberus.zone:1317/',
          provider: 'Cerberus'
        },
        {
          address: 'https://rest-cerberus.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-cerberus-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://cerberusapi.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      grpc: [
        {
          address: 'grpc-cerberus-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'SkyNet',
        url: 'https://skynetexplorers.com/cerberus',
        tx_page: 'https://skynetexplorers.com/cerberus/tx/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/cerberus',
        tx_page: 'https://ping.pub/cerberus/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cerberus',
        tx_page: 'https://www.mintscan.io/cerberus/txs/{txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/cerberus',
        tx_page: 'https://atomscan.com/cerberus/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cheqd',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'cheqd',
    chain_id: 'cheqd-mainnet-1',
    bech32_prefix: 'cheqd',
    daemon_name: 'cheqd-noded',
    node_home: '$HOME/.cheqdnode',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/cheqd/cheqd-node/main/networks/mainnet/genesis.json'
    },
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ncheq',
          fixed_min_gas_price: 25,
          low_gas_price: 25,
          average_gas_price: 50,
          high_gas_price: 100
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cheqd/cheqd-node',
      recommended_version: 'v0.6.0',
      compatible_versions: ['v0.6.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/cheqd/cheqd-node/releases/download/v0.6.0/cheqd-noded'
      }
    },
    peers: {
      seeds: [
        {
          id: '258a9bfb822637bfca87daaab6181c10e7fd0910',
          address: 'seed1.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: 'f565ff792b20977face9817df6acb268d41d4092',
          address: 'seed2.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '388947cc7d901c5c06fedc4c26751634564d68e6',
          address: 'seed3.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '9b30307a2a2819790d68c04bb62f5cf4028f447e',
          address: 'seed1.ap.cheqd.net:26656',
          provider: 'cheqd'
        }
      ],
      persistent_peers: [
        {
          id: 'd1ebb60825e2c29181b499f93493dd440fb87997',
          address: 'sentry1.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '513d334bb044296796939e57b522fef7fd4b9c6c',
          address: 'sentry2.eu.cheqd.net:26656',
          provider: 'cheqd'
        },
        {
          id: '9201b408d24941fd342e739f0814aa3eb8ab7577',
          address: 'sentry1.ap.cheqd.net:26656',
          provider: 'cheqd'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cheqd.net',
          provider: 'cheqd'
        },
        {
          address: 'https://rpc.cheqd.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-cheqd-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.cheqd.net',
          provider: 'cheqd'
        },
        {
          address: 'https://lcd.cheqd.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-cheqd-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc.cheqd.net:443',
          provider: 'cheqd'
        },
        {
          address: 'grpc-cheqd-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://explorer.cheqd.io/',
        tx_page: 'https://explorer.cheqd.io/transactions/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/cheqd',
        tx_page: 'https://ping.pub/cheqd/tx/${txHash}'
      },
      {
        kind: 'atomscan.com',
        url: 'https://atomscan.com/cheqd',
        tx_page: 'https://atomscan.com/cheqd/transactions/${txHash}',
        account_page: 'https://atomscan.com/cheqd/accounts/${accountAddress}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'chihuahua',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Chihuahua',
    chain_id: 'chihuahua-1',
    bech32_prefix: 'chihuahua',
    daemon_name: 'chihuahuad',
    node_home: '$HOME/.chihuahua',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ChihuahuaChain/mainnet/main/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/ChihuahuaChain/chihuahua/',
      recommended_version: 'v2.0.1',
      compatible_versions: ['v2.0.1']
    },
    peers: {
      seeds: [
        {
          id: '4936e377b4d4f17048f8961838a5035a4d21240c',
          address: 'chihuahua-seed-01.mercury-nodes.net:29540'
        }
      ],
      persistent_peers: [
        {
          id: 'b140eb36b20f3d201936c4757d5a1dcbf03a42f1',
          address: '216.238.79.138:26656',
          provider: 'artifact'
        },
        {
          id: '19900e1d2b10be9c6672dae7abd1827c8e1aad1e',
          address: '161.97.96.253:26656',
          provider: 'StakeLab'
        },
        {
          id: 'c382a9a0d4c0606d785d2c7c2673a0825f7c53b2',
          address: '88.99.94.120:26656',
          provider: 'Chihuahua'
        },
        {
          id: 'a5dfb048e4ed5c3b7d246aea317ab302426b37a1',
          address: '137.184.250.180:26656',
          provider: 'CHILL'
        },
        {
          id: '3bad0326026ca4e29c64c8d206c90a968f38edbe',
          address: '128.199.165.78:26656',
          provider: 'KingNodes'
        },
        {
          id: '89b576c3eb72a4f0c66dc0899bec7c21552ea2a5',
          address: '23.88.7.73:29538',
          provider: 'Mercury'
        },
        {
          id: '38547b7b6868f93af1664d9ab0e718949b8853ec',
          address: '54.184.20.240:30758',
          provider: '0base.vc'
        },
        {
          id: 'a9640eb569620d1f7be018a9e1919b0357a18b8c',
          address: '38.146.3.160:26656',
          provider: 'RHINO'
        },
        {
          id: '7e2239a0d4a0176fe4daf7a3fecd15ac663a8eb6',
          address: '144.91.126.23:26656',
          provider: 'LavenderFive'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.chihuahua.wtf/',
          provider: 'Chihuahua'
        },
        {
          address: 'https://rpc-chihuahua.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://chihuahua-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-chihuahua-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.chihuahua.wtf/',
          provider: 'Chihuahua'
        },
        {
          address: 'https://rest-chihuahua.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-chihuahua-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-chihuahua-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/chihuahua',
        tx_page: 'https://ping.pub/chihuahua/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://mintscan.io/chihuahua',
        tx_page: 'https://mintscan.io/chihuahua/txs/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/chihuahua',
        tx_page: 'https://atomscan.com/chihuahua/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'chronicnetwork',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Chronic',
    chain_id: 'morocco-1',
    bech32_prefix: 'chronic',
    daemon_name: 'chtd',
    node_home: '$HOME/.cht',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ChronicNetwork/net/main/mainnet/v1.1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ucgas',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ChronicNetwork/cht',
      recommended_version: 'v1.1.0',
      compatible_versions: ['v1.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ChronicNetwork/cht/releases/download/v.1.1.0/cht'
      }
    },
    peers: {
      seeds: [
        {
          id: 'ba4c7434bdb00f49b26450242713d52e7c6c8f73',
          address: '147.182.180.205:26656',
          provider: 'Third Party'
        }
      ],
      persistent_peers: [
        {
          id: '9dd99f5aaebac6027e842a5678c2ad2663942506',
          address: '185.16.39.128:26456',
          provider: 'StingRay'
        },
        {
          id: '694ddedde37bb211c827834e27e39d4c85f36f5f',
          address: '46.4.119.90:46656',
          provider: 'Chill Validation'
        },
        {
          id: '31cc2cd1735ff7b51bb44dada4d984741208fc39',
          address: '65.21.88.252:29656',
          provider: 'hdmiidmh'
        },
        {
          id: '998340bc75690a0479fa028f5bdf275b829b9f1a',
          address: '65.21.132.226:28656',
          provider: 'Blockscope.net'
        },
        {
          id: '4e9a1be76e5f2bf6c34748b85aed0cedca892cc8',
          address: '143.244.182.230:26656',
          provider: 'xiti'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        },
        {
          address: 'https://rpc-chronic.zenchainlabs.io/',
          provider: 'ZenChainLabs'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        }
      ],
      rest: [
        {
          address: 'https://api.chronic.nodestake.top/',
          provider: 'NodeStake.top'
        },
        {
          address: 'https://api-chronic.zenchainlabs.io/',
          provider: 'ZenChainLabs'
        }
      ]
    },
    explorers: [
      {
        kind: 'skynetexplorers',
        url: 'https://www.skynetexplorers.com/chronic-token',
        tx_page: ''
      },
      {
        kind: 'Zenscan.io',
        url: 'https://www.chronic.zenscan.io',
        tx_page: ''
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'comdex',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Comdex',
    chain_id: 'comdex-1',
    bech32_prefix: 'comdex',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://comdex-mainnet-genesis.s3.ap-southeast-1.amazonaws.com/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/comdex-official/comdex',
      recommended_version: 'v0.0.4',
      compatible_versions: ['v0.0.4']
    },
    daemon_name: 'comdex',
    node_home: '$HOME/.comdex',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: 'aef35f45db2d9f5590baa088c27883ac3d5e0b33',
          address: '3.108.102.92:26656'
        },
        {
          id: '7ca14a1d156299999eba9c394ca060368022d52f',
          address: '54.194.178.110:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'f74518ad134630da8d2405570f6a3639954c985f',
          address: '65.0.173.217:26656'
        },
        {
          id: 'd478882a80674fa10a32da63cc20cae13e3a2a57',
          address: '43.204.0.243:26656'
        },
        {
          id: '61d743ea796ad1e1ff838c9e84adb38dfffd1d9d',
          address: '15.235.9.222:26656'
        },
        {
          id: 'b8468f64788a17dbf34a891d9cd29d54b2b6485d',
          address: '194.163.178.25:26656'
        },
        {
          id: 'd8b74791ee56f1b345d822f62bd9bc969668d8df',
          address: '194.163.128.55:36656'
        },
        {
          id: '81444353d70bab79742b8da447a9564583ed3d6a',
          address: '164.68.105.248:26656'
        },
        {
          id: '5b1ceb8110da4e90c38c794d574eb9418a7574d6',
          address: '43.254.41.56:26656'
        },
        {
          id: '98b4522a541a69007d87141184f146a8f04be5b9',
          address: '40.112.90.170:26656'
        },
        {
          id: '9a59b6dc59903d036dd476de26e8d2b9f1acf466',
          address: '195.201.195.111:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://api.comdex.audit.one/rpc',
          provider: 'audit'
        },
        {
          address: 'https://rpc.comdex.one',
          provider: 'comdex'
        },
        {
          address: 'http://comdex.node.vitwit.com:26657/',
          provider: 'vitwit'
        },
        {
          address: 'https://rpc-comdex.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://comdex-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.comdex.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-comdex-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.comdex.audit.one/rest',
          provider: 'audit'
        },
        {
          address: 'https://rest.comdex.one',
          provider: 'comdex'
        },
        {
          address: 'http://comdex.node.vitwit.com:1317/',
          provider: 'vitwit'
        },
        {
          address: 'https://api-comdex.zenchainlabs.io/',
          provider: 'zenchainlabs'
        },
        {
          address: 'https://lcd.comdex.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-comdex-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-comdex-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/comdex',
        tx_page: 'https://www.mintscan.io/comdex/txs/${txHash}'
      },
      {
        kind: 'aneka',
        url: 'https://comdex.aneka.io/',
        tx_page: 'https://comdex.aneka.io/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/comdex',
        tx_page: 'https://ping.pub/comdex/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/comdex',
        tx_page: 'https://atomscan.com/comdex/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cosmoshub',
    chain_id: 'cosmoshub-4',
    pretty_name: 'Cosmos Hub',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'cosmos',
    genesis: {
      genesis_url:
        'https://github.com/cosmos/mainnet/raw/master/genesis.cosmoshub-4.json.gz'
    },
    daemon_name: 'gaiad',
    node_home: '$HOME/.gaia',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uatom',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cosmos/gaia',
      recommended_version: 'v7.0.1',
      compatible_versions: ['v7.0.0', 'v7.0.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.1/gaiad-v7.0.1-linux-amd64',
        'linux/arm64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.1/gaiad-v7.0.1-linux-arm64',
        'darwin/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.1/gaiad-v7.0.1-darwin-amd64',
        'windows/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.1/gaiad-v7.0.1-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: 'bf8328b66dceb4987e5cd94430af66045e59899f',
          address: 'public-seed.cosmos.vitwit.com:26656',
          provider: 'vitwit'
        },
        {
          id: 'cfd785a4224c7940e9a10f6c1ab24c343e923bec',
          address: '164.68.107.188:26656'
        },
        {
          id: 'd72b3011ed46d783e369fdf8ae2055b99a1e5074',
          address: '173.249.50.25:26656'
        },
        {
          id: 'ba3bacc714817218562f743178228f23678b2873',
          address: 'public-seed-node.cosmoshub.certus.one:26656',
          provider: 'certusone'
        },
        {
          id: '3c7cad4154967a294b3ba1cc752e40e8779640ad',
          address: '84.201.128.115:26656'
        },
        {
          id: '366ac852255c3ac8de17e11ae9ec814b8c68bddb',
          address: '51.15.94.196:26656'
        },
        {
          id: 'bcef90de8a83673c336bf3b3a352445b3a3a1f08',
          address: 'cosmos-seed.sunshinevalidation.io:31038',
          provider: 'sunshine-validation'
        },
        {
          id: '3b67739570f921cc5e0db4b3efe488ce184155a9',
          address: 'seeds.pupmos.network:2000',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: 'ee27245d88c632a556cf72cc7f3587380c09b469',
          address: '45.79.249.253:26656'
        },
        {
          id: '538ebe0086f0f5e9ca922dae0462cc87e22f0a50',
          address: '34.122.34.67:26656'
        },
        {
          id: 'd3209b9f88eec64f10555a11ecbf797bb0fa29f4',
          address: '34.125.169.233:26656'
        },
        {
          id: 'bdc2c3d410ca7731411b7e46a252012323fbbf37',
          address: '34.83.209.166:26656'
        },
        {
          id: '585794737e6b318957088e645e17c0669f3b11fc',
          address: '54.160.123.34:26656'
        },
        {
          id: '11dfe200894f38e411beca77928e9dd118e66813',
          address: '94.130.98.157:26656'
        },
        {
          id: '5b4ed476e01c49b23851258d867cc0cfc0c10e58',
          address: '206.189.4.227:26656'
        },
        {
          id: '654f47a762c8f9257aef4a44c1fb5014916d8b20',
          address: '99.79.60.15:26656'
        },
        {
          id: '366ac852255c3ac8de17e11ae9ec814b8c68bddb',
          address: '51.15.94.196:26656'
        },
        {
          id: 'd6318b3bd51a5e2b8ed08f2e520d50289ed32bf1',
          address: '52.79.43.100:26656'
        },
        {
          id: '1bfda3d59e70290a3dada9bb809dd954371850d3',
          address: '54.180.225.240:26656'
        },
        {
          id: '6ee94c2093505e8790442c054e6e1e0211d36583',
          address: '44.239.140.195:26656'
        },
        {
          id: 'ec779a2741da6dd2ccdaa6dfc0bebb10e595dfa4',
          address: '50.18.113.67:26656'
        },
        {
          id: 'cfd785a4224c7940e9a10f6c1ab24c343e923bec',
          address: '164.68.107.188:26656'
        },
        {
          id: 'd72b3011ed46d783e369fdf8ae2055b99a1e5074',
          address: '173.249.50.25:26656'
        },
        {
          id: '047f723806ee702b211e7227f89eacd829aabd86',
          address: '52.9.212.125:26656'
        },
        {
          id: 'b0e746acb6fbed7a0311fe21cfb2ee94581ca3bc',
          address: '51.79.21.187:26656'
        },
        {
          id: '82772547c4575c18dfe6e75aafe521cf7d4dc8de',
          address: '142.93.157.186:26656'
        },
        {
          id: '3c7cad4154967a294b3ba1cc752e40e8779640ad',
          address: '84.201.128.115:26656'
        },
        {
          id: 'f122129f53b7c584df6cee77716dcc636d5c5e18',
          address: '167.172.59.196:26656'
        },
        {
          id: '241b17dba97a2ed3c3747d12781fb86c9706e2d4',
          address: '95.179.136.131:26656'
        },
        {
          id: 'f1b16c603f3a0e59f0ce5179dc80f549a7ecd0e2',
          address: 'sentries.us-east1.iqext.net:26656'
        },
        {
          id: '64bd8eaf08b05f17ccd88425f80b59ab48934004',
          address: '157.90.18.35:26656',
          provider: 'in3s.com'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://cosmos-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://rpc-cosmoshub.whispernode.com',
          provider: ' WhisperNode🤐'
        },
        {
          address: 'https://rpc-cosmoshub.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://cosmoshub.validator.network/',
          provider: 'validatornetwork'
        },
        {
          address: 'https://rpc.cosmoshub.strange.love',
          provider: 'strangelove-ventures'
        },
        {
          address: 'https://rpc.cosmos.network:443',
          provider: 'tendermint-inc'
        },
        {
          address: 'https://rpc-cosmoshub.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://rpc.cosmoshub.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://cosmos-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.cosmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-cosmoshub-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://cosmos-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://lcd-cosmoshub.whispernode.com',
          provider: ' WhisperNode🤐'
        },
        {
          address: 'https://lcd-cosmoshub.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://rest-cosmoshub.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api.cosmoshub.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://lcd.cosmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-cosmoshub-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-cosmoshub.blockapsis.com:429',
          provider: 'chainapsis'
        },
        {
          address: 'cosmoshub.strange.love:9090',
          provider: 'strangelove'
        },
        {
          address: 'grpc-cosmoshub-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cosmos',
        tx_page: 'https://www.mintscan.io/cosmos/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/cosmos',
        tx_page: 'https://ping.pub/cosmos/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://cosmos.bigdipper.live/',
        tx_page: 'https://cosmos.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com',
        tx_page: 'https://atomscan.com/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'crescent',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Crescent',
    chain_id: 'crescent-1',
    bech32_prefix: 'cre',
    daemon_name: 'crescentd',
    node_home: '$HOME/.crescent',
    genesis: {
      genesis_url:
        'https://github.com/crescent-network/launch/raw/main/mainnet/crescent-1/genesis.json.tar.gz'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ucre',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crescent-network/crescent',
      recommended_version: 'v2.1.1',
      compatible_versions: ['v2.1.0', 'v2.1.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-linux-amd64',
        'darwin/amd64':
          'https://github.com/crescent-network/crescent/releases/download/v2.1.0/crescentd-v2.1.0-darwin-amd64'
      }
    },
    peers: {
      seeds: [
        {
          id: '929f22a7b04ff438da9edcfebd8089908239de44',
          address: '18.180.232.184:26656',
          provider: 'crescent'
        },
        {
          id: 'c312d41ef52b7c890674e808ef28c57a7746057c',
          address: 'seeds.pupmos.network:2003',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: 'b34115ba926eb12059ca0ade4d1013cac2f8d289',
          address: 'crescent-mainnet-01.01node.com:26656',
          provider: '01node'
        },
        {
          id: '06415494b86316c55245d162da065c3c0fee83fc',
          address: '172.104.108.21:26656',
          provider: 'Forbole'
        },
        {
          id: '3bcffbcb11e96edc84c04a5628639f5ed94b9db2',
          address: '128.0.51.5:26656',
          provider: 'Dokia-capital'
        },
        {
          id: '68787e8412ab97d99af7595c46514b9ab4b3df45',
          address: '54.250.202.17:26656',
          provider: 'DSRV'
        },
        {
          id: '3b468af82b8ffa049b3e1f67dc4615a31ec8f01e',
          address: '50.21.167.131:26656',
          provider: 'Simply Staking'
        },
        {
          id: 'dc7c0e331165ba047cc6b304ce467ee25518e0f9',
          address: '34.85.89.74:26656',
          provider: 'Strangelove'
        },
        {
          id: 'b840926fb6a2bd04fc70e501002f9286655c9179',
          address: '52.199.91.143:30732',
          provider: '0base.vc'
        },
        {
          id: 'd7556e41ba2f333379f6d87b1af3cce2ca545f79',
          address: '34.88.102.246:26656',
          provider: 'P2P validator'
        },
        {
          id: '4293ce6b47ee2603236437ab44dc499519c71e62',
          address: '45.76.97.48:26656',
          provider: 'Nodes.Guru'
        },
        {
          id: '24be64cd648958d9f685f95516cb3b248537c386',
          address: '52.197.140.210:26656',
          provider: 'Cosmostation'
        },
        {
          id: '0ed5ed53ec3542202d02d0d47ac04a2823188fc2',
          address: '52.194.172.170:26656',
          provider: 'Provalidator'
        },
        {
          id: 'c64f03deb3127d41401ef57d9762c64673f225f3',
          address: '172.105.221.43:46656',
          provider: 'in3s.com'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet.crescent.network:26657',
          provider: 'crescent'
        },
        {
          address: 'https://crescent-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.crescent.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      rest: [
        {
          address: 'https://mainnet.crescent.network:1317',
          provider: 'crescent'
        },
        {
          address: 'https://api.crescent.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      grpc: [
        {
          address: 'mainnet.crescent.network:9090',
          provider: 'crescent'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/crescent',
        tx_page: 'https://www.mintscan.io/crescent/txs/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/crescent',
        tx_page: 'https://ping.pub/crescent/tx/{txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://crescent.explorers.guru',
        tx_page: 'https://crescent.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/crescent',
        tx_page: 'https://atomscan.com/crescent/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cronos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Cronos',
    chain_id: 'cronosmainnet_25-1',
    bech32_prefix: 'crc',
    node_home: '$HOME/.cronos',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/crypto-org-chain/cronos-mainnet/master/cronosmainnet_25-1/genesis.json'
    },
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'basecro'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crypto-org-chain/cronos',
      recommended_version: 'v0.7.0',
      compatible_versions: ['v0.7.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.7.0/cronos_0.7.0_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.7.0/cronos_0.7.0_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.7.0/cronos_0.7.0_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.7.0/cronos_0.7.0_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/crypto-org-chain/cronos/releases/download/v0.7.0/cronos_0.7.0_Windows_x86_64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
          address: 'cronos-seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '3032073adc06d710dd512240281637c1bd0c8a7b',
          address: 'cronos-seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
          address: 'cronos-seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
          address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
          provider: 'Blockdaemon.com'
        }
      ],
      persistent_peers: [
        {
          id: '0d5cf1394a1cfde28dc8f023567222abc0f47534',
          address: 'cronos-seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '3032073adc06d710dd512240281637c1bd0c8a7b',
          address: 'cronos-seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '04f43116b4c6c70054d9c2b7485383df5b1ed1da',
          address: 'cronos-seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '337377dcda43d79c537d2c4d93ad3b698ce9452e',
          address: 'bd-cronos-mainnet-seed-node-01.bdnodes.net:26656',
          provider: 'Blockdaemon.com'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      rest: [
        {
          address: 'https://rest.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      grpc: [
        {
          address: 'http://grpc.cronos.org/',
          provider: 'crypto.org'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm.cronos.org/',
          provider: 'crypto.org'
        }
      ]
    },
    explorers: [
      {
        kind: 'cronoscan',
        url: 'https://cronoscan.com',
        tx_page: 'https://cronoscan.com/tx/${txHash}'
      },
      {
        kind: 'crypto-org',
        url: 'https://cronos.org/explorer',
        tx_page: 'https://cronos.org/explorer/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cryptoorgchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Crypto.org',
    chain_id: 'crypto-org-chain-mainnet-1',
    bech32_prefix: 'cro',
    node_home: '$HOME/.chain-maind',
    genesis: {
      genesis_url:
        'https://github.com/crypto-org-chain/mainnet/raw/main/crypto-org-chain-mainnet-1/genesis.json'
    },
    slip44: 394,
    fees: {
      fee_tokens: [
        {
          denom: 'basecro'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/crypto-org-chain/chain-main',
      recommended_version: 'v3.3.3',
      compatible_versions: ['v3.3.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/crypto-org-chain/chain-main/releases/download/v3.3.3/chain-main_3.3.3_Windows_x86_64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
          address: 'seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
          address: 'seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '2c55809558a4e491e9995962e10c026eb9014655',
          address: 'seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702',
          address:
            'p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6',
          address:
            'p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '494d860a2869b90c458b07d4da890539272785c9',
          address:
            'p2p.fabc23d9-e0a1-4ced-8cd7-eb3efd6d9ef3.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'dc2540dabadb8302da988c95a3c872191061aed2',
          address:
            'p2p.7d1b53c0-b86b-44c8-8c02-e3b0e88a4bf7.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '33b15c14f54f71a4a923ac264761eb3209784cf2',
          address:
            'p2p.0d20d4b3-6890-4f00-b9f3-596ad3df6533.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'd2862ef8f86f9976daa0c6f59455b2b1452dc53b',
          address:
            'p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        }
      ],
      persistent_peers: [
        {
          id: '87c3adb7d8f649c51eebe0d3335d8f9e28c362f2',
          address: 'seed-0.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: 'e1d7ff02b78044795371beb1cd5fb803f9389256',
          address: 'seed-1.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '2c55809558a4e491e9995962e10c026eb9014655',
          address: 'seed-2.crypto.org:26656',
          provider: 'crypto-org'
        },
        {
          id: '8dc1863d1d23cf9ad7cbea215c19bcbe8bf39702',
          address:
            'p2p.baaa7e56-cc71-4ae4-b4b3-c6a9d4a9596a.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: '8a7922f3fb3fb4cfe8cb57281b9d159ca7fd29c6',
          address:
            'p2p.aef59b2a-d77e-4922-817a-d1eea614aef4.cryptodotorg.bison.run:26656',
          provider: 'bison-trails'
        },
        {
          id: 'd2862ef8f86f9976daa0c6f59455b2b1452dc53b',
          address:
            'p2p.a088961f-5dfd-4007-a15c-3a706d4be2c0.cryptodotorg.herd.run:26656',
          provider: 'bison-trails'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet.crypto.org/',
          provider: 'crypto.org'
        },
        {
          address: 'https://rpc-crypto-org.keplr.app/',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-cryptoorgchain-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-cryptoorgchain.ecostake.com',
          provider: 'ecostake'
        }
      ],
      rest: [
        {
          address: 'https://mainnet.crypto.org/',
          provider: 'crypto.org'
        },
        {
          address: 'https://lcd-crypto-org.keplr.app/',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-cryptoorgchain-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rest-cryptoorgchain.ecostake.com',
          provider: 'ecostake'
        }
      ],
      grpc: [
        {
          address: 'grpc-cryptoorgchain-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/crypto-org',
        tx_page: 'https://www.mintscan.io/crypto-org/txs/${txHash}'
      },
      {
        kind: 'crypto.org',
        url: 'https://crypto.org/explorer',
        tx_page: 'https://crypto.org/explorer/tx/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/crypto-com-chain',
        tx_page: 'https://ping.pub/crypto-com-chain/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'cudos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Cudos',
    chain_id: 'cudos-1',
    bech32_prefix: 'cudos',
    genesis: {
      genesis_url:
        'https://github.com/CudoVentures/cudos-builders/blob/v1.0.0/docker/config/genesis.mainnet.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/CudoVentures/cudos-builders',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0']
    },
    peers: {
      seeds: [
        {
          id: 'ff3f0f7b1eecc6844e6512428ef4c7a9448452a8',
          address: 'cluster-1-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '6d9beb4d44a530a4a10ebe78ed7717f6083d0c4b',
          address: 'cluster-2-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'e0f3bcc574ef66ae4561fad0772a4fd1959969af',
          address: 'cluster-3-seed-1.hosts.cudos.org:26656',
          provider: 'cudo'
        }
      ],
      persistent_peers: [
        {
          id: 'f196d7cc811a5ab99e4c5dd5c7f3c0135509d1c4',
          address: 'cluster-1-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '2cc0a12ff1038509b2ed64719fcddfdded9a04ad',
          address: 'cluster-2-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'ab1ec4fb29afc9c0f5a04b7cbd1220b8b30ffea4',
          address: 'cluster-3-sentry-1.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: '2958b15e9102cb556cc0f1f1bbbfdfc922a16069',
          address: 'mainnet-full-node-01.hosts.cudos.org:26656',
          provider: 'cudo'
        },
        {
          id: 'eb14f9142ad313297653f84754b1caf60efe75ac',
          address: 'mainnet-full-node-02.hosts.cudos.org:26656',
          provider: 'cudo'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://mainnet-full-node-01.hosts.cudos.org:26657',
          provider: 'cudo'
        }
      ],
      rest: [
        {
          address: 'http://mainnet-full-node-01.hosts.cudos.org:1317',
          provider: 'cudo'
        }
      ],
      grpc: [
        {
          address: 'mainnet-full-node-01.hosts.cudos.org:9090',
          provider: 'cudo'
        }
      ]
    },
    explorers: [
      {
        kind: 'big-dipper-v2',
        url: 'https://explorer.cudos.org/',
        tx_page: 'https://explorer.cudos.org/transactions/${txHash}',
        account_page: 'https://explorer.cudos.org/accounts/${accountAddress}'
      },
      {
        kind: 'big-dipper-v1',
        url: 'https://explorer-v1.cudos.org/',
        tx_page: 'https://explorer-v1.cudos.org/transactions/${txHash}',
        account_page: 'https://explorer-v1.cudos.org/account/${accountAddress}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/cudos',
        tx_page: 'https://www.mintscan.io/cudos/txs/${txHash}',
        account_page: 'https://www.mintscan.io/cudos/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/cudos',
        tx_page: 'https://atomscan.com/cudos/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'decentr',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Decentr',
    chain_id: 'mainnet-3',
    bech32_prefix: 'decentr',
    daemon_name: 'decentrd',
    node_home: '$HOME/.decentr',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Decentr-net/mainnets/master/3.0/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'udec',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Decentr-net/decentr',
      recommended_version: 'v1.5.7',
      compatible_versions: ['v1.5.7']
    },
    peers: {
      seeds: [
        {
          id: '7708addcfb9d4ff394b18fbc6c016b4aaa90a10a',
          address: 'ares.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '8a3485f940c3b2b9f0dd979a16ea28de154f14dd',
          address: 'calliope.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '87490fd832f3226ac5d090f6a438d402670881d0',
          address: 'euterpe.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '3261bff0b7c16dcf6b5b8e62dd54faafbfd75415',
          address: 'hera.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'c37f32e202e13b0725515570f794b68573a6f58c',
          address: 'hera.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '5f3cfa2e3d5ed2c2ef699c8593a3d93c902406a9',
          address: 'hermes.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'a529801b5390f56d5c280eaff4ae95b7163e385f',
          address: 'melpomene.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '385129dbe71bceff982204afa11ed7fa0ee39430',
          address: 'poseidon.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '35a934228c32ad8329ac917613a25474cc79bc08',
          address: 'terpsichore.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: '0fd62bcd1de6f2e3cfc15852cdde9f3f8a7987e4',
          address: 'thalia.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        },
        {
          id: 'bd99693d0dbc855b0367f781fb48bf1ca6a6a58b',
          address: 'zeus.mainnet.decentr.xyz:26656',
          provider: 'decentr'
        }
      ],
      persistent_peers: [
        {
          id: 'aa02e5c680081cd52032ee26648fa71c0ce1917b',
          address: '185.163.64.156:29656',
          provider: '3Tekos'
        },
        {
          id: '83a9601e707ec12fc646586b9e13021a234d5eec',
          address: '207.180.254.180:26656',
          provider: 'Badgerbite'
        },
        {
          id: 'b8c14fa7676da89aed7b0fd46ed5c4c866d0a3b7',
          address: '154.12.240.174:26656',
          provider: 'Badgerbite'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://poseidon.mainnet.decentr.xyz',
          provider: 'decentr'
        },
        {
          address: 'https://ares.mainnet.decentr.xyz',
          provider: 'decentr'
        }
      ],
      rest: [
        {
          address: 'https://rest.mainnet.decentr.xyz',
          provider: 'decentr'
        }
      ]
    },
    explorers: [
      {
        kind: 'decentr.net',
        url: 'https://explorer.decentr.net',
        tx_page:
          'https://explorer.decentr.net/transactions/${txHash}?networkId=mainnet'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/decentr/',
        tx_page: 'https://ping.pub/decentr/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/decentr',
        tx_page: 'https://atomscan.com/decentr/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'desmos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Desmos',
    chain_id: 'desmos-mainnet',
    bech32_prefix: 'desmos',
    daemon_name: 'desmos',
    node_home: '$HOME/.desmos',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 852,
    fees: {
      fee_tokens: [
        {
          denom: 'udsm',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/desmos-labs/desmos',
      recommended_version: 'v2.3.1',
      compatible_versions: ['v2.3.1'],
      binaries: {
        'linux/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v2.3.1/desmos-2.3.1-linux-amd64',
        'linux/arm64':
          'https://github.com/desmos-labs/desmos/releases/download/v2.3.1/desmos-2.3.1-linux-arm64',
        'darwin/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v2.3.1/desmos-2.3.1-darwin-amd64',
        'windows/amd64':
          'https://github.com/desmos-labs/desmos/releases/download/v2.3.1/desmos-2.3.1-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: '9bde6ab4e0e00f721cc3f5b4b35f3a0e8979fab5',
          address: 'seed-1.mainnet.desmos.network:26656',
          provider: 'desmos'
        },
        {
          id: '5c86915026093f9a2f81e5910107cf14676b48fc',
          address: 'seed-2.mainnet.desmos.network:26656',
          provider: 'desmos'
        },
        {
          id: '45105c7241068904bdf5a32c86ee45979794637f',
          address: 'seed-3.mainnet.desmos.network:26656',
          provider: 'desmos'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.mainnet.desmos.network',
          provider: 'desmos'
        },
        {
          address: 'https://rpc.desmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://desmosrpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://api.mainnet.desmos.network',
          provider: 'desmos'
        },
        {
          address: 'https://lcd.desmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://desmosapi.panthea.eu',
          provider: 'Panthea EU'
        }
      ]
    },
    explorers: [
      {
        kind: 'big-dipper',
        url: 'https://explorer.desmos.network',
        tx_page: 'https://explorer.desmos.network/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/desmos',
        tx_page: 'https://www.mintscan.io/desmos/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/desmos',
        tx_page: 'https://ping.pub/desmos/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/desmos',
        tx_page: 'https://atomscan.com/desmos/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'dig',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Dig Chain',
    chain_id: 'dig-1',
    bech32_prefix: 'dig',
    daemon_name: 'digd',
    node_home: '$HOME/.dig',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/notional-labs/dig/master/networks/mainnets/dig-1/genesis.json'
    },
    key_algos: ['secp256k1', 'ethsecp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'udig'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/notional-labs/dig',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0']
    },
    peers: {
      seeds: [
        {
          id: '37b2839da4463b22a51b1fe20d97992164270eba',
          address: '62.171.157.192:26656'
        },
        {
          id: 'e2c96b96d4c3a461fb246edac3b3cdbf47768838',
          address: '65.21.202.37:6969'
        }
      ],
      persistent_peers: [
        {
          id: '33f4788e1c6a378b929c66f31e8d253b9fd47c47',
          address: '194.163.154.251:26656'
        },
        {
          id: '64eccffdc60a206227032d3a021fbf9dfc686a17',
          address: '194.163.156.84:26656'
        },
        {
          id: 'be7598b2d56fb42a27821259ad14aff24c40f3d2',
          address: '172.16.152.118:26656'
        },
        {
          id: 'f446e37e47297ce9f8951957d17a2ae9a16db0b8',
          address: '137.184.67.162:26656'
        },
        {
          id: 'ab2fa2789f481e2856a5d83a2c3028c5b215421d',
          address: '144.91.117.49:26656'
        },
        {
          id: 'e9e89250b40b4512237c77bd04dc76c06a3f8560',
          address: '185.214.135.205:26656'
        },
        {
          id: '1539976f4ee196f172369e6f348d60a6e3ec9e93',
          address: '159.69.147.189:26656'
        },
        {
          id: '85316823bee88f7b05d0cfc671bee861c0237154',
          address: '95.217.198.243:26656'
        },
        {
          id: 'eb55b70c9fd8fc0d5530d0662336377668aab3f9',
          address: '185.194.219.128:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-1-dig.notional.ventures'
        },
        {
          address: 'https://rpc-dig-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api-1-dig.notional.ventures'
        },
        {
          address: 'https://api-dig-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-dig-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/dig',
        tx_page: 'https://ping.pub/dig/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/dig',
        tx_page: 'https://atomscan.com/dig/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'echelon',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Echelon',
    chain_id: 'echelon_3000-3',
    bech32_prefix: 'echelon',
    node_home: '$HOME/.echelond',
    genesis: {
      genesis_url:
        'https://gist.githubusercontent.com/echelonfoundation/ee862f58850fc1b5ee6a6fdccc3130d2/raw/55c2c4ea2fee8a9391d0dc55b2c272adb804054a/genesis.json'
    },
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aechelon'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/echelonfoundation/echelon',
      recommended_version: 'v1.1.4',
      compatible_versions: ['v1.1.4', 'v1.0.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/echelonfoundation/echelon/releases/download/v1.1.4/echelon_1.1.4_Windows_x86_64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '395dc53caf836f04474aa8069e8099b0629763a1',
          address: '154.53.63.113:26656',
          provider: 'Universe'
        },
        {
          id: '302ccf96853501c14060ffac2e1885bed6385f00',
          address: '154.53.63.119:26656',
          provider: 'Rolex'
        },
        {
          id: 'b001eeb22b03e74d5c57c4c097359a9f8c564dd1',
          address: '209.126.87.32:26656',
          provider: 'Supreme'
        },
        {
          id: '6cd1cc8658dc66523f6e8d9ddf7dacae2ef62e6a',
          address: '154.12.237.224:26656',
          provider: 'LockIt'
        },
        {
          id: '480db41faea6713405c93c505ff710a05d1fc801',
          address: '94.250.203.190:26656',
          provider: 'Echelon'
        }
      ],
      persistent_peers: [
        {
          id: '395dc53caf836f04474aa8069e8099b0629763a1',
          address: '154.53.63.113:26656',
          provider: 'Universe'
        },
        {
          id: '302ccf96853501c14060ffac2e1885bed6385f00',
          address: '154.53.63.119:26656',
          provider: 'Rolex'
        },
        {
          id: 'b001eeb22b03e74d5c57c4c097359a9f8c564dd1',
          address: '209.126.87.32:26656',
          provider: 'Supreme'
        },
        {
          id: '6cd1cc8658dc66523f6e8d9ddf7dacae2ef62e6a',
          address: '154.12.237.224:26656',
          provider: 'LockIt'
        },
        {
          id: '480db41faea6713405c93c505ff710a05d1fc801',
          address: '94.250.203.190:26656',
          provider: 'Echelon'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://tendermint.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://rpc-echelon.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://echelon-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.echelon.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://api.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://lcd-echelon.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://echelon-api.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.echelon.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://grpc.echelon.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://rpc.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://evm.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://draco.ech.network',
          provider: 'ech.network'
        },
        {
          address: 'https://jsonrpc.echelon.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'echelon',
        url: 'https://app.ech.network/explorer',
        tx_page: 'https://app.ech.network/explorer/tx/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://scout.ech.network',
        tx_page: 'https://scout.ech.network/tx/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/echelon',
        tx_page: 'https://ping.pub/echelon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/echelon',
        tx_page: 'https://atomscan.com/echelon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/echelon',
        tx_page: 'https://atomscan.com/echelon/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'emoney',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'e-Money',
    chain_id: 'emoney-3',
    bech32_prefix: 'emoney',
    daemon_name: 'emd',
    node_home: '$HOME/.emd',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/e-money/networks/master/emoney-3/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ungm'
        },
        {
          denom: 'eeur'
        },
        {
          denom: 'echf'
        },
        {
          denom: 'edkk'
        },
        {
          denom: 'enok'
        },
        {
          denom: 'esek'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/e-money/em-ledger',
      recommended_version: 'v1.1.3',
      compatible_versions: ['v1.1.3']
    },
    peers: {
      seeds: [
        {
          id: '708e559271d4d75d7ea2c3842e87d2e71a465684',
          address: 'seed-1.emoney.validator.network:28656',
          provider: 'validator.network'
        },
        {
          id: '336cdb655ea16413a8337e730683ddc0a24af9de',
          address: 'seed-2.emoney.validator.network:28656',
          provider: 'validator.network'
        },
        {
          id: 'ecec8933d80da5fccda6bdd72befe7e064279fc1',
          address: '207.180.213.123:26676',
          provider: 'easy2stake'
        },
        {
          id: '0ad7bc7687112e212bac404670aa24cd6116d097',
          address: '50.18.83.75:26656',
          provider: 'B-Harvest'
        },
        {
          id: '1723e34f45f54584f44d193ce9fd9c65271ca0b3',
          address: '13.124.62.83:26656',
          provider: 'B-Harvest'
        },
        {
          id: '34eca4a9142bf9c087a987b572c114dad67a8cc5',
          address: '172.105.148.191:26656',
          provider: 'Cat Boss'
        },
        {
          id: '0b186517e4d82eb4c000a567e486b7b96bf19752',
          address: '44.195.95.22:26656',
          provider: 'Cat Boss'
        },
        {
          id: '0b186517e4d82eb4c000a567e486b7b96bf19752',
          address: '44.195.95.22:26656',
          provider: 'Mr K'
        },
        {
          id: 'eed66085c975189e3d498fe61af2fcfb3da34924',
          address: '217.79.184.40:26656',
          provider: 'MissionControl'
        },
        {
          id: '226d713acb10a1cd09b3b890406b886d7b071cf2',
          address: '10.105.2.101:26656',
          provider: 'ATEAM'
        },
        {
          id: '552cb87c40f879c8c41005eeb36030502671e7a4',
          address: '18.156.91.213:26656',
          provider: 'ATEAM'
        },
        {
          id: '170255a4a9b120786d2d6c3931ebf0125087cca0',
          address: '62.171.171.139:26656',
          provider: 'KalpaTech'
        },
        {
          id: 'd12ac664ff9766e0535c836173111e3eed462e79',
          address: '185.144.83.157:26656',
          provider: 'Inotel'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-emoney.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://emoney.validator.network',
          provider: 'e-Money'
        },
        {
          address: 'https://rpc.emoney.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-emoney-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-emoney.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://emoney.validator.network/api/',
          provider: 'e-Money'
        },
        {
          address: 'https://lcd.emoney.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-emoney-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-emoney-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://emoney.bigdipper.live/',
        tx_page: 'https://emoney.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/emoney',
        tx_page: 'https://www.mintscan.io/emoney/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/e-money',
        tx_page: 'https://ping.pub/e-money/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/emoney',
        tx_page: 'https://atomscan.com/emoney/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'ethos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Ethos',
    chain_id: 'ethos_7003-1',
    bech32_prefix: 'ethos',
    daemon_name: 'ethosd',
    node_home: '$HOME/.ethos',
    genesis: {
      genesis_url: ''
    },
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aRYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://ethos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://ethos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://ethos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://ethos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.png',
      svg:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/ethos/images/ethos.svg'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'evmos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Evmos',
    chain_id: 'evmos_9001-2',
    bech32_prefix: 'evmos',
    node_home: '$HOME/.evmosd',
    genesis: {
      genesis_url: 'https://archive.evmos.org/mainnet/genesis.json'
    },
    daemon_name: 'evmosd',
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aevmos'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/evmos/evmos',
      recommended_version: 'v7.0.0',
      compatible_versions: ['v7.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/evmos/evmos/releases/download/v7.0.0/evmos_7.0.0_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/evmos/evmos/releases/download/v7.0.0/evmos_7.0.0_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/evmos/evmos/releases/download/v7.0.0/evmos_7.0.0_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/evmos/evmos/releases/download/v7.0.0/evmos_7.0.0_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/evmos/evmos/releases/download/v7.0.0/evmos_7.0.0_Windows_x86_64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '906840c2f447915f3d0e37bc68221f5494f541db',
          address: '3.39.58.32:26656',
          provider: 'Cosmostation'
        },
        {
          id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
          address: '52.10.99.253:26656',
          provider: 'Cosmostation'
        },
        {
          id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
          address: '54.39.18.27:26656',
          provider: 'Figment'
        },
        {
          id: 'de2c5e946e21360d4ffa3885579fa038a7d9776e',
          address: '46.101.148.190:26656',
          provider: 'DragonStake'
        },
        {
          id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
          address: 'evmos-sentry.mercury-nodes.net:29539',
          provider: 'Mercury'
        }
      ],
      persistent_peers: [
        {
          id: '906840c2f447915f3d0e37bc68221f5494f541db',
          address: '3.39.58.32:26656',
          provider: 'Cosmostation'
        },
        {
          id: '7aa31684d201f8ebc0b1e832d90d7490345d77ee',
          address: '52.10.99.253:26656',
          provider: 'Cosmostation'
        },
        {
          id: '5740e4a36e646e80cc5648daf5e983e5b5d8f265',
          address: '54.39.18.27:26656',
          provider: 'Figment'
        },
        {
          id: 'de2c5e946e21360d4ffa3885579fa038a7d9776e',
          address: '46.101.148.190:26656',
          provider: 'DragonStake'
        },
        {
          id: '588cedb70fa1d98c14a2f2c1456bfa41e1a156a8',
          address: 'evmos-sentry.mercury-nodes.net:29539',
          provider: 'Mercury'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-evmos.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://tendermint.bd.evmos.org:26657',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://rpc.evmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-evmos-ia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.evmos.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://rpc.evmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://rpc.evmos.testnet.run',
          provider: 'TestNetRun'
        },
        {
          address: 'https://rpc.evmos.nodestake.top',
          provider: 'NodeStake'
        },
        {
          address: 'https://rpc-evmos.ecostake.com',
          provider: 'ecostake'
        }
      ],
      rest: [
        {
          address: 'https://lcd-evmos.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://rest.bd.evmos.org:1317',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://lcd.evmos.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-evmos-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd.evmos.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'https://api.evmos.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://api.evmos.testnet.run',
          provider: 'TestNetRun'
        },
        {
          address: 'https://rest-evmos.ecostake.com',
          provider: 'ecostake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.bd.evmos.org:9090',
          provider: 'evmos.org'
        },
        {
          address: 'grpc-evmos-ia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'grpc.evmos.posthuman.digital:443',
          provider: 'POSTHUMAN ꝏ DVS'
        },
        {
          address: 'grpc.evmos.testnet.run:8091',
          provider: 'TestNetRun'
        },
        {
          address: 'https://grpc.evmos.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://eth.bd.evmos.org:8545',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://jsonrpc-evmos-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://evmos-json-rpc.stakely.io',
          provider: 'Stakely'
        },
        {
          address: 'https://jsonrpc.evmos.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/evmos',
        tx_page: 'https://www.mintscan.io/evmos/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://evmos.bigdipper.live',
        tx_page: 'https://evmos.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'blockscout',
        url: 'https://evm.evmos.org',
        tx_page: 'https://evm.evmos.org/tx/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/evmos',
        tx_page: 'https://ping.pub/evmos/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://evmos.explorers.guru',
        tx_page: 'https://evmos.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/evmos',
        tx_page: 'https://atomscan.com/evmos/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'fetchhub',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Fetch Hub',
    chain_id: 'fetchhub-4',
    bech32_prefix: 'fetch',
    daemon_name: 'fetchd',
    node_home: '$HOME/.fetchd',
    genesis: {
      genesis_url:
        'https://storage.googleapis.com/fetch-ai-mainnet-v2-genesis/genesis-fetchhub4.json'
    },
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/fetchai/fetchd',
      recommended_version: 'v0.10.3',
      compatible_versions: ['v0.10.3', 'v0.10.2', 'v0.10.1', 'v0.10.0']
    },
    peers: {
      seeds: [
        {
          id: '5f3fa6404a67b664be07d0e133a00c1600967396',
          address: 'connect-fetchhub.fetch.ai:36756',
          provider: 'fetch.ai'
        },
        {
          id: '8272b70e1986e2080ca328309a5aad3bb932fcab',
          address: 'connect-fetchhub.fetch.ai:36757',
          provider: 'fetch.ai'
        },
        {
          id: '81f479ad9b4b1d25bceedb2a13139187792442bf',
          address: 'connect-fetchhub.fetch.ai:36758',
          provider: 'fetch.ai'
        }
      ],
      persistent_peers: [
        {
          id: '714b84c1798759505a8095c1f96e920bd23ab09f',
          address: 'sentries-fetchhub.fetch.ai:36700',
          provider: 'fetch.ai'
        },
        {
          id: '802224aa31eb34185b081b1fd791ab568055dc78',
          address: 'sentries-fetchhub.fetch.ai:36701',
          provider: 'fetch.ai'
        },
        {
          id: '65bab5f02a2ab3cb1e6db3b345654594e2390db9',
          address: 'sentries-fetchhub.fetch.ai:36702',
          provider: 'fetch.ai'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-fetchhub.fetch.ai:443',
          provider: 'fetch.ai'
        },
        {
          address: 'https://fetchapi.terminet.io',
          provider: 'Terminet'
        },
        {
          address: 'https://rpc-fetchhub-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://rest-fetchhub.fetch.ai',
          provider: 'fetch.ai'
        },
        {
          address: 'https://api-fetchhub-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'https://grpc-fetchhub.fetch.ai:443',
          provider: 'fetch.ai'
        },
        {
          address: 'grpc-fetchhub-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/fetchai',
        tx_page: 'https://www.mintscan.io/fetchai/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explore-fetchhub.fetch.ai',
        tx_page: 'https://explore-fetchhub.fetch.ai/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/fetchhub',
        tx_page: 'https://ping.pub/fetchhub/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/fetchhub',
        tx_page: 'https://atomscan.com/fetchhub/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'firmachain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'FirmaChain',
    chain_id: 'colosseum-1',
    bech32_prefix: 'firma',
    slip44: 7777777,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/firmachain/mainnet/main/genesis.json'
    },
    fees: {
      fee_tokens: [
        {
          denom: 'ufct',
          fixed_min_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/firmachain/firmachain',
      recommended_version: 'v0.3.3',
      compatible_versions: ['v0.3.3']
    },
    daemon_name: 'firmachaind',
    node_home: '$HOME/.firmachain',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: 'f89dcc15241e30323ae6f491011779d53f9a5487',
          address: 'mainnet-seed1.firmachain.dev:26656',
          provider: 'FirmaChain'
        },
        {
          id: '04cce0da4cf5ceb5ffc04d158faddfc5dc419154',
          address: 'mainnet-seed2.firmachain.dev:26656',
          provider: 'FirmaChain'
        },
        {
          id: '940977bdc070422b3a62e4985f2fe79b7ee737f7',
          address: 'mainnet-seed3.firmachain.dev:26656',
          provider: 'FirmaChain'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://lcd-mainnet.firmachain.dev:26657',
          provider: 'FirmaChain'
        }
      ],
      rest: [
        {
          address: 'https://lcd-mainnet.firmachain.dev:1317',
          provider: 'FirmaChain'
        }
      ]
    },
    explorers: [
      {
        kind: 'big-dipper',
        url: 'https://explorer.firmachain.dev',
        tx_page: 'https://explorer.firmachain.dev/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'galaxy',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Galaxy',
    chain_id: 'galaxy-1',
    bech32_prefix: 'galaxy',
    daemon_name: 'galaxyd',
    node_home: '$HOME/.galaxy',
    genesis: {
      genesis_url:
        'https://media.githubusercontent.com/media/galaxies-labs/networks/main/galaxy-1/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/galaxies-labs/galaxy',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_linux_amd64.tar.gz',
        'darwin/amd64':
          'https://github.com/galaxies-labs/galaxy/releases/download/v1.0.0/galaxy_v1.0.0_darwin_amd64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '574e8402e255f895680db2904168724258fd6ff8',
          address: '13.125.60.249:26656',
          provider: 'Galaxies Labs'
        }
      ],
      persistent_peers: [
        {
          id: 'bf446887a7a00c8babfeba2f92ba569a206a3ea7',
          address: '65.108.71.140:26676',
          provider: 'StakeLab'
        },
        {
          id: '1e9ee1911298a15128c8485ea47b18be08939e01',
          address: '136.244.29.116:38656',
          provider: 'OtterSync'
        },
        {
          id: 'a4bd8fed416aa29d9cc061e2b9dffa7f4b679c91',
          address: '65.21.131.144:30656',
          provider: 'Blockscope'
        },
        {
          id: '801f4e17769bd2ee02b27720d901a42cb8d052ea',
          address: '65.108.192.3:24656',
          provider: 'Paranormal Brothers'
        },
        {
          id: '8fc2d8c2fadd278eae617a9c2a2f008e01e8ef68',
          address: '206.246.71.251:26656',
          provider: 'TAKESHI'
        },
        {
          id: '10f7caa39969dc36450b138848a06e7deabe6fed',
          address: '95.111.244.128:26656',
          provider: 'Pathrocknetwork'
        },
        {
          id: 'cd8fd9e1677c701015b8909116f88974028cd0b4',
          address: '203.135.141.28:26656',
          provider: 'Decentralizehk'
        },
        {
          id: 'b4b6f1563f2891ed5735d6133d78fc7c17ce12d0',
          address: '185.234.69.139:26656',
          provider: 'DomaNodes'
        },
        {
          id: '5b3fd251b74e6af11f4c71d420fd1837f4869e85',
          address: '45.33.62.64:26656',
          provider: 'FireStake'
        },
        {
          id: '51b3263a333de94198fe4c4d819b48fbd107f93a',
          address: '5.9.13.234:26356',
          provider: 'Goooodnes'
        },
        {
          id: 'e21bf32eaedee13d8dc240baacf23fee97a8edac',
          address: '141.94.141.144:43656',
          provider: 'cyberG'
        },
        {
          id: '8b447bd4fa1e56d8252538a6e23573e5e78924fa',
          address: '161.97.155.94:26656',
          provider: '3Tekos'
        },
        {
          id: '8d059154ea0a6e25c5695a1e163e601482769604',
          address: '95.217.207.236:31256',
          provider: 'web34ever'
        },
        {
          id: '7ded7314f57a078076507d7b291e100ad2dc158b',
          address: '65.108.41.172:36656',
          provider: 'moonsoon'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.galaxychain.zone'
        },
        {
          address: 'https://galaxy-rpc.polkachu.com/',
          provider: 'Polkachu'
        }
      ],
      rest: [
        {
          address: 'https://rest.galaxychain.zone'
        },
        {
          address: 'https://galaxy-api.polkachu.com',
          provider: 'Polkachu'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://explorer.postcapitalist.io/Galaxy',
        tx_page: 'https://explorer.postcapitalist.io/Galaxy/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'genesisl1',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'GenesisL1',
    chain_id: 'genesis_29-2',
    bech32_prefix: 'genesis',
    daemon_name: 'genesisd',
    node_home: '$HOME/.genesisd',
    genesis: {
      genesis_url:
        'https://github.com/alpha-omega-labs/genesisd/raw/neolithic/genesis_29-1-state/genesis.json'
    },
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'el1'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/alpha-omega-labs/genesisd',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0']
    },
    peers: {
      persistent_peers: [
        {
          id: '36111b4156ace8f1cfa5584c3ccf479de4d94936',
          address: '65.21.34.226:26656',
          provider: 'GenesisL1'
        },
        {
          id: 'c23b3d58ccae0cf34fc12075c933659ff8cca200',
          address: '95.217.207.154:26656'
        },
        {
          id: '37d8aa8a31d66d663586ba7b803afd68c01126c4',
          address: '65.21.134.70:26656'
        },
        {
          id: 'd7d4ea7a661c40305cab84ac227cdb3814df4e43',
          address: '139.162.195.228:26656'
        },
        {
          id: 'be81a20b7134552e270774ec861c4998fabc2969',
          address: 'genesisl1.3ventures.io:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://26657.genesisl1.org',
          provider: 'GenesisL1'
        }
      ],
      rest: [
        {
          address: 'https://api.genesisl1.org',
          provider: 'GenesisL1'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/genesisL1',
        tx_page: 'https://ping.pub/genesisL1/tx/${txHash}'
      },
      {
        kind: 'ATOMScan',
        url: 'https://atomscan.com/genesisl1',
        tx_page: 'https://atomscan.com/genesisl1/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'gravitybridge',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Gravity Bridge',
    chain_id: 'gravity-bridge-3',
    bech32_prefix: 'gravity',
    daemon_name: 'gravity',
    node_home: '$HOME/.gravity',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Gravity-Bridge/Gravity-Docs/main/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ugraviton',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/Gravity-Bridge/Gravity-Bridge',
      recommended_version: 'v1.3.3',
      compatible_versions: ['v1.3.0', 'v1.3.1', 'v1.3.2', 'v1.3.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.3.3/gravity-linux-amd64',
        'linux/arm64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.3.3/gravity-linux-arm64',
        'darwin/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.3.3/gravity-darwin-amd64',
        'windows/amd64':
          'https://github.com/Gravity-Bridge/Gravity-Bridge/releases/download/v1.3.3/gravity-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: '2b089bfb4c7366efb402b48376a7209632380c9c',
          address: '65.19.136.133:26656',
          provider: 'althea'
        },
        {
          id: '63e662f5e048d4902c7c7126291cf1fc17687e3c',
          address: '95.211.103.175:26656',
          provider: 'amhost'
        }
      ],
      persistent_peers: [
        {
          id: '21be3f7686c24f8bd9442b325a50f5b5227777a7',
          address: '202.61.231.15:26656',
          provider: 'SkyNet'
        },
        {
          id: '9aa7e0c250466a2a147f8b7d2b886b0d45d44ca0',
          address: '45.138.49.222:26656',
          provider: 'ps350'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://gravitychain.io:26657',
          provider: 'althea'
        },
        {
          address: 'http://gravity-bridge-1-08.nodes.amhost.net:26657',
          provider: 'amhost'
        },
        {
          address: 'https://gravity-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.gravity-bridge.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-gravitybridge-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://gravitychain.io:1317',
          provider: 'althea'
        },
        {
          address: 'https://lcd.gravity-bridge.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-gravitybridge-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://api.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://gravitychain.io:9090',
          provider: 'althea'
        },
        {
          address: 'gravity-bridge-1-08.nodes.amhost.net:9090',
          provider: 'amhost'
        },
        {
          address: 'grpc-gravitybridge-ia.notional.ventures:443',
          provider: 'Notional'
        },
        {
          address: 'https://grpc.gravity-bridge.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/gravity-bridge',
        tx_page: 'https://www.mintscan.io/gravity-bridge/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/gravity-bridge',
        tx_page: 'https://ping.pub/gravity-bridge/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://gravity.explorers.guru',
        tx_page: 'https://gravity.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/gravity-bridge',
        tx_page: 'https://atomscan.com/gravity-bridge/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'idep',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'IDEP',
    chain_id: 'Antora',
    bech32_prefix: 'idep',
    daemon_name: 'idep',
    node_home: '$HOME/.ion',
    genesis: {
      genesis_url:
        'https://github.com/IDEP-network/Antora/raw/main/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'idep',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/IDEP-network/ion',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64': 'https://github.com/IDEP-network/Antora/raw/main/iond'
      }
    },
    peers: {
      seeds: [
        {
          id: '6e52997400aaa1b3d2155e45cf2559bf7a4c5e76',
          address: '164.92.161.91:26656',
          provider: 'IDEP'
        }
      ],
      persistent_peers: [
        {
          id: '8ffc74dbcd5ab32bc89e058ec53060d5762f88b5',
          address: '178.63.100.102:26656',
          provider: 'IDEP'
        },
        {
          id: '3a8cfcbaac7d102e9cfad31f856e1852be2125f3',
          address: 'sentry-1.idep.ezstaking.io:26756',
          provider: 'EZStaking.io'
        },
        {
          id: '32a1a93033968e391266484cd4896dfc9b326e4c',
          address: 'sentry-2.idep.ezstaking.io:26789',
          provider: 'EZStaking.io'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.idep.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc.idep.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://lcd.idep.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api.idep.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.idep.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'chadscan',
        url: 'https://chadscan.com',
        tx_page: 'https://chadscan.com/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/idep',
        tx_page: 'https://atomscan.com/idep/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'impacthub',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Impact Hub',
    chain_id: 'impacthub-3',
    bech32_prefix: 'ixo',
    daemon_name: 'ixod',
    node_home: '$HOME/.ixod',
    genesis: {
      genesis_url:
        'https://github.com/ixofoundation/genesis/raw/master/impacthub-3/genesis.json'
    },
    key_algos: ['secp256k1', 'ed25519'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uixo',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ixofoundation/ixo-blockchain',
      recommended_version: 'v1.6.0',
      compatible_versions: ['v1.6.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ixofoundation/ixo-blockchain/releases/download/v1.6.0/ixod-1.6.0-linux-amd64',
        'linux/arm64':
          'https://github.com/ixofoundation/ixo-blockchain/releases/download/v1.6.0/ixod-1.6.0-linux-arm64',
        'darwin/amd64':
          'https://github.com/ixofoundation/ixo-blockchain/releases/download/v1.6.0/ixod-1.6.0-darwin-amd64',
        'windows/arm64':
          'https://github.com/ixofoundation/ixo-blockchain/releases/download/v1.6.0/ixod-1.6.0-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
          address: '80.64.208.43:26656',
          provider: 'simplyvc'
        }
      ],
      persistent_peers: [
        {
          id: 'cbe8c6a5a77f861db8edb1426b734f2cf1fa4020',
          address: '18.166.133.210:26656',
          provider: 'shanzhaicity'
        },
        {
          id: '36e4738c7efcf353d3048e5e6073406d045bae9d',
          address: '80.64.208.43:26656',
          provider: 'simplyvc'
        },
        {
          id: 'f0d4546fa5e0c2d84a4244def186b9da3c12ba1a',
          address: '46.166.138.214:26656',
          provider: 'ixoworld'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-impacthub.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://proxies.sifchain.finance/api/impacthub-3/rpc',
          provider: 'sifchain'
        },
        {
          address: 'http://18.220.101.192:26657/',
          provider: 'regen'
        },
        {
          address: 'https://impacthub.ixo.world/rpc/',
          provider: 'ixoworld'
        },
        {
          address: 'https://rpc.ixo.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-ixo-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-impacthub.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://proxies.sifchain.finance/api/impacthub-3/rest',
          provider: 'sifchain'
        },
        {
          address: 'http://18.220.101.192:1317/',
          provider: 'regen'
        },
        {
          address: 'https://impacthub.ixo.world/rest/',
          provider: 'ixoworld'
        },
        {
          address: 'https://lcd.ixo.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-ixo-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-ixo-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://blockscan.ixo.world',
        tx_page: 'https://blockscan.ixo.world/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/ixo',
        tx_page: 'https://ping.pub/ixo/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/ixo',
        tx_page: 'https://atomscan.com/ixo/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'injective',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Injective',
    chain_id: 'injective-1',
    bech32_prefix: 'inj',
    slip44: 60,
    daemon_name: 'injectived',
    node_home: '$HOME/.injectived',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/InjectiveLabs/mainnet-config/master/10001/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/InjectiveLabs/injective-chain-releases',
      recommended_version: 'v1.1.1-1637059884',
      compatible_versions: ['v1.1.1-1637059884'],
      binaries: {
        'linux/amd64':
          'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.1.1-1637059884/linux-amd64.zip',
        'darwin/amd64':
          'https://github.com/InjectiveLabs/injective-chain-releases/releases/download/v1.1.1-1637059884/darwin-amd64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '2ee7586d8e5a4a2020dafddf68efdfdaa3606cc3',
          address: '145.40.67.249:26656',
          provider: 'injectiveprotocol'
        },
        {
          id: '7bb20f8e9fa73e34d0d21862528d5fba839eeb56',
          address: '145.40.73.39:26656',
          provider: 'injectiveprotocol'
        },
        {
          id: 'de25916e19083d44d67e0c336199b215523f1578',
          address: '145.40.68.223:26656',
          provider: 'injectiveprotocol'
        },
        {
          id: '1a2ccd9c436eae54d6c767ad566c58dce78f8be2',
          address: '145.40.68.125:26656',
          provider: 'injectiveprotocol'
        }
      ],
      persistent_peers: [
        {
          id: '2ee7586d8e5a4a2020dafddf68efdfdaa3606cc3',
          address:
            '2ee7586d8e5a4a2020dafddf68efdfdaa3606cc3@145.40.67.249:26656',
          provider: 'injectiveprotocol'
        },
        {
          id: '30e81e1b785eaf82d2260e932251c02c95787740',
          address:
            '30e81e1b785eaf82d2260e932251c02c95787740@86.109.11.215:26656',
          provider: 'injectiveprotocol'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://injective-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://injective-rpc.polkachu.com',
          provider: 'Polkachu'
        }
      ],
      rest: [
        {
          address: 'https://public.lcd.injective.network',
          provider: 'injectiveprotocol'
        },
        {
          address: 'https://injective-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        }
      ],
      grpc: []
    },
    explorers: [
      {
        kind: 'injectiveprotocol',
        url: 'https://explorer.injective.network/',
        tx_page: 'https://explorer.injective.network/transaction/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/injective',
        tx_page: 'https://ping.pub/injective/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/injective',
        tx_page: 'https://atomscan.com/injective/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'irisnet',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'IRISnet',
    chain_id: 'irishub-1',
    bech32_prefix: 'iaa',
    daemon_name: 'iris',
    node_home: '$HOME/.iris',
    key_algos: ['secp256k1'],
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/irisnet/mainnet/master/config/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/irisnet/irishub',
      recommended_version: 'v1.3.0',
      compatible_versions: ['v1.3.0']
    },
    peers: {
      seeds: [
        {
          id: '6a6de770deaa4b8c061dffd82e9c7f4d40c2165d',
          address: 'seed-1.mainnet.irisnet.org:26656'
        },
        {
          id: 'a17d7923293203c64ba75723db4d5f28e642f469',
          address: 'seed-2.mainnet.irisnet.org:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'fdc0406afdd3acc63f74f5439e09104f663a7c1f',
          address: '44.241.177.178:26656',
          provider: 'cosmostation'
        },
        {
          id: '090bcbe5302e6104821a96c4899912870db04cb9',
          address: '52.11.128.123:26656',
          provider: 'cosmostation'
        },
        {
          id: '83b3f989f3ce089afdf733f8aa06e792d7e00c08',
          address: '3.34.6.30:26656',
          provider: 'cosmostation'
        },
        {
          id: '87f18756b93d835c59fe5ce2a8da51858837eb5b',
          address: '54.180.15.28:26656',
          provider: 'Node-A-Team'
        },
        {
          id: '90e48220190b16cad95145b6213d512d703e5617',
          address: '138.197.158.189:26656',
          provider: 'Figment'
        },
        {
          id: 'ebfb43ca1b592b5f8a1faf3e2aa1a34e8e1099cc',
          address: 'iris01.dokia.cloud:26656',
          provider: 'Dokia'
        },
        {
          id: '92fadc989ed29aee0d46afce3226f8565d1f36cb',
          address: '144.91.116.17:46656',
          provider: 'syncnode'
        },
        {
          id: '4ac6200974d3fd80a8e49d145a2c254ed37a9b9a',
          address: '159.69.106.156:26656',
          provider: 'P2P.ORG'
        },
        {
          id: '4e02a4b4f4350ea2b770cd03dc41fedcadb13176',
          address: '159.69.55.206:26656',
          provider: 'P2P.ORG'
        },
        {
          id: '84cc32adca3986b35953886ad075431d318a98b5',
          address: '52.214.130.28:46656',
          provider: 'stake.fish'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-iris.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-irisnet-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-iris.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-irisnet-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-irisnet-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/iris',
        tx_page: 'https://www.mintscan.io/iris/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/iris-network',
        tx_page: 'https://ping.pub/iris-network/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/iris-network',
        tx_page: 'https://atomscan.com/iris-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'juno',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Juno',
    chain_id: 'juno-1',
    bech32_prefix: 'juno',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/CosmosContracts/mainnet/main/juno-1/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/CosmosContracts/juno',
      recommended_version: 'v9.0.0',
      compatible_versions: ['v9.0.0']
    },
    daemon_name: 'junod',
    node_home: '$HOME/.juno',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: '2484353dab0b2c1275765b8ffa2c50b3b36158ca',
          address: 'seed-node.junochain.com:26656'
        },
        {
          id: 'ef2315d81caa27e4b0fd0f267d301569ee958893',
          address: 'juno-seed.blockpane.com:26656'
        },
        {
          id: '22ee6e65e5e79cd0b970dd11e52761de8d1d6dfd',
          address: 'seeds.pupmos.network:2001',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: 'b1f46f1a1955fc773d3b73180179b0e0a07adce1',
          address: '162.55.244.250:39656'
        },
        {
          id: '7f593757c0cde8972ce929381d8ac8e446837811',
          address: '178.18.255.244:26656'
        },
        {
          id: '7b22dfc605989d66b89d2dfe118d799ea5abc2f0',
          address: '167.99.210.65:26656'
        },
        {
          id: '4bd9cac019775047d27f9b9cea66b25270ab497d',
          address: '137.184.7.164:26656'
        },
        {
          id: 'bd822a8057902fbc80fd9135e335f0dfefa32342',
          address: '65.21.202.159:38656'
        },
        {
          id: '15827c6c13f919e4d9c11bcca23dff4e3e79b1b8',
          address: '51.38.52.210:38656'
        },
        {
          id: 'e665df28999b2b7b40cff2fe4030682c380bf294',
          address: '188.40.106.109:38656'
        },
        {
          id: '92804ce50c85ff4c7cf149d347dd880fc3735bf4',
          address: '34.94.231.154:26656'
        },
        {
          id: '795ed214b8354e8468f46d1bbbf6e128a88fe3bd',
          address: '34.127.19.222:26656'
        },
        {
          id: 'ea9c1ac0e91639b2c7957d9604655e2263abe4e1',
          address: '185.181.103.136:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://rpc-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rpc-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://juno-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc.junomint.com',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-juno-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-juno.whispernode.com',
          provider: ' WhisperNode 🤐'
        },
        {
          address: 'https://lcd-juno.itastakers.com',
          provider: 'itastakers'
        },
        {
          address: 'https://rest-juno.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api.juno.pupmos.network',
          provider: 'PUPMØS'
        },
        {
          address: 'https://lcd.junomint.com',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-juno-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: '35.243.205.230:9090',
          provider: 'strangelove'
        },
        {
          address: 'grpc-juno-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/juno',
        tx_page: 'https://ping.pub/juno/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://juno.explorers.guru',
        tx_page: 'https://juno.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/juno',
        tx_page: 'https://www.mintscan.io/juno/txs/{txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/juno',
        tx_page: 'https://atomscan.com/juno/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'kava',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Kava',
    chain_id: 'kava_2222-10',
    bech32_prefix: 'kava',
    daemon_name: 'kava',
    node_home: '$HOME/.kava',
    genesis: {
      genesis_url:
        'https://kava-genesis-files.s3.us-east-1.amazonaws.com/kava_2222-10/genesis.json'
    },
    slip44: 459,
    codebase: {
      git_repo: 'https://github.com/kava-Labs/kava/',
      recommended_version: 'v0.17.3',
      compatible_versions: ['v0.17.3']
    },
    peers: {
      seeds: [
        {
          id: '5c56fc779cd75c0c4d8225b8afe5259a076608dd',
          address: '18.206.28.123:26656'
        }
      ],
      persistent_peers: [
        {
          id: '7827de7a17483f79a914f790cc8ca8431b2764d7',
          address: '3.221.174.66:26656'
        },
        {
          id: '1b5be4ece049083399e1d467c219c8978ed8d3ca',
          address: '3.217.223.43:26656'
        },
        {
          id: 'e5d74b3f06226fb0798509e36021e81b7bce934d',
          address: '3.209.43.104:26656'
        },
        {
          id: 'fb4a0dbe6947540bc94f4f2f11ce7c70b8fcffc9',
          address: '54.92.246.92:26656'
        },
        {
          id: '8b5c4a890c8ae7efbbe3360af71be1c3c3a9e12e',
          address: '121.78.241.68:46656'
        },
        {
          id: '1291ef230910953545fb3d83c4e989578da978a1',
          address: '35.157.56.248:26656'
        },
        {
          id: '06d11b66eac77ad7b149773cf974a595dd947398',
          address: '35.247.175.128:50056'
        },
        {
          id: '11f965df6fb3091e0fa3a1e4c129ff697939b827',
          address: '52.26.236.235:26656'
        },
        {
          id: '5a9de901ce9b6961f22cf829f4aefb66dff77d3a',
          address: '54.177.121.234:26656'
        },
        {
          id: '9084eab1fa9414abad5e41416482fe75f39b2071',
          address: '54.215.73.103:26656'
        },
        {
          id: '418cc8f69fa0212503dd5b2a9ac3ce0dd3b33e72',
          address: '13.209.245.58:26656'
        },
        {
          id: 'f3a64f5d1a992d327a5d2b3282d7df294d787832',
          address: '173.212.197.110:26666'
        },
        {
          id: '1074a6f31d2c7df6e21ce0e574a5cb75f1763be1',
          address: '13.56.31.21:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.data.kava.io',
          provider: 'kava'
        },
        {
          address: 'https://kava-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-kava-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.data.kava.io/',
          provider: 'kava'
        },
        {
          address: 'https://api-kava-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.data.kava.io/',
          provider: 'kava'
        },
        {
          address: 'grpc-kava-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://evm.kava.io/',
          provider: 'kava'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/kava',
        tx_page: 'https://www.mintscan.io/kava/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/kava',
        tx_page: 'https://ping.pub/kava/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/kava',
        tx_page: 'https://atomscan.com/kava/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'kichain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Ki',
    chain_id: 'kichain-2',
    bech32_prefix: 'ki',
    daemon_name: 'kid',
    node_home: '$HOME/.kid',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/KiFoundation/ki-networks/v0.1/Mainnet/kichain-2/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uxki',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/KiFoundation/ki-tools',
      recommended_version: '2.0.1',
      compatible_versions: ['2.0.1']
    },
    peers: {
      seeds: [
        {
          id: '24cbccfa8813accd0ebdb09e7cdb54cff2e8fcd9',
          address: '51.89.166.197:26656',
          provider: 'kifoundation'
        }
      ],
      persistent_peers: [
        {
          id: '81396d4703a2e3cbd136c7324e4df5686fd48218',
          address: '35.180.8.214:26656',
          provider: 'kifoundation'
        },
        {
          id: 'c597db55d9a609b8b77c3d37ecf1fa9a67117cc0',
          address: '144.217.82.4:26656',
          provider: 'kifoundation'
        },
        {
          id: '50af457247b59aa558a26a14bd7ac4bf86eeae70',
          address: '195.201.164.223:26656',
          provider: 'everstake'
        },
        {
          id: '81eef39d2ca9a07490857d197423da4ba5e01879',
          address: '15.188.134.35:26656',
          provider: 'cosmostation'
        },
        {
          id: '5adb5ad6a6fcef624866cefdb551dafdc07f7e78',
          address: '15.188.198.188:26656',
          provider: 'cosmostation'
        },
        {
          id: '41b321292cbe50c5c30017cc71c404481be0e20b',
          address: '3.38.12.5:26656',
          provider: 'cosmostation'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-mainnet.blockchain.ki',
          provider: 'kifoundation'
        },
        {
          address: 'https://kichain-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.kichain.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc-kichain-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api-mainnet.blockchain.ki',
          provider: 'kifoundation'
        },
        {
          address: 'https://lcd.kichain.ezstaking.io',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api-kichain-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-kichain-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/ki-chain',
        tx_page: 'https://www.mintscan.io/ki-chain/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/kichain',
        tx_page: 'https://ping.pub/kichain/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/ki-chain',
        tx_page: 'https://atomscan.com/ki-chain/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'konstellation',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Konstellation Network',
    chain_id: 'darchub',
    bech32_prefix: 'darc',
    daemon_name: 'knstld',
    node_home: '$HOME/.knstld',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/Konstellation/konstellation/master/config/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/konstellation/konstellation',
      recommended_version: 'v0.5.0',
      compatible_versions: ['v0.5.0']
    },
    peers: {
      seeds: [
        {
          id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
          address: 'node1.konstellation.tech:26656'
        },
        {
          id: 'a32dda75cf5ffe4ab0ff9a0969e525807e01f2e5',
          address: 'node2.konstellation.tech:26656'
        },
        {
          id: '06fed4bbe81ead6073a7254e860331179af74f4c',
          address: 'node3.konstellation.tech:26656'
        },
        {
          id: 'd4a713a657883cca49d71b1b2cab4ab5e94b0843',
          address: 'node4.konstellation.tech:26656'
        },
        {
          id: '1c9aff1ea9d1cafd584aa61a70582e7c4b0c8675',
          address: 'node5.konstellation.tech:26656'
        },
        {
          id: '0f4eef8db37ec7ef9f6d3324689db2847ee8f795',
          address: 'node10.konstellation.tech:26656'
        },
        {
          id: '7e8119050ecb80450ad476b50423b9230c10c8d0',
          address: 'node11.konstellation.tech:26656'
        },
        {
          id: 'dbb7589202f6c751f2b93c6bbcd0e660676ab91c',
          address: 'node12.konstellation.tech:26656'
        },
        {
          id: 'f2c2ebec24507d54fea88976e9f93f0fbfa0d6d0',
          address: 'node13.konstellation.tech:26656'
        },
        {
          id: '00f7f4506d84f9d1458201946e1194564b444ce0',
          address: 'node14.konstellation.tech:26656'
        }
      ],
      persistent_peers: [
        {
          id: '1bd4b89e05e5d7ea5d2dba89c799c2e624cb35d7',
          address: 'node1.konstellation.tech:26656'
        },
        {
          id: 'a32dda75cf5ffe4ab0ff9a0969e525807e01f2e5',
          address: 'node2.konstellation.tech:26656'
        },
        {
          id: '06fed4bbe81ead6073a7254e860331179af74f4c',
          address: 'node3.konstellation.tech:26656'
        },
        {
          id: 'd4a713a657883cca49d71b1b2cab4ab5e94b0843',
          address: 'node4.konstellation.tech:26656'
        },
        {
          id: '1c9aff1ea9d1cafd584aa61a70582e7c4b0c8675',
          address: 'node5.konstellation.tech:26656'
        },
        {
          id: '0f4eef8db37ec7ef9f6d3324689db2847ee8f795',
          address: 'node10.konstellation.tech:26656'
        },
        {
          id: '7e8119050ecb80450ad476b50423b9230c10c8d0',
          address: 'node11.konstellation.tech:26656'
        },
        {
          id: 'dbb7589202f6c751f2b93c6bbcd0e660676ab91c',
          address: 'node12.konstellation.tech:26656'
        },
        {
          id: 'f2c2ebec24507d54fea88976e9f93f0fbfa0d6d0',
          address: 'node13.konstellation.tech:26656'
        },
        {
          id: '00f7f4506d84f9d1458201946e1194564b444ce0',
          address: 'node14.konstellation.tech:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://node1.konstellation.tech:26657',
          provider: 'konstellation'
        },
        {
          address: 'https://konstellation-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-konstellation-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://node1.konstellation.tech:1318',
          provider: 'konstellation'
        },
        {
          address: 'https://api-konstellation-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-konstellation-ia.notional.ventures:443/',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'konstellation',
        url: 'https://explorer.konstellation.tech/',
        tx_page: 'https://explorer.konstellation.tech/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'likecoin',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'LikeCoin',
    chain_id: 'likecoin-mainnet-2',
    bech32_prefix: 'like',
    daemon_name: 'liked',
    node_home: '$HOME/.liked',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/likecoin/mainnet/982c14399089950a59d3ebbedcbbc7ead6040457/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'nanolike'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/likecoin/likecoin-chain',
      recommended_version: 'v3.0.0',
      compatible_versions: ['v3.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.0.0/likecoin-chain_3.0.0_Linux_x86_64.tar.gz',
        'linux/arm64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.0.0/likecoin-chain_3.0.0_Linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.0.0/likecoin-chain_3.0.0_Darwin_x86_64.tar.gz',
        'darwin/arm64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.0.0/likecoin-chain_3.0.0_Darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/likecoin/likecoin-chain/releases/download/v3.0.0/likecoin-chain_3.0.0_Windows_x86_64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '913bd0f4bea4ef512ffba39ab90eae84c1420862',
          address: '34.82.131.35:26656',
          provider: 'like.co'
        },
        {
          id: 'e44a2165ac573f84151671b092aa4936ac305e2a',
          address: 'nnkken.dev:26656',
          provider: 'nnkken'
        }
      ],
      persistent_peers: [
        {
          id: 'f087d600cf3d34d3bac04a9723a53180619e8445',
          address: '35.247.83.138:26656',
          provider: 'like.co'
        },
        {
          id: '75822abfbcc23dcefd025e245b46e2dec5357f75',
          address: '207.246.101.4:26656',
          provider: 'forbole'
        },
        {
          id: '9f62898076c35d78df21c1d2280be922221c23af',
          address: '139.59.8.62:2180',
          provider: 'Notional'
        },
        {
          id: '20afcd5637b2278efc78c54fd523bd331d1820f2',
          address: '78.47.110.110:26656',
          provider: 'moonbeam'
        },
        {
          id: '5940f55e0e7e2f1a2c9507bf62fbfd7c6d2f3874',
          address: 'likechain.oursky.com:26656',
          provider: 'Oursky'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet-node.like.co/rpc/',
          provider: 'like.co'
        },
        {
          address: 'https://rpc-likecoin-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://mainnet-node.like.co',
          provider: 'like.co'
        },
        {
          address: 'https://api-likecoin-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-likecoin-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper',
        url: 'https://likecoin.bigdipper.live/',
        tx_page: 'https://likecoin.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'lunie-ng',
        url: 'https://stake.like.co/'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/likecoin',
        tx_page: 'https://ping.pub/likecoin/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/likecoin',
        tx_page: 'https://atomscan.com/likecoin/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'logos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Logos',
    chain_id: 'logos_7002-1',
    bech32_prefix: 'logos',
    daemon_name: 'logosd',
    node_home: '$HOME/.logos',
    genesis: {
      genesis_url: ''
    },
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aLYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://logos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://logos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://logos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://logos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.png',
      svg:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/logos/images/logos.svg'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'lumenx',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Lumen Network',
    chain_id: 'LumenX',
    bech32_prefix: 'lumen',
    daemon_name: 'lumenxd',
    node_home: '$HOME/.lumenx',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/metaprotocol-ai/lumenx/master/config/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ulumen',
          fixed_min_gas_price: 0.0025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/metaprotocol-ai/lumenx',
      recommended_version: 'v0.1.0',
      compatible_versions: ['v0.1.0']
    },
    peers: {
      seeds: [
        {
          id: 'bc22063df30a0644df742cdb2764b1004df6e3e3',
          address: 'node1.lumenex.io:26656'
        },
        {
          id: '9cd5f77ac27254891f64801470b0c3432188c62c',
          address: 'node2.lumenex.io:26656'
        },
        {
          id: '78669849476c8b728abe178475c6f016edf175cf',
          address: 'node3.lumenex.io:26656'
        },
        {
          id: '48444a4bacc0cafa049d777152473769ab17c0c3',
          address: 'node4.lumenex.io:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'bc22063df30a0644df742cdb2764b1004df6e3e3',
          address: 'node1.lumenex.io:26656'
        },
        {
          id: '9cd5f77ac27254891f64801470b0c3432188c62c',
          address: 'node2.lumenex.io:26656'
        },
        {
          id: '78669849476c8b728abe178475c6f016edf175cf',
          address: 'node3.lumenex.io:26656'
        },
        {
          id: '48444a4bacc0cafa049d777152473769ab17c0c3',
          address: 'node4.lumenex.io:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.helios-1.lumenex.io',
          provider: 'metaprotocol'
        }
      ],
      rest: [
        {
          address: 'https://api.helios-1.lumenex.io/',
          provider: 'metaprotocol'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://scope.helios-1.lumenex.io/lumenx',
        tx_page: 'https://scope.helios-1.lumenex.io/lumenx/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'lumnetwork',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Lum Network',
    chain_id: 'lum-network-1',
    bech32_prefix: 'lum',
    daemon_name: 'lumd',
    node_home: '$HOME/.lumd',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/lum-network/mainnet/master/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 880,
    fees: {
      fee_tokens: [
        {
          denom: 'ulum',
          fixed_min_gas_price: 0.001
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/lum-network/chain',
      recommended_version: 'v1.0.5',
      compatible_versions: ['v1.0.5']
    },
    peers: {
      seeds: [
        {
          id: '19ad16527c98b782ee35df56b65a3a251bd99971',
          address: 'peer-1.mainnet.lum.network:26656',
          provider: 'lum foundation'
        }
      ],
      persistent_peers: [
        {
          id: 'b47626b9d78ed7ed3c413304387026f907c70cbe',
          address: 'peer-0.mainnet.lum.network:26656',
          provider: 'lum foundation'
        },
        {
          id: 'e12fcc7d9fc9b8b2901aec950f161418794cccf0',
          address: '65.108.77.38:26656',
          provider: 'everstake'
        },
        {
          id: '4166de0e7721b6eec9c776abf2c38c40e7f820c5',
          address: '202.61.239.130:26656',
          provider: 'stakecito'
        },
        {
          id: 'fbaeeff89ec94a4f6c4a2a61e24af7d06b3be0c8',
          address: '46.166.140.180:26656',
          provider: 'simply staking'
        },
        {
          id: '5a29947212a2615e43dac54deb55356a162e173a',
          address: '35.181.76.160:26656',
          provider: 'imperator'
        },
        {
          id: '5ea36d78ae774c9086c2d3fc8b91f12aa4bf3029',
          address: '46.101.251.76:26656',
          provider: 'cryptocrew'
        },
        {
          id: '433c60a5bc0a693484b7af26208922b84773117e',
          address: '34.209.132.0:26656',
          provider: 'cosmostation'
        },
        {
          id: '9afac13ba62fbfaf8d06867c30007162511093c0',
          address: '54.214.134.223:26656',
          provider: 'cosmostation'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://node0.mainnet.lum.network/rpc',
          provider: 'Lum Foundation'
        }
      ],
      rest: [
        {
          address: 'https://node0.mainnet.lum.network/rest',
          provider: 'Lum Foundation'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/lum',
        tx_page: 'https://www.mintscan.io/lum/txs/${txHash}'
      },
      {
        kind: 'lum-network',
        url: 'https://explorer.lum.network',
        tx_page: 'https://explorer.lum.network/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/lum-network',
        tx_page: 'https://ping.pub/lum-network/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/lum-network',
        tx_page: 'https://atomscan.com/lum-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'meme',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'MEME',
    chain_id: 'meme-1',
    bech32_prefix: 'meme',
    daemon_name: 'memed',
    node_home: '$HOME/.memed',
    genesis: {
      genesis_url:
        'https://github.com/memecosmos/mainnet/raw/main/meme-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'umeme',
          fixed_min_gas_price: 0.025
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/memecosmos/meme/',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0']
    },
    peers: {
      seeds: [
        {
          id: 'dbe97ebeb4d07999a1fe2de2f92a56cc07385259',
          address: 'seeds.pupmos.network:2005',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: 'a9959fef554ee407f23dffbcd4c0711e02a07d18',
          address: '207.246.107.204:26656',
          provider: 'MEME Foundation'
        },
        {
          id: 'f6e846ee01e14bc06e9b1b8be9237d8c365614e7',
          address: '45.76.154.44:26656',
          provider: 'MEME Foundation'
        },
        {
          id: '1e2a4e7c513d1ba267fe2e689d4dfe6d6105f644',
          address: '139.180.140.142:26656',
          provider: 'MEME Foundation'
        },
        {
          id: 'c57fce65a0e6be87763ae38d607b817b3acde620',
          address: '173.212.215.104:26656',
          provider: 'Theamsolutions'
        },
        {
          id: 'c1e05690adfbc970817e0debb5d7770ee9f2f3ac',
          address: '65.108.131.174:47656',
          provider: 'Polkachu'
        },
        {
          id: 'fc21b0c26b6840915f6fe2daf56565e1c30e0956',
          address: '162.55.245.104:26656',
          provider: 'PUPMØS'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-meme-1.meme.sx/',
          provider: 'MEME Foundation'
        },
        {
          address: 'https://rpc.meme.interbloc.org/',
          provider: 'Interbloc'
        },
        {
          address: 'https://meme-rpc.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.meme.pupmos.network/',
          provider: 'PUPMØS'
        }
      ],
      rest: [
        {
          address: 'https://api-meme-1.meme.sx/',
          provider: 'MEME Foundation'
        },
        {
          address: 'https://api.meme.interbloc.org/',
          provider: 'Interbloc'
        },
        {
          address: 'https://meme-api.polkachu.com/',
          provider: 'Polkachu'
        },
        {
          address: 'https://api.meme.pupmos.network/',
          provider: 'PUPMØS'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/meme',
        tx_page: 'https://ping.pub/meme/tx/${txHash}'
      },
      {
        kind: 'atomscan.com',
        url: 'https://atomscan.com/meme',
        tx_page: 'https://atomscan.com/meme/transactions/${txHash}',
        account_page: 'https://atomscan.com/meme/accounts/${accountAddress}'
      },
      {
        kind: 'MEME Explorer',
        url: 'https://explorer.meme.sx/meme',
        tx_page: 'https://explorer.meme.sx/meme/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/meme',
        tx_page: 'https://atomscan.com/meme/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'microtick',
    status: 'killed',
    network_type: 'mainnet',
    pretty_name: 'Microtick',
    chain_id: 'microtick-1',
    bech32_prefix: 'micro',
    daemon_name: 'mtm',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/microtick/stargate-genesis/master/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/microtick/mtzone',
      recommended_version: 'mtm-v2.0.4',
      compatible_versions: ['mtm-v2.0.4']
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/microtick',
        tx_page: 'https://ping.pub/microtick/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'mythos',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Mythos',
    chain_id: 'mythos_7001-1',
    bech32_prefix: 'mythos',
    daemon_name: 'mythosd',
    node_home: '$HOME/.mythosd',
    genesis: {
      genesis_url: ''
    },
    slip44: 60,
    fees: {
      fee_tokens: [
        {
          denom: 'aMYT'
        }
      ]
    },
    peers: {
      seeds: [],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://mythos-rpc.provable.dev:443/',
          provider: 'laurel.provable'
        }
      ],
      rest: [
        {
          address: 'https://mythos.provable.dev/rest/',
          provider: 'laurel.provable'
        }
      ],
      grpc: [
        {
          address: 'https://mythos-grpc.provable.dev:443',
          provider: 'laurel.provable'
        }
      ],
      'evm-http-jsonrpc': [
        {
          address: 'https://mythos-evm.provable.dev/',
          provider: 'laurel.provable'
        }
      ]
    },
    explorers: [],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.png',
      svg:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/mythos/images/mythos.svg'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'nomic',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Nomic Stakenet 3',
    chain_id: 'nomic-stakenet-3',
    bech32_prefix: 'nomic',
    daemon_name: 'nomic',
    node_home: '$HOME/.nomic-stakenet-3',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/nomic-io/nomic/develop/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/nomic-io/nomic',
      recommended_version: 'v0.5.0',
      compatible_versions: ['v0.5.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ovrclk/akash/releases/download/v0.12.1/akash_0.12.1_linux_amd64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '238120dfe716082754048057c1fdc3d6f09609b5',
          address: '161.35.51.124:26656'
        },
        {
          id: 'a67d7a4d90f84d5c67bfc196aac68441ba9484a6',
          address: '167.99.119.196:26659'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'http://138.197.71.46:26657',
          provider: 'nomic-io'
        }
      ],
      rest: [
        {
          address: 'https://app.nomic.io:8443',
          provider: 'nomic-io'
        }
      ]
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'octa',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Octa',
    chain_id: 'octa',
    bech32_prefix: 'octa',
    daemon_name: 'octadaemon',
    node_home: '$HOME/.octa',
    genesis: {
      genesis_url:
        'https://octa-coin-assets.s3.eu-central-1.amazonaws.com/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uocta',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: '',
      recommended_version: '',
      compatible_versions: [],
      binaries: {
        'linux/amd64': '',
        'linux/arm64': '',
        'darwin/amd64': '',
        'windows/amd64': ''
      }
    },
    peers: {
      seeds: [
        {
          id: 'd35844470ba3c80f052091a9c86d44198e579246',
          address: '3.73.39.110:26656'
        }
      ],
      persistent_peers: [
        {
          id: '935118052f48eede9ed7d38d3da8e20cb5747e39',
          address: '3.123.21.45:26656',
          provider: 'GenesisNode'
        },
        {
          id: '61823fb4af8a48ac161522114c6640b76fd8a6d9',
          address: '3.71.102.151:26656',
          provider: 'Basic_Validator'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://3.71.102.151:26657',
          provider: 'octa'
        }
      ],
      rest: [
        {
          address: 'http://3.71.102.151:1317',
          provider: 'octa'
        }
      ]
    },
    explorers: [
      {
        kind: 'Octa explorer',
        url: 'http://explorer.octa-coin.com/',
        tx_page: 'http://explorer.octa-coin.com/txs/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'odin',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'OdinChain',
    chain_id: 'odin-mainnet-freya',
    bech32_prefix: 'odin',
    daemon_name: 'odind',
    node_home: '$HOME/.odin',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ODIN-PROTOCOL/networks/master/mainnets/odin-mainnet-freya/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'loki',
          fixed_min_gas_price: 0.0125
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/ODIN-PROTOCOL/odin-core',
      recommended_version: 'v0.5.5',
      compatible_versions: ['v0.5.5']
    },
    peers: {
      persistent_peers: [
        {
          id: '9d16b1ce74a34b869d69ad5fe34eaca614a36ecd',
          address: '35.241.238.207:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '02e905f49e1b869f55ad010979931b542302a9e6',
          address: '35.241.221.154:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '4847c79f1601d24d3605278a0183d416a99aa093',
          address: '34.140.252.7:26656',
          provider: 'Odin Protocol'
        },
        {
          id: '0165cd0d60549a37abb00b6acc8227a54609c648',
          address: '34.79.179.216:26656',
          provider: 'Odin Protocol'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://34.79.179.216:26657',
          provider: 'Odin Protocol'
        }
      ],
      rest: [
        {
          address: 'http://34.79.179.216:1317/',
          provider: 'Odin Protocol'
        }
      ]
    },
    explorers: [
      {
        kind: 'odin web',
        url: 'https://mainnet.odinprotocol.io/',
        tx_page: 'https://mainnet.odinprotocol.io/transactions/${txHash}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/odin',
        tx_page: 'https://ping.pub/odin/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'omniflixhub',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'OmniFlix Hub',
    chain_id: 'omniflixhub-1',
    daemon_name: 'omniflixhubd',
    node_home: '$HOME/.omniflixhub',
    bech32_prefix: 'omniflix',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/OmniFlix/mainnet/main/omniflixhub-1/genesis.json'
    },
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/OmniFlix/omniflixhub',
      recommended_version: 'v0.4.1',
      compatible_versions: ['v0.4.1']
    },
    peers: {
      seeds: [
        {
          id: '9d75a06ebd3732a041df459849c21b87b2c55cde',
          address: '35.187.240.195:26656'
        },
        {
          id: '19feae28207474eb9f168fff9720fd4d418df1ed',
          address: '35.240.196.102:26656'
        }
      ],
      persistent_peers: [
        {
          id: '2df1f357f08049ba0c0dddfffe805f0e135e54ec',
          address: '35.247.185.216:26656'
        },
        {
          id: '6198ac4bc907f6d1a78309ef58491370afc49799',
          address: '34.124.195.219:26656'
        },
        {
          id: '574b37cc6e80663e70673cbe848147c2643ca48e',
          address: '35.240.187.174:26656'
        },
        {
          id: '8313c9d55006da030588f61806b3e056a113e6e8',
          address: '34.87.18.204:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://omniflixhub-rpc.skynetvalidators.com',
          provider: 'skynet-validators'
        },
        {
          address: 'https://rpc.omniflix.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      rest: [
        {
          address: 'https://omniflixhub-api.skynetvalidators.com',
          provider: 'skynet-validators'
        },
        {
          address: 'https://api.omniflix.nodestake.top',
          provider: 'NodeStake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.omniflix.nodestake.top',
          provider: 'NodeStake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/omniflix',
        tx_page: 'https://www.mintscan.io/omniflix/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/omniflix/account/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/omniflixhub',
        tx_page: 'https://atomscan.com/omniflixhub/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'oraichain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Oraichain',
    chain_id: 'Oraichain',
    bech32_prefix: 'orai',
    daemon_name: 'oraid',
    node_home: '$WORKSPACE/.oraid',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/mainnet-static-files/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'orai',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/oraichain/orai',
      recommended_version: 'v0.40.3',
      compatible_versions: ['v0.40.3'],
      binaries: {
        'linux/amd64': 'https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid'
      }
    },
    peers: {
      seeds: [
        {
          id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
          address: '18.223.242.70:26656',
          provider: 'oraichain-team'
        },
        {
          id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
          address: '18.116.209.76:26656',
          provider: 'oraichain-team'
        },
        {
          id: '59d49e39d507bb190e746bcf5590d65879c132e2',
          address: '13.79.247.74:26656',
          provider: 'vaiot'
        },
        {
          id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
          address: '5.189.169.99:26656',
          provider: 'ORAI Vanguard'
        },
        {
          id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
          address: '64.225.53.108:26656',
          provider: 'oraichain-team'
        },
        {
          id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
          address: 'seed.orai.synergynodes.com:26656',
          provider: 'synergynodes'
        }
      ],
      persistent_peers: [
        {
          id: '0baa806b3a4dd17be6e06369d899f140c3897d6e',
          address: '18.223.242.70:26656'
        },
        {
          id: '9749da4a81526266d7b8fe9a03d260cd3db241ad',
          address: '18.116.209.76:26656'
        },
        {
          id: '59d49e39d507bb190e746bcf5590d65879c132e2',
          address: '13.79.247.74:26656'
        },
        {
          id: '35c1f999d67de56736b412a1325370a8e2fdb34a',
          address: '5.189.169.99:26656'
        },
        {
          id: '5ad3b29bf56b9ba95c67f282aa281b6f0903e921',
          address: '64.225.53.108:26656'
        },
        {
          id: 'd091cabe3584cb32043cc0c9199b0c7a5b68ddcb',
          address: 'seed.orai.synergynodes.com:26656',
          provider: 'synergynodes'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.orai.io',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.223.242.70:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.116.209.76:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://64.225.53.108:26657',
          provider: 'oraichain-team'
        },
        {
          address: 'http://13.79.247.74:26657',
          provider: 'vaiot'
        }
      ],
      rest: [
        {
          address: 'http://lcd.orai.io',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.223.242.70:1317',
          provider: 'oraichain-team'
        },
        {
          address: 'http://18.116.209.76:1317',
          provider: 'oraichain-team'
        },
        {
          address: 'http://64.225.53.108:1317',
          provider: 'oraichain-team'
        }
      ]
    },
    explorers: [
      {
        kind: 'oraiscan',
        url: 'https://scan.orai.io',
        tx_page: 'https://scan.orai.io/txs/{txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'osmosis',
    status: 'live',
    network_type: 'mainnet',
    updatelink:
      'https://raw.githubusercontent.com/osmosis-labs/osmosis/main/chain.schema.json',
    pretty_name: 'Osmosis',
    chain_id: 'osmosis-1',
    bech32_prefix: 'osmo',
    daemon_name: 'osmosisd',
    node_home: '$HOME/.osmosisd',
    genesis: {
      genesis_url:
        'https://github.com/osmosis-labs/networks/raw/main/osmosis-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uosmo',
          fixed_min_gas_price: 0,
          low_gas_price: 0,
          average_gas_price: 0.025,
          high_gas_price: 0.04
        }
      ]
    },
    staking: {
      staking_tokens: [
        {
          denom: 'uosmo'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/osmosis-labs/osmosis',
      recommended_version: 'v11.0.0',
      compatible_versions: ['v11.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.0/osmosisd-11.0.0-linux-amd64',
        'linux/arm64':
          'https://github.com/osmosis-labs/osmosis/releases/download/v11.0.0/osmosisd-11.0.0-linux-arm64'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34',
      cosmwasm_version: '0.24',
      cosmwasm_enabled: true
    },
    peers: {
      seeds: [
        {
          id: '83adaa38d1c15450056050fd4c9763fcc7e02e2c',
          address: 'ec2-44-234-84-104.us-west-2.compute.amazonaws.com:26656',
          provider: 'notional'
        },
        {
          id: '23142ab5d94ad7fa3433a889dcd3c6bb6d5f247d',
          address: '95.217.193.163:26656',
          provider: 'notional'
        },
        {
          id: 'f82d1a360dc92d4e74fdc2c8e32f4239e59aebdf',
          address: '95.217.121.243:26656',
          provider: 'notional'
        },
        {
          id: 'e437756a853061cc6f1639c2ac997d9f7e84be67',
          address: '144.76.183.180:26656',
          provider: 'notional'
        },
        {
          id: 'f515a8599b40f0e84dfad935ba414674ab11a668',
          address: 'osmosis.blockpane.com:26656',
          provider: 'blockpane'
        },
        {
          id: '7c66126b64cd66bafd9ccfc721f068df451d31a3',
          address: 'osmosis-seed.sunshinevalidation.io:9393',
          provider: 'sunshine-validation'
        }
      ],
      persistent_peers: [
        {
          id: 'b63e1e588e8feb7e4a4adf0f2542d755e606d3f1',
          address: '5.9.105.113:26656',
          provider: 'WhisperNode 🤐'
        },
        {
          id: '8f67a2fcdd7ade970b1983bf1697111d35dfdd6f',
          address: '52.79.199.137:26656',
          provider: 'cosmostation'
        },
        {
          id: '00c328a33578466c711874ec5ee7ada75951f99a',
          address: '35.82.201.64:26656',
          provider: 'cosmostation'
        },
        {
          id: 'cfb6f2d686014135d4a6034aa6645abd0020cac6',
          address: '52.79.88.57:26656',
          provider: 'cosmostation'
        },
        {
          id: '8d9967d5f865c68f6fe2630c0f725b0363554e77',
          address: '134.255.252.173:26656',
          provider: 'divecrypto'
        },
        {
          id: '785bc83577e3980545bac051de8f57a9fd82695f',
          address: '194.233.164.146:26656',
          provider: 'forbole'
        },
        {
          id: '778fdedf6effe996f039f22901a3360bc838b52e',
          address: '161.97.187.189:36657',
          provider: 'kalpatech'
        },
        {
          id: '64d36f3a186a113c02db0cf7c588c7c85d946b5b',
          address: '209.97.132.170:26656',
          provider: 'solidstake'
        },
        {
          id: '4d9ac3510d9f5cfc975a28eb2a7b8da866f7bc47',
          address: '37.187.38.191:26656',
          provider: 'stakelab'
        },
        {
          id: '2115945f074ddb038de5d835e287fa03e32f0628',
          address: '95.217.43.85:26656',
          provider: 'stakerspace'
        },
        {
          id: 'bf2c480eff178d2647ba1adfeee8ced568fe752c',
          address: '91.65.128.44:26656',
          provider: 'stakerus'
        },
        {
          id: '2f9c16151400d8516b0f58c030b3595be20b804c',
          address: '37.120.245.167:26656',
          provider: 'syncnode'
        },
        {
          id: 'bada684070727cb3dda430bcc79b329e93399665',
          address: '173.212.240.91:26656',
          provider: 'qf3l3k'
        },
        {
          id: '3fea02d121cb24503d5fbc53216a527257a9ab55',
          address: '143.198.145.208:26656',
          provider: 'witval'
        },
        {
          id: '7de029fa5e9c1f39557c0e3523c1ae0b07c58be0',
          address: '78.141.219.223:26656',
          provider: 'artifactstaking'
        },
        {
          id: '7024d1ca024d5e33e7dc1dcb5ed08349768220b9',
          address: '134.122.42.20:26656',
          provider: 'figment'
        },
        {
          id: 'd326ad6dffa7763853982f334022944259b4e7f4',
          address: '143.110.212.33:26656',
          provider: 'figment'
        },
        {
          id: 'e7916387e05acd53d1b8c0f842c13def365c7bb6',
          address: '176.9.64.212:26666',
          provider: 'medusanode'
        },
        {
          id: '55eea69c21b46000c1594d8b4a448563b075d9e3',
          address: '34.107.19.235:26656',
          provider: 'binaryholdings'
        },
        {
          id: '9faf468b90a3b2b85ffd88645a15b3715f68bb0b',
          address: '195.201.122.100:26656',
          provider: 'chainflow'
        },
        {
          id: 'ffc82412c0261a94df122b9cc0ce1de81da5246b',
          address: '15.222.240.16:26656',
          provider: 'cephalopod'
        },
        {
          id: '5b90a530464885fd28c31f698c81694d0b4a1982',
          address: '35.183.238.70:26656',
          provider: 'cephalopod'
        },
        {
          id: '7b6689cb18d625bbc069aa99d9d5521293db442c',
          address: '51.158.97.192:26656',
          provider: 'mp20'
        },
        {
          id: 'fda06dcebe2acd17857a6c9e9a7b365da3771ceb',
          address: '52.206.252.176:26656',
          provider: 'stargaze'
        },
        {
          id: '8d9fd90a009e4b6e9572bf9a84b532a366790a1d',
          address: '193.26.156.221:26656',
          provider: 'validatus'
        },
        {
          id: '44a760a66071dae257c5c044be604219bfc3510c',
          address: '49.12.35.177:36656',
          provider: 'in3s.com'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://osmosis-rpc.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://rpc-osmosis.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://osmosis.validator.network/',
          provider: 'validatornetwork'
        },
        {
          address: 'https://rpc-osmosis.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-osmosis.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://osmosis-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-osmosis-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc.osmosis.zone/',
          provider: 'Osmosis Foundation'
        },
        {
          address: 'https://rpc.osmosis.interbloc.org',
          provider: 'Interbloc'
        }
      ],
      rest: [
        {
          address: 'https://osmosis-lcd.quickapi.com:443',
          provider: 'Chainlayer'
        },
        {
          address: 'https://lcd-osmosis.whispernode.com',
          provider: 'WhisperNode 🤐'
        },
        {
          address: 'https://lcd-osmosis.blockapsis.com',
          provider: 'chainapsis'
        },
        {
          address: 'https://rest-osmosis.ecostake.com',
          provider: 'ecostake'
        },
        {
          address: 'https://api-osmosis-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd.osmosis.zone/',
          provider: 'Osmosis Foundation'
        },
        {
          address: 'https://api.osmosis.interbloc.org',
          provider: 'Interbloc'
        },
        {
          address: 'https://osmosis.stakesystems.io/',
          provider: 'stakesystems'
        }
      ],
      grpc: [
        {
          address: 'osmosis.strange.love:9090',
          provider: 'strangelove'
        },
        {
          address: 'grpc-osmosis-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/osmosis',
        tx_page: 'https://www.mintscan.io/osmosis/txs/${txHash}',
        account_page:
          'https://www.mintscan.io/osmosis/account/${accountAddress}'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/osmosis',
        tx_page: 'https://ping.pub/osmosis/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://osmosis.explorers.guru',
        tx_page: 'https://osmosis.explorers.guru/transaction/${txHash}',
        account_page:
          'https://osmosis.explorers.guru/transaction/${accountAddress}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/osmosis',
        tx_page: 'https://atomscan.com/osmosis/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmosis-chain-logo.png'
    },
    keywords: ['dex']
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'panacea',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Panacea',
    chain_id: 'panacea-3',
    bech32_prefix: 'panacea',
    daemon_name: 'panacead',
    node_home: '$HOME/.panacead',
    genesis: {
      genesis_url:
        'https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 371,
    fees: {
      fee_tokens: [
        {
          denom: 'umed',
          fixed_min_gas_price: 5
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/medibloc/panacea-core',
      recommended_version: 'v2.0.2',
      compatible_versions: ['v2.0.2'],
      binaries: {}
    },
    peers: {
      persistent_peers: [
        {
          id: 'e93f5df69cc1b9bda230b3efcf162d4672293ded',
          address: '3.35.82.40:26656',
          provider: 'medibloc'
        },
        {
          id: '0e0db1c7ab1e37c76f2ceced0bb72e1c60ef17a6',
          address: '13.124.96.254:26656',
          provider: 'medibloc'
        },
        {
          id: 'a83232db3a40e486b54b1463a43431e8490b808b',
          address: '52.79.108.35:26656',
          provider: 'medibloc'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.gopanacea.org',
          provider: 'medibloc'
        }
      ],
      rest: [
        {
          address: 'https://api.gopanacea.org',
          provider: 'medibloc'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/medibloc',
        tx_page: 'https://www.mintscan.io/medibloc/txs/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://explorer.gopanacea.org',
        tx_page: 'https://explorer.gopanacea.org/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'persistence',
    chain_id: 'core-1',
    pretty_name: 'Persistence',
    status: 'live',
    network_type: 'mainnet',
    bech32_prefix: 'persistence',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json'
    },
    daemon_name: 'persistenceCore',
    node_home: '$HOME/.persistenceCore',
    key_algos: ['secp256k1'],
    slip44: 750,
    fees: {
      fee_tokens: [
        {
          denom: 'uxprt',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/persistenceOne/persistenceCore',
      recommended_version: 'v0.2.3',
      compatible_versions: ['v0.2.3'],
      binaries: {
        'linux/amd64':
          'https://github.com/persistenceOne/persistenceCore/releases/download/v0.2.3/persistenceCore-linux-amd64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '449a0f1b7dafc142cf23a1f6166bbbf035edfb10',
          address: '13.232.85.66:26656'
        },
        {
          id: 'eaa76966cad27a9807b7d8b9a62c9b2ca4924581',
          address: 'tenderseed.ccvalidators.com:26003'
        }
      ],
      persistent_peers: [
        {
          id: '876946a947850952383347724206d067d7032b22',
          address: '3.137.86.151:26656'
        },
        {
          id: 'ecc00c5a7abd057ea5ca4a94c48d1d937bbab34a',
          address: '34.118.19.56:26656'
        },
        {
          id: 'ac7e6aab726e842b92c06b8ebbf5a3616872ee80',
          address: '128.1.133.107:26656'
        },
        {
          id: 'b9dab7a1a5ffd16d43b19e40a8020db84e8dfffd',
          address: '3.14.116.246:44456'
        },
        {
          id: '60385a36ea72a2985bd8450c95b8df8be2adebb8',
          address: '54.95.235.242:26656'
        },
        {
          id: 'a92ff1da2020e5cbc9b05527e9e39c34a84e8a27',
          address: '34.72.57.218:26656'
        },
        {
          id: 'e15524629aee25fea01f62d26c4e062bfda94b70',
          address: '35.247.171.7:26656'
        },
        {
          id: '7c106099b8d07085431a97387e5a5db2d1ecd71d',
          address: '18.223.209.36:26656'
        },
        {
          id: 'b19a3cf4d9938b41539729d027bf2e3c1a4e1fbb',
          address: '85.214.130.157:26656'
        },
        {
          id: '7cc92a9e3dcad37e5e7b3adf7814c37070fa9787',
          address: '161.97.187.189:26656'
        },
        {
          id: '7b9839cd3e994c44cbd747d1ddc51ee695f60e58',
          address: '157.90.134.48:26656'
        },
        {
          id: 'cfb529bd0325fc884296518655f1f315bc42dd0c',
          address: '185.144.83.165:26656'
        },
        {
          id: '01102f3c84e6602e30e1e39498e242cbb60a0b73',
          address: '178.62.103.7:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.core.persistence.one',
          provider: 'Persistence'
        },
        {
          address: 'https://rpc-persistent-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://rest.core.persistence.one',
          provider: 'Persistence'
        },
        {
          address: 'https://api-persistent-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc.core.persistence.one:443',
          provider: 'Persistence'
        },
        {
          address: 'grpc-persistent-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'proprietary',
        url: 'https://explorer.persistence.one',
        tx_page: 'https://explorer.persistence.one/transactions/{txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/persistence',
        tx_page: 'https://www.mintscan.io/persistence/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/persistence',
        tx_page: 'https://ping.pub/persistence/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/persistence',
        tx_page: 'https://atomscan.com/persistence/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'provenance',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Provenance Blockchain',
    chain_id: 'pio-mainnet-1',
    bech32_prefix: 'pb',
    daemon_name: 'provenanced',
    node_home: '$HOME/Provenance',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 505,
    fees: {
      fee_tokens: [
        {
          denom: 'nhash',
          fixed_min_gas_price: 1905
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/provenance-io/provenance',
      recommended_version: 'v1.8.2',
      compatible_versions: ['v1.7.5', 'v1.7.6', 'v1.8.0', 'v1.8.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/provenance-io/provenance/releases/download/v1.8.2/provenance-linux-amd64-v1.8.2.zip',
        'darwin/amd64':
          'https://github.com/provenance-io/provenance/releases/download/v1.8.2/provenance-darwin-amd64-v1.8.2.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '4bd2fb0ae5a123f1db325960836004f980ee09b4',
          address: 'seed-0.provenance.io:26656',
          provider: 'figure'
        },
        {
          id: '048b991204d7aac7209229cbe457f622eed96e5d',
          address: 'seed-1.provenance.io:26656',
          provider: 'figure'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.provenance.io/',
          provider: 'figure'
        },
        {
          address: 'https://api-provenance-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.provenance.io',
          provider: 'figure'
        },
        {
          address: 'https://api-provenance-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-provenance-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'provenance',
        url: 'https://explorer.provenance.io',
        tx_page: 'https://explorer.provenance.io/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://bigdipper.provenance.io',
        tx_page: 'https://bigdipper.provenance.io/transactions/${txHash}'
      },
      {
        kind: 'hubble',
        url: 'https://hubble.figment.io/provenance/chains/pio-mainnet-1',
        tx_page:
          'https://hubble.figment.io/provenance/chains/pio-mainnet-1/${block}/transactions/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/provenance',
        tx_page: 'https://ping.pub/provenance/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/provenance',
        tx_page: 'https://www.mintscan.io/provenance/txs/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/provenance',
        tx_page: 'https://atomscan.com/provenance/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'regen',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Regen Network',
    chain_id: 'regen-1',
    bech32_prefix: 'regen',
    daemon_name: 'regen',
    node_home: '$HOME/.regen',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    staking: {
      staking_tokens: [
        {
          denom: 'uregen'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/regen-network/regen-ledger',
      recommended_version: 'v4.0.0',
      compatible_versions: ['v4.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_linux_amd64.zip',
        'linux/arm64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_linux_arm64.zip',
        'darwin/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_darwin_amd64.zip',
        'darwin/arm64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_darwin_arm64.zip',
        'windows/amd64':
          'https://github.com/regen-network/regen-ledger/releases/download/v4.0.0/regen-ledger_4.0.0_windows_amd64.zip'
      },
      cosmos_sdk_version: '0.45',
      tendermint_version: '0.34'
    },
    peers: {
      seeds: [
        {
          id: 'aebb8431609cb126a977592446f5de252d8b7fa1',
          address: '104.236.201.138:26656'
        },
        {
          id: 'd309774e794b111a0fa2056f40aed9d488b6195e',
          address: 'regen-seed.sunshinevalidation.io:32064',
          provider: 'sunshine-validation'
        }
      ],
      persistent_peers: [
        {
          id: '69975e7afdf731a165e40449fcffc75167a084fc',
          address: '104.131.169.70:26656'
        },
        {
          id: 'd35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab',
          address: '116.203.182.185:26656'
        },
        {
          id: 'ffacd3202ded6945fed12fa4fd715b1874985b8c',
          address: '3.98.38.91:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://public-rpc.regen.vitwit.com:26657',
          provider: 'vitwit'
        },
        {
          address: 'https://regen.stakesystems.io:2053',
          provider: 'stakesystems'
        },
        {
          address: 'http://rpc.regen.forbole.com:80',
          provider: 'forbole'
        },
        {
          address: 'https://rpc-regen-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-regen.ecostake.com',
          provider: 'ecostake'
        }
      ],
      grpc: [
        {
          address: 'regen.stakesystems.io:2083',
          provider: 'stakesystems'
        },
        {
          address: 'grpc-regen-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'http://public-rpc.regen.vitwit.com:1317',
          provider: 'vitwit'
        },
        {
          address: 'https://regen.stakesystems.io',
          provider: 'stakesystems'
        },
        {
          address: 'https://api-regen-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rest-regen.ecostake.com',
          provider: 'ecostake'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/regen',
        tx_page: 'https://www.mintscan.io/regen/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/regen',
        tx_page: 'https://ping.pub/regen/tx/${txHash}'
      },
      {
        kind: 'bigdipper',
        url: 'https://regen.bigdipper.live/',
        tx_page: 'https://regen.bigdipper.live/transactions/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/regen-network',
        tx_page: 'https://atomscan.com/regen-network/transactions/${txHash}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'rizon',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'RIZON',
    chain_id: 'titan-1',
    bech32_prefix: 'rizon',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/rizon-world/mainnet/master/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/rizon-world/rizon',
      recommended_version: 'v0.3.0',
      compatible_versions: ['v0.3.0']
    },
    daemon_name: 'rizond',
    node_home: '$HOME/.rizon',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: '83c9cdc2db2b4eff4acc9cd7d664ad5ae6191080',
          address: 'seed-1.mainnet.rizon.world:26656'
        },
        {
          id: 'ae1476777536e2be26507c4fbcf86b67540adb64',
          address: 'seed-2.mainnet.rizon.world:26656'
        },
        {
          id: '8abf316257a264dc8744dee6be4981cfbbcaf4e4',
          address: 'seed-3.mainnet.rizon.world:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'http://seed-1.mainnet.rizon.world:26657',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://rpcapi.rizon.world/',
          provider: 'HDAC Technology AG'
        }
      ],
      rest: [
        {
          address: 'http://seed-1.mainnet.rizon.world:1317',
          provider: 'HDAC Technology AG'
        },
        {
          address: 'https://restapi.rizon.world/',
          provider: 'HDAC Technology AG'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/rizon',
        tx_page: 'https://www.mintscan.io/rizon/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/rizon',
        tx_page: 'https://ping.pub/rizon/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/rizon',
        tx_page: 'https://atomscan.com/rizon/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'secretnetwork',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Secret Network',
    chain_id: 'secret-4',
    bech32_prefix: 'secret',
    daemon_name: 'secretd',
    node_home: '$HOME/.secretd',
    genesis: {
      genesis_url:
        'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.2.0/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 529,
    fees: {
      fee_tokens: [
        {
          denom: 'uscrt',
          fixed_min_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/scrtlabs/SecretNetwork',
      recommended_version: 'v1.3.1',
      binaries: {
        'linux/amd64':
          'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_mainnet_goleveldb_amd64.deb'
      },
      compatible_versions: ['v1.3.0', 'v1.3.1']
    },
    peers: {
      seeds: [
        {
          id: '6fb7169f7630da9468bf7cc0bcbbed1eb9ed0d7b',
          address: 'scrt-seed-01.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        },
        {
          id: 'ab6394e953e0b570bb1deeb5a8b387aa0dc6188a',
          address: 'scrt-seed-02.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        },
        {
          id: '9cdaa5856e0245ecd73bd464308fb990fbc53b57',
          address: 'scrt-seed-03.scrtlabs.com:26656',
          provider: 'SCRT Labs'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://secret-4.api.trivium.network:26657',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'https://scrt-rpc.blockpane.com',
          provider: '[ block pane ]'
        },
        {
          address: 'https://rpc.scrt.network',
          provider: 'SCRT Network'
        },
        {
          address: 'https://secret.rpc.consensus.one',
          provider: 'Consensus One'
        },
        {
          address: 'https://rpc.secret.forbole.com/',
          provider: 'Forbole'
        },
        {
          address: 'https://secretnetwork-rpc.stakely.io',
          provider: 'Stakely.io'
        }
      ],
      rest: [
        {
          address: 'https://secret-4.api.trivium.network:1317',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'https://scrt-lcd.blockpane.com',
          provider: '[ block pane ]'
        },
        {
          address: 'https://api.scrt.network',
          provider: 'SCRT Network'
        },
        {
          address: 'https://secret.api.consensus.one',
          provider: 'Consensus One'
        },
        {
          address: 'https://api.secret.forbole.com/',
          provider: 'Forbole'
        },
        {
          address: 'https://secretnetwork-lcd.stakely.io',
          provider: 'Stakely.io'
        }
      ],
      'grpc-web': [
        {
          address: 'https://secret-4.api.trivium.network:9091',
          provider: 'Trivium | Trivium.Network'
        },
        {
          address: 'http://scrt-rpc.blockpane.com:9091',
          provider: '[ block pane ]'
        }
      ]
    },
    explorers: [
      {
        kind: 'secret nodes',
        url: 'https://secretnodes.com/secret/chains/secret-4',
        tx_page:
          'https://secretnodes.com/secret/chains/secret-4/transactions/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/secret',
        tx_page: 'https://ping.pub/secret/tx/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/secret',
        tx_page: 'https://www.mintscan.io/secret/txs/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/secret-network',
        tx_page: 'https://atomscan.com/secret-network/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sentinel',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Sentinel',
    chain_id: 'sentinelhub-2',
    bech32_prefix: 'sent',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip'
    },
    codebase: {
      git_repo: 'https://github.com/sentinel-official/hub',
      recommended_version: 'v0.6.2',
      compatible_versions: ['v0.6.2']
    },
    daemon_name: 'sentinelhub',
    node_home: '$HOME/.sentinelhub',
    key_algos: ['secp256k1'],
    peers: {
      seeds: [
        {
          id: 'c3aa0ff9b3eb17be1b0a26d7c8a5683e8e528e1a',
          address: '159.89.192.105:26656'
        }
      ],
      persistent_peers: [
        {
          id: '05fe2a7847fd27345250915fd06752c424f40651',
          address: '85.222.234.135:26656'
        },
        {
          id: '387027e3b1180d3a619cbbf3462704a490785963',
          address: '54.176.90.228:26656'
        },
        {
          id: '63bd9cfce0f0d274aad5b166dd06d829021aec43',
          address: '121.78.247.243:56656'
        },
        {
          id: '855807cc6a919c22ec943050ebb5c80b23724ed0',
          address: '3.239.11.246:26656'
        },
        {
          id: '8caefbf8f4318ecc93f2c901cf11470e4a16c818',
          address: '161.97.135.122:26656'
        },
        {
          id: '9174af5f16f74660cccf49f893d243949af45f7f',
          address: '54.177.29.46:26656'
        },
        {
          id: '9fa528bd2b9e7c80724a1d8a4e1a2a8a83e7d123',
          address: '142.93.72.221:26656'
        },
        {
          id: 'a77f6a094578dad899e2f40e0626b4c6d4705311',
          address: '3.36.165.232:26656'
        },
        {
          id: 'bd45a11390d16d128a9eeea3935b53d7a1a3c120',
          address: '15.236.127.69:26656'
        },
        {
          id: 'cdb8dd7628460a546ce1594ca0bc0c20366514cf',
          address: '34.72.64.178:26656'
        },
        {
          id: 'd1efceccb04ded9a604e5235f76da86872157d68',
          address: '161.97.149.223:26656'
        },
        {
          id: 'e00b23444cc8dbb353d5faa765ab36cfc0116b57',
          address: '83.60.98.134:28685'
        },
        {
          id: 'e5ee89bd4fc371c6a0e66d2b8daefd891b6b87b5',
          address: '157.90.117.58:26656'
        },
        {
          id: 'f7ceb735606f90df7eb6cd987641876955b6e325',
          address: '46.4.55.150:36656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-sentinel.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-sentinel-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-sentinel.whispernode.com',
          provider: 'WhisperNode🤐'
        }
      ],
      rest: [
        {
          address: 'https://lcd-sentinel.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-sentinel-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://lcd-sentinel.whispernode.com',
          provider: 'WhisperNode🤐'
        }
      ],
      grpc: [
        {
          address: 'grpc-sentinel-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'shentu',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Shentu',
    chain_id: 'shentu-2.2',
    bech32_prefix: 'certik',
    daemon_name: 'certik',
    node_home: '$HOME/.certik',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ShentuChain/mainnet/main/shentu-2.2/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    codebase: {
      git_repo: 'https://github.com/ShentuChain/shentu',
      recommended_version: 'v2.4.0',
      compatible_versions: ['v2.4.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0.linux_amd64',
        'darwin/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0_arm64_macos',
        'windows/amd64':
          'https://github.com/ShentuChain/shentu/releases/download/v2.4.0/certik_2.4.0_win_x86_64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: '3fddc0e55801f89f27a1644116e9ddb16a951e80',
          address: '3.80.87.219:26656',
          provider: 'Shentu'
        },
        {
          id: '4814cb067fe0aef705c4d304f0caa2362b7c4246',
          address: '54.167.122.47:26656',
          provider: 'Shentu'
        },
        {
          id: 'f42be55f76b7d3425f493e54d043e65bfc6f43cb',
          address: '54.227.66.150:26656',
          provider: 'Shentu'
        }
      ],
      persistent_peers: [
        {
          id: '3fddc0e55801f89f27a1644116e9ddb16a951e80',
          address: '3.80.87.219:26656',
          provider: 'Shentu'
        },
        {
          id: '4814cb067fe0aef705c4d304f0caa2362b7c4246',
          address: '54.167.122.47:26656',
          provider: 'Shentu'
        },
        {
          id: 'f42be55f76b7d3425f493e54d043e65bfc6f43cb',
          address: '54.227.66.150:26656',
          provider: 'Shentu'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://shenturpc.noopsbycertik.com/',
          provider: 'Shentu'
        },
        {
          address: 'https://shenturpc.panthea.eu',
          provider: 'Panthea EU'
        }
      ],
      rest: [
        {
          address: 'https://chainfull.noopsbycertik.com/',
          provider: 'Shentu'
        },
        {
          address: 'https://shentuapi.panthea.eu',
          provider: 'Panthea EU'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/certik',
        tx_page: 'https://www.mintscan.io/certik/txs/${txHash}'
      },
      {
        kind: 'Shentu Explorer',
        url: 'https://explorer.shentu.technology/?net=shentu-2.2',
        tx_page:
          'https://explorer.shentu.technology/transactions/${txHash}?net=shentu-2.2'
      },
      {
        kind: 'ping.pub',
        url: 'https://ping.pub/shentu',
        tx_page: 'https://ping.pub/shentu/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/certik',
        tx_page: 'https://atomscan.com/certik/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sifchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Sifchain',
    chain_id: 'sifchain-1',
    bech32_prefix: 'sif',
    daemon_name: 'sifnoded',
    node_home: '$HOME/.sifnoded',
    genesis: {
      genesis_url:
        'https://github.com/Sifchain/networks/blob/master/betanet/sifchain-1/genesis.json.gz?raw=true'
    },
    codebase: {
      git_repo: 'https://github.com/Sifchain/sifnode.git',
      recommended_version: 'betanet-0.9.12',
      compatible_versions: ['betanet-0.9.12'],
      binaries: {
        'linux/amd64':
          'https://github.com/Sifchain/sifnode/releases/download/betanet-0.9.12/sifnoded-betanet-0.9.12-linux-amd64.zip'
      }
    },
    peers: {
      persistent_peers: [
        {
          id: '0d4981bdaf4d5d73bad00af3b1fa9d699e4d3bc0',
          address: '44.235.108.41:26656'
        },
        {
          id: 'bcc2d07a14a8a0b3aa202e9ac106dec0bef91fda',
          address: '13.55.247.60:26656'
        },
        {
          id: '663dec65b754aceef5fcccb864048305208e7eb2',
          address: '34.248.110.88:26656'
        },
        {
          id: '0120f0a48e7e81cc98829ef4f5b39480f11ecd5a',
          address: '52.76.185.17:26656'
        },
        {
          id: '6535497f0152293d773108774a705b86c2249a9c',
          address: '44.238.121.65:26656'
        },
        {
          id: 'fdf5cffc2b20a20fab954d3b6785e9c382762d14',
          address: '34.255.133.248:26656'
        },
        {
          id: '8c240f71f9e060277ce18dc09d82d3bbb05d1972',
          address: '13.211.43.177:26656'
        },
        {
          id: '9fbcb6bd5a7f20a716564157c4f6296d2faf5f64',
          address: '18.138.208.95:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.sifchain.finance:443'
        },
        {
          address: 'https://rpc-archive.sifchain.finance:443'
        },
        {
          address: 'https://sifchain-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-sifchain-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rpc-sifchain.ecostake.com',
          provider: 'ecostake'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.sifchain.finance:443'
        },
        {
          address: 'grpc-sifchain-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.sifchain.finance:443'
        },
        {
          address: 'https://api-sifchain-ia.notional.ventures/',
          provider: 'Notional'
        },
        {
          address: 'https://rest-sifchain.ecostake.com',
          provider: 'ecostake'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/sifchain',
        tx_page: 'https://ping.pub/sifchain/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://sifchain.explorers.guru',
        tx_page: 'https://sifchain.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/sifchain',
        tx_page: 'https://www.mintscan.io/sifchain/txs/{txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/sifchain',
        tx_page: 'https://atomscan.com/sifchain/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'sommelier',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Sommelier',
    chain_id: 'sommelier-3',
    bech32_prefix: 'somm',
    daemon_name: 'sommelier',
    node_home: '$HOME/.sommelier',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/PeggyJV/sommelier/main/contrib/mainnet/sommelier-2/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'usomm'
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/PeggyJV/sommelier',
      recommended_version: 'v3.1.0',
      compatible_versions: ['v3.1.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v3.1.0/sommelier_3.1.0_linux_amd64.tar.gz',
        'linux/arm64':
          'https://github.com/PeggyJV/sommelier/releases/download/v3.1.0/sommelier_3.1.0_linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v3.1.0/sommelier_3.1.0_darwin_amd64.tar.gz',
        'darwin/arm64':
          'https://github.com/PeggyJV/sommelier/releases/download/v3.1.0/sommelier_3.1.0_darwin_arm64.tar.gz',
        'windows/amd64':
          'https://github.com/PeggyJV/sommelier/releases/download/v3.1.0/sommelier_3.1.0_windows_amd64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'a96d69179e4b72f728b9dd4dbe40400701515fee',
          address: '80.64.208.51:26656'
        },
        {
          id: '759a61eade50cb48e2a6f974fab679096d1de916',
          address: '34.127.107.137:26656'
        },
        {
          id: '14ac13745a563876740b72637ab9a3539542fe2b',
          address: '35.185.230.0:26656'
        },
        {
          id: 'bebf759f5706137168e3a7158e4495865a04cca9',
          address: '34.83.151.60:26656'
        },
        {
          id: 'c94fd60124e3656df54ff965d178e36c760c195d',
          address: '65.108.57.224:26656'
        },
        {
          id: '65cc609f9ae965323bd03d1b84f7fa340e6b6c7d',
          address: '51.38.52.210:36656'
        },
        {
          id: '4ed70d91bd645e78a78fe6cd4d1973937bb739e1',
          address: '51.91.67.48:36656'
        },
        {
          id: '404e6b2176bf74018cfdeb275c21ce264d43c673',
          address: '54.38.46.179:36656'
        },
        {
          id: 'c7334f0462cad3272f7d504f7a293fd2585165ef',
          address: '35.215.30.79:26656'
        },
        {
          id: '194f89dd1d08a82e99bf76aee535e6d4b3c79354',
          address: 'seeds.pupmos.network:2002',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: 'e1d1dd22a63b1899ac51c8c96416f77c8ef98231',
          address: 'sommelier.tendermint.cloud:26656',
          provider: 'tendermint'
        },
        {
          id: '6533beebc826f84376e503bbc3265b07b26b9ad5',
          address: 'sommelier.standardcryptovc.com:26656',
          provider: 'standardcrypto'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-sommelier.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://sommelier-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.sommelier.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      rest: [
        {
          address: 'https://lcd-sommelier.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api.sommelier.pupmos.network',
          provider: 'PUPMØS'
        }
      ],
      grpc: [
        {
          address: '35.230.37.28:9090',
          provider: 'strangelove'
        }
      ]
    },
    explorers: [
      {
        kind: 'sommscan',
        url: 'https://sommscan.io',
        tx_page: 'https://sommscan.io'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stargaze',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Stargaze',
    chain_id: 'stargaze-1',
    bech32_prefix: 'stars',
    daemon_name: 'starsd',
    node_home: '$HOME/.starsd',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/public-awesome/mainnet/main/stargaze-1/genesis.tar.gz'
    },
    codebase: {
      git_repo: 'https://github.com/public-awesome/stargaze',
      recommended_version: 'v6.0.1',
      compatible_versions: ['v6.0.1']
    },
    peers: {
      seeds: [
        {
          id: '70ed826888f102c7c1ceb4d07287956628a53508',
          address: '174.138.124.7:36656'
        },
        {
          id: '722079345d941cd2da3daedea548c909d9b83ec5',
          address: '104.248.101.113:36656'
        },
        {
          id: 'd5fc4f479c4e212c96dff5704bb2468ea03b8ae3',
          address: 'sg-seed.blockpane.com:26656',
          provider: '[ block pane ]'
        },
        {
          id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
          address: 'stargaze.seed.rhinostake.com:16656',
          provider: 'RHINO'
        },
        {
          id: '2f7b2d38b1a4f76b20e917e01fb9f4a200bbf80c',
          address: 'seeds.pupmos.network:2004',
          provider: 'PUPMØS'
        }
      ],
      persistent_peers: [
        {
          id: '1d73521c565b37a53038fc730bcd207a3db361b6',
          address: '144.91.91.30:26656',
          provider: '0xSR'
        },
        {
          id: '524dd60331c56d198deabbb70238c2cc69119cca',
          address: '161.97.122.216:36656',
          provider: 'Army IDs'
        },
        {
          id: '0c9ebd7b36f96d0279dbf6dc38572f5797c096c1',
          address: '65.108.42.168:26656',
          provider: 'ramuchi.tech'
        },
        {
          id: '320e4b81ab327dd2593a39de0d3ae718fdb9347c',
          address: '176.9.168.220:26656',
          provider: 'Staketab'
        },
        {
          id: 'b8eeb6d99594c218c0373d8ec4c1e81031b92198',
          address: '68.183.92.46:26656',
          provider: 'KingSuper'
        },
        {
          id: '387c32677c54dd4627366ffdf8e2dda68e71af69',
          address: '54.193.168.147:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'e28635dc537dce1d6f1cf44b7b335a530d923fa1',
          address: '15.165.94.246:26656',
          provider: 'Cosmostation'
        },
        {
          id: '413562a502b4a47ec3375bfae6aa01bc47bc6979',
          address: '204.236.141.188:26656',
          provider: 'Cosmostation'
        },
        {
          id: 'ca93b9bed1a98184f36ca31a6cc6dad2e289a2d4',
          address: '94.130.165.103:26656',
          provider: 'OranG3cluB'
        },
        {
          id: '0c7e82641f81754fc30158587c7e4a30ddb5c967',
          address: '54.216.187.98:26656',
          provider: 'needlecast'
        },
        {
          id: '1de5e685e687d0df35e6f3734ee04aff956d5c0f',
          address: '75.119.154.98:26656',
          provider: 'StakeLab'
        },
        {
          id: '6353ff1783e076a70ab444c4229c01ed6df6b477',
          address: '65.21.193.190:26656',
          provider: 'sashamaxymchuk[MantiCore]'
        },
        {
          id: '5eb7bcdd83b47744b652f11ecd8495a670612643',
          address: '135.181.176.62:26656',
          provider: 'StakeCraft'
        },
        {
          id: '75ea9c7b04be4a5779853b6e17c773ab092652c8',
          address: '91.230.111.50:26656',
          provider: 'EmreNOP | BlockSeal'
        },
        {
          id: '9f860496d2a346cc7888d7b4a7887f6bfc0fc0e4',
          address: '162.55.39.33:26656',
          provider: 'Blackhox'
        },
        {
          id: 'f89e655de3e6804e6448de3de3428bea1fd0fa97',
          address: '135.181.21.55:36656',
          provider: 'Alex (Bambarello) Validator'
        },
        {
          id: '1c8aabb166c7757c26cdbb1bfc380146ca59bc4e',
          address: '135.181.179.49:26356',
          provider: 'Bloqhub'
        },
        {
          id: '2783a2b3bf3f84947c919588e8b0ca2c05e8053d',
          address: '167.99.238.45:26656'
        },
        {
          id: '64d19582ff31ac88245ac604dc18d48b41470f48',
          address: '167.99.238.45:26656'
        },
        {
          id: 'c636bf9ad65959b738c15eb5458a89a88cba32a4',
          address: '135.181.102.205:26656',
          provider: 'tsundokum'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.stargaze.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rpc.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://rpc.stargaze.ezstaking.io/',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://rpc.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://stargaze-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc-stargaze-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.stargaze.pupmos.network/',
          provider: 'PUPMØS'
        },
        {
          address: 'https://rest.stargaze-apis.com/',
          provider: 'Stargaze Foundation'
        },
        {
          address: 'https://api.stargaze.ezstaking.io/',
          provider: 'EZStaking.io'
        },
        {
          address: 'https://api.stars.kingnodes.com/',
          provider: 'kingnodes'
        },
        {
          address: 'https://api-stargaze-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-stargaze-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/stargaze/',
        tx_page: 'https://www.mintscan.io/stargaze/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/stargaze',
        tx_page: 'https://ping.pub/stargaze/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/stargaze',
        tx_page: 'https://atomscan.com/stargaze/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'starname',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Starname',
    chain_id: 'iov-mainnet-ibc',
    bech32_prefix: 'star',
    slip44: 234,
    genesis: {
      genesis_url:
        'https://gist.githubusercontent.com/davepuchyr/6bea7bf369064d118195e9b15ea08a0f/raw/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/iov-one/starnamed',
      recommended_version: 'v0.10.18',
      compatible_versions: ['v0.10.17', 'v0.10.18']
    },
    peers: {
      persistent_peers: [
        {
          id: 'ca133187b37b59d2454812cfcf31b6211395adec',
          address: '167.99.194.126:16656'
        },
        {
          id: '1c7e014b65f7a3ea2cf48bffce78f5cbcad2a0b7',
          address: '13.37.85.253:26656'
        },
        {
          id: '8c64a2127cc07d4570756b61f83af60d34258398',
          address: '13.37.61.32:26656'
        },
        {
          id: '9aabe0ac122f3104d8fc098e19c66714c6f1ace9',
          address: '3.37.140.5:26656'
        },
        {
          id: 'faedef1969911d24bf72c56fc01326eb891fa3b7',
          address: '63.250.53.45:16656'
        },
        {
          id: '94ac1c02b4e2ca3fb2706c91a68b8030ed3615a1',
          address: '35.247.175.128:16656'
        },
        {
          id: 'be2235996b1c785a9f57eed25fd673ca111f0bae',
          address: '52.52.89.64:26656'
        },
        {
          id: 'f63d15ab7ed55dc75f332d0b0d2b01d529d5cbcd',
          address: '212.71.247.11:26656'
        },
        {
          id: 'f5597a7ed33bc99eb6ba7253eb8ac76af27b4c6d',
          address: '138.201.20.147:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc-iov.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://rpc-starname-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://lcd-iov.keplr.app',
          provider: 'chainapsis'
        },
        {
          address: 'https://api-starname-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-starname-ia.notional.ventures:443',
          provider: 'starname'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/starname',
        tx_page: 'https://www.mintscan.io/starname/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/starname',
        tx_page: 'https://ping.pub/starname/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/starname',
        tx_page: 'https://atomscan.com/starname/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terra',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Terra Classic',
    chain_id: 'columbus-5',
    daemon_name: 'terrad',
    node_home: '$HOME/.terra',
    bech32_prefix: 'terra',
    genesis: {
      genesis_url:
        'https://columbus-genesis.s3.ap-northeast-1.amazonaws.com/columbus-5-genesis.json'
    },
    slip44: 330,
    codebase: {
      git_repo: 'https://github.com/terra-money/core/',
      recommended_version: 'v0.5.17',
      compatible_versions: ['v0.5.17', 'v0.5.16'],
      binaries: {
        'linux/amd64':
          'https://github.com/terra-money/core/releases/download/v0.5.17/terra_0.5.17_Linux_x86_64.tar.gz',
        'darwin/amd64':
          'https://github.com/terra-money/core/releases/download/v0.5.17/terra_0.5.17_Darwin_x86_64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: 'e999fc20aa5b87c1acef8677cf495ad85061cfb9',
          address: 'seed.terra.delightlabs.io:26656'
        },
        {
          id: '6d8e943c049a80c161a889cb5fcf3d184215023e',
          address: 'public-seed2.terra.dev:26656'
        },
        {
          id: '87048bf71526fb92d73733ba3ddb79b7a83ca11e',
          address: 'public-seed.terra.dev:26656'
        }
      ],
      persistent_peers: [
        {
          id: '3ddf51347ba7c2bc4a8e1e26ee9d1cbf81034516',
          address: '162.55.244.250:27656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://terra-rpc.easy2stake.com:443',
          provider: 'Easy2stake'
        },
        {
          address: 'http://public-node.terra.dev:26657',
          provider: 'Terra'
        },
        {
          address: 'https://rpc-terra-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://blockdaemon-terra-lcd.api.bdnodes.net:1317',
          provider: 'Blockdaemon'
        },
        {
          address: 'https://terra.mainnet.lcd.blockngine.io:443',
          provider: 'BlockNgine Validators'
        },
        {
          address: 'https://api-terra-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-terra-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/terra-luna',
        tx_page: 'https://ping.pub/terra-luna/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/terra',
        tx_page: 'https://atomscan.com/terra/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'terra2',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Terra2',
    chain_id: 'phoenix-1',
    daemon_name: 'terrad',
    node_home: '$HOME/.terra',
    bech32_prefix: 'terra',
    genesis: {
      genesis_url:
        'https://phoenix-genesis.s3.us-west-1.amazonaws.com/genesis.json'
    },
    slip44: 330,
    codebase: {
      git_repo: 'https://github.com/terra-money/core/',
      recommended_version: 'v2.0.1',
      compatible_versions: ['v2.0.1', 'v2.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz',
        'darwin/amd64':
          'https://github.com/terra-money/core/releases/download/v2.0.1/terra_2.0.1_Darwin_x86_64.tar.gz'
      }
    },
    peers: {
      seeds: [
        {
          id: '406bcf90a7b29df6ae475a1f94abe04ebde805af',
          address: 'phoenix.seed.stakebin.io:16656'
        },
        {
          id: 'fc608a9a117d8d2302bcd181aec34eec6bb4fa96',
          address: 'terra2-seed.blockpane.com:26656'
        },
        {
          id: '8efd8248e06aabd553b56766ec2a850999d0861f',
          address: 'exitnode.cereslabs.io:36656'
        },
        {
          id: 'b4d3b21747539060b270457437ef1bf99a51c694',
          address: 'terra2.seed.synergynodes.com:26656'
        },
        {
          id: '810d1628db9f1db56fa87a93fb6ef809c32d6325',
          address: 'phoenix.seed.terra.btcsecure.io:26656'
        }
      ],
      persistent_peers: [
        {
          id: 'dc865a0d882f30e41e99ef23d9e6164163607523',
          address: '54.147.79.192:26656'
        },
        {
          id: 'bdce6030a2bdebe4c660a76599fe3dee4a42d50f',
          address: '35.154.54.64:26656'
        },
        {
          id: '0f1096278efafcf3f0d3bd5b6544e6b8dcc36a0e',
          address: '206.189.129.195:26656'
        },
        {
          id: 'c8ab8910e5f7bfcc6e81351eb851eb8c0540a194',
          address: 'exitnode.cereslabs.io:26656'
        },
        {
          id: '33afc1c21cb225bb2cfb9700442a576bbaeb7691',
          address: '163.172.100.203:26656'
        },
        {
          id: '9038d63588e0ab421fa71582720c1efb1ee867f6',
          address: '45.34.1.114:27656'
        },
        {
          id: 'daa2fd0dc725d6673e7688c9c57fc3b6d99c83c4',
          address: 'solarsys.noip.me:27656'
        },
        {
          id: '331c2bbcd1aab921563dce85dedae840e1369e39',
          address: '142.132.199.98:10656'
        },
        {
          id: '91b675be5f81931375358e02ab687c88fab02e41',
          address: '135.148.55.229:11656'
        },
        {
          id: '9dc9e9b50c4cae52cdbec2034d879427b2a429ae',
          address: '54.180.81.122:26656'
        },
        {
          id: 'ad825ef6b29306d80b0eb8101133cedf7933eb5e',
          address: '116.203.36.94:26656'
        },
        {
          id: 'f2069012aec5ced4e88e7e4311391eabe72bb5a3',
          address: 'node-phoenix.terra.lunastations.online:26656'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.terrav2.ccvalidators.com:443/',
          provider: 'CryptoCrew'
        },
        {
          address: 'https://terra-rpc.polkachu.com:443/',
          provider: 'polkachu'
        },
        {
          address: 'https://terra-rpc.stakely.io:443/',
          provider: 'stakely'
        }
      ],
      rest: [
        {
          address: 'https://terra-api.polkachu.com:443/',
          provider: 'polkachu'
        },
        {
          address: 'https://fcd.terrav2.ccvalidators.com:443/',
          provider: 'CryptoCrew'
        }
      ]
    },
    explorers: [
      {
        kind: 'finder',
        url: 'http://finder.terra.money/',
        tx_page: 'https://finder.terra.money/mainnet/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'stateset-1-testnet',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'Stateset Testnet',
    chain_id: 'stateset-1-testnet',
    bech32_prefix: 'stateset',
    daemon_name: 'statesetd',
    node_home: '$HOME/.statesetd',
    genesis: {
      genesis_url: 'https://rpc.stateset.zone/genesis'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'ustate',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/stateset/core',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-amd64',
        'linux/arm64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-linux-arm64',
        'darwin/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-darwin-amd64',
        'windows/amd64':
          'https://github.com/stateset/core/releases/download/v1.0.0/statesetd-1.0.0-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: 'DBC49AA829D16329C1772F7EF76730939E606A41',
          address: 'rpc.stateset.zone:26656',
          provider: 'stateset'
        }
      ],
      persistent_peers: []
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.stateset.zone/',
          provider: 'stateset'
        }
      ],
      rest: [
        {
          address: 'https://rest-api.stateset.zone',
          provider: 'stateset'
        }
      ]
    },
    explorers: [
      {
        kind: 'bigdipper2.0',
        url: 'https://explore.stateset.zone',
        tx_page: 'https://explore.stateset.zone/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'theta',
    chain_id: 'theta-testnet-001',
    pretty_name: 'Theta Testnet',
    status: 'live',
    network_type: 'testnet',
    bech32_prefix: 'cosmos',
    genesis: {
      genesis_url:
        'https://github.com/cosmos/testnets/raw/master/v7-theta/public-testnet/genesis.json.gz'
    },
    daemon_name: 'gaiad',
    node_home: '$HOME/.gaia',
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'uatom',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/cosmos/gaia',
      recommended_version: 'v7.0.2',
      compatible_versions: ['v7.0.0', 'v7.0.1', 'v7.0.2'],
      binaries: {
        'linux/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-linux-amd64',
        'linux/arm64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-linux-arm64',
        'darwin/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-darwin-amd64',
        'windows/amd64':
          'https://github.com/cosmos/gaia/releases/download/v7.0.2/gaiad-v7.0.2-windows-amd64.exe'
      }
    },
    peers: {
      seeds: [
        {
          id: '639d50339d7045436c756a042906b9a69970913f',
          address: 'seed-01.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        },
        {
          id: '3e506472683ceb7ed75c1578d092c79785c27857',
          address: 'seed-02.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        }
      ],
      persistent_peers: [
        {
          id: '5c9850dc5ec603b0c97ffd8d67bde3221b877acf',
          address: 'p2p.sentry-01.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        },
        {
          id: '208683ee734ba3cec1cfc0c8bcbc326969641952',
          address: 'p2p.sentry-02.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        },
        {
          id: '58e9d022962a3875fa22d7146949d0dc34e51ba6',
          address: 'p2p.state-sync-01.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        },
        {
          id: '6954e0479cd71fa01aeed15e1a3b87c06433d827',
          address: 'p2p.state-sync-02.theta-testnet.polypore.xyz:26656',
          provider: 'Hypha'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rpc.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        }
      ],
      rest: [
        {
          address: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://rest.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.sentry-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.sentry-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.state-sync-01.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        },
        {
          address: 'https://grpc.state-sync-02.theta-testnet.polypore.xyz',
          provider: 'Hypha'
        }
      ]
    },
    explorers: [
      {
        kind: 'Big Dipper',
        url: 'https://explorer.theta-testnet.polypore.xyz/',
        tx_page:
          'https://explorer.theta-testnet.polypore.xyz/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'ULAS',
    status: 'live',
    network_type: 'testnet',
    pretty_name: 'ULAS',
    chain_id: 'ulas',
    bech32_prefix: 'ulas',
    daemon_name: 'ulasd',
    node_home: '$HOME/.ulas',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/ulasnetwork/chain-config/main/ulas/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/ulasnetwork/ulas',
      recommended_version: 'v0.0.1',
      compatible_versions: ['v0.0.1']
    },
    apis: {
      rpc: [
        {
          address: 'http://65.49.204.199:26657',
          provider: 'UlasNetwork'
        }
      ],
      rest: [
        {
          address: 'http://65.49.204.199:1317',
          provider: 'UlasNetwork'
        }
      ],
      grpc: [
        {
          address: 'http://65.49.204.199:9090',
          provider: 'UlasNetwork'
        }
      ]
    },
    explorers: [
      {
        kind: 'ulas-scan',
        url: 'https://testnet-explorer.ulas.network',
        tx_page: 'https://testnet-explorer.ulas.network/ulas/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'tgrade',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Tgrade',
    chain_id: 'tgrade-mainnet-1',
    bech32_prefix: 'tgrade',
    daemon_name: 'tgrade',
    node_home: '$HOME/.tgrade',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/confio/tgrade-networks/main/mainnet-1/config/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 118,
    fees: {
      fee_tokens: [
        {
          denom: 'utgd',
          fixed_min_gas_price: 0.05,
          low_gas_price: 0.05,
          average_gas_price: 0.075,
          high_gas_price: 0.1
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/confio/tgrade',
      recommended_version: 'v1.0.1',
      compatible_versions: ['v1.0.1']
    },
    peers: {
      seeds: [
        {
          id: '0c3b7d5a4253216de01b8642261d4e1e76aee9d8',
          address: '45.76.202.195:26656',
          provider: 'DSRV'
        }
      ],
      persistent_peers: [
        {
          id: '0a63421f67d02e7fb823ea6d6ceb8acf758df24d',
          address: '142.132.226.137:26656',
          provider: 'Confio'
        },
        {
          id: '4a319eead699418e974e8eed47c2de6332c3f825',
          address: '167.235.255.9:26656',
          provider: 'Confio'
        },
        {
          id: '6918efd409684d64694cac485dbcc27dfeea4f38',
          address: '49.12.240.203:26656',
          provider: 'Confio'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.mainnet-1.tgrade.confio.run',
          provider: 'Confio'
        },
        {
          address: 'https://rpc.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ],
      rest: [
        {
          address: 'https://api.mainnet-1.tgrade.confio.run',
          provider: 'Confio'
        },
        {
          address: 'https://lcd.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ],
      grpc: [
        {
          address: 'grpc.tgrade.posthuman.digital',
          provider: 'POSTHUMAN ꝏ DVS'
        }
      ]
    },
    explorers: [
      {
        kind: 'aneka',
        url: 'https://tgrade.aneka.io',
        tx_page: 'https://tgrade.aneka.io/txs/${txHash}',
        account_page: 'https://tgrade.aneka.io/accounts/${accountAddress}'
      }
    ],
    logo_URIs: {
      png:
        'https://raw.githubusercontent.com/cosmos/chain-registry/master/tgrade/images/tgrade-logo-gradient_h.png'
    }
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'thorchain',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'THORChain',
    chain_id: 'thorchain-mainnet-v1',
    bech32_prefix: 'thor',
    daemon_name: 'thord',
    node_home: '$HOME/.thornode',
    slip44: 931,
    genesis: {
      genesis_url: 'https://rpc.thorchain.info/genesis'
    },
    codebase: {
      git_repo: 'https://gitlab.com/thorchain/thornode',
      recommended_version: 'chaosnet-multichain',
      compatible_versions: ['chaosnet-multichain']
    },
    peers: {
      seeds: [
        {
          id: 'eef0b258a711fc2be06da8eb25a53ebd8e16da62',
          address: '13.36.197.238:27146'
        },
        {
          id: '02041c659d8588f225b3352df8636e05dcd239f7',
          address: '18.169.114.61:27146'
        },
        {
          id: '88783fa86645c41aaaf031f31df2ee1d74413880',
          address: '18.202.205.93:27146'
        },
        {
          id: '00783ce232787999a7b3ccdfdbd493f371203e60',
          address: '51.136.76.139:27146'
        },
        {
          id: 'c3f3f920a7003585ea6489344b41dd248ffa1e8f',
          address: '188.166.204.206:27146'
        },
        {
          id: '46040fd7b9450772c43fa406ef821d5eb3f79114',
          address: '134.209.136.64:27146'
        },
        {
          id: '7581fbca995486787ac3619cddf4137e110aff11',
          address: '143.198.247.31:27146'
        },
        {
          id: 'dcd52d42ee465dd23b5806b30eca8df8e9e76c5d',
          address: '138.197.48.191:27146'
        },
        {
          id: '3a520c0e7c2af48d33cfb425af9ea9caa5917b1e',
          address: '18.214.28.114:27146'
        },
        {
          id: '48b675fbb3bf968ebee7e366d72bb5580aa8162e',
          address: '139.59.217.54:27146'
        },
        {
          id: 'f1513684dd9d574715304bf3dd3b53fbcce65909',
          address: '34.145.173.217:27146'
        },
        {
          id: '2dde4b30bf913c9b9adecb6b835b2654b50c5698',
          address: '3.124.212.184:27146'
        },
        {
          id: '97ab3ae9df723ef763d90128663e7de0f0568dbe',
          address: '54.217.4.198:27146'
        },
        {
          id: '7c3b0a1fd70c5c0154e40f6e1276f8dd171117e5',
          address: '136.244.65.26:27146'
        },
        {
          id: '79b84e53bd5e4c1a3ef309346136cc7528ba0bdf',
          address: '64.225.81.243:27146'
        },
        {
          id: 'd8628418e84acf19a330dddbed3173cfb4a020a9',
          address: '138.197.48.59:27146'
        },
        {
          id: '7c884bbc48abbadbb0fb85bfaa1dff9e94eac401',
          address: '143.244.211.46:27146'
        },
        {
          id: '8757a66381b4182f74809461fd8a3fcaf203a820',
          address: '34.212.187.195:27146'
        },
        {
          id: '6a35ed1a50ee76f72d1cd5c688f2e5f7fbc5da25',
          address: '52.228.231.228:27146'
        },
        {
          id: '5842bbfc26cf87c2ae3db418a835511ef2a39277',
          address: '3.96.249.116:27146'
        },
        {
          id: '83d3c662b1287bc9292d75b4909cff63b119cc78',
          address: '18.206.141.33:27146'
        },
        {
          id: '14d576eb4a1a5a2e319511abd5ce2c6e20f51c31',
          address: '13.36.138.187:27146'
        },
        {
          id: '107d49ada5acf1dbfcc27b3f5f387d035421ccca',
          address: '52.214.221.72:27146'
        },
        {
          id: 'ca15ae8f0e17112b63786482cca300ff473f41fd',
          address: '3.140.128.35:27146'
        },
        {
          id: '5e89caf0ca79e0fb3371d5892efd96d66042d0d6',
          address: '157.90.34.75:27146'
        },
        {
          id: '1c88aa9509832a592453bd7d30736db055a279d1',
          address: '34.83.232.180:27146'
        },
        {
          id: 'de7c36a34d8e9a48106488de1bac21b172c2dd49',
          address: '157.245.16.34:27146'
        },
        {
          id: '3de5f5bff746dc9349b044d83ccb906924b8cf03',
          address: '188.166.138.88:27146'
        },
        {
          id: '3ede6d36ede3b7e1dec522c827ab6db94bfae749',
          address: '34.145.160.5:27146'
        },
        {
          id: '58a28719fdd46ea629859d85a1d5bc6a6363c185',
          address: '159.65.212.234:27146'
        },
        {
          id: '70dd6252ff95d8af7f3f488fdb98dde5d467213b',
          address: '18.117.49.201:27146'
        },
        {
          id: '6c7d780bb7384142f6943543ed4c3ba537f4a411',
          address: '138.197.59.244:27146'
        },
        {
          id: '523a3df9384190d1b30ff55d1783b4baed32165c',
          address: '18.208.113.188:27146'
        },
        {
          id: 'c64b58f2498a29330e4927ba90dd6fb2955a7a56',
          address: '159.89.210.106:27146'
        },
        {
          id: 'e592368bf73a32dbcc28def417f2fdb151f26da6',
          address: '3.139.117.117:27146'
        },
        {
          id: '19ab508b32a6518a450058c2c7a99b7a5cc4299f',
          address: '13.237.27.250:27146'
        },
        {
          id: '4e41bd4f8d1ec95ff4a305f0739c82e818664c12',
          address: '135.181.58.7:27146'
        },
        {
          id: '2d25606076036716a31611185d39880fe8237e97',
          address: '3.230.67.253:27146'
        },
        {
          id: '5a6e66f9f6c84d55de8f1170086f28d69d242ad4',
          address: '78.141.210.66:27146'
        },
        {
          id: 'f296c1e1b03ab875925208aabb5b9c5b1626427e',
          address: '52.32.91.52:27146'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.thorchain.info',
          provider: 'thorchain'
        }
      ],
      rest: [
        {
          address: 'https://thornode.thorchain.info',
          provider: 'thorchain'
        }
      ],
      sidechains_rpc: [
        {
          address: 'https://btc.thorchain.info',
          provider: 'btc'
        },
        {
          address: 'https://bch.thorchain.info',
          provider: 'bch'
        },
        {
          address: 'https://ltc.thorchain.info',
          provider: 'ltc'
        },
        {
          address: 'https://bnb.thorchain.info',
          provider: 'bnb'
        },
        {
          address: 'https://eth.thorchain.info',
          provider: 'eth'
        }
      ]
    },
    explorers: [
      {
        kind: 'THORChain explorer',
        url: 'https://thorchain.net',
        tx_page: 'https://thorchain.net/#/txs/${txHash}'
      },
      {
        kind: 'viewblock',
        url: 'https://viewblock.io/thorchain',
        tx_page: 'https://viewblock.io/thorchain/tx/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'umee',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'umee',
    chain_id: 'umee-1',
    bech32_prefix: 'umee',
    daemon_name: 'umeed',
    node_home: '$HOME/.umee',
    slip44: 118,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/umee-network/mainnet/main/genesis.json'
    },
    codebase: {
      git_repo: 'https://github.com/umee-network/umee',
      recommended_version: 'v1.0.3',
      compatible_versions: ['v1.0.3'],
      binaries: {
        'darwin/amd64':
          'https://github.com/umee-network/umee/releases/download/v1.0.3/umeed-v1.0.3-darwin-amd64.tar.gz',
        'darwin/arm64':
          'https://github.com/umee-network/umee/releases/download/v1.0.3/umeed-v1.0.3-darwin-arm64.tar.gz',
        'linux/amd64':
          'https://github.com/umee-network/umee/releases/download/v1.0.3/umeed-v1.0.3-linux-amd64.tar.gz',
        'linux/arm64':
          'https://github.com/umee-network/umee/releases/download/v1.0.3/umeed-v1.0.3-linux-arm64.tar.gz',
        'linux/armv6':
          'https://github.com/umee-network/umee/releases/download/v1.0.3/umeed-v1.0.3-linux-armv6.tar.gz'
      }
    },
    peers: {
      seeds: [],
      persistent_peers: [
        {
          id: '08554ecf7c4c33cc809bceefc044c9bd23b933bd',
          address: '34.146.11.20:26656',
          provider: 'umee foundation'
        },
        {
          id: 'da42a6b213dd0e0dcd3b5d6feb662d7bf7a8cee6',
          address: '34.93.115.217:26656',
          provider: 'umee foundation'
        },
        {
          id: '6b785fc3a088de3a5e8d222a980936f2187b8c56',
          address: '34.93.115.217:26656',
          provider: 'umee foundation'
        },
        {
          id: '1d85a200deaefa6ceb20328a0fd83787ce329aa6',
          address: '34.93.115.217:26656',
          provider: 'umee foundation'
        },
        {
          id: 'b3f810438aa53685bba63705f3c29ec122e1e40c',
          address: '34.127.76.180:26656',
          provider: 'umee foundation'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://rpc.aphrodite.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://rpc.apollo.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://rpc.artemis.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://rpc.athena.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://rpc.beaked.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://rpc.bottlenose.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://umee-rpc.polkachu.com',
          provider: 'Polkachu'
        },
        {
          address: 'https://rpc.umee.testnet.run:443',
          provider: 'sourled'
        },
        {
          address: 'https://rpc-umee-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://api.aphrodite.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api.apollo.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api.artemis.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api.athena.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api.beaked.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api.bottlenose.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://api-umee-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'https://grpc.aphrodite.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://grpc.apollo.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://grpc.artemis.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://grpc.athena.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://grpc.beaked.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'https://grpc.bottlenose.main.network.umee.cc',
          provider: 'umee Foundation'
        },
        {
          address: 'grpc-umee-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'mintscan',
        url: 'https://www.mintscan.io/umee/',
        tx_page: 'https://www.mintscan.io/umee/txs/${txHash}'
      },
      {
        kind: 'ping-pub',
        url: 'https://ping.pub/umee',
        tx_page: 'https://ping.pub/umee/tx/${txHash}'
      },
      {
        kind: 'explorers.guru',
        url: 'https://umee.explorers.guru',
        tx_page: 'https://umee.explorers.guru/transaction/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/umee',
        tx_page: 'https://atomscan.com/umee/transactions/${txHash}'
      }
    ]
  },
  {
    $schema: '../chain.schema.json',
    chain_name: 'vidulum',
    status: 'live',
    network_type: 'mainnet',
    pretty_name: 'Vidulum',
    chain_id: 'vidulum-1',
    bech32_prefix: 'vdl',
    daemon_name: 'vidulumd',
    node_home: '$HOME/.vidulum',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/vidulum/mainnet/main/genesis.json'
    },
    key_algos: ['secp256k1'],
    slip44: 370,
    fees: {
      fee_tokens: [
        {
          denom: 'uvdl',
          fixed_min_gas_price: 0
        }
      ]
    },
    codebase: {
      git_repo: 'https://github.com/vidulum/mainnet',
      recommended_version: 'v1.0.0',
      compatible_versions: ['v1.0.0'],
      binaries: {
        'linux/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.0.0/vidulum_linux_amd64.tar.gz',
        'linux/arm64':
          'https://github.com/vidulum/mainnet/releases/download/v1.0.0/vidulum_linux_arm64.tar.gz',
        'darwin/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.0.0/vidulum_darwin_amd64.tar.gz',
        'windows/amd64':
          'https://github.com/vidulum/mainnet/releases/download/v1.0.0/vidulum_windows_amd64.zip'
      }
    },
    peers: {
      seeds: [
        {
          id: '883ec7d5af7222c206674c20c997ccc5c242b38b',
          address: 'ec2-3-82-120-39.compute-1.amazonaws.com:26656',
          provider: 'notional'
        }
      ],
      persistent_peers: [
        {
          id: '3bf3d98dfd4000dd5ff8189882a9f96848b99b87',
          address: '137.220.60.196:26656',
          provider: 'vidulum'
        },
        {
          id: '7a44ea6ecb59b0e4bd01b58a75163ec64b164bb4',
          address: '63.210.148.24:26656',
          provider: 'vidulum'
        },
        {
          id: '52051fef449e76eb399966312f523e8e5e27490b',
          address: '95.217.118.211:26656',
          provider: 'minerpool'
        },
        {
          id: 'cae7d9d21c1752300277eab72d861b0c6638b2e3',
          address: '164.68.119.151:26656',
          provider: 'bluebird'
        },
        {
          id: '209688f5bccb88f6397a97cc11ab545a014aa559',
          address: '137.184.92.115:26656',
          provider: '1square'
        }
      ]
    },
    apis: {
      rpc: [
        {
          address: 'https://mainnet-rpc.vidulum.app/',
          provider: 'vidulum'
        },
        {
          address: 'https://rpc-vidulum-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      rest: [
        {
          address: 'https://mainnet-lcd.vidulum.app',
          provider: 'vidulum'
        },
        {
          address: 'https://api-vidulum-ia.notional.ventures/',
          provider: 'Notional'
        }
      ],
      grpc: [
        {
          address: 'grpc-vidulum-ia.notional.ventures:443',
          provider: 'Notional'
        }
      ]
    },
    explorers: [
      {
        kind: 'Ping',
        url: 'https://explorers.vidulum.app/vidulum',
        tx_page: 'https://explorers.vidulum.app/vidulum/tx/${txHash}'
      },
      {
        kind: 'Ping',
        url: 'https://ping.pub/vidulum',
        tx_page: 'https://ping.pub/vidulum/tx/${txHash}'
      },
      {
        kind: 'atomscan',
        url: 'https://atomscan.com/vidulum',
        tx_page: 'https://atomscan.com/vidulum/transactions/${txHash}'
      }
    ]
  }
];
export default chains;