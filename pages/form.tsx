import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaLinkedin, FaFacebook, FaDiscord, FaBehance, FaMedium } from "react-icons/fa";

export default function Form() {
    return (
        <form>
            <div className="container flex flex-col  w-[80vw]">
                <div className="flex flex-row h-full p-1">
                    <div className="w-full p-2">
                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="fullname"
                                    value="Full Name"
                                />
                            </div>
                            <TextInput
                                id="fullname"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="designation"
                                    value="Designation"
                                />
                            </div>
                            <TextInput
                                id="designation"
                                type="text"
                                required={true}
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="email"
                                    value="Email"
                                    className="text-white-700"
                                />
                            </div>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="name@bitzqad.com"
                                required={true}
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="contact"
                                    value="Contact Number"
                                />
                            </div>
                            <TextInput
                                id="contact"
                                type="text"
                                placeholder="0711234567"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="linkedin"
                                    value="LinkedIn"
                                />
                            </div>
                            {/* https://www.linkedin.com/in/username */}
                            <TextInput
                                id="linkedin"
                                type="url"
                                icon={FaLinkedin}
                                placeholder="@username"
                                required={true}
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="facebook"
                                    value="Facebook"
                                />
                            </div>
                            {/* https://www.facebook.com/username */}
                            <TextInput
                                id="facebook"
                                type="url"
                                icon={FaFacebook}
                                placeholder="@username"
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="discord"
                                    value="Discord"
                                />
                            </div>
                            {/* discordapp.com/users/userID */}
                            <TextInput
                                id="discord"
                                type="url"
                                icon={FaDiscord}
                                placeholder="@discordID"
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="behance"
                                    value="Behance"
                                />
                            </div>
                            {/* https://www.behance.net/username */}
                            <TextInput
                                id="behance"
                                type="url"
                                icon={FaBehance}
                                placeholder="@username"
                            />
                        </div>

                        <div className="mt-2">
                            <div className="mb-0.5 block">
                                <Label
                                    htmlFor="medium"
                                    value="Medium"
                                />
                            </div>
                            {/* https://harshaabeyvickrama.medium.com/ */}
                            <TextInput
                                id="medium"
                                type="url"
                                icon={FaMedium}
                                placeholder="@username"
                            />
                        </div>

                    </div>

                </div>
                <div className="mt-3">
                    <div className="flex flex-row gap-4 justify-end">
                        <Button
                            outline={true}>
                            Preview
                        </Button>
                        <Button type="submit" >
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}



{/* <form className="flex flex-col gap-4 w-[32rem]">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Full Name"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        required={true}
                    />
                </div>

                

                

           


                
            </form> */}