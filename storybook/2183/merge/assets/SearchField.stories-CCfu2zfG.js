import{j as r,r as S}from"./iframe-xTeLnFvu.js";import{u as n,F as a}from"./Form-CzGdw75V.js";import{L as m}from"./Label-CVltlbUu.js";import{F as p,t as x}from"./Field-CAkbrvl3.js";import{B as d}from"./Button-BA5_aaZE.js";import{S as j}from"./Section-o_jduYUp.js";import{A as b}from"./ActionGroup-TgHXsP3h.js";import{s as c}from"./Action-GyTbi50D.js";import{S as s}from"./SearchField-Czz-jgJ2.js";import{F as E}from"./FieldError-oOsFR_NQ.js";import{R as u}from"./ResetButton-DEvz3aTX.js";import{S as l}from"./SubmitButton-DWFkkN3I.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-B-9yYF9r.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-ndn1boAo.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./useFieldComponent-Brjsz3RP.js";import"./Activity-D0VzS_Xj.js";import"./TranslationProvider-Y_3SKiEv.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconClose-CqXP_7hn.js";import"./IconSearch-D00n2xIM.js";import"./useControlledHostValueProps-BM5fLdcu.js";import"./FieldError-Cxb9ZjML.js";import"./Form-CFtpyLOk.js";import"./Group-DSWHaMOX.js";import"./Input-CXlOt9Gr.js";import"./useTextField-CSw7_eNz.js";import"./useFormReset-Co6bkbVB.js";import"./useFormValidation-CD-qIFlG.js";import"./IconDanger-DpVgPae0.js";import"./useRef-D_8ZkygH.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:p,render:()=>{const e=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(a,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=n();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=n();return r.jsxs(a,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
