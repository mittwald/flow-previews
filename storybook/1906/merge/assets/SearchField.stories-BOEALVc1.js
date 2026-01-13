import{j as r,r as S}from"./iframe-Cwcli8hM.js";import{b as n,u as a,F as p,t as x}from"./Form-BjeSNwhI.js";import{L as m}from"./Label-CdIP0Akw.js";import{R as u,S as l}from"./ResetButton-ByzjRyrZ.js";import{B as d}from"./Button-I78ZffkB.js";import{S as j}from"./Section-DEX4-fyD.js";import{A as b}from"./ActionGroup-CmTRqzAJ.js";import{s as c}from"./Action-BmzkYOqA.js";import{S as s}from"./SearchField-BTkyBy7e.js";import{F as E}from"./FieldError-C_uRtYKD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-kiJ_5GPX.js";import"./flowComponent-B-m_iRlw.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./context-ChPy2xgW.js";import"./browser-Dim89v3O.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BInCCjcu.js";import"./utils-C3qjWKVL.js";import"./Hidden-D2HOHB0p.js";import"./useRef-DCEFieT1.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./Text-D-waKGHU.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./Text-C18q6Xnm.js";import"./LoadingSpinner-KOoU2K2x.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CxQOY8r5.js";import"./ProgressBar-DHOJVCPT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./ContextMenuSection-BAImieHE.js";import"./Dialog-q_50MZOU.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./VisuallyHidden-BpjAuZe7.js";import"./getActionGroupSlot-DirYDTjy.js";import"./useStatic-DFI4OZ-s.js";import"./context-Cu13uzRC.js";import"./useFieldComponent-DIqLhVln.js";import"./useControlledHostValueProps-dmC9QLbU.js";import"./FieldError-CJJNrBrn.js";import"./Form-BXllkstm.js";import"./Group-B4sml9Xm.js";import"./Input-BrN80aSI.js";import"./useTextField-By7tfDpK.js";import"./useFormReset-BDGa5C7A.js";import"./useFormValidation-BcDhKfF3.js";import"./AlertText-BjBene4x.js";import"./AlertIcon-sG8HORuJ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
