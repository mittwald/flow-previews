import{r as x,j as r}from"./iframe-BRGIT6aC.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-Q24A8VNC.js";import{L as t}from"./Label-DYHgdjdj.js";import{B as l}from"./Button-CQ_f9ZVl.js";import{S as b}from"./Section-DEfQkscU.js";import{A as E}from"./ActionGroup-DbWhQ292.js";import{s as c}from"./Action-BloO9QUi.js";import{L as S}from"./DateInput-DO9Z_4qV.js";import{T as o}from"./TimeField-BVWutU9V.js";import{F as T}from"./FieldError-BPfKA2u4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJEA9S0A.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./useRef-BP6FbjN4.js";import"./utils-D-ssFu49.js";import"./ButtonView-Cu_PLq3T.js";import"./browser-BYxlW31W.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGLZGzkl.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./ContextMenuSection-a8sl_NQx.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./useStatic-3STTURCL.js";import"./context-Dnnfbmmg.js";import"./FieldError-f7o5-LTX.js";import"./Form-97YOGsKi.js";import"./Group-COVCD_be.js";import"./Input-CEj_QPsV.js";import"./useFormReset-CXZmek7W.js";import"./useFormValidation-D-IfNlYy.js";import"./useSpinButton-BN7kr9uz.js";import"./useFilter-LUL0iR9U.js";import"./useFieldComponent-CMRD4Pyo.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
