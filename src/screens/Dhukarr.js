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
                />

              <Blob 
                id='43' 
                colour='grey'
                english='Family monitor baby’s health through checking every part of the body and body functions.'
                yolngu='Gurruṯumirriy ŋuli nhäma bukmak rumbal yothuny  nhaltjan ŋayi ga ŋuthan.'
                language={language}
                audio={true}
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
                />

              <Blob 
                id='50' 
                colour='light'
                english='Vomiting (a little) is a sign that baby is starting to vocalise.'
                yolngu='Gakthunamirr gakal nhanŋu yothu ŋayi dhu marrtji waŋa’waŋan.'
                language={language}
                audio={true}
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
                />

              <Blob 
                id='49' 
                colour='light'
                english='When the baby talks (vocalises) and cries a lot it helps the body grow strong.'
                yolngu='Yothuny ŋuli ga waŋa ga bulu ŋäthi ŋunhiyiny ŋanya ŋuli ga ḏälkum nhanŋu rumbal.'
                language={language}
                audio={true}
                />

              <Blob 
                id='51' 
                colour='light'
                english='When the baby sees and/or hears family members the baby starts ‘talking’ - often over the phone!'
                yolngu='Yothuy ŋuli ŋäma ga nhäma gurruṯu’mirriny bala ŋayi ŋuli waŋan gurruṯu’mirrwal. '
                language={language}
                audio={true}
                />

              <Blob 
                id='52' 
                colour='yellow'
                english='The baby is starting to learn identity and connections: family talking into the baby’s ears, teaching about their name, subsection, their language and kinship connections.'
                yolngu='Yothuy ŋuli märr dharaŋan yol ŋayi mälk, yol ŋayi yäku ga nhä nhanŋu dhäruk ga nhä nhanŋu gurruṯu, ŋayi ŋuli ŋäṉḏi’mirriŋuy ga wiripu Yolŋuy marŋgikum lakaram yothuwal buthurulil.'
                language={language}
                audio={true}
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

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
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

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
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
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
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

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
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

            <DhukarrSection>

              <DhukarrContent orientation="column">
                Left column
              </DhukarrContent>

              <DhukarrMiddle/>

              <DhukarrContent orientation="column">
                Right column
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
