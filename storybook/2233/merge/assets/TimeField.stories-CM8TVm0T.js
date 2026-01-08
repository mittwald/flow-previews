import{j as r,r as x}from"./iframe-BpfR1GYm.js";import{b as a,u as p,F as d,t as j}from"./Form-YTX1e-ix.js";import{L as t}from"./Label-DS3YgAXJ.js";import{R as u,S as F}from"./ResetButton-_qKJFJu9.js";import{B as l}from"./Button-C4OB0yac.js";import{S as b}from"./Section-dj9_tl4m.js";import{A as E}from"./ActionGroup-CzX-fkcj.js";import{s as c}from"./Action-BgYAV17K.js";import{L as S}from"./DateInput-CK9jxQpR.js";import{T as o}from"./TimeField-BUGwM2G0.js";import{F as T}from"./FieldError-CXRDkScB.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B2LUuPCk.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./clsx-B-dksMZM.js";import"./index-BNT5TWiv.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./browser-CJuVe1n5.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-TUuaFaku.js";import"./utils-z0hzRCNL.js";import"./Hidden-DWXiMutX.js";import"./useRef-wXPPnRLO.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./Text-jE0jlBS1.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VEcsoWoE.js";import"./useFocus-ZHbPEGRJ.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./ContextMenuSection-DF0tWoMk.js";import"./Dialog-B9wBOAXv.js";import"./RSPContexts-DDsKHTka.js";import"./OverlayArrow-CweGqLKW.js";import"./useControlledState-Bs2ReOE0.js";import"./Collection-YpU2JVsv.js";import"./CollectionBuilder-9PEIzLQk.js";import"./SelectionIndicator-n0OjLjyZ.js";import"./Separator-BrTPl_Ln.js";import"./SelectionManager-DNmOxeny.js";import"./useEvent-DNbaaWG3.js";import"./useCollator-C5z3r8b8.js";import"./FocusScope--j43gSQ5.js";import"./VisuallyHidden-Dk8KR5l4.js";import"./getActionGroupSlot-DhmxW89Z.js";import"./useStatic-C8Msussh.js";import"./context-CfiW950r.js";import"./FieldError-DbjIiGK3.js";import"./Form-Dn5OdnSf.js";import"./Group-Id9jy-Co.js";import"./Input-By9tEQCu.js";import"./useFormValidation-DJqpOl9D.js";import"./useFormReset-LNCZiIDy.js";import"./useSpinButton-DBFj5Swo.js";import"./useFilter-aUw8_B0X.js";import"./useFieldComponent-DI1dsoTY.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Gr as __namedExportsOrder,Cr as default};
