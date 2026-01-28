import{j as r,r as S}from"./iframe-DXKyl4qq.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-SPfrEBJU.js";import{L as s}from"./Label-DJy_0fcC.js";import{B as d}from"./Button-0acoIVQZ.js";import{S as j}from"./Section-B8nblZQJ.js";import{A as b}from"./ActionGroup-CDY92rej.js";import{s as c}from"./Action-eA8jYG3_.js";import{S as m}from"./SearchField-2PkwP28d.js";import{F as E}from"./FieldError-hPaNUVVF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaArDE2O.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./clsx-B-dksMZM.js";import"./index-CK0x1Z6h.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./useRef-CVzViYXT.js";import"./utils-Cgx1j8_A.js";import"./ButtonView-vjQ-21-e.js";import"./browser-Q1FjFR8E.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-MFF54RNh.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useFocusable-DAwaDAhU.js";import"./ContextMenuSection-BIRP1Ixf.js";import"./Dialog-B1psX4sF.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./useControlledState-DW1EgN0_.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./VisuallyHidden-XnRwWdWi.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./useStatic-CdHxY_ZS.js";import"./context-9N5Shw7P.js";import"./useFieldComponent-DrLbNusb.js";import"./useControlledHostValueProps-8m6fvoIX.js";import"./FieldError-CXwp2WFY.js";import"./Form-VygiigBM.js";import"./Group-DMqjorr8.js";import"./Input-Bhgje7aH.js";import"./useTextField-1rJhdvTW.js";import"./useFormReset-Cw-gwOYV.js";import"./useFormValidation-1Ohd4Vow.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,Cr as __namedExportsOrder,kr as default};
