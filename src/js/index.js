$(function() {
    $.ajax({
        url: '../data.json',
        dataType: 'json',
        success: function(rs) {
            if (rs.code === 1) {

                render(rs.data);
            }
        }
    });

    function render(data) {
        var obj = {};
        data.forEach(function(item) {
            var first = item.Spelling.substr(0, 1);
            if (!obj[first]) {
                obj[first] = {
                    title: first,
                    list: []
                };
            }
            obj[first].list.push(item);

        });

        var arr = [];
        for (var i in obj) {
            arr.push(obj[i]);
        }
        arr.sort(function(a, b) {
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        });
        //渲染city
        var lhtml = '';
        var html = '';
        arr.forEach(function(item) {
            lhtml += `<h4 class="${item.title}">${item.title}</h4><ul class="cityList">`;
            item.list.forEach(function(val) {
                lhtml += `<li>
                    <dl>
                        <dt>
                            <img src="" alt="">
                        </dt>
                        <dd>
                            <p>${val.Name}</p>
                        </dd>
                    </dl>
                </li>`;
            });
            lhtml += `</ul>`;
            //渲染右导航
            html += `<li>${item.title}</li>`;
        });
        $('.con').append(lhtml);
        $('.rightsidebar').append(html);
        var Bscroll = new BScroll('.main', {
            click: true
        });
        $('.rightsidebar').on('click', 'li', function() {
            var el = '.' + $(this).html();
            Bscroll.scrollToElement(el, 100);
        });
    }


});