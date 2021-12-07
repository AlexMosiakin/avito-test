import styled from 'styled-components'

export const StoryWrapper = styled.section`
padding: 20px;
background: #fff;
border-radius: 8px;
pointer-events:none;
height: calc(100% - 40px);
color:#000;
max-width:1560px;
margin: 0 auto;

.story-title{
    font-weight:700;
    color: rgb(255, 102, 0);
}
.story-title-item{
    font-weight:700;
    color: rgb(255, 102, 0);
    font-size:32px;
    margin-top: 0;
}
.story-row{
    margin: 0 0 20px 0;
    align-items: center;
    display: flex;
    font-size:24px
}
.story-row>img{
    max-width:32px;
    margin-right:10px;
}
.story-row:last-child{
    margin:0;
}
`;