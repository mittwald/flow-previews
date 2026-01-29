import{j as r,r as x}from"./iframe-CdVpWnc8.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-CR4d1ryI.js";import{B as d}from"./Button-BYd_Eo9F.js";import{S as j}from"./Section-3RcIg-Ej.js";import{A as b}from"./ActionGroup-CbgbDPIr.js";import{s as u}from"./Action-eeXzbiuZ.js";import{C as t}from"./Checkbox-CowgrcdK.js";import{F as E}from"./FieldError-0fRgmDO9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./useRef-DpTmSntJ.js";import"./utils-ClIic5nH.js";import"./ButtonView-TCVIqSjz.js";import"./browser-CWGq_9Zm.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./ContextMenuSection-CBva2Bvf.js";import"./Dialog-oT8hORp9.js";import"./RSPContexts-PfgqXwd-.js";import"./OverlayArrow-CCFRyk0z.js";import"./useControlledState-B7ztCH5k.js";import"./Collection-1Gj7oR7J.js";import"./CollectionBuilder-Dpff-p5v.js";import"./SelectionIndicator-DTqsITpO.js";import"./Separator-BKBkElFN.js";import"./SelectionManager-frOqR2a6.js";import"./useEvent-lhMNtMgY.js";import"./useCollator-BLLfUz8T.js";import"./FocusScope-D5Cgd53Y.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./useStatic-DSoJUNwo.js";import"./context-BV7cuRYy.js";import"./useFieldComponent-pH8UQhzW.js";import"./FieldError-U_T6R5BY.js";import"./Form-BAj6LeSM.js";import"./useFormValidation-5isdk9bY.js";import"./useToggleState-5on0PfsK.js";import"./useFormReset-D5EHipFr.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
