import{j as r,r as S}from"./iframe-ChVCZzSM.js";import{b as n,u as a,F as p,t as x}from"./Form-Wq02j4t1.js";import{L as s}from"./Label-CXZGfNo-.js";import{R as u,S as l}from"./ResetButton-LlXKxXXn.js";import{B as d}from"./Button-DDsnJhyb.js";import{S as j}from"./Section-CCSEsssw.js";import{A as b}from"./ActionGroup-Da32zVp8.js";import{s as c}from"./Action-BtwaxeJT.js";import{S as m}from"./SearchField-DWKFxKnt.js";import{F as E}from"./FieldError-DeqqVmMl.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-M4vO8Oa6.js";import"./flowComponent-CzVJsrSl.js";import"./index-AQkY3hEg.js";import"./clsx-B-dksMZM.js";import"./index-B17aiXwm.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./context-DJbicbqJ.js";import"./browser-Drl1pS0o.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-B7WWEN6i.js";import"./utils-D2Dbeo4Y.js";import"./Hidden-CmNYW2sS.js";import"./useRef-DHWaZ2bi.js";import"./IconWarning-DiIA_Kv4.js";import"./remote-B9ld2KSn.js";import"./Text-CDV1KOVg.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./Text-JkP9a4Kb.js";import"./LoadingSpinner-CIFEKnPX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DQvyXKNx.js";import"./ProgressBar-Cxzv2Khu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DJQIPi1Q.js";import"./useFocus-D0NBuExq.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./ContextMenuSection-CMrkKIyN.js";import"./Dialog-BaNJO3_y.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./VisuallyHidden-DGYqp_5z.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./useStatic-DfTrwEFp.js";import"./context-5fKqnWzS.js";import"./useFieldComponent--rNpfgQ4.js";import"./useControlledHostValueProps-DIZPcOR7.js";import"./FieldError-CO11AzDW.js";import"./Form-6QLzzpDB.js";import"./Group-DqiN5z8N.js";import"./Input-D2FpdmSE.js";import"./useTextField-Czjr-TtM.js";import"./useFormReset-BrkbasLl.js";import"./useFormValidation-BwLvk9We.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Tr={title:"Integrations/React Hook Form/SearchField",component:n,render:()=>{const e=async F=>{await c(5e3),g(F)},h=a({defaultValues:{user:""}}),f=x();return r.jsx(p,{form:h,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(f,{name:"user",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},o={},t={render:()=>{const e=a();return S.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsxs(m,{isInvalid:!0,children:[r.jsx(s,{children:"Suche"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const e=a();return r.jsxs(p,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(m,{children:r.jsx(s,{children:"Suche"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{o as Default,t as WithFieldError,i as WithFocus,kr as __namedExportsOrder,Tr as default};
