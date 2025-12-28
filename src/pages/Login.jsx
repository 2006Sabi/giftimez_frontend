import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Gift } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const Login = () => {
    const { login } = useShop();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log('Login submitted:', formData);

        // Login with backend
        await login({ email: formData.email, password: formData.password });
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F0F9FF] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-[1.01] duration-300">
                <div className="text-center">
                    <div className="mx-auto h-12 w-12 bg-[#00C8FA]/10 flex items-center justify-center rounded-full mb-4">
                        <Gift className="h-8 w-8 text-[#00C8FA]" />
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold text-[#00C8FA] tracking-tight">
                        GiftimeZ
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 font-medium">
                        We invest on your smiles
                    </p>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                        Welcome Back!
                    </h3>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                                    <Mail className="h-5 w-5 text-[#00C8FA]" aria-hidden="true" />
                                </div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`appearance-none rounded-xl relative block w-full px-3 py-3 pl-10 border ${errors.email ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00C8FA] focus:border-transparent focus:z-10 sm:text-sm transition-colors duration-200 bg-gray-50 hover:bg-white`}
                                    placeholder="Email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-xs text-red-500 pl-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-20">
                                    <Lock className="h-5 w-5 text-[#00C8FA]" aria-hidden="true" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    className={`appearance-none rounded-xl relative block w-full px-3 py-3 pl-10 pr-10 border ${errors.password ? 'border-red-500' : 'border-gray-300'} placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00C8FA] focus:border-transparent focus:z-10 sm:text-sm transition-colors duration-200 bg-gray-50 hover:bg-white`}
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-[#00C8FA] hover:text-[#00b0dc] focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                    </button>
                                </div>
                            </div>
                            {errors.password && <p className="mt-1 text-xs text-red-500 pl-1">{errors.password}</p>}
                        </div>
                    </div>

                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="#" className="font-medium text-[#00C8FA] hover:text-[#00b0dc] transition-colors">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-full text-white bg-[#00C8FA] hover:bg-[#00b0dc] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00C8FA] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Sign in
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-bold text-[#00C8FA] hover:text-[#00b0dc] transition-colors">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
