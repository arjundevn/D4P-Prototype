import { RegisterFormData } from './pages/Register' ;

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/users/register`)
    
}