import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

     articles= [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Niha Masih, Frances Vinall, Ellen Francis",
            "title": "Russia-Ukraine war news: Trudeau apologizes after Nazi veteran honored in Parliament - The Washington Post",
            "description": "Ukraine said air defenses repelled drones in the southern regions of Odessa and Mykolaiv. Jailed activist Alexei Navalny faces harsher imprisonment in Russia.",
            "url": "https://www.washingtonpost.com/world/2023/09/28/russia-ukraine-war-news/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FC5TUJ76ZSHV5A4FY33EZE3BGU_size-normalized.jpg&w=1440",
            "publishedAt": "2023-09-28T07:56:08Z",
            "content": "Air defense systems in southern Ukraine destroyed more than 30 drones in a massive Russian attack overnight, a spokeswoman for the Ukrainian militarys southern command said Thursday. Natalia Humeniuk\u2026 [+3973 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Natasha Bertrand, Megan Trimble, Jessie Yeung",
            "title": "American soldier Travis King arrives back in US after being freed by North Korea - CNN",
            "description": "US Army Private Travis King arrived back on United States soil Thursday after being returned to American custody weeks after he crossed into North Korea, a Defense Department official said.",
            "url": "https://www.cnn.com/2023/09/28/politics/travis-king-returns-us-north-korea-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230719122628-01-travis-king.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-28T07:55:00Z",
            "content": "US Army Private Travis King arrived back on United States soil Thursday after being returned to American custody weeks after he crossed into North Korea, a Defense Department official said.\r\nKing fle\u2026 [+6817 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nbcsportsbayarea.com"
            },
            "author": "Tom Dierberger",
            "title": "Jrue Holiday to Warriors? Windhorst speculates next trade partner - NBC Sports Bay Area",
            "description": "Would the Warriors consider trading for Portland Trail Blazers newcomer Jrue Holiday?",
            "url": "https://www.nbcsportsbayarea.com/nba/golden-state-warriors/jrue-holiday-trail-blazers-trade/1658233/",
            "urlToImage": "https://media.nbcsportsbayarea.com/2023/09/jrue-holiday-steph-curry-bucks-warriors.jpg?quality=85&strip=all&resize=1200%2C675",
            "publishedAt": "2023-09-28T07:34:38Z",
            "content": "Superstar guard Damian Lillard finally is on the move. But will there be another blockbuster trade in the near future?\r\nThe Portland Trail Blazers sent Lillard to the Milwaukee Bucks and received Jru\u2026 [+2320 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Carlos Garcia, Walid Berrazeg, Sarah Wu",
            "title": "Taiwan reveals first domestically made submarine in defence milestone - Reuters",
            "description": "Taiwan unveiled its first domestically developed submarine on Thursday, a major step in a project aimed at strengthening the island's defence and deterrence against the Chinese navy, though it won't enter service for another two years.",
            "url": "https://www.reuters.com/world/asia-pacific/taiwan-reveals-first-homegrown-submarine-defence-milestone-2023-09-28/",
            "urlToImage": "https://www.reuters.com/resizer/7bsjnt6j-f_0LaGoPC-PuOZRWaw=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5CMGPKL2AVISRCHWDMIQCEWFMI.jpg",
            "publishedAt": "2023-09-28T07:04:00Z",
            "content": "KAOHSIUNG, Taiwan, Sept 28 (Reuters) - Taiwan unveiled its first domestically developed submarine on Thursday, a major step in a project aimed at strengthening the island's defence and deterrence aga\u2026 [+3220 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Alexandra Bellusci",
            "title": "Proof Patrick Mahomes Was Enchanted to Meet Taylor Swift After Game With Travis Kelce - E! NEWS",
            "description": "Patrick Mahomes revealed he met Taylor Swift during an afterparty with the singer and teammate Travis Kelce following the Chiefs\u2019 victory against the Chicago Bears.",
            "url": "https://www.eonline.com/news/1386603/proof-patrick-mahomes-was-enchanted-to-meet-taylor-swift-after-game-with-travis-kelce",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2023827/cr_1200x1200-230927163255-GettyImages-1699211613.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2023-09-28T06:47:00Z",
            "content": "For Patrick Mahomes, meeting Taylor Swift was a total touchdown.\r\nAfter the singer attended the Sept. 24 Chiefs game against\u00A0the Chicago Bears in a suite with\u00A0Travis Kelce's\u00A0mom, the quarterback reve\u2026 [+903 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Maeve Reston, Marianne LeVine, Dylan Wells",
            "title": "Big takeaways from the second Republican debate - The Washington Post - The Washington Post",
            "description": "GOP presidential hopefuls try to seize on one of their dwindling chances to make an impression as Trump again skips the debate.",
            "url": "https://www.washingtonpost.com/politics/2023/09/27/republican-presidential-debate-haley-desantis-ramaswamy/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/09-28-2023/t_002c212c22414f8d92b4126fe5eada58_name_56KLDUZFH5N3PK77USJ723DTCI_scaled.jpg&w=1440",
            "publishedAt": "2023-09-28T06:30:00Z",
            "content": "Comment on this story\r\nComment\r\nSIMI VALLEY, Calif. Seven Republican presidential hopefuls, clamoring for attention as their time to overtake former president Donald Trump grows shorter, showed a new\u2026 [+10422 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Elizabeth Wolfe, Andy Rose",
            "title": "Convicted felon suspected of killing Baltimore tech CEO has been arrested, police say - CNN",
            "description": "A convicted felon suspected of killing tech executive Pava LaPere in Baltimore this week has been arrested, Baltimore police said early Thursday.",
            "url": "https://www.cnn.com/2023/09/28/us/baltimore-tech-ceo-killing-suspect-arrest-pava-lapere-thursday/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230927154206-jason-dean-billingsley.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-09-28T06:27:00Z",
            "content": "A convicted felon suspected of killing tech executive Pava LaPere in Baltimore this week has been arrested, Baltimore police said early Thursday.\r\nJason Dean Billingsley was wanted on first-degree mu\u2026 [+1405 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Cao Li, Rebecca Feng",
            "title": "China Evergrande Shares Suspended After Reports of Founder's Disappearance - The Wall Street Journal",
            "description": "Chairman Hui Ka Yan has been placed under police surveillance, according to media reports",
            "url": "https://www.wsj.com/world/china/china-evergrande-shares-suspended-after-reports-of-founders-disappearance-3e5f4f8",
            "urlToImage": "https://images.wsj.net/im-859288/social",
            "publishedAt": "2023-09-28T05:21:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters",
            "title": "Morning Bid: Dollar glimmers in broad market gloom - Reuters",
            "description": "A look at the day ahead in European and global markets from Tom Westbrook",
            "url": "https://www.reuters.com/markets/europe/global-markets-view-europe-2023-09-28/",
            "urlToImage": "https://www.reuters.com/resizer/LbNAxaqSyxtK-Zxwd1TByoJpglo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FHJSSAJCZVL6RPEDZNJ7P3FIWA.jpg",
            "publishedAt": "2023-09-28T05:16:50Z",
            "content": "A look at the day ahead in European and global markets from Tom Westbrook\r\nGerman and Spanish inflation data and European consumer confidence data due today seem unlikely to pierce the gloom that's e\u2026 [+1937 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hollywood Reporter"
            },
            "author": "Lesley Goldberg",
            "title": "Energy at Writers Guild Deal Meeting Akin to a \u201CRock Concert\u201D - Hollywood Reporter",
            "description": "\u201CThe contract will definitely be ratified,\u201D one source at Wednesday's Palladium gathering says. \u201CAnd by a substantial margin.\u201D",
            "url": "https://www.hollywoodreporter.com/news/general-news/writers-guild-deal-meeting-1235603114/",
            "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/Ellen-Stutzman-Photo-H-2023.jpg?w=1024",
            "publishedAt": "2023-09-28T04:55:52Z",
            "content": "The Writers Guild of America, on the union\u2019s first day after its historic 148-day strike, staged a \u201Crock concert\u201D \u2014 as one showrunner described it \u2014 on Wednesday night at the Hollywood Palladium as t\u2026 [+4597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cointelegraph"
            },
            "author": "Tom Mitchelhill",
            "title": "Mark Zuckerberg reveals Meta AI chatbot, his answer to ChatGPT - Cointelegraph",
            "description": "The CEO of Meta, Mark Zuckerberg has unveiled the company\u2019s new AI assistant Meta AI, which will soon be integrated across all of Meta\u2019s social media applications including its smart new smart glasses.",
            "url": "https://cointelegraph.com/news/meta-ai-ceo-mark-zuckerberg-unveil-chatbot-rayban-metaverse",
            "urlToImage": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDkvMjIxOTc3MGMtMTAzOC00NTBhLTk0ZmMtYTkzNWZjMzZhZmU1LmpwZw==.jpg",
            "publishedAt": "2023-09-28T04:25:08Z",
            "content": "Meta CEO Mark Zuckerberg has unveiled his firms new artificial intelligence (AI)-powered assistant Meta AI his answer to OpenAIs ChatGPT, which will integrate with Instagram, Facebook, WhatsApp and, \u2026 [+2740 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KABC-TV"
            },
            "author": null,
            "title": "Powerball jackpot rises to $925 million after another drawing without a big winner - KABC-TV",
            "description": "The Powerball jackpot climbed to an estimated $925 million after no players hit it big Wednesday night, continuing a stretch of lottery futility that has lasted for more than two months.",
            "url": "https://abc7.com/powerball-jackpot-lottery-numbers/13835858/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/13835863_092723-cc-ap-powerball-ticket-generic-img.jpg?w=1600",
            "publishedAt": "2023-09-28T03:56:15Z",
            "content": "The Powerball jackpot climbed to an estimated $925 million after no players hit it big Wednesday night, continuing a stretch of lottery futility that has lasted for more than two months.\r\nThe winning\u2026 [+1188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Pilar Melendez",
            "title": "Colorado Mom Suzanne Morphew's Remains Found 3 Years After She Vanished - The Daily Beast",
            "description": "Suzanne Morphew vanished without a trace after going on a bike ride on Mother\u2019s Day in 2020.",
            "url": "https://www.thedailybeast.com/suzanne-morphews-remains-found-three-years-after-she-vanished-in-colorado",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1000,w_1778,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1695847987/Screen_Shot_2023-09-27_at_4.52.52_PM_mxniyz",
            "publishedAt": "2023-09-28T03:26:00Z",
            "content": "Three years ago, Suzanne Morphew vanished without a trace on Mothers Day after going on a bike ride, sparking a high-profile case that once involved murder charges against her husband. On Wednesday, \u2026 [+3932 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": "Jesse Rogers",
            "title": "Braves' Ronald Acu\u00F1a Jr. becomes founding member of 40-70 club - ESPN - ESPN",
            "description": "Braves star Ronald Acu\u00F1a Jr. made even more MLB history Wednesday night as he established the 40-70 club while helping Atlanta secure home-field advantage through the National League playoffs.",
            "url": "https://www.espn.com/mlb/story/_/id/38509112/braves-ronald-acuna-jr-first-player-40-homers-70-steals-single-season",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0928%2Fr1230759_1296x729_16%2D9.jpg",
            "publishedAt": "2023-09-28T03:21:00Z",
            "content": "ATLANTA -- Ronald Acu\u00F1a Jr. wasn't going to let Wednesday's game end without making even more MLB history.\r\nHis steal of second base in the 10th inning of a hard-fought matchup between the Atlanta Br\u2026 [+3569 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Top House Republicans outline basis for Biden impeachment inquiry in memo on eve of first hearing - CBS News",
            "description": null,
            "url": "https://families.google.com/service-restricted",
            "urlToImage": null,
            "publishedAt": "2023-09-28T03:18:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "WDRB"
            },
            "author": "Jason Riley",
            "title": "Joseph Lawson, 2nd man charged in Crystal Rogers' death, has history of violence against women - WDRB",
            "description": "Court records and interviews shed light on Lawson\u2019s past as he is thrust into the spotlight in the high-profile case of Rogers\u2019 disappearance alongside Houck, who was named investigators\u2019 prime",
            "url": "https://www.wdrb.com/wdrb-investigates/joseph-lawson-2nd-man-charged-in-crystal-rogers-death-has-history-of-violence-against-women/article_79d1c7b6-5d75-11ee-9943-a7c15e2eaf55.html",
            "urlToImage": "https://bloximages.newyork1.vip.townnews.com/wdrb.com/content/tncms/assets/v3/editorial/0/9d/09d607d0-5d78-11ee-8572-23d20d28a16b/6514968d3f528.image.jpg?crop=1919%2C1007%2C0%2C36&resize=1200%2C630&order=crop%2Cresize",
            "publishedAt": "2023-09-28T03:08:12Z",
            "content": "LOUISVILLE, Ky. (WDRB) -- Joseph Lawson, the 32-year-old Nelson County man who, along with Brooks Houck, has been arrested in the death of Crystal Rogers, is no stranger to the legal system, especial\u2026 [+9985 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NFL Week 4 injuries: Packers' Aaron Jones, Christian Watson questionable vs. Lions; rookie QBs back practicing - CBS Sports",
            "description": "Breaking down the mid-week NFL injury report",
            "url": "https://www.cbssports.com/nfl/news/nfl-week-4-injuries-packers-aaron-jones-christian-watson-questionable-vs-lions-rookie-qbs-back-practicing/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/09/24/28c624cf-a718-43b2-b730-34966bbf4045/thumbnail/1200x675/827883e6daeda9a96c1ddf92221ba790/usatsi-aaron-jones-packers.jpg",
            "publishedAt": "2023-09-28T02:06:00Z",
            "content": "As we enter Week 4 of the 2023 NFL regular season, there are plenty of notable injuries to monitor. Giants running back Saquon Barkley is still on the mend after suffering a high ankle sprain vs. the\u2026 [+9964 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Christine Hall",
            "title": "Meta Connect 2023: Everything you need to know about Quest 3 VR, Ray-Ban smart glasses and Meta AI - TechCrunch",
            "description": "Meta's annual Connect conference started today, and this means lots of new hardware and perhaps a Metaverse sighting.",
            "url": "https://techcrunch.com/2023/09/27/meta-connect-2023-quest-3-vr-everything-you-need-to-know/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/09/Screenshot-2023-09-27-at-10.41.21-AM.png?resize=1200,607",
            "publishedAt": "2023-09-28T01:52:30Z",
            "content": "Meta\u2019s annual Connect conference started today, and this means lots of new hardware. Are you ready for an update on Meta Quest 3?\u00A0Didnt have time to tune in live? Thats okay we summed up the most imp\u2026 [+2873 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Nytlicensing.com"
            },
            "author": "Jordan Rau and Tony Leys",
            "title": "As COVID Infections Rise, Nursing Homes Are Still Waiting for Vaccines - Yahoo! Voices",
            "description": "\u201CCOVID is not pretty in a nursing home,\u201D said Deb Wityk, a 70-year-old retired massage therapist who lives in one called Spurgeon Manor, in rural Iowa. She...",
            "url": "https://nytlicensing.com/stories/dET7KMnN",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NHb1jLIVQEvXaLYuKWZClw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDM-/https://media.zenfs.com/en/the_new_york_times_articles_158/1bc8b6bb3ed14cd0f156b228462225ee",
            "publishedAt": "2023-09-28T01:43:00Z",
            "content": "COVID is not pretty in a nursing home, said Deb Wityk, a 70-year-old retired massage therapist who lives in one called Spurgeon Manor, in rural Iowa. She has contracted the disease twice and is eager\u2026 [+9856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Selome Hailu",
            "title": "\u2018Survivor\u2019 Season 45 Launches With Bruce\u2019s Surprisingly Controversial Return and a Shocking First Tribal - Variety",
            "description": "'Survivor' returns for Season 45 with some huge personalities, including Bruce from Season 44 and Emily, who has a bone to pick with him.",
            "url": "https://variety.com/2023/tv/news/survivor-premiere-recap-emily-bruce-hannah-quits-1235736369/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/09/1781428_02874bc-1-1-e1695847672235.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-09-28T01:30:00Z",
            "content": "SPOILER ALERT: This recap contains spoilers from the Season 45 premiere of \u201CSurvivor.\u201D\r\nEvery episode of \u201CSurvivor\u201D contains a healthy handful of platitudes about how wild the game is, and the Season\u2026 [+9962 chars]"
        }
    ]
    constructor()
    {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults : 0
        }
    }
    async componentDidMount()
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
         fetch(url).then((response) => response.json())
        .then((data) => {
            this.setState({
                articles: data.articles,
                totalResults: this.state.totalResults,
                loading : false
            });
        });
    }
    // handleNextClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //     this.setState({loading : true})
    //         fetch(url).then((response) => response.json())
    //             .then((data) => {
    //                 this.setState({
    //                     articles: data.articles,
    //                     page: this.state.page + 1,
    //                     loading : false

    //                 });
    //             });
    //         return false;
    //     }

    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //     this.setState({loading : true})
    //      fetch(url).then((response) => response.json())
    //     .then((data) => {
    //         this.setState({
    //             articles: data.articles,
    //             page: this.state.page - 1,
    //             loading : false
    //         });
    //     });
    
    // }
    fetchMoreData = () => {
        this.props.setProgress(0)
         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page + 1}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading : true})
         fetch(url).then((response) => response.json())
        .then((data) => {
            this.setState({
                articles: this.state.articles.concat(data.articles),
                totalResults: this.state.totalResults,
                loading: false,
                page : this.state.page + 1
            });
        });
        this.props.setProgress(100)
  };
  render() {
    return (
        <div>
            <div className="container my-3">
                <h2 class="text-center">NewsMonkey Breaking news</h2>
                 {this.state.loading && <Spinner />}
                 <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults }
           loader={this.state.loading && <Spinner />}
            endMessage={
            <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
            </p>
  }
        >
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key="element.url">
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjMtMDkvMjIxOTc3MGMtMTAzOC00NTBhLTk0ZmMtYTkzNWZjMzZhZmU1LmpwZw==.jpg"} url={element.url} />
                        </div>
                     })}
                
                    </div>
                    </InfiniteScroll>
            </div>
      </div>
    )
  }
}
