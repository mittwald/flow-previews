import{j as r,r as x}from"./iframe-ChVCZzSM.js";import{b as a,u as p,F as d,t as j}from"./Form-Wq02j4t1.js";import{L as t}from"./Label-CXZGfNo-.js";import{R as u,S as F}from"./ResetButton-LlXKxXXn.js";import{B as l}from"./Button-DDsnJhyb.js";import{S as b}from"./Section-CCSEsssw.js";import{A as E}from"./ActionGroup-Da32zVp8.js";import{s as c}from"./Action-BtwaxeJT.js";import{L as S}from"./DateInput-BeziPLm3.js";import{T as o}from"./TimeField-D6hsVRcJ.js";import{F as T}from"./FieldError-DeqqVmMl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-M4vO8Oa6.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./clsx-B-dksMZM.js";import"./index-B17aiXwm.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./context-DJbicbqJ.js";import"./browser-Drl1pS0o.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7WWEN6i.js";import"./utils-D2Dbeo4Y.js";import"./Hidden-CmNYW2sS.js";import"./useRef-DHWaZ2bi.js";import"./IconWarning-DiIA_Kv4.js";import"./remote-B9ld2KSn.js";import"./Text-CDV1KOVg.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./Text-JkP9a4Kb.js";import"./LoadingSpinner-CIFEKnPX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DJQIPi1Q.js";import"./useFocus-D0NBuExq.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./ContextMenuSection-CMrkKIyN.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./useStatic-DfTrwEFp.js";import"./context-5fKqnWzS.js";import"./FieldError-CO11AzDW.js";import"./Form-6QLzzpDB.js";import"./Group-DqiN5z8N.js";import"./Input-D2FpdmSE.js";import"./useFormValidation-BwLvk9We.js";import"./useFormReset-BrkbasLl.js";import"./useSpinButton-CKasi_tQ.js";import"./useFilter-BxIA9Z9-.js";import"./useFieldComponent--rNpfgQ4.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),$r={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,kr as __namedExportsOrder,$r as default};
