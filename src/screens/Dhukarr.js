import React, { useState } from 'react';

import TopNav from '../components/TopNav';


import SoundPlayer from '../components/SoundPlayer';
import Blob from '../components/Dhukarr/Blob';
import BlobRow from '../components/Dhukarr/BlobRow';
import Anchor from '../components/Dhukarr/Anchor';
import SectionHolder from '../components/Dhukarr/SectionHolder';
import DhukarrSection from '../components/Dhukarr/DhukarrSection';
import DhukarrContent from '../components/Dhukarr/DhukarrContent';
import DhukarrMiddle from '../components/Dhukarr/DhukarrMiddle';
import Sidebar from '../components/Sidebar';

const Dhukarr = () => {

  //show in language or english?
  const [language, setLanguage] = useState(true)


  //when user clicks the language icon 
  const toggleLanguage = () => {
    setLanguage(!language);
  }

  return(
    <div className="container dictionaryScreen dhukarrScreen">

    <TopNav toggleLanguage={toggleLanguage} language={language} back noBorder title=""/>

      <div className='contentContainer'>

        {/*INTRODUCTION*/}

        <SectionHolder id='0'>

          <div className='padThinner'>
            <h1>Yolŋu Yothuw Dhukarr ŋuthanaraw ga dharaŋanaraw. Ga nhaltjan dhu gurruṯumirriy guŋga’yun yothuny.</h1>
            <h2 className='marginTop'>The Yolŋu child’s developmental pathway and ways that family monitor and support the child’s development. </h2>
            <h3 className='marginTopLarge'>Colour Key</h3>
          </div>

          <div className='blobRow blobRowThin'>

            <Blob 
              id='01' 
              colour='brown'
              english='Ongoing ways that family support the child'
              language={language}
              />

            <Blob 
              id='02' 
              colour='orange'
              english='Ways that family support the child just at this stage'
              language={language}
              />

            <Blob 
              id='03' 
              colour='yellow'
              english='What the child does - ongoing'
              language={language}
              />

            <Blob 
              id='04' 
              colour='light'
              english='What the child does – just at this stage'
              language={language}
              />  

          </div>

          <div className='blobRow blobRowThin'>

          <Blob 
              id='05' 
              colour='grey'
              english='Yellow text – ways that family assess the child’s development'
              language={language}
              />

          </div>

          <div className='padThinner marginTop paddingBottom'>
            <p>
              { language ? 
                <>Yolŋuwal mäŋutjiy ŋuli nhäma ga dharaŋan nhaltjan ga yothu ŋuthan ga marŋgithirr – Yolŋuw guyaŋanhawuy dhuwal yaka rrambaŋi nhakun Balandaw.</> : 
                <>9Yolŋu monitor and support the child’s development through watching and assessing how each child is progressing along their pathway and helping with what they need at the time – not expecting specific stages at specific ages like the Balanda system.</>
              }
              <SoundPlayer source={require('../assets/dhukarr/mp3/recording9.mp3')}/>
            </p>
          </div>

          {/*ONGOING*/}

          <DhukarrSection>

              <DhukarrContent orientation="column">

            <BlobRow>

              <Blob 
                id='8' 
                colour='brown'
                english='In the Yolŋu system, we all work together to care and support the child’s development.'
                yolngu='Dhuwal yothuw gakal yolŋuwal romŋur ŋanapurruŋgal djägany ŋuli räḻ-manapanmirr.'
                language={language}
                audio={true}
                />

              <Blob 
                id='3' 
                colour='yellow'
                english='The child knows what is best for their growth – when to sleep, eat, play (the child decides not the family).'
                yolngu='ŋayi yothu marŋgi nhaltjan ŋayi ŋuli galŋa-dhulŋithirr –  ŋorranharaw ga buḻ’yunaraw ga ŋaminiwu ŋulkthunaraw.'
                language={language}
                audio={true}
                />

              <Blob 
                id='5' 
                colour='yellow'
                english='Gurruṯu (kinship connection) testing—teaching—testing—teaching routines continue all the time until the child has demonstrated strong understanding of kinship concepts and their own relationship.'
                yolngu='Gurruṯuny ŋanapurr ŋuli marŋgi- gurrapan ŋunhi yothuny ŋayi ŋuli marrtji ŋuthan. Ga bulu ŋanapurr ŋuli walalany birrka’yun nhä ŋayi ŋunhi gurruṯu nhanŋu yothuw bitjan bili.'
                language={language}
                audio={true}
                />

              </BlobRow>

              <BlobRow>

                <Blob 
                  id='7' 
                  colour='brown'
                  english='Grandparents support and offer advice to mum and dad and rest of the family so they understand how to care for the child.'
                  yolngu='Märiy ga ŋathiy ŋuli guŋga’yun ga gurrupan dharaŋanaraw bäpaw ga ŋaṉḏiw  ga wiripuny mala gurruṯumirriw märr walal dhu dharaŋan nhaltjan walal dhu djäga yothuw.'
                  language={language}
                  audio={true}
                  />

                <Blob 
                  id='4' 
                  colour='grey'
                  english='Family constantly observe and monitor how the child is developing in all areas (identity, skills, knowledge, character etc) - ‘watching what knowledge the child has caught’ (ref).'
                  yolngu='Gurruṯumirriy ŋuli dhuwurr nhäma yothuny - nhaltjan ŋayi ŋuli romgu ga gakalwu marŋgithirr bitjan bili.'
                  language={language}
                  audio={true}
                  />

                <Blob 
                  id='6' 
                  colour='yellow'
                  english='The child decides what they want or don’t want – they have autonomy – family don’t force them or hurt their feelings by refusing to give them what they want. '
                  yolngu='Yothuw ŋayaŋu nhaku ŋayi djäl ga nhaku malaŋuw – ŋayi ŋunhi rumbal waṯaŋu – gurruṯumirriy ŋuli yaka gurkuryun wo ŋayaŋu wutthun yothuny.'
                  language={language}
                  audio={true}
                  />

              </BlobRow>

              </DhukarrContent>

             {/*SIDE BAR - ONGOING*/}

             <Sidebar 
              id='0' 
              english='Things that are ongoing throughout the dhukarr'
              yolngu='Dhuwandja dhäwu mala baḏaknha ŋuli bitjana bili  marrtji weyinŋumirra '
              language={language}
              />

          </DhukarrSection> 

        </SectionHolder>
      

       {/*SECTION 1*/}

       <SectionHolder id='1'>

            <DhukarrSection>

              <DhukarrContent orientation="column">

                <Blob 
                id='11' 
                colour='brown'
                english='Father and others provide healthy Yolŋu food for the pregnant woman e.g. shellfish, fish, kangaroo, some kinds of stingray, white clay, yams, wild fruits.'
                yolngu='Bäpa’mirriŋu ga wiripu gurruṯumirriy mala ŋuli märram Yolŋuw ŋatha yothumirriw ŋaṉḏimirriŋuw.'
                language={language}
                audio={true}
                />

                <DhukarrContent orientation="row">

                  <Blob 
                  id='12' 
                  colour='brown'
                  english='Pregnant woman can walk around and work a little bit.'
                  yolngu='Miyalk dhu yothumirriny ŋayi dhu ga gaŋga djäma ga marrtji.'
                  language={language}
                  audio={true}
                  style={{paddingTop: '40px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                  />

                <Blob 
                  id='14' 
                  colour='orange'
                  english='Family observe and recognise early signs that the woman is pregnant.'
                  yolngu='Gurruṯumirriy ŋuli nhäma ga marŋgithirr ŋunhi miyalknha ŋayi yothumirra.'
                  language={language}
                  audio={true}
                  style={{ position: 'relative', left: '20px', paddingTop: '50px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                  />

                </DhukarrContent>

                <Blob 
                  id='13' 
                  colour='brown'
                  english='Yolŋu have guidelines for avoiding certain foods to protect the baby from harmful effects  e.g. Yirritja turtle, some kinds of stingray, young sharks, hot tea, eggs of seafood – can cause physical disability.'
                  yolngu='Rom ga ŋorra yaka dhu ḻuka ŋatha bawalamirr yothumirriy miyalkthu märr ŋayi dhu yothu yaka rirrikthun ga yalŋgiyirr.'
                  language={language}
                  audio={true}
                  />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
              <Blob 
                id='15' 
                colour='yellow'
                english='Soon after conception, the spirit of the baby communicates with a family member in a dream or through a sign e.g. unusual behaviour of an animal that is the same moiety and totem of the child – the person who gets the message has a lifelong strong connection to that child - like a ‘godparent’.'
                yolngu='Ŋaḻapaḻyu Yolŋuy ŋuli dhiṉ’thun wuŋiḻi wo mawa ŋunhi ŋayi yothu yutuŋgurrpuy Yolŋuwuŋ ga malthunawuy.'
                language={language}
                link='http://growingupyolngu.com.au/index.cfm?fuseaction=page&p=231&l=1&id=71'
                audio={true}
                />

              <Blob 
                id='16' 
                colour='yellow'
                english='Mother, father and other family members communicate with the baby during pregnancy and the baby responds
                e.g. responding (kicking) when family talk to the baby; responding to what the mother is eating; telling what they want through movement, staying still when listening to a story ; family touch the mother’s body and talk to the baby about wishes and hopes for the baby’s future; the baby feels comfort.'
                yolngu='Ŋaṉdi’mirriŋuwal gulunlil walal ŋuli waŋa – bäpa’mirriŋuny ga wiripuny gurruṯu’mirriny mala ŋuli waŋa yothuwal ga yothuy ŋuli dhäkay-ŋäma bala buku-ruŋinmaram djagadjaga’yuna.'
                language={language}
                link='http://growingupyolngu.com.au/index.cfm?fuseaction=page&p=231&l=1&id=71'
                audio={true}
                />

              </DhukarrContent>

              <Sidebar 
                id='1' 
                english=''
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


        {/*SECTION 2*/}

        <Anchor id='2'/>

        <SectionHolder id='2'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                
                <Blob 
                id='18' 
                colour='brown'
                english='Family stay close to the mother, talk to her and encourage her.'
                yolngu='Gurruṯumirr ŋuli nhina galki yothumirriwal miyalkkal, ga guŋga’yun ŋanya waŋa.  '
                language={language}
                audio={true}
                style={{position: 'relative', left: '-30px', top:'-20px'}}
                />

                <DhukarrContent orientation="row">

                  <Blob 
                    id='19' 
                    colour='orange'
                    english='Family talk to encourage the baby to come when the time is right to be born.'
                    yolngu='Gurruṯumirr ŋuli ga waŋa yothuwal boṉdi’yun wäŋaw nhänharaw.'
                    language={language}
                    audio={true}
                    style={{position: 'relative', left: '20px', top:'-20px', paddingTop: '40px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                    />

                  <Blob 
                    id='20' 
                    colour='orange'
                    english='Mother walks a lot to encourage the baby to come.'
                    yolngu='Ŋäṉḏimirriŋu ŋuli ga marrtjimarrtji märr galkikum yothuny dhawal- guyaŋanharaw.'
                    language={language}
                    audio={true}
                    style={{ position: 'relative', left: '40px', top:'-30px', paddingTop: '50px', paddingBottom: '40px', paddingLeft:'30px', paddingRight: '30px' }}
                    />

                </DhukarrContent>

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
                <Blob 
              id='21' 
              colour='light'
              english='Baby kicks and moves down, giving the mother back pain, to show the time is close - the baby is ready to come out and be with the mother.'
              yolngu='Yothuy ga dhumurrdhumurryun guḻun ŋaṉḏi’mirriŋuny ga ḏiltjiŋur ŋaraka ŋuli ŋäṉḏi’mirriŋuny nhära ŋunhiyin ŋuli maŋutji-lakaram yothuny gurku’yunhawuy.'
              language={language}
              audio={true}
              style={{marginLeft:'20px' }}
              />
              
              </DhukarrContent>

              <Sidebar 
                id='2' 
                english=''
                yolngu=''
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>

        {/*SECTION 3*/}

        <Anchor id='3'/>

        <SectionHolder id='3'>

            <DhukarrSection align="top">

              <DhukarrContent orientation="column">
                
              <Blob 
                id='24' 
                colour='orange'
                english='The family give space to the mother and baby  so the baby can sleep well without disturbance – but not far, staying close.'
                yolngu='Gurruṯumirri ŋuli gurrupan dhaḻakarr ŋäṉḏi’mirriŋuw ga yothuw ŋayi dhu yothu ŋorra ga manymakkum ŋula nhämiriw.'
                language={language}
                audio={true}
                style={{marginTop:'20px', marginBottom:'40px' }}
                />

              <Blob 
                id='26' 
                colour='orange'
                english='Family members choose names for the child: connecting to the baby’s ancestors through songlines, and the land and the sea and the sky (Yirritja or Dhuwa).'
                yolngu='Gurruṯumirriy ŋuli gurrupan yäku yothuny nhanŋu yarraṯaŋur - märipuluwal ga yapapuluwal ga gäthupulu ga nhä nhanŋu bäpurru yothuw.'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='27' 
                colour='orange'
                english='Mother rubs the baby with breastmilk to make the body strong and so they sleep well; family clear the baby’s blocked nose by sucking so the baby can breathe well.'
                yolngu='Ŋäṉḏi’mirriŋu ŋuli ŋaminiy ŋamunkurryu  ḏälkum yothuny rumbal märr ŋayi dhu galŋa- ŋamathirr ga ŋorra latjukum. Ga wiripuny ŋayi ŋuli ŋurrtji ŋuḻkthun märr ŋayi dhu ŋir’yun manymakkum.'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='30' 
                colour='brown'
                english='Family teach the newborn even when tiny, for example, language and kinship. '
                yolngu='Gurruṯumirriy yothuwal ŋuli marŋgikum ŋäṉarrnha yän dhärukku ga gurruṯuw.'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='32' 
                colour='brown'
                english='Family constantly communicate with the baby - ‘building up their brain through talk’ (ref).'
                yolngu='Gurruṯu’mirrinydja ŋuli ŋurru-yirr’yun dhäruk waŋanharaw yothuw bitjan bili .'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='34' 
                colour='orange'
                english='The child is not shown to mother’s brothers too soon after birth because of kinship respect protocols between brother and sister: brothers can’t see their sister’s newborn child.'
                yolngu=''
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='37' 
                colour='brown'
                english='Family hold and care for the baby all the time. And don’t leave the baby alone.'
                yolngu='Bukmakthu gurruṯumirriy ŋuli dhangi’yun yothuny ga djäga bitjan bili walu-ŋupan. Ga yaka napurr ŋuli ganarrtham yothuny gänaŋulil.'
                language={language}
                audio={true}
                style={{ width:'100%', marginBottom:'40px' }}
                />

              <Blob 
                id='38' 
                colour='orange'
                english='Soon after birth, during a ‘smoking ceremony’, maternal grandmother and other close family move the child in their two hands through the smoke, so the child will grow strong and sleep well. Also they talk to the baby, giving spiritual advice about their pathway and how they should continue to behave as they grow. '
                yolngu='Dhuḏi-guthanamirr dhuwal rom balanya nhakun yothuny yan ŋuli goŋdhu märramay ŋayatham bala gäma ŋanya ŋäwuḻuḻkurr märr ŋanya dhu ḏälkum rumbal ga yakurr nhanŋu dhu gurrupan manymak. Ga bulu ŋanya gurrupan raypirri – bala walal ŋuli ŋaḻapaḻmirri ḻakaraman nhanukal nhaltjan ŋayi dhu ŋuthan.'
                language={language}
                audio={true}
                style={{ width:'200%' }}
                textStyle={{width:'80%'}}
                />

              <Blob 
                id='39' 
                colour='brown'
                english='Grandparents support and offer advice to mum and dad and rest of the family so they understand how to care for the child.'
                yolngu=''
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

              </DhukarrContent>

              <DhukarrContent orientation="column">

              <Blob 
                id='25' 
                colour='grey'
                english='Family test hearing and vision and body – e.g. checking response to high and low sounds; checking how baby’s eyes track hand or body movements; finding out what support that child needs and how to communicate. If the baby has a problem family think about what the mother ate during pregnancy that might have caused it.'
                yolngu=''
                language={language}
                audio={true}
                style={{marginTop:'40px', marginBottom:'40px' }}
                />

                <Blob 
                id='23' 
                colour='brown'
                english='When the baby sees the world (at the time of birth) close family introduce themselves to the baby telling their kinship connection - this continues from birth throughout childhood whenever family meet the child.'
                yolngu='Ŋunhi ŋuli yothuy wäŋa nhäma, ŋayi gurruṯumirriy yothuwal ŋuli waŋan gurruṯu lakaranhamirra nhanukal yothuwal.'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='31' 
                colour='orange'
                english='The family use child language and sign language for example food, grandfather, come for a cuddle…'
                yolngu='Yothuwal gurruṯumirriy ŋuli yalŋgi matha waŋa ga goŋdhu ŋuli milkum yothuw balanya nhakun ŋatha, ŋathi, wäthun yothuw dhangi’yunaraw’.'
                language={language}
                audio={true}
                style={{marginBottom:'40px' }}
                />

                <Blob 
                id='33' 
                colour='orange'
                english='When the child is sick family collect and prepare bush medicine – eucalyptus leaves and other healing plants - leaves and bark and other traditional medicine from the beach for healing the baby. '
                yolngu='Ŋunhi ŋuli yothu rirrikthun ŋayi ŋuli gurruṯumirriy guŋga’yun djäma gaḏayka ga wiripuwiripu ḏukthunamirr mala man’tjarr ga dharpa ga wiripuny raŋipuy mala rerriw ḏukmaranharaw ga ḻaymaranharaw.'
                language={language}
                audio={true}
                style={{marginBottom:'40px', position: 'relative', left: '40px', top:'20px'  }}
                
                />

                <Blob 
                id='36' 
                colour='brown'
                english='Father supports the mother in caring for the child. Immediate to extended family also care for the child.'
                yolngu='Bäpa’mirriŋuy ŋuli guŋga’yun ŋäṉḏi’miriŋuny djägaw yothuw.  Ga bulu ŋuli gurruṯumirr bukmak djäga ŋurikiyi yothuw.'
                language={language}
                audio={true}
                style={{ position: 'relative', left: '40px', top:'20px' }}
                />

                <Blob 
                  id='40' 
                  colour='brown'
                  english='The baby is included in all family activities – hunting, visiting, shopping, playing, ceremony.'
                  yolngu='Yothu ŋuli malthun bitjan bili bukmakku gurruṯumirriw - wakalkurr, huntingkurr ga bäpurrukurr.'
                  language={language}
                  audio={true}
                  style={{ position: 'relative', top: '700px', left:'60px' }}
                  />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
                <Blob 
                  id='28' 
                  colour='yellow'
                  english='The baby recognises mother’s and father’s voice and smell –  recognising the smell makes the baby feel comforted.'
                  yolngu='Yothuy dharaŋan ŋuli ŋäṉḏi’mirriŋuny ga bäpa’mirriŋuny ga bulu ŋayi ŋuli ŋäma rirrakay ga buŋgan ŋuli nhuman dharaŋan. Ga wiripuny ŋayi marŋgi buŋgangu bala ŋanya ŋuli ŋayaŋu mulka’kuman.'
                  language={language}
                  audio={true}
                  style={{marginTop:'30px' }}
                  />

                <Blob 
                id='29' 
                colour='yellow'
                english='The baby communicates with family: for example, the baby cries to bring the mother back to have the taste of breastmilk; baby expresses discomfort when wet or dirty nappy. '
                yolngu='Yothuy ŋuli marŋgi gurrupan gurruṯumirriny: balanya nhakun ŋaṉḏi’mirriŋuny ŋayi ŋuli rälimirriyam ŋäthi ŋaminiw dhäkaywu ga wiripuny ŋayi yothu dhu melnyaŋ’thun waryun ga biḻkthun ŋayi dhu bala ŋäthin.'
                language={language}
                audio={true}
                style={{ position: 'relative',  top:'80px'}}
                />
                
                <Blob 
                id='35' 
                colour='yellow'
                english='The baby recognises and responds to immediate family. The baby feels the person that holds them. They hear the voices of their family and they respond e.g. smiles, eye contact, excitement, movement reacting to familiar immediate family – looking or turning head to see who’s speaking.'
                yolngu='Yothuy ŋuli dhäkay-ŋäma Yolŋuny goŋ-dhangi’yunawuy. Ga rirrakay ŋäma gurruṯu’mirriny ga ŋayi ŋuli yothuy ŋäma dharaŋan bala ŋäman ŋunhiyi rirrakay bala ŋupana.'
                language={language}
                audio={true}
                style={{ position: 'relative', top:'140px', paddingTop: '100px', paddingBottom: '50px', paddingLeft:'50px', paddingRight: '50px' }}
                />

              </DhukarrContent>

              <Sidebar 
                id='3' 
                english='Newborn'
                yolngu='Dhuwandja dhäwu Ŋäṉarrwu yothuw'
                language={language}
                />
            
            </DhukarrSection>
            

           </SectionHolder>


         {/*SECTION 4*/}

         <Anchor id='4'/>

         <SectionHolder id='4'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                
              <Blob 
                id='45' 
                colour='brown'
                english='Family sing lullabies to the baby.'
                yolngu='Gurruṯumirriy ŋuli ḏar’ṯaryun manikay yothuwal.'
                language={language}
                audio={true}
                style={{ position: 'relative', left:'140px'}}
                />

              <Blob 
                id='43' 
                colour='grey'
                english='Family monitor baby’s health through checking every part of the body and body functions.'
                yolngu='Gurruṯumirriy ŋuli nhäma bukmak rumbal yothuny  nhaltjan ŋayi ga ŋuthan.'
                language={language}
                audio={true}
                style={{ width:'80%' }}
                />

              <Blob 
                id='44' 
                colour='orange'
                english='Mother continues to avoid certain foods to protect the breast-feeding baby from harmful effects.'
                yolngu='Baḏak rom ga ŋorra yaka dhu ḻuka ŋatha bawalamirr ŋäṉḏi’mirriŋuy ŋunhi yothu nyumukuṉiny ga yalŋgi yän.'
                language={language}
                audio={true}
                />

              <Blob 
                id='46' 
                colour='orange'
                english='Family can now introduce the baby to mother’s brothers.'
                yolngu='Ŋunhi yothu ŋuli märr gurrŋanthirra bala ŋapipi’mirriŋuy ŋuli nhäman.'
                language={language}
                audio={true}
                />

              <Blob 
                id='47' 
                colour='brown'
                english='The family effectively monitor and recognise the child’s development.'
                yolngu='Gurruṯumirriy yothuwal ŋuli dharaŋaṉ nhäman nhanŋu ŋunhi gakal dhuwal mirithirr manymak.'
                language={language}
                audio={true}
                style={{ position: 'relative', top:'-40px',left:'40px', width:'80%' }}
                />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
               
              <Blob 
                id='48' 
                colour='light'
                english='Baby communicates their thoughts and feelings through their body movement and facial expressions that the family recognise.'
                yolngu='Yothuy ŋuli ŋayaŋuy ga guyaŋanhawuyyu rumbalyu ga bukuy milkum, ga gurruṯu’mirri ŋuli dharaŋan.'
                language={language}
                audio={true}
                style={{ position: 'relative', top:'80px', left:'30px' }}
                />

              <Blob 
                id='50' 
                colour='light'
                english='Vomiting (a little) is a sign that baby is starting to vocalise.'
                yolngu='Gakthunamirr gakal nhanŋu yothu ŋayi dhu marrtji waŋa’waŋan.'
                language={language}
                audio={true}
                style={{ position: 'relative', top:'-230px', left:'30px' }}
                />

              </DhukarrContent>
              
              <DhukarrContent orientation="column">
              
              <Blob 
                id='42' 
                colour='light'
                english='The baby is starting to recognise extended family.'
                yolngu='Yothuy ŋuli dhoka dharaŋan bukmaknha gurruṯumirriny mala.'
                language={language}
                audio={true}
                style={{ marginTop:'70px' }}
                />

              <Blob 
                id='49' 
                colour='light'
                english='When the baby talks (vocalises) and cries a lot it helps the body grow strong.'
                yolngu='Yothuny ŋuli ga waŋa ga bulu ŋäthi ŋunhiyiny ŋanya ŋuli ga ḏälkum nhanŋu rumbal.'
                language={language}
                audio={true}
                style={{ position: 'relative', left:'30px', width:'50%' }}
                />

              <Blob 
                id='51' 
                colour='light'
                english='When the baby sees and/or hears family members the baby starts ‘talking’ - often over the phone!'
                yolngu='Yothuy ŋuli ŋäma ga nhäma gurruṯu’mirriny bala ŋayi ŋuli waŋan gurruṯu’mirrwal. '
                language={language}
                audio={true}
                style={{ position: 'relative', left:'30px', top:'-20px', width:'50%' }}
                />

              <Blob 
                id='52' 
                colour='yellow'
                english='The baby is starting to learn identity and connections: family talking into the baby’s ears, teaching about their name, subsection, their language and kinship connections.'
                yolngu='Yothuy ŋuli märr dharaŋan yol ŋayi mälk, yol ŋayi yäku ga nhä nhanŋu dhäruk ga nhä nhanŋu gurruṯu, ŋayi ŋuli ŋäṉḏi’mirriŋuy ga wiripu Yolŋuy marŋgikum lakaram yothuwal buthurulil.'
                language={language}
                audio={true}
                style={{ position: 'relative', left:'-90px', top:'-20px', width:'100%' }}
                />

              </DhukarrContent>

              <Sidebar 
                id='4' 
                english='Skin getting darker'
                yolngu='Dhuwandja dhäwu ŋunhi gurrŋan’thirra ŋuli yothu'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


         {/*SECTION 5*/}

         <Anchor id='5'/>

         <SectionHolder id='5'>

            <DhukarrSection align="top">

              <DhukarrContent orientation="column" flex={2}>
                
              <Blob 
                id='54' 
                colour='grey'
                english='Families encourage the child to notice and localise the source of a sound – planes, birds, cars… pointing, turning their head, telling the child what it is.'
                yolngu='Bukmakthu ŋuli gurruṯumirriy yothuwal marŋgikum bukmakku rirrakay mala balanya nhakun biḻanygu, mutikaw, warrakangu.. Ga bulu ŋuli melkum yothuwal goŋdhu ga mulkurr bilmaram märr ŋayi dhu nhäma ga gurruṯumirriy ŋuli ḻakaram yäku mala.'
                language={language}
                audio={true}
                style={{ }}
                />

              <Blob 
                id='55' 
                colour='brown'
                english='Family sing the child’s clan songs.'
                yolngu='Gurruṯumirriy ŋuli ḏar’ṯaryun ŋurikiyi yothuw nhanŋuwuy manikay bäpurrukurr.'
                language={language}
                audio={true}
                style={{ position:'relative', left:'-80px'}}
                />

              <Blob 
                id='56' 
                colour='brown'
                english='Close family care for the child so the child gets to know them, for example grandmothers, grandfathers, aunts, uncles, brothers and sisters.'
                yolngu='Gurruṯumirriy ŋuli guŋga’yun yothuny märr ŋayi dhu yothuy dharaŋan gurruṯumirriny, balanya nhakun momuny, mari’muny, märiny, ŋathiny, mukulnha, ŋapipiny, yapany ga wawany. '
                language={language}
                audio={true}
                style={{ }}
                />

              <Blob 
                id='62' 
                colour='grey'
                english='Family help the child to sit and stand - testing the bones and body and feet.'
                yolngu='Gurruṯu’mirriy ŋuli guŋga’yun yothuny dhärranharaw birrka’yun ŋuli rumbal ga ŋaraka ga luku.'
                language={language}
                audio={true}
                style={{ position:'relative', left:'-80px', top:'10px', marginTop:'20px'}}
                />

              <Blob 
                id='63' 
                colour='orange'
                english='Family make the food soft in their mouth then gives to the child so they don’t choke.'
                yolngu='Gurruṯumirriy mala ŋuli ŋatha yalŋgikum gurrapanaraw yothuw dhurrwaray märr walal dhu yaka gaṯmaram.'
                language={language}
                audio={true}
                style={{width:'100%', marginTop:'30px' }}
                />

              <Blob 
                id='64' 
                colour='grey'
                english='Family watch carefully for allergic reactions to any food.'
                yolngu='Gurruṯumirriy mala ŋuli nhäma yothu nhä mala ŋatha walalaŋ yaka manymak.'
                language={language}
                audio={true}
                style={{marginTop:'30px' }}
                />

              <Blob 
                id='67' 
                colour='grey'
                english='All the family test the child’s recognition of their kinship connections by asking, for example,  ‘where is mother, where is sister?’ and watching if the child understands and turns to or looks at the right person. '
                yolngu='Bukmak gurruṯumirriy ŋuli birrka’yun ŋunhi yothuny gurruṯu mala balanya nhakun ‘wanha ŋäṉdi? wanha yapa?’ ga nhäma ŋayi ŋuli ga rirrakay ŋayi ŋuli ŋäma.'
                language={language}
                audio={true}
                style={{ position:'relative', left:'80px', top:'10px', marginTop:'20px'}}
                textStyle={{ width:'60%'}}
                />

             

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
              
              <Blob 
                id='57' 
                colour='light'
                english='The baby listens to and notices the tune of the song e.g. their own clan song.'
                yolngu='Yothuy ŋuli rirrakay manikay nhanŋuwuy ŋäma ga dharaŋan.'
                language={language}
                audio={true}
                style={{ position:'relative', left:'50px', top:'50px', width:'100%'}}
                textStyle={{ width:'80%' }}
                />

              <Blob 
                id='58' 
                colour='light'
                english='The child reaches for the person or cries for that person that they recognise – and turns away from someone they don’t know.'
                yolngu='Yothuy ŋuli dharaŋan gurruṯumirriny bala walal ŋuli ŋäthi malthuna. Ga wiripuny walal ŋuli yaka dharaŋan gurruṯumirriny bala yothuy ŋuli ŋäthi ga yakan nhäma ŋanya. '
                language={language}
                audio={true}
                style={{ position:'relative', left:'-30px', top:'150px', width:'100%'}}
                textStyle={{ width:'80%' }}
                />

              </DhukarrContent>
              
              <DhukarrContent orientation="column">
                
                <Blob 
                  id='60' 
                  colour='light'
                  english='The child is noticing and recognising sounds in the environment.'
                  yolngu='Yothu ga marŋgithirr ŋänharaw rirrakaywu bawalamirriw.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', left:'30px', top:'20px', marginTop:'300px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='59' 
                  colour='light'
                  english='Starting to use sign language e.g. for food, calling someone to come to them, kinship sign for maternal grandfather (favourite early sign because it’s easy to do and intensely encouraged).'
                  yolngu='Goŋdhu ŋuli yothuy wanaŋgum ŋunhi ŋayi ŋuli ŋurru-yirr’yuna, balanya nhakun ŋatha, wäthun ga ŋathi.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', top:'20px', marginTop:'50px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='61' 
                  colour='light'
                  english='The child is talking (vocalising) a lot. Family often interpret vocalisations as meaningful words.'
                  yolngu='Yothu ŋuli waŋa mirithirra yalŋgin dhäruk. '
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='65' 
                  colour='yellow'
                  english='The child already knows his family and sits close to them, watching and listening, to learn about the songs and dancing in ceremony area.'
                  yolngu='Ŋayi yothu bilin marŋgin ŋayi dhu nhäma gurruṯu’mirriny ga nhina gurruṯu’mirriwal galki ga nhäma ga ŋäma bala ŋayi dhu marŋgithirr manikaywu ga buŋgulwu.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='66' 
                  colour='yellow'
                  english='The child starts to eat soft foods e.g. fish, fruit and vegetables. The start to smell, taste and try different food.'
                  yolngu='Yothuy ŋuli ḻuka yalŋgimirr ŋatha balanya nhakun guya ga borum mala. Ŋayi ga nhuman, biḻaŋ’thun ga birrka’yun balanya ŋatha mala.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='68' 
                  colour='yellow'
                  english='The child is learning by themselves to develop their strength in many ways – independence is encouraged by families.'
                  yolngu='Gaḏaman’thirr ŋayi dhu yothu gäna yan; gurruṯumirriy ga marŋgikum ŋayi dhu gäna ŋamaŋamayunmirr.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='69' 
                  colour='yellow'
                  english='The baby feels strength within their body and forces themselves to try the next level and feels excited.'
                  yolngu='Yothuy ŋuli dhäkay-ŋama ganydjarr nhanukiyingal rumbalŋur ga ŋayaŋuŋur bala ŋayi ŋuli dhayuŋanmirra ga dharaŋana ga djulŋithirra.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />

                <Blob 
                  id='70' 
                  colour='yellow'
                  english='Diarrhoea is a sign that the baby is ready to roll over, crawl, walk, run, talk and stand up.'
                  yolngu='Milŋiny’thu ŋuli maŋuti-ḻakaram yothuny bilyunaraw, gaḻ’yunaraw, marrtjinyaraw, waṉḏinyaraw, ga waŋanharaw ga dhärranharaw.'
                  language={language}
                  audio={true}
                  style={{ position:'relative', width:'100%', left:'-100px', marginTop:'40px'}}
                  textStyle={{ }}
                  />
               

              </DhukarrContent>

              <Sidebar 
                id='5' 
                english='Turning over stage'
                yolngu='Dhuwandja dhäwu yothuw bilyu’pilyunamirriw '
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


         {/*SECTION 6*/}

         <Anchor id='6'/>

         <SectionHolder id='6'>

            <DhukarrSection align='top'>

              <DhukarrContent orientation="column">
                
              <Blob 
                  id='71' 
                  colour='orange'
                  english='Giving the child a hot sand massage to strengthen knee, hip and leg muscles for crawling, standing, walking (done in sitting and crawling stages).'
                  yolngu='Murma’murmaram yothuny bun’kumu ŋuli ḏälkum ga dharwan ga yaŋaran. '
                  language={language}
                  audio={true}
                  style={{ }}
                  textStyle={{ }}
                  />

                <Blob 
                  id='72' 
                  colour='brown'
                  english='Lots of encouraging words from family including other kids – talking to the child who gets excited.'
                  yolngu='Dharrway gurruṯumirriy mala ga djamarrkuliy mala ŋuli guŋga’yunmirr dhäruk mala waŋanamirr bala ŋayiny yothuny ŋuli galŋa-djulŋithirra. '
                  language={language}
                  audio={true}
                  style={{ position:'relative', left:'100px'}}
                  textStyle={{ width:'80%'}}
                  />

                <Blob 
                  id='75' 
                  colour='brown'
                  english='Family support and connect the child to the world to help that child feel safe and comfortable – not shy or scared.'
                  yolngu='Gurruṯumirriy ŋuli guŋga’yun ga märr-dharaŋan wanganyŋulil wäŋalil märr ŋayi dhu yothu nhina manymakum ga galŋa-djulŋithirr ga yaka barrarirr ga gora.'
                  language={language}
                  audio={true}
                  style={{ marginTop:'50px'}}
                  textStyle={{width:'80%' }}
                  />

                <Blob 
                  id='80' 
                  colour='brown'
                  english='Families teach and test child’s understanding of names of people and things around them – watching to see if they look in the right direction when they hear the word.'
                  yolngu='Gurruṯumirriy yothuwal ŋuli lakaram yäkuw bukmak nhä mala ŋayi ŋuli yothuy dharaŋan bala nhäman.'
                  language={language}
                  audio={true}
                  style={{ marginTop:'300px'}}
                  textStyle={{width:'80%' }}
                  />


              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
               
              <Blob 
                  id='73' 
                  colour='yellow'
                  english='Child is learning names of immediate family and recognising extended family.'
                  yolngu='Yothu ŋuli marŋgithirr ŋurruŋuny gurruriŋu gurruṯumirriw ga dharaŋan ŋuli wangany ŋunhany gurruṯumirriny mala. '
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'50px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='74' 
                  colour='light'
                  english='The child gets pain in their mouth, indicating that a tooth is coming (might happen earlier before sitting up stage).'
                  yolngu='Yothu ŋuli dhurrwara djetjimirriyirr maŋutji lakaram ŋuli lirraw ŋuthanaraw. '
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'70px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='76' 
                  colour='yellow'
                  english='The child is strong and capable to understand how to follow their pathway.'
                  yolngu='Mirithirr ŋayi dhuwal ḏäl ga ŋamakurr yothuw dharaŋanaraw märr ŋayi dhu marŋgithirr ga malthun ŋurikiyi dhukarrwu. '
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'50px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='77' 
                  colour='light'
                  english='The child is learning to recognise family’s feelings and emotions.'
                  yolngu='Yothuny ga marŋgithirr ga dharaŋan nhanukal ŋayi ŋayaŋuy gurruṯumirriny.'
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'20px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='78' 
                  colour='light'
                  english='The child copies facial expressions of excitement, anger, worry, happiness and funny faces when family show them – a frequent activity with many family members.'
                  yolngu='Yothuy ŋuli wanaŋgum bukuy dhäwu mala ŋunhi djulŋithinyamirriy ga maḏakarritjthirr ga warwuyun ga gitkithun ga biyarrmak buku mala milkum. '
                  language={language}
                  audio={true}
                  style={{marginTop:'50px' }}
                  textStyle={{ }}
                  />
              
              <Blob 
                  id='81' 
                  colour='light'
                  english='The child is learning to grab things and put them in their mouth. '
                  yolngu='Yothu ŋuli marŋgithirr  bawalamirriw märranharaw  ga ḻukanharaw.'
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'-100px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='82' 
                  colour='light'
                  english='The child is moving their body – dancing – when they hear a song or clapsticks or didgeridoo, showing the family what the child knows – a clever child. '
                  yolngu='Yothu ga gäna buŋgu’puŋguyun ŋunhi ŋayi ga burr’yun ga miḻkum ŋayi ga gurruṯumirriny nhakun ŋayi marŋgin – gaḏaman’nha yothu.'
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'-10px' }}
                  textStyle={{ width:'80%'}}
                  />

              <Blob 
                  id='83' 
                  colour='light'
                  english='The child understands some words, e.g. close family names and kinship terms and common objects in their environment. They show their understanding by looking towards whatever the family names. '
                  yolngu='Yothuy ŋuli dharaŋan ‘lurrkun’ yäku balanya nhakun gurruṯumirriny yäku ga wiripu mala yäku. Ŋayi ŋuli  milkum nhä ŋayi ŋuli dharaŋan – ŋayi ŋuli bilyuna bala nhäman.'
                  language={language}
                  audio={true}
                  style={{marginTop:'50px', position:'relative', left:'60px' }}
                  textStyle={{ width:'50%'}}
                  />

              </DhukarrContent>

              <Sidebar 
                id='6' 
                english='Sitting up stage'
                yolngu='Dhuwandja dhäwu yothuw nhina’nhinanhamirriw'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


         {/*SECTION 7*/}

         <Anchor id='7'/>

         <SectionHolder id='7'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                
              <Blob 
                  id='85' 
                  colour='brown'
                  english='Family are teaching the child language all the time, for example words and hand signs about kinship – and testing their learning.'
                  yolngu='Gurruṯumirriy ŋuli ga marŋgikum yothuny dhärukku ga wanaŋgum goŋdhu bitjan bili, nhakun gurruṯumirriny yäku ga bawalamirr – gurruṯumirriy mala birrka’yun ŋuli yothuny bitjan bili. '
                  language={language}
                  audio={true}
                  style={{marginTop:'30px'}}
                  textStyle={{}}
                  />

              <Blob 
                  id='86' 
                  colour='brown'
                  english='Family explain and teach the child about safe places for playing and crawling. '
                  yolngu='Gurruṯu’mirriy ŋuli ḻakaram ga marŋgikum yothuny wanha ŋayi manymak wäŋa buḻ’yunaraw ga gaḻ’yunaraw.'
                  language={language}
                  audio={true}
                  style={{}}
                  textStyle={{}}
                  />

              <Blob 
                  id='88' 
                  colour='grey'
                  english='Family encourage the child to recognise and claim their connection to a close family member through cuddling that person and saying ‘she’s my mother/sister/cousin etc’ and the child responds by crying or getting angry or sad.'
                  yolngu='Gurruṯumirriy ŋuli yothuny wakal marram ga dhangi’yun waŋganyŋuny yolŋuny bala walal ŋuli ŋäthin ga maḏakarritjthirra bala warwuyuna bitjan nhakun galki’puynha gurruṯu’mirriny bili ŋayi ŋunhi yothu marŋgi ŋunhi nhanŋu ŋayi gurruṯu’mirr.'
                  language={language}
                  audio={true}
                  style={{}}
                  textStyle={{}}
                  />

              <Blob 
                  id='92' 
                  colour='brown'
                  english='Family teach the child to be confident, not afraid or easily upset – e.g. distracting not giving sympathy if the child is hurt or upset. This is the character of the child we want to develop through calming them when they are hurt. '
                  yolngu='Gurruṯumirriy ŋuli marŋgikum yothuny märr ŋayi dhu ŋoy-ḏälthirr ga yaka barrarirr ga ŋayaŋu miḏikirr dhuwandja gakal yolŋuw yothuw ŋanapurr ŋuli ŋayaŋu mulka’kum yothuny ŋunhi walal ŋuli galkirri.'
                  language={language}
                  audio={true}
                  style={{}}
                  textStyle={{}}
                  />

              <Blob 
                  id='93' 
                  colour='brown'
                  english='High priority for families is that children feel safe and loved. '
                  yolngu='Djamarrkuliw’ rom ŋurruŋu mirithirr walal dhu dhäkay ŋäma manymak wo mägaya rom ga märr-ŋamathinyawuy.'
                  language={language}
                  audio={true}
                  style={{position:'relative', left:'-20px', top:'-30px', width:'40%'}}
                  textStyle={{width:'70%'}}
                  />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
                <Blob 
                    id='87' 
                    colour='light'
                    english='The child copies what mother and other family show the child.'
                    yolngu='Yothuy ŋuli waṉaŋgum ŋäṉḏi’mirriŋuny ga gurruṯu’mirriny mala nhä walal ŋuli milkum yothuwal.'
                    language={language}
                    audio={true}
                    style={{position:'relative', left:'100px', marginTop:'20px', width:'40%'}}
                    textStyle={{}}
                    />

                <Blob 
                    id='89' 
                    colour='light'
                    english='The child is following instructions and recognising tone of voice.'
                    yolngu='Yothu ŋuli ga buthuru-bitjun ga ŋäma rirrakay nhaku walal ŋuli waŋa märranharaw walal ŋuli dhunupa galyuna.'
                    language={language}
                    audio={true}
                    style={{}}
                    textStyle={{}}
                    />

                <Blob 
                    id='90' 
                    colour='light'
                    english='The child becomes interested to try different foods. '
                    yolngu='Yothu ŋuli mirithirr wanaŋirr ŋathaw bawalamirriw ḻukanharaw.'
                    language={language}
                    audio={true}
                    style={{position:'relative', left:'100px', width:'50%'}}
                    textStyle={{}}
                    />

                <Blob 
                    id='91' 
                    colour='light'
                    english='The child gets diarrhoea as a sign that the child will start to stand up.'
                    yolngu='Yothu ŋuli milŋiny’mirriyirr ŋunhi ŋayi ŋuli maŋutji-lakaram ŋayi dhu dhärra.'
                    language={language}
                    audio={true}
                    style={{position:'relative', left:'50px', width:'60%'}}
                    textStyle={{}}
                    />

                <Blob 
                    id='94' 
                    colour='yellow'
                    english='The child is observing and remembering experiences with extended family.'
                    yolngu='Yothuwal gurruṯumrriy ŋuli gakal nhäma, bala marŋgithirra.'
                    language={language}
                    audio={true}
                    style={{position:'relative', left:'100px', top:'-40px', width:'50%'}}
                    textStyle={{}}
                    />

                <Blob 
                    id='95' 
                    colour='yellow'
                    english='The child learns through exploring what is good and bad e.g. experiencing dangerous things - knife, hot water, hot sand, fire –but family watch and explain danger to make sure they don’t hurt themselves: mistakes are allowed if they are safe.'
                    yolngu='Yothu marŋgithirr dhäkay-ŋänharaw nhä manymak ga nhä maḏakarritj nhakun yiki’, gorrmur gapu ga gorrmur munatha ga gurtha.'
                    language={language}
                    audio={true}
                    style={{position:'relative', top:'-50px', width:'100%'}}
                    textStyle={{width:'60%'}}
                    />

              </DhukarrContent>

              <Sidebar 
                id='7' 
                english='Crawling stage'
                yolngu='Dhuwandja dhäwu yothuw gaḻ’yunamirriw'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


           {/*SECTION 8*/}

           <Anchor id='8'/>

           <SectionHolder id='8'>

            <DhukarrSection align='top'>

              <DhukarrContent orientation="column">
                
              <Blob 
                  id='97' 
                  colour='orange'
                  english='Family hold the child’s hands to support then to stand and to walk.'
                  yolngu='Gurruṯumirriy ŋuli ŋarambiya  ŋayatham yothuny  ḏälkum dhärranharaw ga marrtjinaraw.'
                  language={language}
                  audio={true}
                  style={{marginTop:'100px'}}
                  textStyle={{}}
                  />

              <Blob 
                  id='98' 
                  colour='grey'
                  english='Family encourage and praise the child when they show their development – in many areas.'
                  yolngu='Gurruṯumirr ŋuli galŋa djulŋithirr ga wokṯhun ŋuriki yothu gakalwu.'
                  language={language}
                  audio={true}
                  style={{width:'60%', marginTop:'30px'}}
                  textStyle={{}}
                  />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
               
                <Blob 
                  id='99' 
                  colour='light'
                  english='When the child stands, they feel for what they can hold for support.'
                  yolngu='Yothuy ŋuli dhärra ga dhäkay-ŋäma nhä ŋayi dhu ŋayatham guŋga’yunaraw.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-50px', marginTop:'40px'}}
                  textStyle={{}}
                  />

                <Blob 
                  id='100' 
                  colour='light'
                  english='When the child is able to stand and shows the family he/she knows how to dance – already learned from watching.'
                  yolngu='Ŋunhi yothu dhärranhamirrnydja ŋunhi ŋayi marŋgin burr’yunaraw bili ŋayi ga dharaŋana. '
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '50px', marginTop:'20px'}}
                  textStyle={{width:'80%'}}
                  />

                <Blob 
                  id='101' 
                  colour='light'
                  english='The child is ready to stand, wanting to pull her/himself up to strengthen the nerves, legs, feet, bones and their whole body.'
                  yolngu='Ŋunhi ŋayi ga yothu dhärra’tharra ga djälthirr rur’yunaraw ŋunhiyiny ḏälkum ga dhunupayam nhanŋuwuy gurrkurr ga yaŋara ga luku ga ŋaraka ga nhanŋu rumbal.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-80px', marginTop:'40px'}}
                  textStyle={{}}
                  />

                <Blob 
                  id='102' 
                  colour='light'
                  english='When the child is vomiting a little it’s a sign that the child is starting to talk. '
                  yolngu='Ŋunhi ṉuli yothu gakthun nyumukuṉiny gaŋaru maŋuti-lakaram ŋuli waŋanharawnha.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '80px', marginTop:'40px'}}
                  textStyle={{width:'80%'}}
                  />

                <Blob 
                  id='103' 
                  colour='light'
                  english='Family start to use adult language (not child language register) so the child will start to learn adult language.'
                  yolngu='Gurruṯu’mirriy ŋuli märr ḏälkum dhäruk waŋa märr ŋayi dhu yothu ḏäl dhärukku marŋgithirr.'
                  language={language}
                  audio={true}
                  style={{marginTop:'40px'}}
                  textStyle={{width:'80%'}}
                  />

              </DhukarrContent>

              <Sidebar 
                id='8' 
                english='Standing up'
                yolngu='Dhuwandja dhäwu yothuw dhärra’tharranhamirriw'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


         {/*SECTION 9*/}

         <Anchor id='9'/>

         <SectionHolder id='9'>

            <DhukarrSection align='top'>

              <DhukarrContent orientation="column">
                
              <Blob 
                  id='106' 
                  colour='orange'
                  english='Family are preparing the child for two worlds - introducing English words.'
                  yolngu='Gurruṯumirriy ŋuli ŋamaŋamayun yothuny märrmaw’ dhukarrwu Yolŋuw ga Balandaw: märr walal dhu marŋgithirr dhärukku Balandaw.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-50px', marginTop:'40px'}}
                  textStyle={{width:'60%'}}
                  />
              <Blob 
                  id='105' 
                  colour='brown'
                  english='Family repeatedly explain to the child what is safe or dangerous, good or bad, so the child understands. All family support and take care of the child - the child feels that care so doesn’t get upset and is safe.                   '
                  yolngu='Gurruṯumirriy ŋuli waŋa dharrwamirr märr yothuy dhu dharaŋan  wanha yätjkurr ga wanha manymak. Bukmakthu gurruṯmirriy ŋuli guŋga’yun ga djäga yothuw märr ŋayi dhu dhäkay-ŋäma guŋga’yunamirr ga yaka galŋa-miḏikirr  märr yothu dhu marrtji manymakum.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-30px', marginTop:'40px', width:'100%'}}
                  textStyle={{width:'70%'}}
                  />

              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                
              <Blob 
                  id='107' 
                  colour='yellow'
                  english='The child has expert ears for listening  – even when the are busy playing at the same time they are listening to all the sounds around them – close and distant. The child can pay attention to more than one thing at a time.'
                  yolngu='Yothuwdja dhuwal buthuru djambatj ŋänaraw ŋunhi ŋayi ga bul’yun ga bulu ŋäyi ŋuli ŋäma rirrakay bawalamirr.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-50px', marginTop:'40px'}}
                  textStyle={{}}
                  />
              <Blob 
                  id='108' 
                  colour='yellow'
                  english='The child is learning the meaning of their names and their clan -  everything about their identity - and the stories connecting the child to the past and the present.'
                  yolngu='Yothu ga marŋgithirr nhanŋuwuy yäku mayaliw ga bäpurruw ga bukmakku nhanŋuwuy ŋayi dhäwu beŋur ŋurru-yirr’yunaŋur ga dhiyaŋun bala.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '50px', marginTop:'50px'}}
                  textStyle={{width:'80%'}}
                  />

              <Blob 
                  id='109' 
                  colour='yellow'
                  english='The child is starting to learn English.'
                  yolngu='Yothu dhu ŋurru-yirr’yun marŋgithirr Balandaw mathaw.'
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '50px', marginTop:'40px', width:'50%'}}
                  textStyle={{width:'50%'}}
                  />
              <Blob 
                  id='110' 
                  colour='yellow'
                  english='The child is listening to and understanding different Yolŋu languages The child is strongly learning their father’s language, cultural system and ceremony – this is important for developing a strong identity.'
                  yolngu='Yothuy ŋuli ŋäma ga dharaŋan dhäruk mala. Yothu dhu mirithirr marŋgithirr nhanŋu bäpa’mirriŋuw dhärukku ga romgu ga buŋgulwu. '
                  language={language}
                  audio={true}
                  style={{position: 'relative', left: '-100px', marginTop:'40px', width:'100%'}}
                  textStyle={{width:'50%'}}
                  />
              

              </DhukarrContent>

              <Sidebar 
                id='9' 
                english=''
                yolngu='Dhuwandja dhäwu yothuw marrtji’marrtjinyamirriw'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


           {/*SECTION 10*/}

           <Anchor id='10'/>

           <SectionHolder id='10'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
              </DhukarrContent>

              <Sidebar 
                id='10' 
                english='Toddler stage'
                yolngu='Dhuwandja dhäwu yothuw djandjanmirriw ḏälnha marrtjinyaraw '
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>

         {/*SECTION 11*/}

         <Anchor id='11'/>

         <SectionHolder id='11'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
              </DhukarrContent>

              <Sidebar 
                id='11' 
                english='Running, jumping and playing stage'
                yolngu='Dhuwandja dhäwu yothuw waṉḏinyamirr ga wapthunamirr  ga buḻ’yunamirr'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


           {/*SECTION 12*/}

           <Anchor id='12'/>

           <SectionHolder id='12'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
              </DhukarrContent>

              <Sidebar 
                id='12' 
                english='Around preschool age'
                yolngu='Dhuwandja dhäwu yothuw dharaŋanamirriw '
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>


         {/*SECTION 13*/}

         <Anchor id='13'/>

         <SectionHolder id='13'>

          <DhukarrSection>

            <DhukarrContent orientation="column">
              Left column
            </DhukarrContent>

            <DhukarrMiddle/>

            <DhukarrContent orientation="column">
              Right column
            </DhukarrContent>

            <Sidebar 
              id='13' 
              english='From preschool age and onwards'
              yolngu='Dhuwandja dhäwu yothuw ŋunhi ŋayi ŋuli mirithirra dharaŋan ga marŋgithirra '
              language={language}
              />

          </DhukarrSection>

          </SectionHolder>


           {/*SECTION 14*/}

           <Anchor id='14'/>

           <SectionHolder id='14'>

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
              </DhukarrContent>

              <Sidebar 
                id='14' 
                english='Pre-adolescent stage'
                yolngu='Dhuwandja dhäwu yothuw märr ŋaḻapaḻnha dhuŋgarramirr'
                language={language}
                />
            
            </DhukarrSection>

           </SectionHolder>

        
        
      </div>

      
 

    

    </div>
  )
}

export default Dhukarr;
