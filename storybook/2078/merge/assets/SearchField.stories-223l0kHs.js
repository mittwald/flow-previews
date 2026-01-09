import{j as r,r as S}from"./iframe-BoA7YzYm.js";import{b as n,u as a,F as p,t as x}from"./Form-DLwGH580.js";import{L as s}from"./Label-Cjbbehtk.js";import{R as u,S as l}from"./ResetButton-BTdRGMm7.js";import{B as d}from"./Button-BKFimoLG.js";import{S as j}from"./Section-MYLyhPiL.js";import{A as b}from"./ActionGroup-CAgPe75f.js";import{s as c}from"./Action-DzFCrVY1.js";import{S as m}from"./SearchField-CtDxwqMN.js";import{F as E}from"./FieldError-CkVfHT3s.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYpyzP7H.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./clsx-B-dksMZM.js";import"./index-C8IfwtBf.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";import"./context-Bl3IUlM5.js";import"./browser--2iaZute.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CIY5uMr1.js";import"./utils-CbCfmbCJ.js";import"./Hidden-COFYe48C.js";import"./useRef-DG5Ef12W.js";import"./IconWarning-Cm4x5FHH.js";import"./remote-W2BsjsJq.js";import"./Text-Dcujjsgx.js";import"./EmulatedBoldText-B6CuOWoW.js";import"./Text-DzES3Axw.js";import"./LoadingSpinner-CJmPD5N7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BSweg4_1.js";import"./ProgressBar-0Lez36-3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BJjmJvn4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VWzB255U.js";import"./useFocus-0w8IxMP9.js";import"./useFocusRing-QIpAUb-m.js";import"./useFocusable-03sk398M.js";import"./ContextMenuSection-CVwpYLx9.js";import"./Dialog-BDOoN61w.js";import"./RSPContexts-D0KJsdCX.js";import"./OverlayArrow-DNHvsvRZ.js";import"./useControlledState-Bptfp7LK.js";import"./Collection-DjWHVVf5.js";import"./CollectionBuilder-B_pnCfkc.js";import"./SelectionIndicator-fGxLhP25.js";import"./Separator-DSRy3Jbj.js";import"./SelectionManager-B2bGzozG.js";import"./useEvent-B6QIfMFm.js";import"./useCollator-DeMqSZ32.js";import"./FocusScope-ewaHP7Wk.js";import"./VisuallyHidden-ulLndJxN.js";import"./getActionGroupSlot-Cyrp6itk.js";import"./useStatic-BAyQxveA.js";import"./context-Cs30ZfjP.js";import"./useFieldComponent-DkEUVrE8.js";import"./useControlledHostValueProps-varpk8I2.js";import"./FieldError-DIrg2qiC.js";import"./Form-DOX3bg_5.js";import"./Group-CR0xPesX.js";import"./Input-BsUxPOGC.js";import"./useTextField-Bdu5byVa.js";import"./useFormReset-Lf5kfq5Z.js";import"./useFormValidation-D99W395Z.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
