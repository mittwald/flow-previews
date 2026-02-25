import{r as x,j as r}from"./iframe-DCel2PhG.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-Bo6dOnRX.js";import{L as t}from"./Label-DVkF56bm.js";import{B as l}from"./Button-CjhaH8vt.js";import{S as b}from"./Section-BGkAXCBO.js";import{A as E}from"./ActionGroup-BLs0BWGb.js";import{s as c}from"./ActionBatch-BNnkW8Wa.js";import{L as S}from"./DateInput-DAguTIV9.js";import{T as o}from"./TimeField-DAgoN39n.js";import{F as T}from"./FieldError-DI0hFked.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CoRoJ1gY.js";import"./flowComponent-DYf6GQMN.js";import"./index-BfJDZYeV.js";import"./clsx-B-dksMZM.js";import"./index-DcvCSlSd.js";import"./useLocalizedStringFormatter-CEBQqt_q.js";import"./context-ChvTJ1gc.js";import"./ActionGroupView-4YYVwVM7.js";import"./Content-B1u41BWn.js";import"./Heading-DPAdBgTw.js";import"./Heading-Cs7GlIOt.js";import"./RSPContexts-BWRH8UQz.js";import"./utils-jFfJrK0I.js";import"./Text-CfcNN3C1.js";import"./browser-ChoxEgkm.js";import"./EmulatedBoldText-6uMsyrU3.js";import"./Text-H5k4jR7L.js";import"./Modal-V5k8QPuM.js";import"./useOverlayController-BAgKybrq.js";import"./useStatic-Gj7JsFzP.js";import"./Overlay-LFamQv73.js";import"./OverlayContextProvider-BfHmVY35.js";import"./LoadingSpinner-Bj8rfmA6.js";import"./IconWarning-CNMqfC0c.js";import"./remote-MfAOzJwE.js";import"./Dialog-BnrJ3EGg.js";import"./Button-Dbr1_oBf.js";import"./ProgressBar-COcMCNPc.js";import"./Label-CSZS-HnU.js";import"./Hidden-DZpZ88Vz.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-V0mABmwM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-l6QeQysM.js";import"./useFocus-BSXyJlKK.js";import"./useFocusRing-D6latAqm.js";import"./useFocusable-CF_X-2Wu.js";import"./OverlayArrow-BUpR8Z4Q.js";import"./useControlledState-uXSCouXp.js";import"./Collection-Mm3AtcTx.js";import"./CollectionBuilder-CIgtGDmA.js";import"./SelectionIndicator-DYHfPyq2.js";import"./Separator-BB0Sm4E2.js";import"./SelectionManager-CIJEtr4-.js";import"./useEvent-CN9vdLun.js";import"./useCollator-qJfX3fiN.js";import"./FocusScope-BrLtMtFa.js";import"./VisuallyHidden-giqV-lwH.js";import"./ButtonView--o7XYYP5.js";import"./Flex-tHl6Xyli.js";import"./useRef-C3FTlCPC.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DVvHUSFD.js";import"./getActionGroupSlot-BM5R5I3-.js";import"./FieldError-QICB5hyW.js";import"./Form-BsISnRaP.js";import"./Group-yuR7pI6G.js";import"./Input-D8WhG3Nd.js";import"./useFormReset-DvzBERJE.js";import"./useFormValidation-CVEw0jVb.js";import"./useSpinButton-CXwX6w2r.js";import"./useFilter-4uAWRoOH.js";import"./useFieldComponent-CWMmv0d5.js";import"./AlertText-CGICoaW7.js";import"./AlertIcon-C6GnHejw.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
