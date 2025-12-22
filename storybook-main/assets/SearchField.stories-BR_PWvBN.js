import{j as r,r as S}from"./iframe-DALg75d7.js";import{b as n,u as a,F as p,t as x}from"./Form-BBd4GmKs.js";import{L as s}from"./Label-CllN_pGF.js";import{R as u,S as l}from"./ResetButton-BqGFti5i.js";import{B as d}from"./Button-CxCFU3Sm.js";import{S as j}from"./Section--EZ_JCJz.js";import{A as b}from"./ActionGroup-uPexo89O.js";import{s as c}from"./Action-B-LX0Gdh.js";import{S as m}from"./SearchField-BH2PLaA8.js";import{F as E}from"./FieldError-JMY6vjHT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DnyVnPzZ.js";import"./flowComponent-D-am8ulk.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./context-D-SwIuvT.js";import"./browser-BOjJAEEq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BL63E4pM.js";import"./utils-CCMGMBS3.js";import"./Hidden-DA9FnjM0.js";import"./useRef-Cb6IcnGU.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./Text-BfSm9wB3.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./Text-CuJqaQ90.js";import"./LoadingSpinner-DKmXkdSk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAn5W5h2.js";import"./ProgressBar-BxOMxEJ2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./ContextMenuSection-nagFkt4I.js";import"./Dialog-BcVnlKtW.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./VisuallyHidden-BtdNRxOz.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./useStatic-C_Axqqwt.js";import"./context-VL9rXB3T.js";import"./useFieldComponent-BaBZIB3g.js";import"./useControlledHostValueProps-Ce6KWhnZ.js";import"./FieldError-B5AAUQ1i.js";import"./Form-ChRHrJTG.js";import"./Group-_nDaH-qR.js";import"./Input-DhIUUdBW.js";import"./useTextField-B5pPfAtE.js";import"./useFormReset-D3blZuYj.js";import"./useFormValidation-jiwCVXG0.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
        </Field>
        <SearchField isInvalid>
          <Label>Suche</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </SearchField>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <SearchField>
            <Label>Suche</Label>
          </SearchField>
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};
