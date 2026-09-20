import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditor from '@site/src/components/CodeEditor';

import styles from './index.module.css';

const code = `def gioi_thieu():

    print("Xin chào các bạn!")
    print("Mình đang học lập trình Python.")
    print("Python thật thú vị!")


gioi_thieu()
`;

const categories = [
    {
        icon: '🐍',
        title: 'Python',
        description: 'Lập trình Python từ cơ bản đến thực hành.',
        link: '/docs/Python/python-co-ban/python-overview',
    },
    {
        icon: '🌐',
        title: 'Web Development',
        description: 'Website, frontend, backend và những dự án web.',
        link: '/docs/web',
    },
    {
        icon: '🎓',
        title: 'Giáo dục',
        description: 'Tài liệu, bài giảng và những nội dung phục vụ dạy học.',
        link: '/docs/giao-duc',
    },
    {
        icon: '🔧',
        title: 'STEM & Công nghệ',
        description: 'Arduino, điện tử, IoT và các dự án thực hành.',
        link: '/docs/stem',
    },
    {
        icon: '💡',
        title: 'Kinh nghiệm',
        description: 'Những ghi chú và kinh nghiệm trong quá trình làm việc.',
        link: '/docs/kinh-nghiem',
    },
    {
        icon: '🚀',
        title: 'Dự án',
        description: 'Các dự án cá nhân đang thực hiện và phát triển.',
        link: '/docs/du-an',
    },
];

const posts = [
    {
        category: 'Python',
        icon: '🐍',
        title: 'Làm quen với lập trình Python',
        description:
            'Những kiến thức đầu tiên để bắt đầu viết chương trình Python.',
        link: '/docs/python',
    },
    {
        category: 'Web',
        icon: '🌐',
        title: 'Xây dựng website với Docusaurus',
        description:
            'Ghi chú và kinh nghiệm xây dựng website tài liệu bằng Docusaurus.',
        link: '/docs',
    },
    {
        category: 'STEM',
        icon: '🔧',
        title: 'Một số dự án STEM thực hành',
        description:
            'Tổng hợp những ý tưởng và dự án công nghệ có thể áp dụng trong giáo dục.',
        link: '/docs/stem',
    },
];

