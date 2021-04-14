module.exports = `
        <div class='item'>
            <h2>상품정보</h2>
            <div class='item_item_name'>
                <input type='text' name='item_name' placeholder="상품명" />
            </div>
            <div class='item_item_origin'>
                <input type='text' name='item_origin' placeholder="원산지" />
            </div>
            <div class='item_quantity'>
                <input type='text' name='quantity' placeholder="수량" />
            </div>
            <div class='item_quantity_unit'>
                <input type='text' name='quantity_unit' placeholder="수량단위" />
            </div>
            <div class='item_weight_total'>
                <input type='text' name='weight_total' placeholder="1수량당중량" />
            </div>
            <div class='item_weight_total_unit'>
                <input type='text' name='weight_total_unit' placeholder="1수량당중량단위" />
            </div>
            <div class='item_multi_quantity'>
                <input type='text' name='multi_quantity' placeholder="멀티수량" />
            </div>
            <div class='item_multi_quantity_unit'>
                <input type='text' name='multi_quantity_unit' placeholder="멀티수량단위" />
            </div>
            <div class='item_weight_item'>
                <input type='text' name='weight_item' placeholder="멀티수량당중량" />
            </div>
            <div class='item_weight_item_unit'>
                <input type='text' name='weight_item_unit' placeholder="멀티수량당중량단위" />
            </div>
            <div class='item_unit_price'>
                <input type='number' name='unit_price' placeholder="단가" />
            </div>
            <div class='item_price'>
                <input type='number' name='price' placeholder="구입액" />
            </div>
            <div class='item_discount'>
                <input type='number' name='discount' placeholder="할인액" />
            </div>
            <div class='item_notice2'>
                <p>상품 특이사항</p>
                <textarea name='notice_2'></textarea>
            </div>
        </div>
`;