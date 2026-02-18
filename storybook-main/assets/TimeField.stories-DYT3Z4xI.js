import{r as x,j as r}from"./iframe-Bz3NPU1o.js";import{a as p,u as a,F as d,R as u,S as F,t as j}from"./ResetButton-C6u6UNu5.js";import{L as t}from"./Label-DJFgm5M0.js";import{B as l}from"./Button-DmREI3b0.js";import{S as b}from"./Section-BwE4QROn.js";import{A as E}from"./ActionGroup-rIPGzSy7.js";import{s as c}from"./ActionBatch-DB6HM48H.js";import{L as S}from"./DateInput-D_QaG6Eh.js";import{T as o}from"./TimeField-BVGIcoCg.js";import{F as T}from"./FieldError-fbbECv40.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvekFh9y.js";import"./flowComponent-CjhBP1Cm.js";import"./index-4Y7PW7MZ.js";import"./clsx-B-dksMZM.js";import"./index-FgoIhbmz.js";import"./useLocalizedStringFormatter-DZI71IG_.js";import"./context-pgk2HPHJ.js";import"./ActionGroupView-CscudnEo.js";import"./Content-CjcJxOBw.js";import"./Heading-0jGXR_g9.js";import"./Heading-BkR9lkEu.js";import"./RSPContexts-BgkP6bIF.js";import"./utils-DuUJF5nC.js";import"./Text-ByJancxD.js";import"./browser-BaNqvzaa.js";import"./EmulatedBoldText-DUXivwa1.js";import"./Text-ClD1r8b1.js";import"./Modal-BVW6OhrB.js";import"./useOverlayController-BTsOQKJk.js";import"./useStatic-hPs_nES1.js";import"./Overlay-oLKw2upU.js";import"./OverlayContextProvider-ve6dYabZ.js";import"./LoadingSpinner-C6XGp2xl.js";import"./IconWarning-Cqqx4tMU.js";import"./remote-D_M7roLC.js";import"./Dialog-DrbZDX-D.js";import"./Button-BMxU8wWi.js";import"./ProgressBar-Dn9Yutju.js";import"./Label-QJAE-TAD.js";import"./Hidden-DRSFEG3Y.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C5lED9IT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BmxXpscc.js";import"./useFocus-DMRfkGw8.js";import"./useFocusRing-BLuP37PT.js";import"./useFocusable-DZRtaeEQ.js";import"./OverlayArrow-Co0kQ8lC.js";import"./useControlledState-e4YYsLZE.js";import"./Collection-CtHLpY8r.js";import"./CollectionBuilder-CSsN_D43.js";import"./SelectionIndicator-DWP2zhMc.js";import"./Separator-4S0Txhk8.js";import"./SelectionManager-DtXYtKU8.js";import"./useEvent-DV66xCP2.js";import"./useCollator-DX6ShHbl.js";import"./FocusScope-Bk96q2B-.js";import"./VisuallyHidden-DkJ66lZ_.js";import"./ButtonView-B1T1gpd9.js";import"./Flex-BZRK7zof.js";import"./useRef-DVap1TEX.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-Dt7nyU_Z.js";import"./getActionGroupSlot--8oaPbEm.js";import"./FieldError-BDAUq_c5.js";import"./Form-DrqAye7f.js";import"./Group-CfiWYn5I.js";import"./Input-DW4bMgBP.js";import"./useFormReset-D4UcXUYp.js";import"./useFormValidation-itgD5oYf.js";import"./useSpinButton-B-mOuGQB.js";import"./useFilter-Q2Z3jsDb.js";import"./useFieldComponent-kW7iCi5m.js";import"./AlertText-yCfidByd.js";import"./AlertIcon-Csw_f8vF.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Yr={title:"Integrations/React Hook Form/TimeField",component:p,render:()=>{const e=async h=>{await c(1500),g(h)},f=a({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=a();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=a();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(p,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
