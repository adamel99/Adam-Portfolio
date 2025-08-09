import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useModal } from "../../context/Modal";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Alert,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const ThemedCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  margin: "0 auto",
  background: theme.palette.background.paper,
  backdropFilter: "blur(12px)",
  boxShadow: theme.shadows[10],
  border: `1px solid ${theme.palette.primary.main}40`,
}));

const ThemedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5),
  fontWeight: theme.typography.fontWeightBold,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.tertiary.main})`,
  color: theme.palette.primary.contrastText,
  "&:hover": {
    background: `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.tertiary.main})`,
  },
}));

function LoginFormModal() {
  const dispatch = useDispatch();
  const { closeModal } = useModal();
  const user = useSelector((state) => state.session.user);
  const theme = useTheme();

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const minUsernameLength = 4;
  const minPasswordLength = 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  };

  const isButtonDisabled =
    credential.length < minUsernameLength || password.length < minPasswordLength;

  return (
    <ThemedCard>
      <CardContent>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
        >
          Log In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Username or Email"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            fullWidth
            required
            InputLabelProps={{
              style: { color: theme.palette.text.secondary },
            }}
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          {errors.credential && <Alert severity="error">{errors.credential}</Alert>}

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            required
            InputLabelProps={{
              style: { color: theme.palette.text.secondary },
            }}
            inputProps={{ style: { color: theme.palette.text.primary } }}
          />
          {errors.password && <Alert severity="error">{errors.password}</Alert>}

          <ThemedButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={isButtonDisabled}
          >
            Log In
          </ThemedButton>
        </Box>
      </CardContent>
    </ThemedCard>
  );
}

export default LoginFormModal;
