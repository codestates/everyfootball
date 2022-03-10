import react from "react";
import "./FAQ.css";

const FAQ = () => {
    const items = document.querySelectorAll(".question");

    function openCloseAnswer(event) {
        let selectedAnswer = document.querySelector(`#ans-${event.currentTarget.id.slice(4)}`);
        if (selectedAnswer.classList.value === "answer hide") {
            selectedAnswer.classList.remove("hide");
        } else {
            selectedAnswer.classList.add("hide");
        }
    }

    return (
        <div id="faq-form">
            <div id="faq-title">자주 묻는 질문(FAQ)</div>
            <div className="faq-content">
                <div className="faq-category">결제 및 환불</div>
                <button className="question" id="que-1" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-1-toggle"></span>
                    <span>매치신청 취소를 하고 싶어요</span>
                </button>
                <div className="answer hide" id="ans-1">
                    <p>
                        신청취소는 '마이페이지'를 통해 직접 취소 신청을 하셔야 합니다.
                        <br />
                        또한,이미 지난 경기에 대해서는 취소신청이 불가합니다.
                    </p>
                    <p>
                        환불 금액 안내
                        <br />
                        *2일 전 100% 환불
                        <br />
                        *1일 전 80% 환불
                        <br />
                        *인원 미충족시 전액 환불
                        <br />
                        *재난 문자(호우, 대설) 경보 이상 발송 시 전액 환불
                        <br />
                        **취소 환불 금액은 해당 경기 시작점으로 부터 취소 시점에 따라 비율이 상이하며,
                        <br />
                        취소 신청 없이 무단 불참시 환불 불가와 더불어 서비스 이용 제한이 발생합니다.
                        <br />
                        **취소 및 경기 변경 또한 동일한 환불 규정이 적용되니 신중한 신청 부탁드립니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-3" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-3-toggle"></span>
                    <span>비나 눈이 와도 매치가 진행되나요?</span>
                </button>
                <div class="answer hide" id="ans-3">
                    <p>
                        에브리풋볼 매치 규정상 '재난 문자' 기준에 따라 경기가 취소됩니다.
                        <br />
                        신청 시 일기 예보 확인을 부탁드리며, 경기 시작 1시간 전 발송되는 재난문자에 한해서만 경기가
                        취소됩니다.
                        <br />
                        안전상의 문제로 인해 다음과 같은 경우에는 참가자가 경기를 진행하고 싶어도 경기가 취소됨을 양해
                        부탁드립니다.
                        <br />
                    </p>
                    <p>
                        [경기 취소 기준]
                        <br />
                        우천 : 호우 경보 이상 재난 문자 발송 시 경기 취소
                        <br />
                        우설 : 특설 경보 이상 재난 문자 발송 시 경기 취소
                        <br />
                        기타 천재지변 : 에브리 풋볼 관리자 혹은 해당 매치 매니저의 판단하 경기취소
                    </p>
                    <p>
                        *해당 경기 취소 시 신청금액 전액 환불이 이뤄집니다.
                        <br />
                        *해당 경기 취소 시 신청 계정의 핸드폰 번호로 카카오톡 메세지가 발송됩니다. (핸드폰 번호의 오기입
                        확인 꼭 부탁드립니다.)
                    </p>
                    <p>
                        하지만, 경기 진행 도중의 우천, 우설시에는 경기 취소 및 환불이 이뤄지지 않습니다.
                        <br />
                        진행 중 플레이가 어려울 정도의 기상현상 발생시에는 현장에서 매니저의 판단 아래 진행 및 취소가
                        이뤄집니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-4" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-4-toggle"></span>
                    <span>날짜를 잘못 신청해서 취소하고 싶어요</span>
                </button>
                <div class="answer hide" id="ans-4">
                    <p>
                        해당 경기 참가로 인해 다른 인원이 참가할 수 있는 기회가 사라지게 되므로,
                        <br />
                        해당 경우 취소 규정에 따른 환불 혹은 부분 환불만이 이뤄지기에 신중한 신청 부탁드립니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-5" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-5-toggle"></span>
                    <span>인원이 채워지지 않으면 경기가 취소 되나요?</span>
                </button>
                <div class="answer hide" id="ans-5">
                    <p>
                        매치 인원 미달로 인한 경기 진행 불가 시에는
                        <br />
                        경기가 취소되며, 해당 경우 전액 환불이 이뤄집니다.
                        <br />
                        하지만, 소수의 인원이 부족한 경우 자체 매니저 파견하여 경기가 진행되는 것을 원칙으로 합니다.
                        <br />
                        경기 시작 1시간 전까지 최소 인원 모집 여부를 알림톡을 통해 전달해드립니다.
                        <br />
                        해당 경우 경기 취소 시 전액 환불이 이뤄집니다.
                    </p>
                    <p>
                        [최소 인원 기준]
                        <br />
                        2파전 5인 경기 : 10명
                        <br />
                        2파전 6인 경기 : 12명
                        <br />
                        3파전 5인 경기 : 15명 (미달 시 2파전 7인 1팀으로 변경)
                        <br />
                        3파전 6인 경기 : 18명 (미달 시 2파전 8인 1팀 혹은 3파전 5인 변경)
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <div class="faq-category">경기 진행</div>
                <button class="question" id="que-6" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-6-toggle"></span>
                    <span>5대5 매치는 어떻게 진행되나요?</span>
                </button>
                <div class="answer hide" id="ans-6">
                    <p>에브리풋볼 5대5 매치는 2파전과 3파전 2가지로 구성되어있습니다.</p>
                    <p>
                        [2파전 진행]
                        <br />
                        인원 : 최소 10 - 최대 14명
                        <br />
                        배정 : 각 A l B 팀 5 - 7명
                        <br />
                        진행 : 쿼터 시스템 (1-6 쿼터 15분 진행 3분 휴식, 7쿼터 10분 진행)
                        <br />
                    </p>
                    <p>
                        [3파전 진행]
                        <br />
                        인원 : 고정 15명
                        <br />
                        배정 : 각 A l B l C 팀 5명
                        <br />
                        진행 : 쿼터 시스템
                        <br />
                        1경기 A B 2경기 B C 3경기 C A<br />
                        4경기 A B 5경기 B C 6경기 C A<br />
                        *3파전의 경우 1쿼터 (17분 경기 3분 휴식) 진행 총 6쿼터
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-7" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-7-toggle"></span>
                    <span>6대6 매치는 어떻게 진행되나요?</span>
                </button>
                <div class="answer hide" id="ans-7">
                    <p>
                        에브리풋볼 6대6 매치는 2파전과 3파전 2가지로 구성되어 있습니다.
                        <br />
                        하지만, 3파전의 경우에 최소 인원이 미달될 시 2파전으로 변경될 수 있습니다.
                        <br />
                    </p>
                    <p>
                        [2파전 진행]
                        <br />
                        인원 : 최소 12 - 최대 16명
                        <br />
                        배정 : 각 A l BㅣC 팀 5 - 7명
                        <br />
                        진행 : 쿼터 시스템 (1-6 쿼터 15분 진행 3분 휴식, 7쿼터 10분 진행)
                    </p>
                    <p>
                        [3파전 진행]
                        <br />
                        인원 : 고정 18명
                        <br />
                        배정 : 각 A l B l C 팀 6명
                        <br />
                        진행 : 쿼터 시스템
                        <br />
                        1경기 A B 2경기 B C 3경기 C A<br />
                        4경기 A B 5경기 B C 6경기 C A<br />
                        *3파전의 경우 1쿼터 (17분 경기 3분 휴식) 진행 총 6쿼터
                        <br />
                        *고정인원 18인 미달 시 에브리풋볼 매니저 파견을 원칙으로 함
                    </p>
                    <p>
                        ! 경기인원 미달 시<br />
                        1. 15인 모집 시<br />
                        ⁃ 5대5 3파전 변경을 우선
                        <br />
                        ⁃ 6대6 2파전 변경을 차선
                        <br />
                        2. 14인 미만 모집 시<br />⁃ 6대6 2파전 변경
                    </p>
                    <p>
                        *경기 인원 미달 시 진행에 대한 여부는 카카오톡 알림톡으로 발송하며,
                        <br />
                        이 경우 참가자의 답변을 통해 즉각적인 경기 진행방식 변경 혹은 취소가 이뤄집니다.
                        <br />
                        취소가 이뤄질 시 전액환불 규정이 적용됩니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-8" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-8-toggle"></span>
                    <span>경기 진행이 어떻게 되나요?</span>
                </button>
                <div class="answer hide" id="ans-8">
                    <p>에브리풋볼의 매치는 5인 경기 2파전/3파전, 6인 경기 2파전/3파전 총 4가지로 구성되어 있습니다.</p>
                    <p>
                        1. 경기장 집결
                        <br />
                        2. 에브리풋볼 매니저 등번호가 새겨진 조끼 불출
                        <br />
                        3. 등번호에 따라 골키퍼, 필드, 휴식 로테이션에 대한 매니저 설명
                        <br />
                        4. 쿼터 진행, 휴식 반복 진행
                        <br />
                        5. 마지막 쿼터 진행 후 마무리
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <div class="faq-category">구장 및 구장서비스</div>
                <button class="question" id="que-9" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-9-toggle"></span>
                    <span>샤워 시설이 있나요?</span>
                </button>
                <div class="answer hide" id="ans-9">
                    <p>
                        샤워 시설은 구장 시설에 포함되어 있어, 구장별로 상이합니다.
                        <br />
                        매치 신청페이지에서 여부 확인이 가능하니 참고 부탁드립니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-10" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-10-toggle"></span>
                    <span>유니폼이나 운동복을 빌려주나요?</span>
                </button>
                <div class="answer hide" id="ans-10">
                    <p>유니폼/운동복 대여 여부는 풋살장에 따라 다릅니다.</p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-11" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-11-toggle"></span>
                    <span>주차시설이 있나요?</span>
                </button>
                <div class="answer hide" id="ans-11">
                    <p>경기장(구장)에 따라 주차가 가능합니다.</p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-12" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-12-toggle"></span>
                    <span>천연잔디 구장인가요?</span>
                </button>
                <div class="answer hide" id="ans-12">
                    <p>
                        경기장(구장)에 따라 잔디의 종류와 길이에 상이한 차이가 있으나, 대부분의 경우 '인조 잔디'
                        상태입니다.
                        <br />
                        때문에 잔디보호와 부상방지를 위하여 스터드가 있는 축구화(SG, FG, HG, AG)는 보통 착용이 금지되며
                        풋살화(TF)만 착용 가능 합니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <div class="faq-category">매치 신청</div>
                <button class="question" id="que-13" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-13-toggle"></span>
                    <span>혼성매치가 뭐에요?</span>
                </button>
                <div class="answer hide" id="ans-13">
                    <p>
                        혼성 매치는 문자 그대로 남녀가 모두 참여 가능한 매치입니다.
                        <br />
                        남성의 보다 거친 플레이가 부담이신 남성분들, 체력적으로 힘드신 남성분들, 실력을 향상시키고 싶은
                        여성분들을 위한 매치 프로그램입니다.
                    </p>
                    <p>
                        -성별의 신체적 차이에서 오는 과격함이나 비신사적인 플레이를 지양해주시기 바랍니다.
                        <br />
                        -보통 남성의 비율이 높은 편으로 '비정기적'으로 진행됩니다.
                        <br />
                        -당일 현장에서 여성 신청자가 없는 경우 남성 매치로 진행됩니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-14" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-14-toggle"></span>
                    <span>친구와 같은 팀으로 매치를 진행하고 싶어요</span>
                </button>
                <div class="answer hide" id="ans-14">
                    <p>
                        경기 신청 후 구장 집결 시 지인들과 오신 분들은 같은 팀으로 배정이 가능합니다.
                        <br />
                        집결 후 구장에서 해당 에브리풋볼 매니저에게 별도 문의 부탁드립니다.
                        <br />
                        그러나, 경기 진행 중 팀 밸런스 조정을 필요할 시 불가피하게 팀 조정이 될 수 있다는 점 양해
                        부탁드립니다.
                    </p>
                    <p>
                        단체 신청(한 ID/계정으로 다수 인원 신청)시 지각, 무단 불참은 서비스 이용에 지대한 영향을 미쳐
                        '이용 제제 혹은 기간 제한'이 될 수 있으며,
                        <br />
                        분위기를 흐리는 행위 등 경기 운영에 지장을 주는 행위 또한 제제 행위가 이뤄질 수 있습니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-15" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-15-toggle"></span>
                    <span>한 자리 신청 후 여러 명이 번갈아가며 뛸 수 있나요?</span>
                </button>
                <div class="answer hide" id="ans-15">
                    <p>에브리풋볼 매치의 원칙상 '한 자리 신청시 한 명만 참가'하도록 규정되어 있습니다.</p>
                    <p>때문에, 코로나 거리두기 인원제한 규정상 절대 불가합니다.</p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-16" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-16-toggle"></span>
                    <span>고정 포지션으로 신청이 가능할까요?</span>
                </button>
                <div class="answer hide" id="ans-16">
                    <p>
                        에브리풋볼의 매치 진행 방식은 경기 시작 전 등번호가 부여된 조끼를 배정받아 로테이션 시스템으로
                        진행됩니다.
                        <br />
                        때문에, 모든 포지션을 고루 뛰며 경기가 진행되기에 고정 포지션으로 신청이 불가합니다.
                    </p>
                    <p>
                        하지만, 고정 '골키퍼'에 한해서는 신청이 가능합니다.
                        <br />
                        해당 경우 매치 장소 집결 시 에브리풋볼 매니저에게 말씀해주시면 됩니다.
                    </p>
                </div>
            </div>
            <div class="faq-content">
                <button class="question" id="que-17" onClick={(event) => openCloseAnswer(event)}>
                    <span id="que-17-toggle"></span>
                    <span>나이 제한이 있을까요?</span>
                </button>
                <div class="answer hide" id="ans-17">
                    <p>
                        에브리풋볼은 일반 매치 나이의 상한선을 별도로 제한하지 않지만, 신체 접촉이 많은 대면 스포츠와
                        <br />
                        20 - 30대가 이용자의 주 연령대임를 감안하여 고령의 참가자분께서는 부상에 필히 유의해주시길
                        부탁드립니다.
                    </p>
                    <p>
                        하지만, 안전상의 이유로 고등학생(만 16세) 이하의 경우 참여가 제한됩니다.
                        <br />
                        해당 경우 현장에 부모님 동반하셔도 고등학교 미만의 참가자로 확인되는 경우 참가가 제한됩니다.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FAQ;
