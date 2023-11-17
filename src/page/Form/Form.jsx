import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function Form() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log("done ");
    handleClick ()
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          {...register("firstName", { required: true, minLength: 2 })}
          error={Boolean(errors.firstName)}
          helperText={
            errors.firstName ? "Incorrect entry.  minLength: 2" : null
          }
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField sx={{ flex: 1 }} label="Last Name" variant="filled" />
      </Stack>

      <TextField label="Email" variant="filled" />
      <TextField label="Contact Number" variant="filled" />
      <TextField label="Adress" variant="filled" />

      <TextField
        variant="filled"
        id="outlined-select-currency-native"
        select
        label="Native select"
        defaultValue="EUR"
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>

      <Box sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          creat new User
        </Button>
      </Box>

      <Snackbar   anchorOrigin={{ vertical:"top", horizontal:"right" }}
 open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
}
