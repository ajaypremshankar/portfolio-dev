import styled from 'styled-components';
import tw from 'tailwind.macro';
import { motion } from 'framer-motion';

export const Button = motion.custom(styled.button`
  outline: none !important;
  ${tw`py-3 px-8 mb-2 ml-2 rounded-full border border-black text-white`};

  ${({ primary }) => (primary ? tw`bg-blue-700` : tw`text-blue-700`)};

  ${({ block }) => block && tw`w-full`};
`);
