import{j as r,r as x}from"./iframe-DALg75d7.js";import{b as a,u as p,F as d,t as j}from"./Form-BBd4GmKs.js";import{L as t}from"./Label-CllN_pGF.js";import{R as u,S as F}from"./ResetButton-BqGFti5i.js";import{B as l}from"./Button-CxCFU3Sm.js";import{S as b}from"./Section--EZ_JCJz.js";import{A as E}from"./ActionGroup-uPexo89O.js";import{s as c}from"./Action-B-LX0Gdh.js";import{L as S}from"./DateInput-D_KwsKBl.js";import{T as o}from"./TimeField-DRDZRSRx.js";import{F as T}from"./FieldError-JMY6vjHT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DnyVnPzZ.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./context-D-SwIuvT.js";import"./browser-BOjJAEEq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BL63E4pM.js";import"./utils-CCMGMBS3.js";import"./Hidden-DA9FnjM0.js";import"./useRef-Cb6IcnGU.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./Text-BfSm9wB3.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./LoadingSpinner-DKmXkdSk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAn5W5h2.js";import"./ProgressBar-BxOMxEJ2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./ContextMenuSection-nagFkt4I.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./useStatic-C_Axqqwt.js";import"./context-VL9rXB3T.js";import"./FieldError-B5AAUQ1i.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useFormValidation-jiwCVXG0.js";import"./useFormReset-D3blZuYj.js";import"./useSpinButton-BpR069r_.js";import"./useFilter-Bw2sgki_.js";import"./useFieldComponent-BaBZIB3g.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,kr as __namedExportsOrder,$r as default};
