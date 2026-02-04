import{j as r,r as S}from"./iframe-DJlgDtsR.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-DOYw6qBK.js";import{L as s}from"./Label-B-hN2Lzv.js";import{B as d}from"./Button-B5mEMvcP.js";import{S as j}from"./Section-CYRxPyA9.js";import{A as b}from"./ActionGroup-CoaK5Xfm.js";import{s as c}from"./Action-BHdfveoT.js";import{S as m}from"./SearchField-DVSkF3YH.js";import{F as E}from"./FieldError-CeTb8jEt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BhViPMj5.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./clsx-B-dksMZM.js";import"./index-Ds6_MS6L.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./useRef-CIkrKDvB.js";import"./utils-xFKhKznh.js";import"./ButtonView-DYK5nmKx.js";import"./browser-C6YBs1UC.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./Text-B6SLv6do.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./LoadingSpinner-DvQzlWjD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjTNcQDc.js";import"./ProgressBar-Cf6O9vZh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CWKDBuw6.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";import"./ContextMenuSection-BF9OA7h1.js";import"./Dialog-BOJlWGO4.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./useStatic-kKtkdJS1.js";import"./context-TnNtslmb.js";import"./useFieldComponent-Bmr1JhS0.js";import"./useControlledHostValueProps-D_As0Zui.js";import"./FieldError-Cpk3ITKU.js";import"./Form-BUDe3usU.js";import"./Group-CUxw3L8E.js";import"./Input-C2mY4pOV.js";import"./useTextField-BsWAQyLD.js";import"./useFormReset-yK5dVmLs.js";import"./useFormValidation-Dup-Fz52.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
