import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = () => {

    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes('login') ||
        location.pathname.includes('signup') ||
        location.pathname.includes('studentDetails') ||
        location.pathname.includes('dp') ||
        location.pathname.includes('pendingStudent') ||
        location.pathname.includes('allStudent') ||
        location.pathname.includes('Payment')  ||
        location.pathname.includes('enterPhone') ||
        location.pathname.includes('enterotp') ||
        location.pathname.includes('studentEdit') ||
        location.pathname.includes('adminTeachers') ||       
        location.pathname.includes('adminTeachersEdit')  ||      
        location.pathname.includes('adminTeacherAdd') ||      
        location.pathname.includes('adminStudentAdd')  ||     
        location.pathname.includes('adminNotices') ||      
        location.pathname.includes('adminNoticesAdd') ||      
        location.pathname.includes('adminNoticesEdit')  ||     
        location.pathname.includes('adminRoutines')   ||    
        location.pathname.includes('adminRoutineAdd')  ||     
        location.pathname.includes('adminRoutineEdit') ||      
        location.pathname.includes('adminSyllabus')   ||    
        location.pathname.includes('adminSyllabusAdd') ||      
        location.pathname.includes('adminSyllabusEdit') ||      
        location.pathname.includes('pendingPayment')  ||     
        location.pathname.includes('approvedPayment')       

    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Layout;