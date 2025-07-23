// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Python cơ bản 🐍',
      collapsed: true,
      items: [
        'Python/python-co-ban/python-overview',
        'Python/python-co-ban/python-syntax',
        'Python/python-co-ban/variables-operator',
        'Python/python-co-ban/string',
        'Python/python-co-ban/numbers',
        'Python/python-co-ban/list',
        'Python/python-co-ban/tuple',
        'Python/python-co-ban/dictionary',
        'Python/python-co-ban/conditional',
        'Python/python-co-ban/loop',
        'Python/python-co-ban/function',
        'Python/python-co-ban/module-package',
        'Python/python-co-ban/file',
        'Python/python-co-ban/py-oop-overview',
        'Python/python-co-ban/py-oop-con-des',
        'Python/python-co-ban/python-virtualenv',
      ],
    },
    {
      type: 'category',
      label: 'Docker 🐳',
      collapsed: true,
      items: [
        'Docker/docker-la-gi',
        'Docker/lich-su-phat-trien-docker',
        'Docker/tai-sao-nen-su-dung-docker',
        'Docker/tim-hieu-cac-khai-niem-ve-docker-co-ban',
        'Docker/docker-images',
        'Docker/docker-compose',
        'Docker/quy-trinh-thuc-thi-mot-he-thong-su-dung-docker',
        'Docker/container-trong-docker-la-gi',
        'Docker/django-mysql-docker',
        'Docker/mot-so-docker-khac',
        'Docker/ngork/ngrok-django',
        'Docker/ngork/ngrok-xampp',
      ],
    },
    {
      type: 'category',
      label: 'AR-IO 🛰️',
      collapsed: true,
      items: [
        'AR-IO/intro',
        'AR-IO/setup-node',
        'AR-IO/Delegated Staking Settings',
      ],
    },
    {
      type: 'category',
      label: 'SPNC',
      collapsed: true,
      items: [
        'SPNC/HuongDanCaiDat',
        'SPNC/HuongDanSuDung',
      ],
    },
  ],
};

export default sidebars;
