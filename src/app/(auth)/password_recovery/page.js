import PasswordForms from '../../../components/ui/PasswordForms'
import { createClient } from '../../utils/supabase/server'

import { forgotPassword, resetPassword } from '../actions'

export default async function ForgotPassword() {
    const supabase = createClient()

    return (
        <PasswordForms form="sendEmail" forgotPassword={forgotPassword} resetPassword={resetPassword}/>
    )
}