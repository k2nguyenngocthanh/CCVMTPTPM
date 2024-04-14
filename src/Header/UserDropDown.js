import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const UserDropDown = ({ user, logoutBtn }) => (
  <Dropdown
    menu={{
      items: [
        { label: logoutBtn, key: "1" },
        { label: <span>Cập nhật tài khoản</span>, key: "2" },
      ],
    }}
    trigger={["click"]}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <div className="flex">
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          <span>{user.ho_Ten}</span>
        </div>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default UserDropDown;
