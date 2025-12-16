import{j as r,r as x}from"./iframe-CgbY6Bes.js";import{u as a,F as p}from"./Form-DZ9uk1zZ.js";import{L as o}from"./Label-4ok8fPIv.js";import{B as l}from"./Button-AhSsxt5Y.js";import{S as j}from"./Section-BDBFnTnO.js";import{A as b}from"./ActionGroup-CWjy7TJK.js";import{s as d}from"./Action-fZniNiQj.js";import{K as E}from"./DateInput-B702B6k2.js";import{T as t}from"./TimeField-DR5FEeAa.js";import{F as S}from"./FieldError-CfVeuV3t.js";import{F as c,t as T}from"./Field-RwAXq-yO.js";import{R as u}from"./ResetButton-BgADhceO.js";import{S as F}from"./SubmitButton-CG5PeIMV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-CTdpdvjF.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./context-B7mjZSuw.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BgfzzCeX.js";import"./remote-VFFVCOtz.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./ContextMenuSection-ChZ4OnoY.js";import"./lib-90ocxLs-.js";import"./context-dInkHyA4.js";import"./RSPContexts-nmNOlAeI.js";import"./Collection-CkSsBrfI.js";import"./CollectionBuilder-bx8YHx7t.js";import"./SelectionIndicator-Cyz4sgG-.js";import"./Separator-B-G5UFsQ.js";import"./useStatic-YWRRTJxv.js";import"./dynamic-eD-KrC4d.js";import"./getActionGroupSlot-DScHYJoT.js";import"./FieldError-ZCijCAEA.js";import"./Form-D-gyidno.js";import"./Group-CFakG5ME.js";import"./Input-DHQ0YPR8.js";import"./useFormValidation-B0VcAod8.js";import"./useFormReset-DHRVeg6P.js";import"./useSpinButton-DfRWms62.js";import"./useFilter-BflZqrbZ.js";import"./useFieldComponent-DU5_3SMj.js";import"./Activity-CqdR7Ddt.js";import"./TranslationProvider-BcRRsHoV.js";import"./OverlayContextProvider-BX16aSJY.js";import"./useOverlayController-BuHPrhsh.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconDanger-D9oAFjYl.js";import"./useRef-CBqwYRkb.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Wr={title:"Integrations/React Hook Form/TimeField",component:c,render:()=>{const e=async h=>{await d(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new E(16,0)}}),n=T();return r.jsx(p,{form:f,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(n,{name:"time",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Time"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"text",children:r.jsx(t,{children:r.jsx(o,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Vr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Vr as __namedExportsOrder,Wr as default};
