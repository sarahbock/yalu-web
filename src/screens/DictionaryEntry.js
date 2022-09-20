import React, { useState, useEffect } from 'react';

import { useLocation } from "react-router-dom";
import TopNav from '../components/TopNav';
import ItemNav from '../components/ItemNav';
import SoundPlayer from '../components/SoundPlayer';

const DictionaryEntry = () => {

  const { state } = useLocation();
  const { item } = state;

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [definition, setDefinition] = useState({
    yolngu: null,
    english: null,
    plainenglish: null,
    example: null,
  });

  useEffect(() => {
    if (!item) return
    setDefinition({
      yolngu: item['yolngu'+page] ?? 'Nothing added yet',
      yolnguaudio: item['yolngu'+page+'audio']?.src ?? null,
      english: item['english'+page] ?? 'Nothing added yet',
      englishaudio: item['english'+page+'audio']?.src ?? null,
      plainenglish: item['plainenglish'+page] ?? 'Nothing added yet',
      plainenglishaudio: item['plainenglish'+page+'audio']?.src ?? null,
      example: item['example'+page] ?? 'Nothing added yet',
      exampleaudio: item['example'+page+'audio']?.src ?? null,
      titleaudio: item.titleaudio?.src ?? null,
    });
  }, [page, item])

  return(
    <div className="container dictionaryScreen">

    <TopNav title={item?.title ?? 'Entry'} back play audio={definition.titleaudio}/>

    <ItemNav onClick={setPage} page={page} totalItems={totalPages}/>

    <div className="entryContent">
      <h2>Djambarrpuyŋu</h2>
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
      <h2>English</h2>
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
      <h2>Plain English</h2>
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
      <h2>Example</h2>
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
