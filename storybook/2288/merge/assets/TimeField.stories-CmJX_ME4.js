import{j as r,r as x}from"./iframe-K4Kgzs5d.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-D8mKGoDl.js";import{L as t}from"./Label-BHhszR2e.js";import{B as l}from"./Button-CLdF1xvY.js";import{S as b}from"./Section-DhkMhEtB.js";import{A as E}from"./ActionGroup-By1FPS3M.js";import{s as c}from"./Action-D8xdI4CM.js";import{L as S}from"./DateInput-ChB3mEQl.js";import{T as o}from"./TimeField-TWmTyVq5.js";import{F as T}from"./FieldError-BIdQs2eG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d4gvBHma.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./useRef-D3B_CRoC.js";import"./utils--XC5cWbY.js";import"./ButtonView-CZyRcM7x.js";import"./browser-9MG5lDdh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Text-BPEkrilU.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Dialog-D9y6Gm5p.js";import"./RSPContexts-DBQcbxf9.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./useStatic-DUE7vdEn.js";import"./context-Be9deJEN.js";import"./FieldError-CDQ9nLxM.js";import"./Form-BeqJ_QXS.js";import"./Group-BAVjj6lU.js";import"./Input-n3w13r8V.js";import"./useFormValidation-QT1HCjbB.js";import"./useFormReset-Bu0cPn5B.js";import"./useSpinButton-B7TEgkwO.js";import"./useFilter-CF6_w3jE.js";import"./useFieldComponent-XDoLqUAT.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
