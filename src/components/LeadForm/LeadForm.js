import React, { useState } from "react"
import FormField from "components/FormField"
import Button from "components/Button"
import cx from "classnames"
import styles from "./LeadForm.module.scss"

export const LeadForm = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [about, setAbout] = useState("")

  return (
    <form
      className={cx(styles.root)}
      method="post"
      action="https://script.google.com/macros/s/AKfycbyTdtviLyovBFthbw423r0LoomX9gOjSEsfN2bggm57EXBONdQ/exec"
      noValidate
    >
      <h1 className={cx(styles.title, "content-max-width")}>Let's chat!</h1>
      <div className={cx(styles.inputWrapper)}>
        <FormField
          value={company}
          label="YOUR COMPANY"
          onChange={setCompany}
          name="company"
        />
        <FormField
          value={name}
          label="YOUR NAME"
          onChange={setName}
          name="name"
        />
        <FormField
          value={email}
          label="YOUR EMAIL"
          onChange={setEmail}
          name="email"
        />
        <FormField
          value={about}
          label="HOW CAN WE HELP?"
          onChange={setAbout}
          name="about"
        />
      </div>
      <Button labelClassName={cx(styles.submitButton)} name="Subscribe" submit>
        Submit
      </Button>
    </form>
  )
}
