$(function() {
    $.ajax({
        url: '../data.json',
        dataType: 'json',
        success: function(rs) {
            console.log(rs)
                // if (rs.code === 1) {
                //     console.log(rs)
                // }
        }
    });

    function render(data) {
        var obj = {};
        data.forEach(function(item) {
            var first = item.Spelling.substr(0, 1);
        });
        //渲染右导航
        var html = '';
        $.each(keys, function(i, item) {
            html += `<li>${item}</li>`;
        });
        $('.rightsidebar').append(html);
        //渲染city
        var lhtml = '';
        for (var i in data) {
            lhtml += `<h4 class="${i}">${i}</h4><ul class="cityList">`;
            $.each(data[i], function(ind, val) {
                lhtml += `<li>
                            <dl>
                                <dt>
                                    <img src="" alt="">
                                </dt>
                                <dd>
                                    <p>${val.name}</p>
                                </dd>
                            </dl>
                        </li>`;
            });
            lhtml += `</ul>`;
        }
        $('.con').append(lhtml);

        var Bscroll = new BScroll('.main', {
            click: true
        });
        $('.rightsidebar').on('click', 'li', function() {
            var el = '.' + $(this).html();
            Bscroll.scrollToElement(el, 100);
        });
    }

});