import{j as r,r as x}from"./iframe-CV15FJMl.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-Dy0XVagH.js";import{L as t}from"./Label-BYiN1vfD.js";import{B as l}from"./Button-CPmcSz1K.js";import{S as b}from"./Section-DxMSYwau.js";import{A as E}from"./ActionGroup-Bfa2abXX.js";import{s as c}from"./Action-k7eAd4lv.js";import{L as S}from"./DateInput-BPgwtaeb.js";import{T as o}from"./TimeField-Ctmq6ZRq.js";import{F as T}from"./FieldError-e14SOUTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-83TxHgtq.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./clsx-B-dksMZM.js";import"./index-DgyS9CYh.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./useRef-Q0HZ1Gfv.js";import"./utils-B45PgFGd.js";import"./ButtonView-CuCKGckF.js";import"./browser-8BNXX35r.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./Text-DO3jYkuR.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./LoadingSpinner-C2UghIT7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Deu1Fo5o.js";import"./ProgressBar-DYhZqT6M.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9ebI84m.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useFocusable-DenRoGzb.js";import"./ContextMenuSection-BP5kvD_3.js";import"./Dialog-CvkIF4vR.js";import"./RSPContexts-09abhkzW.js";import"./OverlayArrow-BtUNb3SD.js";import"./useControlledState-Br5i43rk.js";import"./Collection-BDyrlbfU.js";import"./CollectionBuilder-DPEpUwFF.js";import"./SelectionIndicator-C649Jmr0.js";import"./Separator-BUXgDBus.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./useCollator-C223TjTn.js";import"./FocusScope-Da56m84L.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./useStatic-CaY36sW2.js";import"./context-z7OXrsOp.js";import"./FieldError-CDBleeuN.js";import"./Form-B5_Ftb3l.js";import"./Group-Oc33WXVS.js";import"./Input-Wuyb26cC.js";import"./useFormValidation-rdndu8q5.js";import"./useFormReset-DQt01LcM.js";import"./useSpinButton-dYlzXGLa.js";import"./useFilter-CyZ9v00x.js";import"./useFieldComponent-4syZJMEs.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