export default function Home() {
    return (
        <Layout
            title="Tín Nguyễn"
            description="Blog cá nhân về lập trình, giáo dục, công nghệ và các dự án thực hành."
        >
            <main className={styles.home}>

                {/* HERO */}

                <section className={styles.hero}>
                    <div className={styles.heroInner}>

                        <div className={styles.heroText}>

                            <div className={styles.hello}>
                                👋 Xin chào, mình là
                            </div>

                            <h1>
                                Tín Nguyễn
                            </h1>

                            <p>
                                Đây là nơi mình chia sẻ những bài viết,
                                tài liệu, kinh nghiệm và các dự án trong
                                quá trình học tập, giảng dạy và làm công nghệ.
                            </p>

                            <div className={styles.heroActions}>
                                <Link
                                    className={styles.primaryButton}
                                    to="/blog"
                                >
                                    Xem bài viết
                                    <span>→</span>
                                </Link>

                                <Link
                                    className={styles.secondaryButton}
                                    to="/docs/intro"
                                >
                                    Xem tài liệu
                                </Link>
                            </div>

                        </div>

                        <div className={styles.heroCard}>

                            <div className={styles.heroCardTop}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className={styles.heroCode}>
                                <span className={styles.codeBlue}>const</span>{' '}
                                <span className={styles.codeWhite}>website</span>{' '}
                                = {'{'}
                                <br />
                                &nbsp;&nbsp;name:{' '}
                                <span className={styles.codeGreen}>
                                    "Tín Nguyễn"
                                </span>
                                ,
                                <br />
                                &nbsp;&nbsp;topics: [
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className={styles.codeGreen}>
                                    "Code"
                                </span>
                                ,
                                <span className={styles.codeGreen}>
                                    "Education"
                                </span>
                                ,
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className={styles.codeGreen}>
                                    "Technology"
                                </span>
                                ,
                                <span className={styles.codeGreen}>
                                    "Projects"
                                </span>
                                <br />
                                &nbsp;&nbsp;]
                                <br />
                                {'}'};
                            </div>

                        </div>

                    </div>
                </section>


                {/* CATEGORIES */}

                <section className={styles.section}>
                    <div className={styles.sectionHeading}>
                        <div>
                            <div className={styles.label}>
                                KHÁM PHÁ
                            </div>

                            <h2>
                                Nội dung trên blog
                            </h2>

                            <p>
                                Những chủ đề mình thường xuyên viết và chia sẻ.
                            </p>
                        </div>
                    </div>

                    <div className={styles.categoryGrid}>
                        {categories.map((item) => (
                            <Link
                                key={item.title}
                                to={item.link}
                                className={styles.categoryCard}
                            >
                                <div className={styles.categoryIcon}>
                                    {item.icon}
                                </div>

                                <div>
                                    <h3>{item.title}</h3>

                                    <p>
                                        {item.description}
                                    </p>
                                </div>

                                <span className={styles.arrow}>
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>


                {/* POSTS */}

                <section className={styles.section}>
                    <div className={styles.sectionHeadingRow}>

                        <div>
                            <div className={styles.label}>
                                BÀI VIẾT
                            </div>

                            <h2>
                                Một số nội dung nổi bật
                            </h2>
                        </div>

                        <Link
                            className={styles.viewAll}
                            to="/blog"
                        >
                            Xem tất cả →
                        </Link>

                    </div>

                    <div className={styles.postGrid}>

                        {posts.map((post) => (
                            <Link
                                key={post.title}
                                to={post.link}
                                className={styles.postCard}
                            >
                                <div className={styles.postIcon}>
                                    {post.icon}
                                </div>

                                <div className={styles.postCategory}>
                                    {post.category}
                                </div>

                                <h3>
                                    {post.title}
                                </h3>

                                <p>
                                    {post.description}
                                </p>

                                <span className={styles.readMore}>
                                    Đọc tiếp →
                                </span>
                            </Link>
                        ))}

                    </div>
                </section>


                {/* PYTHON */}

                <section className={styles.pythonSection}>

                    <div className={styles.pythonHeader}>

                        <div>

                            <div className={styles.label}>
                                GÓC LẬP TRÌNH
                            </div>

                            <h2>
                                Thử một chút Python 🐍
                            </h2>

                            <p>
                                Một ví dụ nhỏ từ những tài liệu lập trình
                                trên blog. Bạn có thể trực tiếp chỉnh sửa
                                và chạy thử đoạn code bên dưới.
                            </p>

                        </div>

                        <Link
                            className={styles.pythonLink}
                            to="/docs/python"
                        >
                            Xem tài liệu Python →
                        </Link>

                    </div>

                    <div className={styles.codeEditorWrapper}>
                        <CodeEditor
                            code={code}
                            showButtons
                        />
                    </div>

                </section>


                {/* PROJECTS */}

                <section className={styles.section}>

                    <div className={styles.sectionHeading}>

                        <div>
                            <div className={styles.label}>
                                ĐANG LÀM
                            </div>

                            <h2>
                                Một vài dự án
                            </h2>

                            <p>
                                Những thứ mình đang xây dựng và thử nghiệm.
                            </p>
                        </div>

                    </div>

                    <div className={styles.projectGrid}>

                        <div className={styles.projectCard}>
                            <span>💻</span>
                            <div>
                                <h3>Web Development</h3>
                                <p>
                                    Xây dựng và phát triển các website,
                                    hệ thống quản lý và công cụ web.
                                </p>
                            </div>
                        </div>

                        <div className={styles.projectCard}>
                            <span>🎓</span>
                            <div>
                                <h3>Công nghệ giáo dục</h3>
                                <p>
                                    Những công cụ và dự án hỗ trợ việc
                                    dạy học và học tập.
                                </p>
                            </div>
                        </div>

                        <div className={styles.projectCard}>
                            <span>⚙️</span>
                            <div>
                                <h3>Thử nghiệm công nghệ</h3>
                                <p>
                                    Docker, Linux, IoT, AI và những công
                                    nghệ mình đang tìm hiểu.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>


                {/* FOOTER CTA */}

                <section className={styles.bottom}>
                    <div>
                        <div className={styles.label}>
                            CẢM ƠN BẠN ĐÃ GHÉ THĂM
                        </div>

                        <h2>
                            Cùng học hỏi và xây dựng điều gì đó thú vị.
                        </h2>

                        <p>
                            Khám phá các bài viết và tài liệu trên blog.
                        </p>

                        <Link
                            className={styles.primaryButton}
                            to="/blog"
                        >
                            Khám phá blog
                            <span>→</span>
                        </Link>
                    </div>
                </section>

            </main>
        </Layout>
    );
}