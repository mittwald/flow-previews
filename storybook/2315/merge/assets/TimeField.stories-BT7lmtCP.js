import{r as x,j as r}from"./iframe-DFKQ2QsC.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-TRifYodf.js";import{L as t}from"./Label-DluzxSj2.js";import{B as l}from"./Button-CumhvKwr.js";import{S as b}from"./Section-B7sZ2fly.js";import{A as E}from"./ActionGroup-SK2hDjUm.js";import{s as c}from"./Action-C10g_G2S.js";import{L as S}from"./DateInput-CaeoSL39.js";import{T as o}from"./TimeField-arKaVl47.js";import{F as T}from"./FieldError-DdERfCze.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-8YXtFeDo.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./clsx-B-dksMZM.js";import"./index-BLTW5Tcp.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./context-m8OE0ddO.js";import"./useRef-Bx3esIJs.js";import"./utils-BJXdD5he.js";import"./ButtonView-AQo5jRtJ.js";import"./browser-C3pjfYL0.js";import"./Label.module-CUYTf9Jc.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./IconWarning-BuA9AHid.js";import"./remote-BP8uJVcU.js";import"./Text-BEPoPMFj.js";import"./EmulatedBoldText-CZthuZwX.js";import"./Text-D27_pVCF.js";import"./LoadingSpinner-DwolGT18.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBkz1b5H.js";import"./ProgressBar-DQlWH-Q4.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CurstbwI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CE-sEEB4.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useFocusable-C6PlbLtm.js";import"./ContextMenuSection-DFA9uj7i.js";import"./Dialog-BtwdVLzC.js";import"./RSPContexts-ta7dPUPH.js";import"./OverlayArrow-D6jpYtlx.js";import"./useControlledState-DUrZ8j4h.js";import"./Collection-C9L-nPBS.js";import"./CollectionBuilder-DCYsymNm.js";import"./SelectionIndicator-BFMZIIpU.js";import"./Separator-VmOMLBSn.js";import"./SelectionManager-6OiS_y3h.js";import"./useEvent-my0xaAeI.js";import"./useCollator-CO4w-iZj.js";import"./FocusScope-B8-7lMpW.js";import"./VisuallyHidden-CKDTSDk1.js";import"./getActionGroupSlot-FEsE5GBK.js";import"./useStatic-BfD-d5xb.js";import"./context-DCw83PuI.js";import"./FieldError-Bmf3SAas.js";import"./Form-DKz1zkHn.js";import"./Group-BbkN3tYf.js";import"./Input-9YEFu8mh.js";import"./useFormReset-DwR8gwPw.js";import"./useFormValidation-BX6OQ_jJ.js";import"./useSpinButton-WVLnVlR5.js";import"./useFilter-q4apYEQE.js";import"./useFieldComponent-R5E6D8Ic.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
