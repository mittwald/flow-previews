import{j as r,r as g}from"./iframe-BE2KIrNP.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-8M30IsUK.js";import{B as f}from"./Button-DTG6_onu.js";import{S as E}from"./Section-Bmw4NyfW.js";import{A as T}from"./ActionGroup-DqHolqL_.js";import{s as u}from"./Action-CG5-yXUx.js";import{A as i}from"./Autocomplete-z1HnLeol.js";import{L as p}from"./Label-BBYAWH-Z.js";import{T as l}from"./TextField-BlzF7bRU.js";import{O as B}from"./Option-DnjnbB1e.js";import{F as A}from"./FieldError-DLWZre89.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DKw0AuDc.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./clsx-B-dksMZM.js";import"./index-BeVui2PP.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./useRef-fd8U2Hk2.js";import"./utils-CetDBScY.js";import"./ButtonView-BKjPbsQ0.js";import"./browser-B5VZQlUE.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wlnUrUkL.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocusable-PS7GdwKW.js";import"./ContextMenuSection-DMoRGuCw.js";import"./Dialog-C3P1Ogqg.js";import"./RSPContexts-B5Mb9Vey.js";import"./OverlayArrow-B7hxVbyO.js";import"./useControlledState-O9ITVI5k.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./VisuallyHidden-KypC6JrD.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./useStatic-DHPwu1RD.js";import"./context-DvuBD7_y.js";import"./useOverlayController-CtV9FOyM.js";import"./useFieldComponent-8fOA-m-u.js";import"./useFilter-DUHNzI7c.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-gNnB3C6f.js";import"./FieldDescription-B7Q7zUwA.js";import"./TextField-W3j8ZdtU.js";import"./FieldError-CYuYbE_Y.js";import"./Form-7VWdSJkH.js";import"./Group-BgqvKisC.js";import"./Input-lgtpKVFw.js";import"./useTextField-BkiiDUW1.js";import"./useFormReset-DGFO0EL0.js";import"./useFormValidation-BVWNV9RZ.js";import"./useControlledHostValueProps-BjkpzwSM.js";import"./Popover-Ba9XQcrf.js";import"./OverlayContextProvider-DV_-MJEg.js";import"./ListBox-BoYULo50.js";import"./DragAndDrop-Dtq2zB2R.js";import"./inertValue-BSesr7YM.js";import"./useListState-B2l7eHw5.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
