import styled from '@emotion/styled'

const Container = styled.div`
  .intro {
    text-align: center;
  }

  .table {
    * {
    font-size: 18px;
    }
    dt {
      float: left;
    }
    dd {
      margin-left: 100px;
      margin-bottom: 10px;
    }
  }

  .segment {
    max-height: 400px;
    overflow: auto;
  }
`

export default Container
