function FsSvgIcons({ type }) {
  const EnumTypes = { upload: "upload", maletin: "maletin" };
  if (type === EnumTypes.upload)
    return (
      <>
        <svg
          width="34px"
          height="42px"
          viewBox="0 0 34 42"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg%22%3E"
        >
          <title>Icon/ Receipts</title>
          <g
            id="Current"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Empty-Document"
              transform="translate(-825.000000, -499.000000)"
            >
              <g
                id="Modal/Add-Member"
                transform="translate(422.000000, 298.000000)"
              >
                <g id="Group-4" transform="translate(42.000000, 115.000000)">
                  <g
                    id="Attachments"
                    transform="translate(322.000000, 0.000000)"
                  >
                    <g
                      id="Icon/-Receipts"
                      transform="translate(39.000000, 86.000000)"
                    >
                      <path
                        d="M21.25,0 L4.25,0 C1.9125,0 0,1.89 0,4.2 L0,37.8 C0,40.11 1.9125,42 4.25,42 L29.75,42 C32.0875,42 34,40.11 34,37.8 L34,12.6 L21.25,0 Z M4.25,37.8 L4.25,4.2 L19.125,4.2 L19.125,12.6 L29.75,12.6 L29.75,37.8 L4.25,37.8 Z"
                        id="Shape"
                        fill="#007EFF"
                      ></path>
                      <g
                        id="file_upload-24px"
                        transform="translate(5.000000, 10.000000)"
                      >
                        <rect
                          id="Rectangle"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        ></rect>
                        <path
                          d="M18,15 L18,18 L6,18 L6,15 L4,15 L4,18 C4,19.1 4.9,20 6,20 L18,20 C19.1,20 20,19.1 20,18 L20,15 L18,15 Z M7,9 L8.41,10.41 L11,7.83 L11,16 L13,16 L13,7.83 L15.59,10.41 L17,9 L12,4 L7,9 Z"
                          id="Shape"
                          fill="#007EFF"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </>
    );
  if (type === EnumTypes.maletin) {
    return (
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>icons/company</title>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g id="icons/company" fill="#003365">
            <path
              d="M14.2,6.4 L14.2,4.2 L9.8,4.2 L9.8,6.4 L14.2,6.4 Z M3.2,8.6 L3.2,20.7 L20.8,20.7 L20.8,8.6 L3.2,8.6 Z M20.8,6.4 C22.021,6.4 23,7.379 23,8.6 L23,20.7 C23,21.921 22.021,22.9 20.8,22.9 L3.2,22.9 C1.979,22.9 1,21.921 1,20.7 L1.011,8.6 C1.011,7.379 1.979,6.4 3.2,6.4 L7.6,6.4 L7.6,4.2 C7.6,2.979 8.579,2 9.8,2 L14.2,2 C15.421,2 16.4,2.979 16.4,4.2 L16.4,6.4 L20.8,6.4 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    );
  }

  return <></>;
}

export default FsSvgIcons;
