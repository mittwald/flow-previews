import{j as r,r as S}from"./iframe-BJ1-yygM.js";import{u as n,F as p}from"./Form-BPGCmo5L.js";import{L as m}from"./Label-bQxZtSdp.js";import{F as a,t as x}from"./Field-CVD51OnP.js";import{B as d}from"./Button-Cjtrvck7.js";import{S as j}from"./Section-bElmBl_A.js";import{A as b}from"./ActionGroup-eYecTP4S.js";import{s as c}from"./Action-BvXzPu3R.js";import{S as s}from"./SearchField-DtO_3KEt.js";import{F as E}from"./FieldError-lhJwSH7g.js";import{R as u}from"./ResetButton-BLz3Cm6N.js";import{S as l}from"./SubmitButton-YaRbcpMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DT5Kx7EO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ1h1TR6.js";import"./index-Du7YS11i.js";import"./index-BJaBKPR5.js";import"./useLocalizedStringFormatter-C5JOLvkZ.js";import"./context-CjOncL0b.js";import"./Label-CzmfrLRz.js";import"./utils-CcDDSJ_p.js";import"./Hidden-DoQenIIt.js";import"./dynamic-80JeIFF7.js";import"./IconChevronDown-CrWkAVaz.js";import"./remote-CmT8aojC.js";import"./IconX-n5-6JmhA.js";import"./IconCheck-B4qlzGu9.js";import"./Text-DheJl8Kj.js";import"./EmulatedBoldText-DCklMUI5.js";import"./Text-CgGmMVxG.js";import"./LoadingSpinner-Bwp7e6t0.js";import"./ariaLive-C1jz4QjY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhOdN5WZ.js";import"./ProgressBar-M3cNuExw.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C_0uKhPF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqKRozC0.js";import"./useFocus-BC8nQK7S.js";import"./useFocusRing-D91RCqts.js";import"./useFocusable-CM2LayHg.js";import"./ContextMenuSection-D1y8_-WQ.js";import"./lib-90ocxLs-.js";import"./Dialog-e6B9GMJE.js";import"./RSPContexts-50ouH6ts.js";import"./OverlayArrow-C2s0LJSp.js";import"./useControlledState-CbxGCAex.js";import"./Collection-BVEk6ex7.js";import"./CollectionBuilder-CVOjzY3Z.js";import"./SelectionIndicator-OOMR3Qmo.js";import"./Separator-CwS8pNTz.js";import"./SelectionManager-cQe1qOty.js";import"./useEvent-BqUxelCP.js";import"./useCollator-DQ7H9sze.js";import"./FocusScope-CXPBJiEJ.js";import"./VisuallyHidden-BOLsTiDm.js";import"./getActionGroupSlot-0vgdHqUy.js";import"./useStatic-hN62Mrr5.js";import"./context-C5k-fmhI.js";import"./useFieldComponent-CZz1dHQJ.js";import"./IconClose-CgPYGIXG.js";import"./IconSearch-BM8p7iPd.js";import"./useControlledHostValueProps-eN6I3MnG.js";import"./FieldError-6-KO0iYn.js";import"./Form-BhOz7HsW.js";import"./Group-D63yskOW.js";import"./Input-BS77WJBr.js";import"./useTextField-Cjm7LB6I.js";import"./useFormReset-DyV6pE3E.js";import"./useFormValidation-tUUfdeof.js";import"./IconDanger-CYKvK3jT.js";import"./useRef-TDnYH5OC.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Vr={title:"Integrations/React Hook Form/SearchField",component:a,render:()=>{const o=async F=>{await c(5e3),g(F)},h=n({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=n();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=n();return r.jsxs(p,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Yr as __namedExportsOrder,Vr as default};
