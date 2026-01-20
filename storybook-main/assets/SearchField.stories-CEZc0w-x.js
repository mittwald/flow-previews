import{j as r,r as S}from"./iframe-C5hcdLE6.js";import{b as n,u as a,F as p,t as x}from"./Form-BLPdapkh.js";import{L as m}from"./Label-KhBIX57N.js";import{R as u,S as l}from"./ResetButton-Ciqh6yoP.js";import{B as d}from"./Button-CzDqHNvA.js";import{S as j}from"./Section-Zn6loSDR.js";import{A as b}from"./ActionGroup-BsDXgUZX.js";import{s as c}from"./Action-CDW165y9.js";import{S as s}from"./SearchField-BOdxdC9Y.js";import{F as E}from"./FieldError-CRlQMLVN.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DE5jfE1R.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./clsx-B-dksMZM.js";import"./index-ClIq6yug.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./context-E1uxYtQv.js";import"./browser-BJ6k16eC.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Cdw77YDw.js";import"./utils-B3GIFt3C.js";import"./Hidden-CzLEuVYW.js";import"./useRef-BfcAVfiD.js";import"./IconWarning-BGpxRwU-.js";import"./remote-DfH19er1.js";import"./Text-D8uazRXK.js";import"./EmulatedBoldText-G7OdIUUd.js";import"./Text-79_FySwa.js";import"./LoadingSpinner-hJnys7-d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CX4O7Muw.js";import"./ProgressBar-Cgmeu2qU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DIyDpHH2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyQlFp9g.js";import"./useFocus-Fr_BfSOs.js";import"./useFocusRing-B86g4qKF.js";import"./useFocusable-xzWj-wm9.js";import"./ContextMenuSection-Bm4KM0hd.js";import"./Dialog-D66iw0U8.js";import"./RSPContexts-BMj0h4_3.js";import"./OverlayArrow-DN70rght.js";import"./useControlledState-C9jQ4AxE.js";import"./Collection-DXvYJhLm.js";import"./CollectionBuilder-CZUA7JnX.js";import"./SelectionIndicator-B5s74P3-.js";import"./Separator-DaQ1DUjO.js";import"./SelectionManager-Bbl3GIce.js";import"./useEvent-Drml-VA-.js";import"./useCollator-C0ggjMz1.js";import"./FocusScope-CQ3JVi5A.js";import"./VisuallyHidden-n5FPXG3E.js";import"./getActionGroupSlot-CVriiRzc.js";import"./useStatic-CWBOctoH.js";import"./context-kwHKhOde.js";import"./useFieldComponent-t_EOnv-a.js";import"./useControlledHostValueProps-BEHg_3O_.js";import"./FieldError-CqTmSUdd.js";import"./Form-Dgtv3yvc.js";import"./Group-aRvuTcjD.js";import"./Input-0x1obYXp.js";import"./useTextField-CufDKcCg.js";import"./useFormReset-BnJ7w8Tn.js";import"./useFormValidation-BJOScXHE.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
