# Bitcoin 比特幣

- 名詞相貌:

  - 私鑰: (隨機生成)
    WIF (Wallet import Format)
    52: KzPkBcF6BHR1pM2oAjCDR4wUAUtxbHcVVjN9R162w1asuhzcCSwY
    51: 5JmXoYTRXPvWufwVEw9KyVFLGSDWPpUAiygKV9S2ouQ8YxRCPCo

  - 公鑰: ("私鑰" -- SECP256K1 --> "公鑰") (此種方法 公私 一對一)

  - 公鑰哈希: ("公鑰" -- SHA256 --> "公鑰哈希")

  - 校驗: ("0x00+公鑰哈希" -- double SHA256 --> "temp" -- 取前四位元？ --> "校驗")

  - 錢包地址: ("0x00+公鑰哈希+校驗" -- BASE58 --> "錢包地址") （比 SHA1 以 SHA3）
    34？

- 公鑰是地址: 錢發送去公鑰？

- UTXO Model(Unspent Transaction Outputs)

  - txn_445..: 交易的位址？
  - input: 證明是自己的 UTXO
  - output: 簽名 + 交易訊息

            output: 是簽名？
            私鑰 + 交易訊息 -> 簽名
            => 簽名 + 交易訊息 -> 公鑰
            => 證明公鑰是我的，即可拿來當 input？ 私鑰加密

- 但 UTXO 最大的缺點就在於他是"Stateless"的，這對於其上應用程式開發非常的不利

- block 中紀錄:

  - 紀錄:
    - 簽名
  - 驗算生成:
    - Unspent:
      - full node: (高可信) 用 hieght 方式向前證明至創世塊，檢查沒其他人用一樣的 input，檢查 output 的 input。
      - spv node: (低可信) 用 deepth 方式向後證明，夠深就相信他，一般 6 層可信。(猜測算力進步會需更多層？)

- 確保每筆交易都有人挖 <-- 經過越多 block 未處理的加權越高，礦工每次需分兩區，一區保留給優先權高的，另一區才自選 (可選 fee 高的)

- 計算 hash 使用的參數:
  前一個區塊的哈希值(previous_hash)
  區塊產生當下的時間戳(timestamp)
  所有的交易明細(transactions)
  挖掘中的 nonce 值

- Bitcoin 的區塊容量上限是 1MB，在 1MB 的容量下平均可以接受 3.3 - 7 TPS(Transaction per Seconds，每秒幾筆交易)
  [ref](https://en.wikipedia.org/wiki/Bitcoin_scalability_problem)

- 難度每加 1，實際上的運算量會增加 16 倍(位元組是兩兩 16 進位構成的)

- 比特幣每過 2016 個區塊，會根據前面 2016 個區塊的平均出塊時間調整難度，如果前面 2016 個區塊的平均出塊時間大於十分鐘，代表現在的運算力過少、挖礦難度偏高使出塊時間變長，因此需要降低挖礦難度

# BTC vs BCH vs BSV

[ref1](https://matters.news/@janstockcoin/2021%E5%B9%B4%E4%B8%80%E5%A4%9C%E8%87%B4%E5%AF%8C-%E5%B8%82%E5%80%BC30%E5%84%84%E7%BE%8E%E5%85%83-%E4%BB%80%E9%BA%BC%E6%98%AF%E6%AF%94%E7%89%B9%E5%B9%A3sv-bsv-bafyreieg7wnspicnmoywooow3fi2eulab5m64iv43oke53trlfhtl7vd3m) [ref2](https://cointelegraph.com/blockchain-for-beginners/bitcoin-vs-bitcoin-cash-whats-the-difference-between-btc-and-bch) [ref3](https://www.ptt.cc/bbs/DigiCurrency/M.1547383190.A.E37.html)

- 名詞：

  - BTC "Bitcoin Core"
  - BCH "Bitcoin Cash"
  - BSV "Bitcoin Satoshi's Vision (比特幣中本聰願景)"

- BTC fork to BCH fork to BSV
- Compare

  - Difficulty adjustment

  - Block size (SegWit)

    - BTC: "1 MB"
    - BCH in growing: "32 MB" (2021.10)
    - BSV is looking to raise its block size to "1 TB"

  - Smart contracts and decentralized finance

    - BTC: No
    - BCH: YES (加入使用語言 Cashscript)
      (Some of the tools already developed include CashSuffle and CashFusion, meant to improve privacy on the network.)

  - Token issuance (like Ethereum do)

    - Omni layer、Simple Ledger Protocol (SLP)

  - Replace-by-fee (RBF) [ref1](https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki) [ref2](https://support.bitpay.com/hc/en-us/articles/360051205632-What-is-RBF-Replace-By-Fee-)
    - BTC: YES
      - The most widely-used form of RBF today is BIP125 opt-in RBF as implemented in Bitcoin Core 0.12.0.
      - 所以無法取消交易？
      - 還是因為取消重發太麻煩，所以直接用 RBF 的方法改 fee？
      - (原本發了就不能改了？能真的避免？)
