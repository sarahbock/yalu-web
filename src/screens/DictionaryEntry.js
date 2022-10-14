import React, { useState, useEffect } from 'react';

import { useLocation } from "react-router-dom";
import TopNav from '../components/TopNav';
import ItemNav from '../components/ItemNav';
import SoundPlayer from '../components/SoundPlayer';

const DictionaryEntry = () => {

  const { state } = useLocation();
  const { item } = state;
  const totalPages =
    (item?.yolngu3 || item?.yolngu3audio || item?.english3 || item?.english3audio || item?.plainenglish3 || item?.plainenglish3audio || item?.example3 || item?.example3audio) ? 3 :
    (item?.yolngu2 || item?.yolngu2audio || item?.english2 || item?.english2audio || item?.plainenglish2 || item?.plainenglish2audio || item?.example2 || item?.example2audio) ? 2 :
    1;

  const [page, setPage] = useState(1);

  const [definition, setDefinition] = useState({
    yolngu: null,
    english: null,
    plainenglish: null,
    example: null,
  });
  //console.log(item)

  useEffect(() => {
    if (!item) return
    setDefinition({

      yolngu: item['yolngu'+page] ? item['yolngu'+page] :
      item['yolngu'+page+'audio'] ? 'Listen to the explanation:' : 'Nothing added yet',

      yolnguaudio: item['yolngu'+page+'audio']?.src ?? null,

      english: item['english'+page] ? item['english'+page] :
      item['english'+page+'audio'] ? 'Listen to the explanation in English:' : 'Nothing added yet',

      englishaudio: item['english'+page+'audio']?.src ?? null,

      plainenglish: item['plainenglish'+page] ? item['plainenglish'+page] :
      item['plainenglish'+page+'audio'] ? 'Listen to the explanation in plain English:' : 'Nothing added yet',

      plainenglishaudio: item['plainenglish'+page+'audio']?.src ?? null,

      example: item['example'+page] ? item['example'+page] :
      item['example'+page+'audio'] ? 'Listen to an example:' : 'Nothing added yet',

      exampleaudio: item['example'+page+'audio']?.src ?? null,

      titleaudio: item.titleaudio?.src ?? null,
    });
  }, [page, item])

  return(
    <div className="container dictionaryScreen">

    <TopNav title={item?.title ?? 'Entry'} back play audio={definition.titleaudio}/>

    <ItemNav onClick={setPage} page={page} totalPages={totalPages}/>

    <div className="entryContent">
      <div className="entryContentHeader">
        Djambarrpuyŋu
      </div>
      <div className="entrySection">
        <div className="entrySectionText">
          {definition.yolngu}
        </div>
        <div className="entrySectionAudio">
          <SoundPlayer source={definition.yolnguaudio}/>
        </div>
      </div>
    </div>

    <div className="entryContent">
      <div className="entryContentHeader">
        English
      </div>
      <div className="entrySection">
        <div className="entrySectionText">
          {definition.english}
        </div>
        <div className="entrySectionAudio">
          <SoundPlayer source={definition.englishaudio}/>
        </div>
      </div>
    </div>

    <div className="entryContent">
      <div className="entryContentHeader">
        Plain English
      </div>
      <div className="entrySection">
        <div className="entrySectionText">
          {definition.plainenglish}
        </div>
        <div className="entrySectionAudio">
          <SoundPlayer source={definition.plainenglishaudio}/>
        </div>
      </div>
    </div>

    <div className="entryContent">
      <div className="entryContentHeader">
        Example
      </div>
      <div className="entrySection">
        <div className="entrySectionText">
          {definition.example}
        </div>
        <div className="entrySectionAudio">
          <SoundPlayer source={definition.exampleaudio}/>
        </div>
      </div>
    </div>

    </div>
  )
}

export default DictionaryEntry;
