# Ethereum 乙太坊

[什麼是以太坊？](https://academy.binance.com/zt/articles/what-is-ethereum)
[區塊鏈可擴展性 – 側鏈和支付管道](https://academy.binance.com/zt/articles/blockchain-scalability-sidechains-and-payment-channels)

- Account Model
  每個地址就像是一個銀行帳戶，每一次的扣款 + 交易過後，都會將帳戶的餘額紀錄在區塊鍊當中。

- 可以有 Uncle Block
  獎勵吸引: 當 Uncle Block 佔超過一比例(12%?)，則接納 Uncle Block 的礦工獎勵會更多。

- 手續費頗高 (一次可能幾千上萬，一次是指挖一次礦？) <-- 因為交易費高的優先

- 有多少以太幣？ --> 以太坊旨在為去中心化應用程式 (DApp) 提供基礎。由於不確定最適用哪種代幣發放時間表，因此問題仍然存在。

- 將區塊新增至區塊鏈的平均時間會落在 12 至 19 秒。 (PoW 時期)

- [PoS](https://academy.binance.com/zt/articles/proof-of-stake-explained): 幣齡的計算方法是作為股權的幣的數量乘以作為股權的天數。一旦一個節點鍛造了一個區塊，它的幣齡就會重置為零，並且還需要等待一定時間後才能鍛造下一個區塊 - 這樣防止股權多的節點壟斷區塊鏈。
  如果一個節點想停止鍛造者的身份，那麼它的股權和所得的獎勵將在一段時間後被釋放，從而使網絡有時間驗證該節點是否向區塊鏈中添加了假區塊。

# Q -------

- 如果將一段無限迴圈的程式碼上鏈，又有人去使用，會發生什麼事？
  所以是不是實際上如下：
  使用者設定 fee 給付率，例如耗費幾秒付多少幣，然後再設一個上限，用超過多少幣就停止。而不是設定說這筆交易，我想出多少幣。
  ？
