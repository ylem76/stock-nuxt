<template>
  <div>
    <nuxt-link to="settings">설정</nuxt-link>
    <h1>2021.01.28<em>평가 수익</em></h1>
    <dl>
      <dt>삼성전자(005930)</dt>
      <dd><span>+402,281</span><span>단위(원)</span></dd>
    </dl>
    <dl>
      <dt>총액</dt>
      <dd>1,687,200</dd>
    </dl>
    <dl>
      <dt>수익률</dt>
      <dd>+31.41%</dd>
    </dl>
    <section>
      <h1>현재 시세</h1>
      <p>88,800</p>
      <p><span>up</span> 5,900</p>
      <p>+7.12%</p>
    </section>
    <section>
      <h1>보유 현황</h1>
      <table>
        <tr>
          <td>20.11.02</td>
          <td>67,400</td>
          <td>19</td>
        </tr>
      </table>
    </section>
    <section>
      <h1>차기 배당 안내</h1>
      <dl>
        <dt>배당기준일</dt>
        <dd>2020.12.28</dd>
      </dl>
      <dl>
        <dt>배당일</dt>
        <dd>2021.5.3</dd>
      </dl>
      <dl>
        <dt>배당금액</dt>
        <dd>1,932원</dd>
      </dl>
      <dl>
        <dt>배당예상금액</dt>
        <dd>36,708</dd>
      </dl>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    // fetch('http://asp1.krx.co.kr/servlet/krx.asp.XMLSise?code=095610')
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log(response)
    //     }
    //     throw new Error('nonono')
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // $.ajax({
    //   url: 'http://asp1.krx.co.kr/servlet/krx.asp.XMLSise?code=095610',
    //   dataType: 'xml',
    //   type: 'GET',
    //   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //   success: function (res) {
    //     console.log(res.responseText)
    //   },
    // })
  },
}
</script>
