import{j as r,r as x}from"./iframe-DJlgDtsR.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-DOYw6qBK.js";import{L as t}from"./Label-B-hN2Lzv.js";import{B as l}from"./Button-B5mEMvcP.js";import{S as b}from"./Section-CYRxPyA9.js";import{A as E}from"./ActionGroup-CoaK5Xfm.js";import{s as c}from"./Action-BHdfveoT.js";import{L as S}from"./DateInput-DH2f1ZmW.js";import{T as o}from"./TimeField-CJrs8o61.js";import{F as T}from"./FieldError-CeTb8jEt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BhViPMj5.js";import"./flowComponent-1zQAiLcC.js";import"./index-De4rcGI5.js";import"./clsx-B-dksMZM.js";import"./index-Ds6_MS6L.js";import"./useLocalizedStringFormatter-D9db5kL2.js";import"./context-XFPr5nuV.js";import"./useRef-CIkrKDvB.js";import"./utils-xFKhKznh.js";import"./ButtonView-DYK5nmKx.js";import"./browser-C6YBs1UC.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BBNmyes_.js";import"./Hidden-4sLzj03B.js";import"./IconWarning-Cyya3L9S.js";import"./remote-CayAs8X4.js";import"./Text-B6SLv6do.js";import"./EmulatedBoldText-BsjtvuiU.js";import"./Text-DD0-81CT.js";import"./LoadingSpinner-DvQzlWjD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjTNcQDc.js";import"./ProgressBar-Cf6O9vZh.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-KImy5Ex-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CWKDBuw6.js";import"./useFocus-oMd_AJz-.js";import"./useFocusRing-BhR5IplG.js";import"./useFocusable-CsEyjS4C.js";import"./ContextMenuSection-BF9OA7h1.js";import"./Dialog-BOJlWGO4.js";import"./RSPContexts-CxGwKclm.js";import"./OverlayArrow-BjaGoVRT.js";import"./useControlledState-C0KUsyk2.js";import"./Collection-Cl6v0tCD.js";import"./CollectionBuilder-D_QdfbH9.js";import"./SelectionIndicator-DnAH24RP.js";import"./Separator-BojWZdSH.js";import"./SelectionManager-ESuaU6yM.js";import"./useEvent-CxJg3RaJ.js";import"./useCollator-Bm61inwz.js";import"./FocusScope-C9j0_60-.js";import"./VisuallyHidden-BJ_y0FNA.js";import"./getActionGroupSlot-Clzrx9gl.js";import"./useStatic-kKtkdJS1.js";import"./context-TnNtslmb.js";import"./FieldError-Cpk3ITKU.js";import"./Form-BUDe3usU.js";import"./Group-CUxw3L8E.js";import"./Input-C2mY4pOV.js";import"./useFormValidation-Dup-Fz52.js";import"./useFormReset-yK5dVmLs.js";import"./useSpinButton-wzJaU3Qm.js";import"./useFilter-DOa8h3gI.js";import"./useFieldComponent-Bmr1JhS0.js";import"./AlertText-DmRH4lNK.js";import"./AlertIcon-nCFQHvgi.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
