import IconBar from "./IconBar";

import utilStyles from "../styles/utils.module.css";

export default function Layout({ children, signOut }) {
    return (
        <main>
            <div className={utilStyles.rowStack}>
                <div className={`${utilStyles.columnStack} ${utilStyles.leftMargin}`}>
                    {children}
                </div>
                <IconBar signOut={signOut} />
            </div>
        </main>
    );
}