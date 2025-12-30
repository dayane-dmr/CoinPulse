import DataTable from "@/components/DataTable";
import { cn } from "@/lib/utils";
import { TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const columns: DataTableColumn<TrendingCoin>[] = [
  {
    header: "Name",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;

      return (
        <Link href={`/coins/${item.id}`}>
          <Image src={item.large} alt={item.name} width={36} height={36} />
          <p>{item.name}</p>
        </Link>
      );
    },
  },
  {
    header: "24h Change",
    cellClassName: "name-cell",
    cell: (coin) => {
      const item = coin.item;
      const isTrendingUp = item.data.price_change_percentage_24h.usd > 0;

      return (
        <div
          className={cn(
            "price-change",
            isTrendingUp ? "text-green-500" : "text-red-500"
          )}
        >
          <p>
            {isTrendingUp ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
          </p>
        </div>
      );
    },
  },
  {
    header: "Price",
    cellClassName: "price-cell",
    cell: (coin) => coin.item.data.price,
  },
];

const trendingCoinsMock: TrendingCoin[] = [
  {
    item: {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      market_cap_rank: 1,
      thumb: "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
      large: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
      data: {
        price: 88294.89,
        price_change_percentage_24h: {
          usd: 2.45,
        },
      },
    },
  },
  {
    item: {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      market_cap_rank: 2,
      thumb: "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
      large: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
      data: {
        price: 4612.22,
        price_change_percentage_24h: {
          usd: -1.18,
        },
      },
    },
  },
  {
    item: {
      id: "solana",
      name: "Solana",
      symbol: "sol",
      market_cap_rank: 5,
      thumb: "https://assets.coingecko.com/coins/images/4128/thumb/solana.png",
      large: "https://assets.coingecko.com/coins/images/4128/large/solana.png",
      data: {
        price: 198.37,
        price_change_percentage_24h: {
          usd: 4.92,
        },
      },
    },
  },
  {
    item: {
      id: "cardano",
      name: "Cardano",
      symbol: "ada",
      market_cap_rank: 8,
      thumb: "https://assets.coingecko.com/coins/images/975/thumb/cardano.png",
      large: "https://assets.coingecko.com/coins/images/975/large/cardano.png",
      data: {
        price: 1.24,
        price_change_percentage_24h: {
          usd: -0.76,
        },
      },
    },
  },
  {
    item: {
      id: "avalanche",
      name: "Avalanche",
      symbol: "avax",
      market_cap_rank: 10,
      thumb: "https://assets.coingecko.com/coins/images/12559/thumb/Avalanche_Circle_RedWhite_Trans.png",
      large:
        "https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png",
      data: {
        price: 56.91,
        price_change_percentage_24h: {
          usd: 3.11,
        },
      },
    },
  },
];


const page = () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header">
            <Image
              src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
              alt="Bitcoin"
              width={56}
              height={56}
            />
            <div className="info">
              <p>Bitcoin / BTC</p>
              <h1>$88.294,89</h1>
            </div>
          </div>
        </div>

        <p>Trending Coins</p>
        <DataTable
          data={trendingCoinsMock}
          columns={columns}
          rowKey={(row) => row.item.id}
        />
      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
