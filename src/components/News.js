import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Ivana Kottasová, Zahid Mahmood, Sana Noor Haq",
  //     title:
  //       "British nurse to spend rest of her life in prison for murdering seven babies - CNN",
  //     description:
  //       "A British nurse was sentenced to life in prison without the possibility of parole on Monday for the murders of seven babies and the attempted murders of six others at the UK hospital where she worked.",
  //     url: "https://www.cnn.com/2023/08/21/uk/lucy-letby-nurse-sentence-intl-gbr/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230818134052-05-lucy-letby-guilty.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-08-21T12:22:00Z",
  //     content:
  //       "A British nurse was sentenced to life in prison without the possibility of parole on Monday for the murders of seven babies and the attempted murders of six others at the UK hospital where she worked… [+4999 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Michelle Fox",
  //     title:
  //       "Stocks making the biggest premarket moves: Palo Alto Networks, Earthstone Energy, Nvidia, VMware and more - CNBC",
  //     description:
  //       "These are the stocks posting the largest moves in the premarket.",
  //     url: "https://www.cnbc.com/2023/08/21/stocks-making-the-biggest-premarket-moves-.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/106988706-1639435338484-gettyimages-1232981085-PALO_ALTO_EARNS.jpeg?v=1692619537&w=1920&h=1080",
  //     publishedAt: "2023-08-21T12:05:37Z",
  //     content:
  //       "Palo Alto Networks The security software vendor soared 12.5% following an earning's beat after the Friday market close. Fiscal fourth quarter adjusted earnings per share came in at $1.44, topping the… [+2087 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Michele Luhn",
  //     title: "5 things to know before the stock market opens Monday - CNBC",
  //     description:
  //       "Here are the most important news items that investors need to start their trading day.",
  //     url: "https://www.cnbc.com/2023/08/21/5-things-to-know-before-the-stock-market-opens-monday-august-21.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/107202451-1677782081912-gettyimages-1470785195-img_1224_4bken82a.jpeg?v=1692617643&w=1920&h=1080",
  //     publishedAt: "2023-08-21T11:34:03Z",
  //     content:
  //       "Here are the most important news items that investors need to start their trading day:\r\n1. Out of the doldrums?\r\nStocks are poised to open higher Monday coming off another losing week. S&amp;P 500 fu… [+3937 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "John McCormick",
  //     title:
  //       "Trump Holds 23-Point Lead Over DeSantis in Closely Watched Iowa Poll - The Wall Street Journal",
  //     description:
  //       "Top two candidates in Republican field have similar support when first and second choices are considered",
  //     url: "https://www.wsj.com/politics/elections/donald-trump-iowa-poll-lead-ron-desantis-bc96c1b4",
  //     urlToImage: "https://images.wsj.net/im-839066/social",
  //     publishedAt: "2023-08-21T11:32:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "bloomberg",
  //       name: "Bloomberg",
  //     },
  //     author: null,
  //     title:
  //       "European Natural Gas Prices Jump on Threat of Australia LNG Strike - Bloomberg",
  //     description: null,
  //     url: "https://www.bloomberg.com/news/articles/2023-08-21/european-gas-prices-soar-on-australia-lng-workers-ultimatum",
  //     urlToImage: null,
  //     publishedAt: "2023-08-21T11:26:15Z",
  //     content:
  //       "To continue, please click the box below to let us know you're not a robot.",
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: "Reuters",
  //     title:
  //       "Tropical Storm Hilary releases fury on Southern California - Reuters",
  //     description:
  //       "The first tropical storm to hit Los Angeles in more than 80 years unleashed floods across parts of Southern California more accustomed to drought, as officials urged the public to stay safe as they began to count the cost of damage.",
  //     url: "https://www.reuters.com/world/us/tropical-storm-hilary-releases-fury-southern-california-2023-08-21/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/zLE8TLxKqT-e4WIsLzPOaevhsZ0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DBDQ6WBNNJKOPHWU7SLMQOEQ4A.jpg",
  //     publishedAt: "2023-08-21T11:08:08Z",
  //     content:
  //       "LOS ANGELES, Aug 21 (Reuters) - The first tropical storm to hit Los Angeles in more than 80 years unleashed floods across parts of Southern California more accustomed to drought, as officials urged t… [+2980 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: "https://www.facebook.com/bbcnews",
  //     title: "Earthquake shakes parts of California during storm - BBC",
  //     description:
  //       "As residents sheltered from a once-in-80 years storm, the floor shook from an earthquake.",
  //     url: "https://www.bbc.com/news/world-us-canada-66568991",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/16689/production/_130858719_quake_plain-nc.png",
  //     publishedAt: "2023-08-21T11:05:11Z",
  //     content:
  //       "As people across Southern California sheltered from Hurricane Hilary; another natural disaster hit - a magnitude 5.1 earthquake.\r\nIts epicentre was northwest of Los Angeles and #hurriquake was soon t… [+2903 chars]",
  //   },
  //   { 
  //     source: {
  //       id: "financial-times",
  //       name: "Financial Times",
  //     },
  //     author: "James Politi, Colby Smith",
  //     title:
  //       "Donald Trump says he will not appear in Republican primary debates - Financial Times",
  //     description:
  //       "Polls show former US president with large advantage over rival contenders",
  //     url: "https://www.ft.com/content/598f408e-107e-4df5-b144-8460648801b1",
  //     urlToImage:
  //       "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F270489ef-f05b-4e9f-8046-5f39eb5606ff.jpg?source=next-opengraph&fit=scale-down&width=900",
  //     publishedAt: "2023-08-21T10:37:15Z",
  //     content:
  //       "Donald Trump has announced he will skip the Republican presidential debates as polls on Sunday and Monday have shown he has a commanding lead in the partys nomination contest.\r\nThe move by Trump brea… [+3864 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "YouTube",
  //     },
  //     author: null,
  //     title: "Anti-graft crusader wins Guatemala presidency - Reuters",
  //     description: null,
  //     url: "https://www.youtube.com/watch?v=wQLhPbLBTiw",
  //     urlToImage: null,
  //     publishedAt: "2023-08-21T10:29:23Z",
  //     content:
  //       "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Hollywood Reporter",
  //     },
  //     author: "Soomee Park",
  //     title:
  //       "Korea Box Office Scandal: Distributors Say Manipulation Was “Open Secret” for Years - Hollywood Reporter",
  //     description:
  //       "Industry veterans allege that exhibition chains often required them to bulk-buy promotional tickets to their own movies as an upfront cost of getting screen time — and that the case isn't as simple as Seoul police have portrayed.",
  //     url: "https://www.hollywoodreporter.com/movies/movie-news/korea-box-office-manipulation-scandal-open-secret-1235571136/",
  //     urlToImage:
  //       "https://www.hollywoodreporter.com/wp-content/uploads/2021/11/4_EmergencyDeclaration_WellGoUSA_KoreanDisasterFilm_small.jpeg?w=1024",
  //     publishedAt: "2023-08-21T09:30:33Z",
  //     content:
  //       "Allegations of a massive, multiyear pattern of box office fraud rocked the Korean film industry last week. The Seoul Metropolitan Police Agency’s anti-corruption office said 69 executives from the co… [+7171 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Giri Viswanathan",
  //     title:
  //       "Covid-19 linked with higher risk of high blood pressure, study finds - CNN",
  //     description:
  //       "When it comes to developing high blood pressure, Covid-19 might play an outsized role, a new study says.",
  //     url: "https://www.cnn.com/2023/08/21/health/covid-high-blood-pressure/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230818165440-blood-pressure-check-stock.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-08-21T09:00:00Z",
  //     content:
  //       "When it comes to developing high blood pressure, Covid-19 might play an outsized role, a new study says.\r\nThe report, published Monday in the medical journal Hypertension, found that more than 1 in 5… [+4381 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cbs-news",
  //       name: "CBS News",
  //     },
  //     author: null,
  //     title:
  //       "Storeowner shot to death right in front of her shop after dispute over LGBTQ+ pride flag, authorities say - CBS News",
  //     description:
  //       'The suspect "made several disparaging remarks about a rainbow flag that stood outside the store" before the shooting, sheriff\'s officials said.',
  //     url: "https://www.cbsnews.com/news/storeowner-shot-dead-dispute-lgbtq-pride-flag/",
  //     urlToImage:
  //       "https://assets2.cbsnewsstatic.com/hub/i/r/2023/08/11/d9c01066-57b5-42b7-a90a-07eccb98fc6a/thumbnail/1200x630/fd91393e5a33b9bac443be46b50ae1e3/gettyimages-1435952750.jpg?v=0b4ae642db52799a178d90d83603a9dc",
  //     publishedAt: "2023-08-21T08:00:39Z",
  //     content:
  //       "Cedar Glen, Calif. — - A dispute over an LGBTQ+ pride flag at a California clothing store spiraled into deadly violence this weekend when a man shot and killed the 66-year-old business owner right in… [+1967 chars]",
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: "Nivedita Bhattacharjee",
  //     title:
  //       "Moon landing anticipation builds for India after Russia's crash - Reuters India",
  //     description:
  //       "India's space agency on Monday released images its spacecraft took of the far side of the moon as it headed for an attempted landing on the lunar south pole, just days after the failure of a Russian lander.",
  //     url: "https://www.reuters.com/world/india/moon-landing-anticipation-builds-india-after-russias-crash-2023-08-21/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/qagVGn4NsdpcmkuQudBuRv-7ZoY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PJTUYNZVBVKTHLGZRON4ACX5FA.jpg",
  //     publishedAt: "2023-08-21T07:50:00Z",
  //     content:
  //       "BENGALURU, Aug 21 (Reuters) - India's space agency on Monday released images its spacecraft took of the far side of the moon as it headed for an attempted landing on the lunar south pole, just days a… [+3136 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "DW (English)",
  //     },
  //     author: "Ashutosh Pandey",
  //     title:
  //       "BRICS: Why Saudi Arabia and others are vying for membership - DW (English)",
  //     description:
  //       "Some see the 5-member club as a counterweight to traditional Western-led forums and institutions. But what exactly is BRICS and why does it matter?",
  //     url: "https://www.dw.com/en/brics-why-saudi-arabia-and-others-are-vying-for-membership/a-66547896",
  //     urlToImage: "https://static.dw.com/image/65862846_6.jpg",
  //     publishedAt: "2023-08-21T07:02:24Z",
  //     content:
  //       "The BRICS group of emerging countries Brazil, Russia, India, China and South Africa will meet for their annual summit starting August 22 in Johannesburg.\r\nThis year's summit has gained prominence ami… [+5509 chars]",
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "",
  //     title:
  //       "DNA technology reveals more information about oldest human mummy found intact - CNN",
  //     description:
  //       "The latest DNA technology has helped scientists uncover more information about what is considered to be the oldest human mummy found intact.  They say “Ötzi the Iceman” was dark-skinned and likely balding. Michael Holmes reports.",
  //     url: "https://www.cnn.com/videos/world/2023/08/21/exp-tzi-iceman-oldest-human-mummy-michael-holmes-pkg-082101aseg3-cnni-world.cnn",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/230821022543-exp-tzi-iceman-oldest-human-mummy-michael-holmes-pkg-082101aseg3-cnni-world-00001818.png?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2023-08-21T06:33:19Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Android Central",
  //     },
  //     author: "Harish Jonnalagadda",
  //     title:
  //       "OnePlus 12: Rumors, specs, price, release date, and more - Android Central",
  //     description: "Here's what we know so far about OnePlus's 2024 flagship.",
  //     url: "https://www.androidcentral.com/phones/oneplus-12",
  //     urlToImage:
  //       "https://cdn.mos.cms.futurecdn.net/uSLmsGhsS4xLxqLR453iGV-1200-80.jpg",
  //     publishedAt: "2023-08-21T06:04:29Z",
  //     content:
  //       "OnePlus is currently focused on launching its first foldable, the OnePlus Open, but that doesn't mean it isn't working on next year's portfolio. We're several months out from the introduction of the … [+6319 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Bloody Elbow",
  //     },
  //     author: "Milan Ordoñez",
  //     title:
  //       "Sean O'Malley is a star - Dana White reveals new champ made UFC 292 break records - Bloody Elbow",
  //     description:
  //       "Sean O'Malley is getting most of the credit for what turned out to be record-breaking numbers for the UFC.",
  //     url: "https://bloodyelbow.com/2023/08/21/sean-omalley-ufc-292-record-breaker/",
  //     urlToImage:
  //       "https://cdn.bloodyelbow.com/wp-content/uploads/2023/08/mma-ufc-292-sterling-1033532257-1024x682.jpg",
  //     publishedAt: "2023-08-21T05:56:08Z",
  //     content:
  //       "IMAGO / USA Today / Bob DeChiara\r\nSean OMalley got the job done on Saturday night at UFC 292. The 28-year-old Arizona-based fighter scored a TKO win over Funkmaster Aljamain Sterling in the opening m… [+3072 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CBS Sports",
  //     },
  //     author: "Patrick McDonald",
  //     title:
  //       "2023 BMW Championship leaderboard: Viktor Hovland breaks course record, surges past Scottie Scheffler for win - CBS Sports",
  //     description:
  //       "Hovland put on a sensational performance Sunday to vault up the FedEx Cup Playoffs standings",
  //     url: "https://www.cbssports.com/golf/news/2023-bmw-championship-leaderboard-viktor-hovland-breaks-course-record-surges-past-scottie-scheffler-for-win/live/",
  //     urlToImage:
  //       "https://sportshub.cbsistatic.com/i/r/2023/08/20/065cd4d5-ee68-4cfa-8818-1674f14861d4/thumbnail/1200x675/148758d6a9f437c9ecdce3e61e952a53/viktor-hovland.jpg",
  //     publishedAt: "2023-08-21T05:55:00Z",
  //     content:
  //       "The 2023 BMW Championship and the round of the season both belong to Viktor Hovland. Finishing in a flurry at Olympia Fields, the Norwegian's final round course-record 61 that included a back-nine 28… [+5620 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "FRANCE 24 English",
  //     },
  //     author: "Cyrielle CABOT",
  //     title:
  //       "Crimes ‘beyond imagination’: Saudi border guards killed hundreds of migrants, HRW report says - FRANCE 24 English",
  //     description:
  //       "Between March 2022 and June 2023, Saudi border guards killed hundreds of Ethiopian migrants attempting to cross the border from Yemen into the oil-rich kingdom, according to a new Human Rights Watch report released on Monday. The report comes as Saudi Arabia …",
  //     url: "https://www.france24.com/en/middle-east/20230821-crimes-beyond-imagination-saudi-border-guards-killed-hundreds-of-migrants-hrw-report-says",
  //     urlToImage:
  //       "https://s.france24.com/media/display/28066e2c-3c4c-11ee-9c30-005056bfb2b6/w:1280/p:16x9/000_324D9NE.jpg",
  //     publishedAt: "2023-08-21T05:44:00Z",
  //     content:
  //       "Between March 2022 and June 2023, Saudi border guards killed hundreds of Ethiopian migrants attempting to cross the border from Yemen into the oil-rich kingdom, according to a new Human Rights Watch … [+8570 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Android Authority",
  //     },
  //     author: null,
  //     title:
  //       "This is how Google's upcoming eSIM transfer tool will work on Android - - Android Authority",
  //     description:
  //       "Here's how you will be able to transfer eSIM profiles between Android phones using a QR code scanning method.",
  //     url: "https://www.androidauthority.com/android-esim-transfer-3356508/",
  //     urlToImage:
  //       "https://www.androidauthority.com/wp-content/uploads/2023/08/esim-chip-on-finger.jpg",
  //     publishedAt: "2023-08-21T04:57:16Z",
  //     content:
  //       "<ul><li>Googles upcoming eSIM transfer tool will require users to manually scan a QR code.</li><li>The feature will allow users to quickly and securely transfer their mobile plan to a new device.</li… [+1597 chars]",
  //   },
  // ];

  constructor() { 
    super();
     console.log("Hello I am COnstructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  
  async componentDidMount() {
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=265b8c0378b44fbf86f463b802ce4bfc";
    let data=await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
     this.setState({articles:parsedData.articles})
  }

  render() {
    console.log("render");
    return (
      <div className="container  ">
        <h2>NewsMonkey Top - Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{

          return  <div className="col-md-4"  key={element.url}>
          <NewsItem 
            title={element.title?element.title.slice(0,44):""}
            description={element.description?element.description.slice(0,88):""}
            imageUrl={element.urlToImage}
            newsUrl={element.url}
          />
        </div>
        })}
         

         
        </div>
      </div>
    );
  }
}

export default News;
