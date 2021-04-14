module.exports=`
        <div class='recipt'>
            <h2>영수증 정보</h2>
            <div class='recipt_purchase_type'>
                <input type='radio' name='purchase_type' id='shop' checked />
                <label for="shop">농식품 구입</label>
                <input type='radio' name='purchase_type' id='eatery'/>
                <label for="eatery">외식</label>
            </div>
            <div class='recipt_shop_type'>
                <input type="text" name='shop_type' placeholder="구매처유형" />
            </div>
            <div class='recipt_shop_name'>
                <input type="text" name='shop_name' placeholder="구매처" />
            </div>
            <div class='recipt_shop_region'>
                <input type="text" name='shop_region' placeholder="구매지역" />
            </div>
            <div class='recipt_recipt'>
                <input type='radio' name='recipt' id='yes' checked />
                <label name='recipt' for="yes">유</label>
                <input type='radio' name='recipt' id='no'/>
                <label name='recipt' for="no">무</label>
            </div>
            <div class='recipt_purchase_date'>
                <input type="date" name='purchase_date' placeholder="구매날짜" />
            </div>
            <div class='recipt_purchase_day'>
                <input type='text' name='purchase_day' placeholder="구매요일" />
            </div>
            <div class='recipt_purchase_time'>
                <input type="number" name='purchase_time' placeholder="구매시간" />
                <span>시</span>                    
            </div>
            <div class='recipt_take_out'>
                <input type="checkbox" name='take_out' id='take_out' />
                <label for='take_out'>take out</label>
            </div>
            <div class='recipt_payment_type'>
                <input type="text" name='payment_type' placeholder="결제방법" />
            </div>
            <div class='recipt_transportation_go'>
                <input type="text" name='transportation_go' placeholder="갈 때" />
            </div>
            <div class='recipt_transportation_come'>
                <input type="text" name='transportation_come' placeholder="올 때" />
            </div>
            <div class='recipt_dutchpay'>
                <input type="checkbox" name='dutchpay' id='dutchpay' />
                <label for='dutchpay'>dutch pay</label>
            </div>
            <div class='recipt_dutchpay_member'>
                <input type="number" name='dutchpay_member' placeholder="인원" />
            </div>
            <div class='recipt_dutchpay_total'>
                <input type="number" name='dutchpay_total' placeholder="총 금액" />
            </div>
            <div class='recipt_notice_1'>
                <p>영수증 특이사항</p>
                <textarea name='notice_1'></textarea>
            </div>
        </div>
`;