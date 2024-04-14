import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const { Meta } = Card;
const StyledMeta =styled(Card)`
  .ant-card-meta-title {
    text-transform: uppercase;
    font-weight: bold;
    text-size: 40px;
    text-align: center;
  };
  .ant-card-body {
    padding: 10px;
  };
  .ant-card-meta-description {
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    transition: all 1s;
  };
  .ant-card-meta-description:hover {
    color: red !important;
  }
`
const ItemMovie = ({data}) => (
  <StyledMeta
    hoverable
  
    cover={<img className='h-48 object-fill object-top' alt="example" src={`http://localhost:8080/public/movie_img/${data.hinh_anh}`} />}
  >
    <Meta
      title={data.ten_phim}
      description={
        <NavLink
          className={"px-5 text-center py-2 border-2 border-red-500 rounded"}
          to={`./detail/${data.ma_phim}`}
        >
          ĐẶT VÉ
        </NavLink>
      }
    />
  </StyledMeta>
);
export default ItemMovie;