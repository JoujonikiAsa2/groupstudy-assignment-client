import Lottie from 'lottie-react';
import faq from '../../../LottieResources/FAQ.json'
const FAQ = () => {
    return (
        <div className="mb-12">
            <h1 className="text-2xl font-bold text-[#2BAFFC] text-center py-0" data-aos="zoom-in">FAQ</h1>
            <div className='flex flex-col md:flex-row-reverse lg:flex-row-reverse justify-center items-center'>
                <Lottie animationData={faq} className='max-w-sm h-auto' data-aos="fade-down"></Lottie>
                <div className="join join-vertical w-full" data-aos="fade-up">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I create an account on Learn Together?
                        </div>
                        <div className="collapse-content">
                            <p>To create an account, click on the "Sign Up" button, provide your email address, and set a password. You can also sign up using your social media accounts for a quicker registration process.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How can I create an assignment?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Creating an assignment is easy. Navigate to your study group, click on "Create Assignment," add instructions, set deadlines, and attach relevant materials. You can create both individual and group assignments.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I submit an assignment?
                        </div>
                        <div className="collapse-content">
                            <p>
                                To submit an assignment, go to the assignment page, upload your work, and click "Submit." Make sure to meet the deadline to ensure your submission is considered.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How are assignments graded?
                        </div>
                        <div className="collapse-content">
                            <p>
                                How are assignments graded?
                                Assignments are graded by your peers based on predefined criteria. After the grading period, you'll receive feedback and grades from your friends, fostering a supportive learning environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;