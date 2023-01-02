import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { FaLinkedin, FaFacebook, FaDiscord, FaBehance, FaMedium } from "react-icons/fa";
import { NextPage } from "next";

interface Props {
    onSubmit: (data: any) => void;
}


const Form: NextPage<Props> = (props) => {
    const { onSubmit } = props;

    const onPreviewClicked = (e: any) => {
        e.preventDefault();
        const data = e.target;
        var obj = {
            fullname: data.fullname ? data.fullname.value : '',
            designation: data.designation ? data.designation.value : '',
            email: data.email  ? data.email.value : '',
            contact: data.contact ? data.contact.value : '',
            social: {
                linkedin: data.linkedin ? data.linkedin.value : '',
                facebook: data.facebook ? data.facebook.value : '',
                discord: data.discord ? data.discord.value : '',
                behance: data.behance ? data.behance.value : '',
                medium: data.medium ? data.medium.value : '',
            }
        }
        console.log(obj);
        
        onSubmit(obj);
    }
    return (
        <form id="signature-form" onSubmit={onPreviewClicked}>
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
                            <TextInput
                                id="linkedin"
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
                                icon={FaMedium}
                                placeholder="@username"
                            />
                        </div>

                    </div>

                </div>
                <div className="mt-3">
                    <div className="flex flex-row gap-4 justify-end">
                        <Button
                            onClick={onPreviewClicked}
                            outline={true}>
                            Preview
                        </Button>
                        <Button type="submit">
                            Download
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;