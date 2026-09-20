import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import CodeEditor from '@site/src/components/CodeEditor';

import styles from './index.module.css';

const code = `def gioi_thieu():
    print("Xin chào các bạn!")
    print("Mình là giáo viên Tin học.")
    print("Mình đang học và thực hành Python.")


gioi_thieu()
`;

const categories = [
    {
        icon: '🐍',
        title: 'Python',
        description:
            'Học Python từ cơ bản đến nâng cao, kèm ví dụ và các dự án thực hành.',
        link: '/docs/Python',
    },
    {
        icon: '🌐',
        title: 'Web Development',
        description:
            'Kiến thức và kinh nghiệm xây dựng website, frontend, backend và hệ thống web.',
        link: '/docs/Web',
    },
    {
        icon: '🎓',
        title: 'Giáo dục',
        description:
            'Tài liệu và nội dung phục vụ giảng dạy Tin học và các hoạt động học tập.',
        link: '/docs/giao-duc',
    },
    {
        icon: '🔧',
        title: 'STEM & Công nghệ',
        description:
            'Arduino, điện tử, IoT và những dự án công nghệ thực hành.',
        link: '/docs/STEM',
    },
    {
        icon: '💡',
        title: 'Kinh nghiệm',
        description:
            'Những ghi chú, kinh nghiệm học tập, giảng dạy và làm dự án.',
        link: '/docs/kinh-nghiem',
    },
    {
        icon: '🚀',
        title: 'Dự án',
        description:
            'Các dự án cá nhân về lập trình, điện tử, STEM và công nghệ.',
        link: '/docs/du-an',
    },
];

const posts = [
    {
        category: 'Python',
        icon: '🐍',
        title: 'Làm quen với lập trình Python',
        description:
            'Những kiến thức đầu tiên để bắt đầu học và viết chương trình Python.',
        link: '/docs/Python/python-co-ban/python-overview',
    },
    {
        category: 'Web',
        icon: '🌐',
        title: 'Xây dựng website với Docusaurus',
        description:
            'Ghi chú và kinh nghiệm xây dựng website tài liệu bằng Docusaurus.',
        link: '/docs/intro',
    },
    {
        category: 'STEM',
        icon: '🔧',
        title: 'Các dự án STEM thực hành',
        description:
            'Những ý tưởng và dự án STEM kết hợp Tin học, điện tử và công nghệ.',
        link: '/docs/STEM',
    },
];

export default function Home() {
    return (
        <Layout
            title="Nguyễn Thương Tín | Giáo viên Tin học, Python và STEM"
            description="Website cá nhân của Nguyễn Thương Tín – giáo viên Tin học tại Bảo Lộc, Lâm Đồng. Chia sẻ kiến thức Python, lập trình, Web, Arduino, STEM, điện tử và các dự án công nghệ."
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
                                Nguyễn Thương Tín
                            </h1>

                            <p>
                                Mình là <strong>giáo viên Tin học</strong>.
                                Đây là nơi mình chia sẻ kiến thức,
                                tài liệu, kinh nghiệm và các dự án về
                                <strong> Python, Web, Arduino, STEM và công nghệ</strong>.
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
                                    Giới thiệu
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
                                    "Nguyễn Thương Tín"
                                </span>
                                ,
                                <br />

                                &nbsp;&nbsp;role:{' '}
                                <span className={styles.codeGreen}>
                                    "Giáo viên Tin học"
                                </span>
                                ,
                                <br />

                                &nbsp;&nbsp;topics: [
                                <br />

                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className={styles.codeGreen}>
                                    "Python"
                                </span>
                                ,
                                <span className={styles.codeGreen}>
                                    "STEM"
                                </span>
                                ,
                                <br />

                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span className={styles.codeGreen}>
                                    "Arduino"
                                </span>
                                ,
                                <span className={styles.codeGreen}>
                                    "Web"
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
                                Kiến thức và tài liệu
                            </h2>

                            <p>
                                Các chủ đề mình học tập, giảng dạy và thực hành.
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
                                Nội dung nổi bật
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
                                Học Python qua thực hành 🐍
                            </h2>

                            <p>
                                Thử trực tiếp một đoạn code Python đơn giản
                                và khám phá các tài liệu lập trình trên website.
                            </p>

                        </div>

                        <Link
                            className={styles.pythonLink}
                            to="/docs/Python"
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
                                DỰ ÁN
                            </div>

                            <h2>
                                Các dự án đang thực hiện
                            </h2>

                            <p>
                                Những dự án mình đang xây dựng và thử nghiệm.
                            </p>

                        </div>

                    </div>

                    <div className={styles.projectGrid}>

                        <div className={styles.projectCard}>
                            <span>💻</span>

                            <div>
                                <h3>
                                    Website & Lập trình
                                </h3>

                                <p>
                                    Các dự án website và ứng dụng phục vụ
                                    việc học tập và thực hành lập trình.
                                </p>
                            </div>
                        </div>


                        <div className={styles.projectCard}>
                            <span>🔬</span>

                            <div>
                                <h3>
                                    STEM & Arduino
                                </h3>

                                <p>
                                    Các mô hình STEM, Arduino, điện tử
                                    và những dự án thực hành.
                                </p>
                            </div>
                        </div>


                        <div className={styles.projectCard}>
                            <span>⚙️</span>

                            <div>
                                <h3>
                                    Công nghệ
                                </h3>

                                <p>
                                    Linux, Docker, IoT và những công nghệ
                                    mình đang tìm hiểu và thực hành.
                                </p>
                            </div>
                        </div>

                    </div>

                </section>


                {/* FOOTER CTA */}

                <section className={styles.bottom}>

                    <div>

                        <div className={styles.bottomLabel}>
                            CẢM ƠN BẠN ĐÃ GHÉ THĂM
                        </div>

                        <h2>
                            Cùng học hỏi và khám phá công nghệ.
                        </h2>

                        <p>
                            Khám phá các bài viết, tài liệu và dự án
                            trên website.
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