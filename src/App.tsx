import EbookViewer from "./components/EbookViewer";
import Page01Cover from "./pages/Page01Cover";
import { Page02, Page03 } from "./pages/Page02_03_TOC";
import { Page04, Page05 } from "./pages/Chapter01";
import { Page06, Page07 } from "./pages/Chapter02";
import { Page08, Page09 } from "./pages/Chapter03";
import { Page10, Page11, Page12 } from "./pages/Chapter04";
import { Page13, Page14 } from "./pages/Chapter05";
import { Page15, Page16, Page17 } from "./pages/Chapter06";
import { Page18, Page19, Page20 } from "./pages/Chapter07";
import { Page21, Page22 } from "./pages/Chapter08";
import { Page23, Page24, Page25 } from "./pages/Chapter09";
import { Page26, Page27, Page28 } from "./pages/Chapter10";

export default function App() {
  return (
    <EbookViewer>
      <Page01Cover />
      <Page02 />
      <Page03 />
      <Page04 />
      <Page05 />
      <Page06 />
      <Page07 />
      <Page08 />
      <Page09 />
      <Page10 />
      <Page11 />
      <Page12 />
      <Page13 />
      <Page14 />
      <Page15 />
      <Page16 />
      <Page17 />
      <Page18 />
      <Page19 />
      <Page20 />
      <Page21 />
      <Page22 />
      <Page23 />
      <Page24 />
      <Page25 />
      <Page26 />
      <Page27 />
      <Page28 />
    </EbookViewer>
  );
}
