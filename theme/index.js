import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#caf0f8", "#151a23")(props),
    },
  }),
};

const theme = extendTheme({ ...config, styles });

export default theme;
