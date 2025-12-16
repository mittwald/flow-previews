import{j as r,r as g}from"./iframe-C0Xzz6Xl.js";import{u as c,F as d}from"./Form-BfgXYtPL.js";import{t as b,F as h}from"./Field-DTxkV_LC.js";import{B as f}from"./Button-D6SK2KLv.js";import{S as E}from"./Section-5zw9Z7q2.js";import{A as T}from"./ActionGroup-C9tEr64z.js";import{s as u}from"./Action-BlB31QBr.js";import{A as i}from"./Autocomplete-BPC7y9-Y.js";import{L as p}from"./Label-B2dU-Foq.js";import{T as l}from"./TextField-B5nPgsPB.js";import{O as B}from"./Option-DHZcafF5.js";import{F as A}from"./FieldError-COJQpxO2.js";import{R as F}from"./ResetButton-3SEBVdnD.js";import{S as x}from"./SubmitButton-BPi9gjAx.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-GRuvXKoj.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-B_nxzmOn.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./clsx-B-dksMZM.js";import"./index-BkQRYDSQ.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./utils-DFqauJju.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./Label-CKDZcwiZ.js";import"./Hidden-C5gaELfT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";import"./ContextMenuSection-CuOhHuwr.js";import"./lib-90ocxLs-.js";import"./Dialog-DXKvHJZX.js";import"./RSPContexts-xpSy9BW_.js";import"./OverlayArrow-CpBfJzRQ.js";import"./useControlledState-DnOVZzTA.js";import"./Collection-BflGVmPS.js";import"./CollectionBuilder-D_O-sn_C.js";import"./SelectionIndicator-C8D-p8dY.js";import"./Separator-D5lpfI0l.js";import"./SelectionManager-B3HFpuo-.js";import"./useEvent-CecaYo_j.js";import"./useCollator-BDv8d74S.js";import"./FocusScope-ClGhoguJ.js";import"./VisuallyHidden-DF-QcwIB.js";import"./getActionGroupSlot-BcOhbfZF.js";import"./useStatic-BdnZkR9g.js";import"./context-Cc_BWEb7.js";import"./useFieldComponent-BRIXb0CQ.js";import"./useFilter-BOR7ysDb.js";import"./useOverlayController-Cc0Bt_a1.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DpdekzGl.js";import"./FieldDescription-C_2F70ew.js";import"./TextField-CeQYd3lk.js";import"./FieldError-D1TN1uH_.js";import"./Form-DJAYx_sb.js";import"./Group-BpFeMFVu.js";import"./Input-rZfax9iy.js";import"./useTextField-Cj_XPZw1.js";import"./useFormReset-BXb8b3rI.js";import"./useFormValidation-D4H7vgpB.js";import"./useControlledHostValueProps-BeTsIibq.js";import"./Popover-BMjM4pLC.js";import"./OverlayContextProvider-DNpDSs0Z.js";import"./ListBox-CAhXV0ir.js";import"./DragAndDrop-C9lt4bW6.js";import"./inertValue-BwrDNBLB.js";import"./useListState-CoAVWkLI.js";import"./IconDanger-Dkbk0FFN.js";import"./useRef-BKT5_v6o.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const pe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,pe as __namedExportsOrder,ne as default};
