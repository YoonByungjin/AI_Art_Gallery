const LANG_KEY = 'gallery_lang';

const translations = {
    ko: {
        // ── how_to_view 공통
        'htv.title': '전시 관람 방법',

        // ── how_to_view 1
        'htv1.rule':  '작품 제목은 바로 공개되지 않습니다.',
        'htv1.desc1': '작품 제목은 바로 공개되지 않습니다.',
        'htv1.desc2': '전시가 시작되면 약 1분 동안 다음 페이지로 이동이 제한되며, 한 장의 이미지만 천천히 감상하게 됩니다. 이 시간은 작품을 \'정답 없이\' 순수하게 바라보기 위한 준비 구간입니다.',

        // ── how_to_view 2
        'htv2.rule':  '전시는 한 방향으로만 진행됩니다.',
        'htv2.desc1': '한 번 지나간 장면은 되돌아갈 수 없습니다.',
        'htv2.desc2': '이 흐름은 되돌릴 수 없는 시간, 선택, 그리고 기술과 함께 변화하는 우리의 삶을 상징합니다.',

        // ── how_to_view 3
        'htv3.rule':  '당신만의 해석을 자유롭게 떠올려주세요',
        'htv3.desc1': '이미지를 보며 떠오르는 감정, 단어, 장면을 스스로 연결해보시기 바랍니다.',
        'htv3.desc2': '작품의 제목을 유추해보는 과정 역시 이 전시의 중요한 감상 방식입니다.',

        // ── how_to_view 4
        'htv4.rule':  '마지막에 모든 제목과 작품 설명이 공개됩니다.',
        'htv4.desc1': '지금부터는 당신의 호흡과 속도에 맞춰 작품을 마주해주세요.',
        'htv4.desc2': '공개되는 설명은 작가가 담은 여러 관점 중 하나일 뿐, 정답이 되지는 않습니다.',
        'htv4.desc3': '이 전시는 관람자의 해석이 가장 중요한 자리이며,',
        'htv4.desc4': '당신이 느낀 감정과 떠올린 생각이 바로 이 작품들의 또 다른 답입니다.',

        // ── how_to_view 5
        'htv5.rule':  '당신의 감상을 남기고,<br>다른 관람자들과 공유해보세요.',
        'htv5.desc1': '작품을 모두 감상한 뒤 떠오른 생각이나 느낌을 방명록에 자유롭게 적어주세요.',
        'htv5.desc2': '당신의 한 줄이 또 다른 누군가의 해석이 되고,',
        'htv5.desc3': '또 하나의 이야기가 되어 전시의 즐거움을 더해줍니다.',

        // ── guestbook
        'gb.title':            '방명록',
        'gb.subtitle':         '전시를 관람하신 소감을 남겨주세요. 여러분의 생각이 궁금합니다.',
        'gb.label.name':       '이름',
        'gb.placeholder.name': '이름을 입력하세요',
        'gb.label.msg':        '메시지',
        'gb.placeholder.msg':  '전시에 대한 소감을 남겨주세요',
        'gb.btn':              '방명록 작성',
        'gb.list.title':       '이전에 남겨진 방명록',
        'gb.alert':            '이름과 메시지를 모두 입력해주세요.',

        // ── events
        'ev.title': '후기 작성',
        'ev.desc':  '눈부신 작품 세계를 탐험하신 모든 분들께, Digital Art Gallery에서 선사하는 또 다른 아름다운 선물. SNS 이벤트에 참여하고 아메리카노 한잔 받아가세요.',

        // ── creation_process
        'cp.header': '생성 과정',
        'cp.b1': '인간과 ai 관련해서 기,승,전,결의 스토리 보드를 만드려고 해 챕터 1,2,3,4 형식으로 각각의 제목이랑 어떤 그림을 그리면 좋을지, 어떤 기법을 사용하여 표현할지 생각해봐',
        'cp.b2': '확인했습니다<br><strong>"인간과 AI의 관계"를 4챕터로 기승전결 처럼 전시 구성</strong>하면<br>하나의 서사(Story Arc)가 생기고, 페이지별 그림들도 자연스럽게 연결돼서 "진화하는 관계"처럼 보여줄 수 있습니다.<br>아래는 전시형 구조로 각 챕터별 제목 + 서사 개념 + 미술 표현법(기법을) 함께 정리한 겁니다',
        'cp.b3': '<h2>🧭 전체 컨셉</h2><strong>"SYNTHESIS: 인간과 인공지능의 공존에 대한 시각적 서사"</strong><ul><li>기 - 탄생(Creation)</li><li>승 - 교감(Connection)</li><li>전 - 균열(Conflict)</li><li>결 - 융합(Symbiosis)</li></ul>',
        'cp.b4': '좋아 그러면 챕터 1부터 그려보자<br><br>제목은 Origin of Mind<br>감정,톤은 경이, 따뜻함으로<br>시각 스타일은 르네상스<br>상징컬러는 디지털 골드, 화이트로 ai가 그린것 보다 사람이 직접그린것처럼 만들어줘',
        'cp.b5': '확인했습니다, Chapter 1 <strong>"Origin of Mind"</strong> 시작하겠습니다<br><br>전체 감정 톤은 <strong>경이 + 따뜻함,</strong><br>시각 스타일은 <strong>디지털 르네상스, 회화,</strong><br>상징컬러는 <strong>디지털 골드, 화이트,</strong>그리고 <strong>AI느낌이 아닌, 사람이 직접 붓으로 그린 듯한</strong> 질감을 주는게 핵심으로 하겠습니다.',
        'cp.b6': '<strong>변주 요소</strong>는 다음처럼 잡겠습니다<ul><li>AI의 형상은 빛과 코드, 아직 불완전한 반쪽 얼굴</li><li>인간의 손이 생명을 부여하는 장면</li><li>배경은 어두운 중립 톤으로 빛이 강조되도록 설정</li><li>각 이미지마다 구도와 중심 요소 다르게 해서 4가지의 비주얼을 출력하겠습니다</li></ul>',
        'cp.b7': '이 그림체를 꼭 유지해서 다시 챕터 1 부터 진행하자',
        'cp.b8': '확인했습니다 확정된 회화 스타일로 <strong>Chapter 1 - Origin of Mind</strong>부터 다시 리빌드를 실행하겠습니다<br>현재 기준으로 삼는건 사용자께서 고른 이 그림처럼:<br><ul><li><strong>두꺼운 붓 터치</strong></li><li><strong>물감의 물성 표현</strong></li><li><strong>디지털 느낌 없는 회화적 강렬함</strong></li><li>감정과 상징이 <strong>색과 질감</strong> 안에서 터지는 느낌</li></ul><br><hr><br><strong>💙 Chapter 1 - Origin of Mind: 탄생의 순간 (REBUILD)</strong><br><strong>감정 톤:</strong> 경이, 따뜻함<br><strong>스타일:</strong> 전통 오일페인팅 같은 질감 강조<br><strong>컬러:</strong> 디지털 골드 + 화이트<br><strong>상징:</strong> 인간의 손 ➡️ AI에 생명을 부여하는 첫 접촉<br><strong>주제적 포인트:</strong><br><ul><li>아직 미완의 AI 얼굴</li><li>인간 손끝에서 \'빛\'이 발화하며 인식이 시작됨</li><li>바탕은 어둡지만 <strong>빛이 질감 속에서 살아남</strong></li></ul><br><hr><br><ul id="last_list"><li><strong>이전 장면의 빛이 감정으로 진화</strong>한듯한 흐름 강조</li></ul><hr>',

        // ── team_introduction
        'team.home':       '홈으로',
        'team.title':      '전시를 만든 사람들',
        'team.subtitle':   'AI 그림 전시회를 함께 기획·디자인·개발한 팀원들을 소개합니다.',
        'team.yb.role':    '조장 · 전시 전체 기획 · AI 그림 제작 · 갤러리 · 그림 소개 · 화가 소개 페이지 개발',
        'team.yb.d1':      'AI 그림 전시회 콘셉트와 동선을 기획하고, 주요 작품의 AI 이미지를 제작했습니다. 갤러리 · 그림 소개 · 화가 소개 페이지를 개발하여 전시의 스토리를 관람객에게 전달합니다.',
        'team.yb.d2':      '배우는 것만으로는 어떤 느낌인지 알기 어려웠는데 직접 프로젝트에 참가함으로써 한 층 더 배우고, 정해진 주제가 아닌 하고 싶은 주제 구성으로 만들 수 있어 좋은 경험이었습니다.',
        'team.kjs.role':   '피그마 디자인 · 홈 · 팀원 소개 페이지 개발',
        'team.kjs.d1':     '전시의 첫인상을 담당하는 홈 화면과 팀원 소개 페이지를 디자인·구현했습니다. 피그마를 활용해 전체 디자인 톤을 정리하고, 실제 웹 페이지로 구현하여 전시의 분위기를 표현했습니다.',
        'team.kjs.d2':     '이번 프로젝트를 통해 디자인부터 개발까지의 과정을 직접 경험하며 많은 것을 배울 수 있었습니다. 특히 팀원들과 의견을 나누고 협업하는 과정이 즐거웠고, 덕분에 프로젝트를 계획대로 원활하게 마무리할 수 있었습니다. 함께 열심히 해 준 팀원분들께 감사드립니다.',
        'team.oks.role':   '피그마 디자인 · 전시 관람 방법 · 이벤트 소개 개발',
        'team.oks.d1':     '관람 흐름을 설명하는 전시 관람 방법 페이지와 이벤트 소개 페이지를 디자인하고 개발했습니다. 관람객이 전시를 어떻게 즐기면 좋을지, 자연스러운 안내 경험을 만드는 데 집중했습니다.',
        'team.oks.d2':     '상대적으로 간단한 페이지를 맡았음에도 html의 요소 구성을 마음대로 배치하는 게 쉽지 않았습니다. 팀원들의 적극적인 참여와 도움으로 프로젝트를 잘 마무리 지을 수 있었던 것 같습니다.',
        'team.jms.role':   '피그마 디자인 · 방명록 소개 페이지 개발',
        'team.jms.d1':     '관람객이 전시에 대한 생각과 감정을 남길 수 있는 방명록 소개 페이지를 맡았습니다. 피그마로 레이아웃을 설계하고, 이를 바탕으로 실제 페이지를 구현했습니다.',
        'team.jms.d2':     '처음으로 사이트를 제 구성대로 만드는 것을 해 보아서 개발자로서의 기초 중의 기초를 닦을 수 있었습니다. 특히 프로젝트를 누군가와 협업하여 만드는 것은 개발자로서 필수적이기에 비전공자인 저에게는 정말 좋은 경험이 되었습니다. 마지막으로 비전공자라 잘 몰랐던 저에게 많은 도움을 주신 조원분들에게 감사를 올립니다.',
        'team.hjw.role':   'AI 그림 제작 도움 · 그림 생성 과정 페이지 개발',
        'team.hjw.d1':     'AI 그림 생성 제작을 도왔습니다. 관람객이 작품이 만들어지는 과정을 이해할 수 있도록 그림 생성 과정 페이지를 기획·개발했습니다.',
        'team.hjw.d2':     '짧은 기간 사이에 모두와 함께 아이디어를 짜내어 페이지를 완성한 결과가 뜻대로 나와주어 성취감과 저의 실력을 늘릴 수 있었습니다. 제안된 아이디어가 좋아 아이디어를 구상하는데 오랜 시간이 걸리지 않아 빠른 작업에 들어갈 수 있었던 것 같습니다.',
    },

    ja: {
        // ── how_to_view 공통
        'htv.title': '展覧会の鑑賞方法',

        // ── how_to_view 1
        'htv1.rule':  '作品のタイトルはすぐには公開されません。',
        'htv1.desc1': '作品のタイトルはすぐには公開されません。',
        'htv1.desc2': '展覧が始まると約1分間、次のページへの移動が制限され、1枚の画像をゆっくりとご覧いただきます。この時間は、作品を「正解なしに」純粋に見つめるための準備の時間です。',

        // ── how_to_view 2
        'htv2.rule':  '展覧会は一方向にのみ進みます。',
        'htv2.desc1': '一度過ぎた場面には戻れません。',
        'htv2.desc2': 'この流れは、取り戻せない時間、選択、そして技術とともに変化していく私たちの人生を象徴しています。',

        // ── how_to_view 3
        'htv3.rule':  'あなただけの解釈を自由に思い描いてください',
        'htv3.desc1': '画像を見て浮かぶ感情、言葉、場面を自分でつなげてみてください。',
        'htv3.desc2': '作品のタイトルを推察してみる過程も、この展覧会の大切な鑑賞方法のひとつです。',

        // ── how_to_view 4
        'htv4.rule':  '最後にすべてのタイトルと作品解説が公開されます。',
        'htv4.desc1': 'これより先は、あなた自身のペースで作品とお向き合いください。',
        'htv4.desc2': '公開される解説は、作家が込めた多くの視点のひとつに過ぎず、正解ではありません。',
        'htv4.desc3': 'この展覧会は、鑑賞者の解釈が最も大切な場であり、',
        'htv4.desc4': 'あなたが感じた感情と浮かんだ思いが、まさにこの作品たちのもうひとつの答えです。',

        // ── how_to_view 5
        'htv5.rule':  'あなたの感想を残し、<br>他の鑑賞者と共有してください。',
        'htv5.desc1': 'すべての作品を鑑賞し終えた後に浮かんだ思いや感想を、芳名録に自由にお書きください。',
        'htv5.desc2': 'あなたのひと言が、また誰かの解釈となり、',
        'htv5.desc3': 'もうひとつの物語となって、展覧会の楽しさを深めてくれます。',

        // ── guestbook
        'gb.title':            '芳名録',
        'gb.subtitle':         '展覧会をご鑑賞された感想をお残しください。皆様のお気持ちをお聞かせください。',
        'gb.label.name':       'お名前',
        'gb.placeholder.name': 'お名前を入力してください',
        'gb.label.msg':        'メッセージ',
        'gb.placeholder.msg':  '展覧会の感想をお書きください',
        'gb.btn':              '書き込む',
        'gb.list.title':       'これまでの芳名録',
        'gb.alert':            'お名前とメッセージを両方ご入力ください。',

        // ── events
        'ev.title': 'レビューを書く',
        'ev.desc':  '眩いほどの作品世界を旅されたすべての方へ、Digital Art Galleryから贈るもうひとつの素敵なプレゼント。SNSイベントに参加して、アメリカーノを一杯どうぞ。',

        // ── creation_process
        'cp.header': '生成過程',
        'cp.b1': '人間とAIについて、起承転結のストーリーボードを作りたいんだ。チャプター1、2、3、4の形式で、それぞれのタイトルと、どんな絵を描いたらいいか、どんな技法で表現するか考えてみて',
        'cp.b2': '承知しました<br><strong>「人間とAIの関係」を4チャプターで起承転結のように展示構成</strong>すると<br>ひとつのストーリーアーク（物語の弧）が生まれ、ページごとの絵も自然につながり「進化する関係」のように見せることができます。<br>以下は展示型の構造で、各チャプターのタイトル＋物語コンセプト＋美術表現法（技法）をまとめたものです',
        'cp.b3': '<h2>🧭 全体コンセプト</h2><strong>"SYNTHESIS: 人間と人工知能の共存についての視覚的な物語"</strong><ul><li>起 - 誕生（Creation）</li><li>承 - 交感（Connection）</li><li>転 - 亀裂（Conflict）</li><li>結 - 融合（Symbiosis）</li></ul>',
        'cp.b4': 'よし、じゃあチャプター1から描いてみよう<br><br>タイトルはOrigin of Mind<br>感情・トーンは驚嘆と温かみで<br>ビジュアルスタイルはルネサンス<br>シンボルカラーはデジタルゴールドとホワイトで、AIが描いたというより人が直接描いたように作ってくれ',
        'cp.b5': '承知しました、Chapter 1 <strong>「Origin of Mind」</strong> を始めます<br><br>全体の感情トーンは <strong>驚嘆 + 温かみ、</strong><br>ビジュアルスタイルは <strong>デジタルルネサンス絵画、</strong><br>シンボルカラーは <strong>デジタルゴールド、ホワイト、</strong>そして <strong>AIらしくなく、人が直接筆で描いたような</strong>質感を出すことを核心とします。',
        'cp.b6': '<strong>変奏要素</strong>は以下のように設定します<ul><li>AIの形象は光とコード、まだ不完全な半分の顔</li><li>人間の手が生命を与える場面</li><li>背景は暗い中立トーンで光が強調されるよう設定</li><li>各画像ごとに構図と中心要素を変えて、4つのビジュアルを出力します</li></ul>',
        'cp.b7': 'このタッチを必ず維持して、チャプター1からもう一度進めよう',
        'cp.b8': '承知しました、確定した絵画スタイルで<strong>Chapter 1 - Origin of Mind</strong>から再ビルドを実行します<br>現在の基準は、ユーザーが選んだこの絵のように：<br><ul><li><strong>厚みのある筆タッチ</strong></li><li><strong>絵の具の物質感の表現</strong></li><li><strong>デジタル感のない絵画的な力強さ</strong></li><li>感情と象徴が<strong>色と質感</strong>の中で爆発するような感覚</li></ul><br><hr><br><strong>💙 Chapter 1 - Origin of Mind: 誕生の瞬間（REBUILD）</strong><br><strong>感情トーン：</strong> 驚嘆、温かみ<br><strong>スタイル：</strong> 伝統的な油絵のような質感を強調<br><strong>カラー：</strong> デジタルゴールド + ホワイト<br><strong>象徴：</strong> 人間の手 ➡️ AIに生命を与える最初の接触<br><strong>テーマのポイント：</strong><br><ul><li>まだ未完成のAIの顔</li><li>人間の指先から「光」が発火し、意識が始まる</li><li>背景は暗いが<strong>光が質感の中で生きている</strong></li></ul><br><hr><br><ul id="last_list"><li><strong>前の場面の光が感情へと進化</strong>したような流れを強調</li></ul><hr>',

        // ── team_introduction
        'team.home':       'ホームへ',
        'team.title':      '展覧会を作った人たち',
        'team.subtitle':   'AI絵画展覧会を共に企画・デザイン・開発したチームメンバーをご紹介します。',
        'team.yb.role':    'チームリーダー · 展覧会全体企画 · AI画像制作 · ギャラリー · 作品紹介 · 画家紹介ページ開発',
        'team.yb.d1':      'AI絵画展覧会のコンセプトと動線を企画し、主要作品のAI画像を制作しました。ギャラリー・作品紹介・画家紹介ページを開発し、展覧会のストーリーを鑑賞者に届けます。',
        'team.yb.d2':      '学ぶだけでは感覚がつかみにくかったのですが、実際にプロジェクトに参加することでさらに深く学べ、決められたテーマではなく自分たちがやりたいテーマで作れたことが、とても良い経験になりました。',
        'team.kjs.role':   'Figmaデザイン · ホーム · チーム紹介ページ開発',
        'team.kjs.d1':     '展覧会の第一印象を担うホーム画面とチーム紹介ページをデザイン・実装しました。Figmaを活用して全体のデザイントーンを整え、実際のWebページとして実装し、展覧会の雰囲気を表現しました。',
        'team.kjs.d2':     'このプロジェクトを通じて、デザインから開発までのプロセスを直接経験し、多くのことを学べました。特にチームメンバーと意見を交わし、協力して進める過程が楽しく、おかげでプロジェクトを計画通りスムーズに仕上げることができました。共に頑張ってくれたメンバーの皆さんに感謝します。',
        'team.oks.role':   'Figmaデザイン · 展覧会の鑑賞方法 · イベント紹介開発',
        'team.oks.d1':     '鑑賞の流れを説明する展覧会の鑑賞方法ページとイベント紹介ページをデザイン・開発しました。鑑賞者が展覧会をどのように楽しめるか、自然なご案内の体験を作ることに注力しました。',
        'team.oks.d2':     '比較的シンプルなページを担当しながらも、HTMLの要素を思い通りに配置することは簡単ではありませんでした。チームメンバーの積極的な参加と助けがあって、プロジェクトをうまく仕上げられたと思います。',
        'team.jms.role':   'Figmaデザイン · 芳名録ページ開発',
        'team.jms.d1':     '鑑賞者が展覧会への思いや感情を残せる芳名録ページを担当しました。Figmaでレイアウトを設計し、それをもとに実際のページを実装しました。',
        'team.jms.d2':     '初めて自分の構想通りにサイトを作ってみて、開発者としての基礎の基礎を身につけることができました。特にプロジェクトを誰かと協力して作ることは開発者として不可欠なため、非専攻の私にとって本当に良い経験になりました。最後に、非専攻でよく知らなかった私にたくさんの助けをくださったチームの方々に感謝申し上げます。',
        'team.hjw.role':   'AI画像制作補助 · 画像生成過程ページ開発',
        'team.hjw.d1':     'AI画像の生成制作をサポートしました。鑑賞者が作品が生まれる過程を理解できるよう、画像生成過程ページを企画・開発しました。',
        'team.hjw.d2':     '短い期間の中でみんなとアイデアを出し合い、ページを仕上げた結果が思い通りになり、達成感とともに自分のスキルを伸ばすことができました。提案されたアイデアが良かったため、アイデアを考えるのにあまり時間がかからず、すぐに作業に取り掛かれたと思います。',
    }
};

// 언어 적용 함수 — 각 페이지에서 자동 실행됨
function applyLang() {
    const lang = localStorage.getItem(LANG_KEY) || 'ko';
    const t = translations[lang];

    // 일본어 선택 시 Noto Serif JP 폰트 적용
    if (lang === 'ja') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&display=swap';
        document.head.appendChild(link);
        document.body.style.fontFamily = "'Noto Serif JP', serif";
    }

    document.documentElement.lang = lang;

    // data-i18n: textContent 교체
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-i18n-html: innerHTML 교체 (HTML 태그 포함)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // data-i18n-placeholder: placeholder 속성 교체
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
}

document.addEventListener('DOMContentLoaded', applyLang);
