//email/contact-form-email.tsx

import React from 'react';
import {
    Html,
    Body,
    Head,
    Hr,
    Container,
    Preview,
    Section,
    Text,
    Heading,
} from '@react-email/components';
import { Tailwind } from '@react-email/components';

interface ContactFormEmailProps {
    message: string;
    senderEmail: string;
    senderName: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ message, senderEmail, senderName }) => {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className='bg-gray-100 p-5'>
                    <Container>
                        <Section className='mx-auto max-w-md bg-white border border-gray-300 p-5 rounded-md shadow-md'>
                            <Heading className='text-lg font-semibold mb-4'>You have a new message from {senderName}</Heading>
                            <Text className='mb-4'>{message}</Text>
                            <Hr className='border-gray-300 mb-4'/>
                            <Text className='text-sm text-gray-600'>The sender&apos;s email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

export default ContactFormEmail;
