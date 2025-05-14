'use client'

import { Button } from "@/components/ui/button";
import SearchInput from "../ui/search-input";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useModal } from "@/hooks/useModal";
import { Modal } from "../ui/modal";
import axios from 'axios';
import Input1 from "@/components/ui/input1";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { toast } from "sonner";

interface User {
    role: "user" | "customer" | "organizer";
    name?: string;
}

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const { isOpen, openModal, closeModal } = useModal();
    const { isOpenPayment, openModalPayment, closeModalPayment} = useModal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPassword, setCompanyPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [activeTab, setActiveTab] = useState('client');
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [register, setRegister] = useState("");
    const [user, setUser] = useState<User>({role: "user"});

    const validatePassword = (password: string): string => {
    if (password.length < 8) return "Нууц үг том жижиг үсэг, тусгай тэмдэгт, тоо агуулсан 8 хүртэлх урттай байна.";
    if (!/[A-Z]/.test(password)) return "Нууц үг том үсэг агуулах ёстой.";
    if (!/[a-z]/.test(password)) return "Нууц үг жижиг үсэг агуулах ёстой.";
    if (!/\d/.test(password)) return "Нууц үг тоо агуулах ёстой.";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) return "Нууц үг тусгай тэмдэгт агуулах ёстой.";
    if (/\s/.test(password)) return "Нууц үг хоосон зай агуулах ёсгүй.";
    return "";
    };

    // customer login
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        setError("");
        setPasswordError("");
        setSuccessMessage("");
    
        if (!email || !password) {
            setError("Бүх талбарыг бөглөнө үү.");
            return;
        }
    
        const passwordValidationError = validatePassword(password);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3001/api/customerLogin', {
                email,
                password,
            });

            // Хэрэв token байгаа бол localStorage-д хадгална
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("role", "customer");
            }
    
            // Хариуны message-г шалгаж, амжилттай нэвтэрсэн эсэхийг тодорхойлно
            if (response.data.message === "Амжилттай нэвтэрлээ.") {
                alert("Амжилттай нэвтэрлээ!");
                setEmail("");
                setPassword("");
                console.log("Нэвтрэх:", response.data);
                closeModal();
            } else {
                setError("Имэйл эсвэл нууц үг буруу байна.");
            }
        } catch (err) {
            setError("Нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу.");
            console.error("Нэвтрэх алдаа:", err);
        }
    };
    
    // organizer login
    const handleSubmitCompany = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");
        setPasswordError("");
        setSuccessMessage("");

        if (!companyEmail || !companyPassword) {
            setError("Бүх талбарыг бөглөнө үү.");
            return;
        }

        const passwordValidationError = validatePassword(companyPassword);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/api/organizerLogin", {
                companyEmail,
                companyPassword,
            });

            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data));
                localStorage.setItem("role", "organizer");
            }
        
            if (response.data.message === "Амжилттай нэвтэрлээ.") {
                alert("Амжилттай нэвтэрлээ!");
                setCompanyEmail("");
                setCompanyPassword("");
                console.log("Нэвтрэх:", response.data);
                closeModal();
            } else {
            setError("Имэйл эсвэл нууц үг буруу байна.");
            }
        } catch (err) {
            setError("Имэйл эсвэл нууц үг буруу байна");
            console.error("Нэвтрэх алдаа:", err);
        }
    };

    // Add customer 
    const handleSubmit1 = async (e: React.FormEvent) => {
        e.preventDefault();
    
        setError("");
        setPasswordError("");
        setSuccessMessage("");
    
        if (!companyEmail || !companyPassword) {
            setError("Бүх талбарыг бөглөнө үү.");
            return;
        }
    
        const passwordValidationError = validatePassword(companyPassword);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:3001/api/organizerLogin', {
                companyEmail,
                companyPassword,
            });
    
            // Хэрэв token байгаа бол localStorage-д хадгална
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
    
            // Хариуны message-г шалгаж, амжилттай нэвтэрсэн эсэхийг тодорхойлно
            if (response.data.message === "Амжилттай нэвтэрлээ.") {
                alert("Амжилттай нэвтэрлээ!");
                setCompanyEmail("");
                setCompanyPassword("");
                console.log("Нэвтрэх:", response.data);
                closeModal();
            } else {
                setError("Имэйл эсвэл нууц үг буруу байна.");
            }
        } catch (err) {
            setError("Нэвтрэхэд алдаа гарлаа. Дахин оролдоно уу.");
            console.error("Нэвтрэх алдаа:", err);
        }
    };

    // Add organizer
    const handleSubmitCompany1 = async (e: React.FormEvent) => {
        e.preventDefault();
        
        setError("");
        setPasswordError("");
    
        if (!companyName || !register || !companyEmail || !companyPassword) {
            setError("Бүх талбарыг бөглөнө үү.");
            return;
        }
        
        const passwordValidationError = validatePassword(companyPassword);
        if (passwordValidationError) {
            setPasswordError(passwordValidationError);
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3001/api/addOrginazer', {
            companyName,
            companyEmail,
            register,
            companyPassword,
            });
        
            if (response.data.success) {
            alert("Бүртгэл амжилттай!");
            setCompanyName("");
            setCompanyEmail("");
            setRegister("");
            setCompanyPassword("");
            closeModalPayment();
            } else {
            alert(response.data.message || "Бүртгэл амжилтгүй боллоо.");
            }
        } catch (error) {
            console.error(error);
            alert("Сервертэй холбогдох үед алдаа гарлаа.");
        }
    };

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem("token");
                if (!token) {
                    setUser({ role: "user" });
                return;
            }
            axios.get("http://localhost:3001/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                setUser({ role: res.data.role, name: res.data.name });
            }).catch(() => {
                setUser({ role: "user" });
            });
        };
        // token хадгалсан эсэхийг window focus бүрт шалгах
        window.addEventListener("focus", checkToken);
        checkToken();

        return () => {
            window.removeEventListener("focus", checkToken);
        };
        }, []);


    useEffect(() => {
        console.log("USER ROLE:", user.role);
    }, [user]);


    const handleLogout = () => {
        const confirmed = window.confirm("Та системээс гарахдаа итгэлтэй байна уу?");
        if (!confirmed) return;
        localStorage.removeItem("token"); 
        setUser({ role: "user" });
    };
      

    return (
        <div className="h-20 flex flex-center justify-between p-6 items-center border-b border-[CDCDCD]">

            {/* Header section */}
            <div className="flex items-center gap-10">  
                <Link href="/">
                    <img 
                        src="/images/eventdp-logo.png" 
                        className="max-w-[130px] max-h-[110px] object-contain cursor-pointer"
                        alt="Logo"
                    />
                </Link>
                <SearchInput/>
            </div>

            {user.role === "user" && (
                <div className="flex text-[#656060] gap-10 text-base font-normal items-center">
                    <Button variant="sparkle" size="sm" 
                    onClick={() => {
                        if (user) {
                            toast.warning("Зохион байгуулагчаар нэвтэрнэ үү.");
                            setTimeout(() => {
                                openModal(); // 500ms хойшлуулж нээнэ
                            }, 500);
                            openModal(); // Login modal нээх
                        } else {
                            router.push("/event-register");
                        }
                    }}
                    > + Эвент үүсгэх </Button> 
                    <a onClick={openModal} className="hover:underline text-base">Нэвтрэх</a>
                    <a onClick={openModalPayment} className="hover:underline text-base"> Бүртгүүлэх </a>
                </div>
            )}

            {user.role === "customer" && (
                <div className="flex text-[#656060] gap-10 text-base font-normal items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <img
                                src="/images/user.png"
                                alt="User"
                                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40">
                                <DropdownMenuItem onClick={() => router.push("/profile")}>Профайл</DropdownMenuItem>

                                <DropdownMenuItem onClick={handleLogout}>Гарах</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                </div>
            )}

            {user.role === "organizer" &&  (
                <div className="flex text-[#656060] gap-10 text-base font-normal items-center">
                    {
                        pathname !== "/event-register" && (
                            <Button variant="sparkle" size="sm" onClick={() => router.push("/event-register")}> + Эвент үүсгэх </Button> 
                        )
                    }
                    <div className="flex text-[#656060] gap-10 text-base font-normal items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <img
                                src="/images/user.png"
                                alt="User"
                                className="w-[30px] h-[30px] rounded-full cursor-pointer"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40">
                                <DropdownMenuItem>Профайл</DropdownMenuItem>

                                <DropdownMenuItem onClick={handleLogout}>Гарах</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            )}


            {/* Login */}
            <Modal isOpen={isOpen} onClose={closeModal} className="flex flex-col w-full md:w-2/5 xl:w-1/3 2xl:w-1/4 3xl:w-1/5 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
                <div className="flex flex-col gap-3 justify-center items-center p-5 text-base font-medium">
                    <img src="/images/eventdp-logo.png" alt="" className="w-[130px] h-[80px]"/>
                    <div className="flex gap-10">
                    <div className="flex flex-col items-center ">
                        <p
                        className={`cursor-pointer pb-2 border-b-2 ${
                            activeTab === 'client'
                            ? 'border-blue-500 text-blue-500'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setActiveTab('client')}
                        >
                        Үйлчлүүлэгч
                        </p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <p
                        className={`cursor-pointer pb-2 border-b-2 ${
                            activeTab === 'organizer'
                            ? 'border-blue-500 text-blue-500'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setActiveTab('organizer')}
                        >
                        Зохион байгуулагч
                        </p>
                    </div>
                    </div>

                </div>
        
                {activeTab === "client" ? (
                    <form onSubmit={handleSubmit} className="flex flex-col mt-5">
                        <Input1
                            label="Имэйл хаяг"
                            type="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input1
                            label="Нууц үг"
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                        <Button variant="loginButton" className="mt-3 mb-5" type="submit">Нэвтрэх</Button>
                        <div className="flex justify-center">
                            <p className="text-sm text-center text-gray-500">
                            Бүртгэлгүй бол?{" "}
                            <a onClick={openModalPayment} className="text-indigo-600 hover:underline font-medium">
                                Бүртгүүлэх
                            </a>
                            </p>
                        </div>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmitCompany} className="flex flex-col mt-5">
                        <Input1
                            label="Байгууллагын имэйл хаяг"
                            type="email"
                            placeholder="org@example.mn"
                            value={companyEmail}
                            onChange={(e) => setCompanyEmail(e.target.value)}
                        />
                        <Input1
                            label="Нууц үг"
                            type="password"
                            placeholder="********"
                            value={companyPassword}
                            onChange={(e) => setCompanyPassword(e.target.value)}
                        />
                        {/* Хэрвээ зохион байгуулагчид нэмэлт талбар хэрэгтэй бол энд нэмж болно */}
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
                        <Button variant="loginButton" className="mt-3 mb-5" type="submit">Нэвтрэх</Button>
                        <div className="flex justify-center">
                            <p className="text-sm text-center text-gray-500">
                            Байгууллагын бүртгэлгүй бол?{" "}
                            <a onClick={openModalPayment} className="text-indigo-600 hover:underline font-medium">
                                Бүртгүүлэх
                            </a>
                            </p>
                        </div>
                    </form>
                )}
            </Modal>


            {/* Register */}
            <Modal isOpen={isOpenPayment} onClose={closeModalPayment} className="flex flex-col w-full md:w-2/5 xl:w-1/3 2xl:w-1/4 3xl:w-1/5 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-[#ffffff] rounded-2xl shadow-xl">
                <div className="flex flex-col justify-center gap-3 items-center p-5 text-base font-medium">
                    <img src="/images/eventdp-logo.png" alt="" className="w-[130px] h-[80px]"/>
                    <div className="flex gap-10">
                        <div className="flex flex-col items-center ">
                            <p
                                className={`cursor-pointer pb-2 border-b-2 ${
                                activeTab === 'client'
                                    ? 'border-blue-500 text-blue-500'
                                    : 'border-gray-300'
                                }`}
                                onClick={() => setActiveTab('client')}
                            >
                                Үйлчлүүлэгч
                            </p>
                        </div>
                        <div className="flex flex-col items-center ">
                            <p
                                className={`cursor-pointer pb-2 border-b-2 ${
                                activeTab === 'organizer'
                                    ? 'border-blue-500 text-blue-500'
                                    : 'border-gray-300'
                                }`}
                                onClick={() => setActiveTab('organizer')}
                            >
                                Зохион байгуулагч
                            </p>
                        </div>
                    </div>

                    </div>
            
                    { activeTab === "client" ? (
                        <form onSubmit={handleSubmit1} className="flex flex-col">
                            <Input1
                                label="Нэр"
                                type="text"
                                placeholder="Нэрээ оруулна уу"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input1
                                label="Имэйл хаяг"
                                type="email"
                                placeholder="Имэйл хаягаа оруулна уу"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input1
                                label="Утасны дугаар"
                                type="number"
                                placeholder="Утасны дугаараа оруулна уу"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Input1
                                label="Нууц үг"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <Button variant="loginButton" className="mt-3 mb-5"> Бүртгүүлэх </Button> 
                            <div className="flex justify-center">
                            <p className="text-sm font-light text-[#6B7280]"> Бүртгэлтэй бол? {" "}
                                <a onClick={closeModalPayment} className="font-medium text-[#4F46E5] hover:underline">
                                Нэвтрэх
                                </a>
                            </p>
                            </div>
                    
                        </form>
                    ) : (
                    <form onSubmit={handleSubmitCompany1} className="flex flex-col">
                    <Input1
                        label="Байгууллагын нэр"
                        type="text"
                        placeholder="Байгууллагын нэр оруулна уу"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <Input1
                        label="Имэйл хаяг"
                        type="email"
                        placeholder="Имэйл хаягаа оруулна уу"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                    />
                    <Input1
                        label="Байгууллагын регистрийн дугаар"
                        type="text"
                        placeholder="Байгууллагын регистр оруулна уу"
                        value={register}
                        onChange={(e) => setRegister(e.target.value)}
                    />
                    <Input1
                        label="Нууц үг"
                        type="password"
                        placeholder="********"
                        value={companyPassword}
                        onChange={(e) => setCompanyPassword(e.target.value)}
                    />
                    {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <Button variant="loginButton" className="mt-3 mb-5"> Бүртгүүлэх </Button> 
                    <div className="flex justify-center">
                        <p className="text-sm font-light text-[#6B7280]"> Бүртгэлтэй бол? {" "}
                        <a onClick={closeModalPayment} className="font-medium text-[#4F46E5] hover:underline">
                            Нэвтрэх
                        </a>
                        </p>
                    </div>
                    </form>
                )
             }
            </Modal>
        </div>
    );
  }