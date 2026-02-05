import{j as r,r as S}from"./iframe-ByQojKkA.js";import{a as n,u as a,F as p,t as x,R as u,S as l}from"./ResetButton-Cu7HTX9i.js";import{L as s}from"./Label-zx0kmle1.js";import{B as d}from"./Button-DG0b__xZ.js";import{S as j}from"./Section-C0tACEzy.js";import{A as b}from"./ActionGroup-CnN8LnNO.js";import{s as c}from"./Action-D7dGsrUH.js";import{S as m}from"./SearchField-DxcElzFR.js";import{F as E}from"./FieldError-Dl1gROKX.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-G0P_JzfN.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./clsx-B-dksMZM.js";import"./index-DifIgMrD.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./context-B2MAxUi3.js";import"./useRef-hk2_5oTi.js";import"./utils-D3Fm7Ut8.js";import"./ButtonView-B55WSwFj.js";import"./browser-BgQK0KeO.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./IconWarning-tVGTIzEo.js";import"./remote-CpbK9d4g.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./LoadingSpinner-Dd1p82wM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-psJerCAv.js";import"./ProgressBar-bE4oj_9I.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwnADfjY.js";import"./useFocus-CIqVesE-.js";import"./useFocusRing-D8JCvm1f.js";import"./useFocusable-BRqzZMJF.js";import"./ContextMenuSection-6SzjTnwS.js";import"./Dialog-B4qMOx1Z.js";import"./RSPContexts-au40D8o8.js";import"./OverlayArrow-CZRwwumO.js";import"./useControlledState-CdOFY_9U.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";import"./getActionGroupSlot-D7PQruO1.js";import"./useStatic-ClNGpIKI.js";import"./context-Buk6ndZl.js";import"./useFieldComponent-Blt-XhY9.js";import"./useControlledHostValueProps-lUs8Ao02.js";import"./FieldError-DskIGmIg.js";import"./Form-Cffumk9C.js";import"./Group-CNDS5EKI.js";import"./Input-qfXo-HDb.js";import"./useTextField-C_dLnkiz.js";import"./useFormReset-CjuTJ3ym.js";import"./useFormValidation-DiyC9X3o.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
