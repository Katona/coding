const BIG = `8612164855381439524824799437351255142038195527996321333245421859997623473485985153193590526022668940791129543238308647851544179975875124984555225944113996421744988412931776822578461814889794484920918858986698828021876227787564547385357314335379679417562723344485722238652983984043524877156771873312167548266289997339209579807325279468945129939881771097754884988353552994203719779356868642932670745228563475438421247243211546242174559171687313443711342052205845106230274943926547928297787281449317537936489020404285379115434382517829142361372014677675412054296739854668276930539893516784255562274746591196747840975569147255257114158050933396306426697934101844424883563830415575808144642927836055369523148052294811237198667462345033603943427887937498132635605034658126279588106416705141315061285736943018941969982720602612211626624055169126285462735125635747997992575911538585645396214890527097116396978438586556157743741621889658769759342427258673139127295246386520979617464596503390188410691317909311473783393690554568795878371398266266516770383891245559903136783676462685252388652775731412481697382982583114847917547611481131841543897590131738732650169336261586327674808898738033444091729751668360948121327747858222347942915116508732101164176440794977524146645789733571749725525763915910601780689648405833717812294137662475814230867599261395798657328881574260907683771021142124305468483255738290392335554252487816891897609315155366143271416153449543995913575091472015794572486422377576267689263880389789156934567598266859237755481043675315761833722077758912262197652913349264578087265074555734192692898986796297229544759578524628339857513630925258101829737362678239986776853726593387414130117092204056776171153361872567753192123099373313665048604634886379308021427562588395299949381321965743552860631361501638551565927365444466708059672613991937122484807155917024548749572084992613179299727482619688511272793577149451275674108036174787256574754290135329708077879166825441389411749345351932271811823763659484443092723812411539374277495272372225627157742171853345253879352956652915615726576916537737929691856491957570466143344914409660899539682610496764322922432573751375421443246476317384143751844390487837712954334455285266854486773947458667867998189967296719592350957342258463106382637878564715831754799226769885908860621859931075547226516680474035515659719442498972338149402783566196809938908749969952321192281677255033129580133121957245255621606837284748593883211682939349265187811551242537954614183959202187535973766618566919241295521867873011877532968128455141658813375333173245104354799661144846833323394436555369272874468458211975158448246226234698574094935234552434306234318999726916764789814380637267351375377176598158714923321957418034105642742631136339985814474072217118946384626930532074593917818073921858105232829574988456103735641351725645734299996727399352191819293266178760528740161731732332808455508076261150415133334514675122423673884668659154344899862413773320595232572040531310101920883821332240247173143749572976633065677998405248202523802523164287939984314345306241276135614321656842228471712859271353464721832591155065311624143313557981206210658540124410762151159034572315724348457715847076542512889272191080442779572011983660906082842276604295639352504460467682776996206357209127801113118227527553941577286431833833774823551133797169711422555134595962213396866813365769547630229396885037183763683983914673349612593491706297178971747764996468944417207634556680714784702730855738202221486775218465486789518767349930918666405647187952981057614943799093746095277780121299906771922146688233719435846621346375409411533058386116715013483867461160199791515976921850327933529596439214803177416372244442365635385482679928883626525690888993473720502472966179608156164626775341261722608515944843646194907735324290623315229584703081929085711493101189109370711892195655529184501834782635421495999041534028367489698025355740266193156888773360595151397478176977753261856530984275808697593070341117491971923245481849468744731984416669157512198087744214793730431269138191118422623719709988424288372440419767297329948964709264439349445830639529393253512274666790584579742595918886861957648453263234818140718338306341842780995338888269817587834410872049391725652442429183876274316117742379516811808248117062256487837213222967473393802363689643527947212733218335413178998657111896228296394251473573126387205521108420375628177244398410546532495652979518657780118245653336756433684188777397872310291580438525527689542740909112686435128569269656812210289615994781483913775823939439333249263494637049831889499530806393182225438225105037297037605688947423947780183428518123414993927295717097974620478883154955239254825247773061239624453988521430641182365615748679977372947219669020839659461246207252335528367062334074304536268727263942911964608416706126933188492121528663745545591911618922673537642360566718851735714078609327216677594965776857223510389145519040832995895859771569982664309196817657481193124118673885488996538427379810105267439699473784233952262554481174616064577531134876569695629724388196301161198292149277725445748594784589459799601377538488383161263358695937385286807361109680553378235198264132337472217049651238378458701974684675191835236421128879155829306846811368223621308263924489307459779322602423944019797637455642405165181146972517486183909816437033198296433750808438701022616660199734981435612876752314563258863251931831217679968799941818662648933692366596519588228891665184399392525196524454927887406374269973358916882238117460237995705862273862235060882584174989102865766289864720676746641422816843795322622129333221647815223173426489116887647569558931684968352335996680498829409627454564234680721890204019982599197265707722354294249633464756812715582250371338778860362030782229827324479347745025793159258667767635802193323372606715882210316085207029334145914326872727897152884129771647654139682141606994465650742719222620815011198483275313133229858493891457255233941511191541515831434815162816939070623552831528496081137186485252318461333352261059347593847124377134179419169674326143564479504735195431913539802264244550522655251381263142221264925679872523972843775138953480472171888922874865803697818412665640985476138238832233748157923411304719631883852522723171896238643880949051433658278414234690394245164569492099344387669282204479147748352653596339739080425630879960365937907237602299161961994513983351468291548726579724105442112851582769525633845189462475825741912021615770445627306387909478618515528718445079181099599979842410696221883229948936402497113344964673707288205826966764336223889215947977493987711358742545338764909398842431597596566073545674812315362189201781449684468593196418134857112641852787381856996899549873366967467186791516897310197224104472701181269791489921625416192213129551236825549862561771411895202437211173918916665790134425377467151751544648362358825696712387416062927135537058341815321140891341291038368456247282475832481693214763305850432669189154888725666434478810534744942967713154813060564044685367464723573757217353755487789365427830991270233032313026476997978467562195275777398936101211567048482066715329108627678311567443665685157791844062384044678034545391674278185644286899562995964824673566714697377053142197672843221775463012756974562721426123116969976254685478592588399795463150597876581385578665595384927787915669273771963154988732778517864375421933357476781969271933223933779493676453378768213690231691336780779612884765685037193762482784803357644452903730516859773697168366817381207660903224564428777154931319911458498673474286251653243282556658297397543325689145484375164296909066886970659733272342959018119953388169155893111922333275471763237976662151549722616619628361845115143460283628877929469983276969487147661584982119952298247612249228681248203287931897999998295580256130367728268856991412159559584927855574597044479266864615183714706084378772583487884863797972505963778750816632383168952573805744583414555130336566156233266617968251664477364554868741297662316545636740836631245147732452973490192881625774749479227668439253649124618193866381581335384812189243219693728527367895736187304564184813602639687255732410276463394258164260724547456646826172503826315824521651256246657191213685138783264075328654981198473928607581629251148636135117637093381299783573762727606791927790155946659591133861534766714769209738509238619373706056309574606027173198701280728198671329544530654180719946257417579055525659853752871196243822236713405528553425574028347658383811435658925019941639265989282634127162285625245876503521605784622442305318794376182557643162295099503472164796818638788372415788924018285937759978921789841079852752262662505927932097824938508756689061755953507563483114421919164915578949138492247622726072336674914994637886851093958090561337196841232966935262786142263557852030941015586913304084163614625577455426322872552798879299555747676337984613975379134553334047284784602515392444476076892571329177473659446858988386583686368499965137551292288444854612871419248927118061914987322138342684733413935193842496132737834836629562384346995645786388714460994512912038101323238640556245558621332146354217855320549687564445255716877552203965816310929424121353411745658575425961584733931596897121631657259892857418123761722380609715412443426264221646499952814825232536438136112335111363261683308990998370797415337638588256844683124798767090202556168282571859474968374855374594968069539684875181667323789211196916852191298095415894268810824234466021282486164615227275596414816596338168336925673218326044364020431292522569711523265046121495814596343238565640182182844694613451238838301242831146208194193420221899422088164423716597228791363314558585382058606671796897501718296566685863624180338775173261271850734882238386995222214576608312386381538063813598186689784629216819442438518068748161802460272942701553393315151879512219713682328825889928668536852674174826766810663954918177219220164451128028576452308215275486787288204183203777556750944824907577388681594135157390665066459091765242833657412945942779955165816130298992344461738420388822834721193851231979371711918412962015944640651782299335469956554842319977544587188266655996401581805028717749998321744650972634104530338890408923823112296677884182464124994880169576533124657189258227432180777950667112737855835192721399554431735450136645327447552150711076955983158635546885387460283027608916417049723291319985276618763450798517642930438169578642434961274637411882359643351736202529158613667285502627499228813214417585627093113184956042309841931240494684685759971765552048422211303534772320568575555527607083697834605779839330696840148192324142426282833252152064924625872396576424921147112918412948863112852749358151411034832022752367376581518796456022385920604692679849656156379444462771518417168529625366905792769988782810926981297098104877579650418341559623259533795946562046331586817352532321615531804587364565579890432416506946718948142632885957791519338986467742239694744485562147619798269792129668495855384592611258118021798436459873473775647186902346901438204819832938842693721089695363834490736968446723731695853325287384532330205741125393599572535023258955264934392865776152445951566712643453122732102397695410525518433072307312626576403525259461103597178928328587488299526889573063396077737435489557686826911232217757727384588684587710958896293959569016701380932669472747729784997873792922358937698442942262377188434357355423592191944278713173687574884968496428983843192064833097616524194763786011866790963819956966414435192188521289718175905983989247648429994389991165828286632939635591543967343871436238576611366562769296243943993070289824189343853598888415463345514462922537148420396867237092843058217048256954391443319174304441287110184170928426392828806059563981501026395528373015131881327759241625851767977743162691605271257182704631915437931017995889378993972928173269742691422475816061988244786633909410607466991759791930608989749798248441549468114771189543627887473862296129295599593520589712186544547158835826661694458852765885799870883467838020815438117575389964625593554199657130123771609037181653344890411187262712833025105964915568969413903315597171691747399099639554178372189424743185407425723369707142266093908037192018523434215759115753382753202548497670846020831647692965176553274675854544673642204261661994207962369596926210144968954167521842787365481122271063132784631216261836377430845093179370883594201127664633921126754751982483712999892797258351817778515659702616688023641516674173922589238030497997604294921577113427105828901821838179436482476879315220209014198821359527687278485915507432845726179022164996666677868989475276232389355936532228675786338854958391195244126590932118834369505260162552911768689115916242182648801751612346158913887620269969397248229475809438982993548869491121111255358959107635178352892153834562442097844759274665577062554521827850344641804654696274393157391746355335469213572813419581693065881627432971761599228024816427638986634070409040609497806251131186555612855485434689481460952458134124246978197854512277201074707540477321215727202017397756573981783552101441875388769031604787503446153610552291719148372473191693954530281488614468332757402321528726815810106768654327964661246118346695459770799096136951536214478761979296246537624765527342229149666444825314455265531323123531545938163867103415803032807668446688846370821016185610234618732275398574543976358459341919468512981664221714674711606634208620422935946837535347634038794958947919509162385239723542179979839994114498802315819396764650744472306224402317851278737589887798752910753696318662491685239010167389846969943959114163376855395694257253349349594731229646613648368231458518931961928575947690382770355740657030798985186682833991446186987265336125777263523693475191262019899590494583935893916149894120608093442365221658535868421383854696797332878877865980565456443320225298101675748575275916728866273741612189265330413626109294959094297726837355195129632117311635658132354228819485181413187581379873663645387383905877366238944352758780187962124663107411558451522353177361283131473019484271582896382195291772555581578880255397562726475845214185515284498491374226257493682453153120329683268849663328341474669035226642616428762777325895401679447677311252933995484862546897911270417095172355943377335366932471193689817861544032195913964039404175721221785646278315755343552772618868816070295287194248608388364636497565647729783518206373803356147072741098347367329376687551819061147956911969127130223349334465242017801323803754344931963437977530495894587317657171164526501424854067604162476899336578352518135675873478941386634598933070749367231015628563417999667331396797371887703934897974284998423774687341823639383589762682624611463369776764434085604158237337166928992273805592194279478071501911636267567746537551799949222818694958153513432177385693557530942838631466374573572957286771956627112285848312851436729611905563559372416469285539437748152383963412828648213652443471899412327237604445691585853042324497877990155955192945502930169682481785664614158296145471518645925813416749849070862471529618529175829133833042852784665013971911179579544214921798999128818433944216833118324399196784278238811993299512343270612435558942122871893517397147624475689650413631194851326362889514633264822537762192432662295726429162481662752717366624694539455265954089513632946291797657299115345253564280664361823944905469429998156736692238479457256013791388975619962283419985711036779852792012465958149616277436829535902146807579318969638250711329183635984668393512102056127895327076306359982537188023423197881881447691808264461814283677884898121899146314482052195180581174218275849027745750806812296672321548887650193963855039282585424520859173602253929486927552997734475897499452135497767492421749771425467253848836402193591255488290877148601028994159972520589494354935891526348982653876509340691472859531394181835630519094161247238629866543395490278610367540685422805756197129866060455878362766664016809293601055607747417970427451694453551281451242589423163687429820412216304461943817576249556873456976703023547913701861662883948450338261239421213793359192103869787311725610565282895594952122743780709559361911433634287620484781958063304499815730664988252339686666405410371259374580285840617722216418614939127237937692687618328348938386479199642072771454671977484341682054982249721459179854591134217228571828664292999421119059836151404022647137575446636555128380601941193680981410603128409127526360425448182597647191299981262543662945871580597617714143684675109649623240728341345871553510287897462837678839714557494758509274234725868169943829603627828132424530279968753173848015705354222365636378954873954913325179737953197031372616149350335881588219104387754655696694385260433683681172185213885050802686893494608026872091814946182880764515133283701032248177245555938094996479309793868295785054354079336355629129191253717236508679708156632962433831107765872555179448951552122135782433293782527286695080249936127024753279749628669511182466934431627851134145811852986317513649908919467298926980916846357479867779606285411083537921762277843076736019187217327522802637391230229538806734915096876616844212265894433666707370315011295190406639321179563114453133805193315371489163984687357129354459119797219399566631831487753491287133778025225728687930207554381123781277523575757939267350634664233941317835488772336783656569664537512431251086189858174545434397171341731317285014274551565927112318626286694648669487177773123724277176533182891456142371332974364987579547453283855871486641556843519088896143808120823272537952749048553361708937248366355244296724828856188779468265348058881336412577296053824141919326503546436381662197858399857024719157639896225535733572961610573643165898593643333091732444619235775968672033305468801146893397685546423552305547834966666027703462246618912783591812757950402974491749194053717663824256453965929059134064748074773338456277413740894560845811272493939261668269582962877113614065795633139351941096465384865393299248251579138424967158921123563696919554242320749054111290997564328760922067735837565529341450163898942734757034224792751789508592496890582879862869352210652226286467113614115932595466305687603431161747891853581314655173269963365671121949819683705192498162329515423899265893173552316263319940656750552392606986235467744369686268398814731454364633634527414788238858126032963397928674503784578942424762114666384177206391883320699110613014709354374128768258159091207969183264514676159691789858635956728695836949763214806047494182956262542830511052716917131044808316851428181450426188904215524751427689134048357549546070788320434657683631703679213192787993765741934629178643763228465859847974291490171423418894626566759122849193181123124455464129101934792971435872474241898743377217271193218271308254757053332648902722114445637085657283901290599797802845269217829618589468238161594782651933897661189656689967259750487427127860429649106863875579679158425314784969582168493271956732767021759366251242195981372953379863922724906384355793474136731734204435337391955060278569834981788691115967355841105527787072706491991397258944635726225743784988754322548091904595184812254373849711615040322037224198587819122853181838645758681452355715926538551624834236654016856227806838714987586749406398563482133213817239615175702366289238293977612029998197861462749456361315607347417774126464619566814163452618475579539721805399516437119357258690445949769073847464529395869290637796969369371963164384332722328813194933277550461785748348316642744790785192444989895677879751618642149013431464766976371438234470662288312644705994979465649724218182833448244680326619309616942827182019604198602657877029432853664724622818471353816640616637276184851549749381488171648757653061931666811935672631821896857975683928882322992455548082369911825582488932684689286176313845496894722111983491644410249415651080297947851727505841937118138`;
const SMALL = `2333133121414131402`;
const parseInput = (input: string) => input.split("").map(Number);

export { parseInput, BIG, SMALL };
