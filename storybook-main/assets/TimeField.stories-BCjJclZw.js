import{r as x,j as r}from"./iframe-C5ZTNo7B.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-BsxvTmJM.js";import{L as t}from"./Label-D_0GeMuu.js";import{B as l}from"./Button-CTD3uiWd.js";import{S as b}from"./Section-HUKpeM8o.js";import{A as E}from"./ActionGroup-Dj8ge-dL.js";import{s as c}from"./ActionBatch-DQnznSVa.js";import{L as S}from"./DateInput-Bk7to0Qk.js";import{T as o}from"./TimeField-kHbe9l4O.js";import{F as T}from"./FieldError-BDB9mSsz.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bw3_nZ9y.js";import"./flowComponent-C74LPcu8.js";import"./index-DezMBlvl.js";import"./clsx-B-dksMZM.js";import"./index-L0hXSSnD.js";import"./useLocalizedStringFormatter-CDqYfAHq.js";import"./context-Zfd40gqJ.js";import"./ActionGroupView-BDcHe3GE.js";import"./Content-CH2yQGd8.js";import"./Heading-CV5pK1fF.js";import"./Heading-CeFx_rtS.js";import"./RSPContexts-BwPNB4Pl.js";import"./utils-BuDA3Ujk.js";import"./Text-vc01bOb1.js";import"./browser-CszbwzXz.js";import"./EmulatedBoldText-DrBpqUUw.js";import"./Text-DfHOPDAf.js";import"./Modal-DnrTq3-t.js";import"./Overlay-DtDYWi_A.js";import"./useOverlayController-DKmEbncM.js";import"./useStatic-yr3GM-AX.js";import"./OverlayContextProvider-CtLnis9C.js";import"./LoadingSpinner-DA9Opfj3.js";import"./IconWarning-Bhk_rtuP.js";import"./remote-DVpXA9eO.js";import"./Dialog-n3Xabcyo.js";import"./Button-B6XpNhBF.js";import"./ProgressBar-D_9cWfd2.js";import"./Label-BSZlsNs_.js";import"./Hidden-U4jsQoYY.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BfXWSkVN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ef-k5VSc.js";import"./useFocus-wNGus_RY.js";import"./useFocusRing-rbh4dKQ_.js";import"./useFocusable-DlWx3Zdp.js";import"./OverlayArrow-F8uV4qkU.js";import"./useControlledState-e_mWhKHk.js";import"./Collection-CZnzaiUv.js";import"./CollectionBuilder-BNhwwjuE.js";import"./SelectionIndicator-CrR9Mcxf.js";import"./Separator-BabRRkw2.js";import"./SelectionManager-MjLIZfUi.js";import"./useEvent-BqK5cB2S.js";import"./useCollator-CAZNHi0m.js";import"./FocusScope-PkAgaAiM.js";import"./VisuallyHidden-eGwjz06V.js";import"./ButtonView-DEthqiLB.js";import"./Flex-CwoZU0pA.js";import"./useRef-BCHa9Y83.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-B0O-s6DP.js";import"./getActionGroupSlot-D914C5WA.js";import"./FieldError-CU71BOGK.js";import"./Form-CMpIiu9M.js";import"./Group-DGqA1oIQ.js";import"./Input-DU4gQuZk.js";import"./useFormReset-D7awHB0C.js";import"./useFormValidation-CtRrQmcu.js";import"./useSpinButton-daa1a0NH.js";import"./useFilter-BxWbBMgn.js";import"./useFieldComponent-hFC9tXxl.js";import"./AlertText-EmpeosBS.js";import"./AlertIcon-Da43IrrR.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,zr as __namedExportsOrder,Yr as default};
