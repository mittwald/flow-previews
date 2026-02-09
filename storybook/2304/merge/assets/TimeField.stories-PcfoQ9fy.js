import{r as x,j as r}from"./iframe-DsvUdpXw.js";import{a,u as p,F as d,R as u,S as F,t as j}from"./ResetButton-BMOT3GH_.js";import{L as t}from"./Label-V0M08dzp.js";import{B as l}from"./Button-Bh17vETd.js";import{S as b}from"./Section-DVr7ON9z.js";import{A as E}from"./ActionGroup-DXsjU9YE.js";import{s as c}from"./Action-CHQuPKKz.js";import{L as S}from"./DateInput-CTMC3cjQ.js";import{T as o}from"./TimeField-DnMbZXVN.js";import{F as T}from"./FieldError-DMawyIiV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-6cr1cE.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./useRef-Cuy_dzRn.js";import"./utils-elFy1-Tx.js";import"./ButtonView-ngwm-oT3.js";import"./browser-BtOTkQbR.js";import"./Label.module-CUYTf9Jc.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./ContextMenuSection-CZOOjTrg.js";import"./Dialog-DDWgyAFS.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./useStatic-B4i3epQD.js";import"./context-ya2kPvzB.js";import"./FieldError-S3zhgpi7.js";import"./Form-_ij7bXRe.js";import"./Group-VzCh1Jz3.js";import"./Input-B3qlT_4M.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./useSpinButton-CE835ypU.js";import"./useFilter-aBkIIk56.js";import"./useFieldComponent-CWVnpPPS.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
