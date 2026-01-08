import{j as r,r as S}from"./iframe-BpfR1GYm.js";import{b as n,u as a,F as p,t as x}from"./Form-YTX1e-ix.js";import{L as m}from"./Label-DS3YgAXJ.js";import{R as u,S as l}from"./ResetButton-_qKJFJu9.js";import{B as d}from"./Button-C4OB0yac.js";import{S as j}from"./Section-dj9_tl4m.js";import{A as b}from"./ActionGroup-CzX-fkcj.js";import{s as c}from"./Action-BgYAV17K.js";import{S as s}from"./SearchField-VmesMoTV.js";import{F as E}from"./FieldError-CXRDkScB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B2LUuPCk.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./clsx-B-dksMZM.js";import"./index-BNT5TWiv.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./browser-CJuVe1n5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TUuaFaku.js";import"./utils-z0hzRCNL.js";import"./Hidden-DWXiMutX.js";import"./useRef-wXPPnRLO.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./Text-jE0jlBS1.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VEcsoWoE.js";import"./useFocus-ZHbPEGRJ.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./ContextMenuSection-DF0tWoMk.js";import"./Dialog-B9wBOAXv.js";import"./RSPContexts-DDsKHTka.js";import"./OverlayArrow-CweGqLKW.js";import"./useControlledState-Bs2ReOE0.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./useStatic-C8Msussh.js";import"./context-CfiW950r.js";import"./useFieldComponent-DI1dsoTY.js";import"./useControlledHostValueProps-RQKiDY30.js";import"./FieldError-DbjIiGK3.js";import"./Form-Dn5OdnSf.js";import"./Group-Id9jy-Co.js";import"./Input-By9tEQCu.js";import"./useTextField-EtH9XVMV.js";import"./useFormReset-LNCZiIDy.js";import"./useFormValidation-DJqpOl9D.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
