import{r as F,j as r}from"./iframe-BECefjM4.js";import{a as p,u as d,F as l,R as h,S as x,t as j}from"./ResetButton-C-RI2y7J.js";import{L as o}from"./Label-CVvbUjW4.js";import{B as c}from"./Button-DAjxqCNq.js";import{S as g}from"./Section-BJXV5he9.js";import{A as b}from"./ActionGroup-p2GKrbTu.js";import{s as u}from"./ActionBatch-DZRJQ0Jr.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-BE8Z0rWs.js";import{F as S}from"./FieldError-B21MiKyw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJ76M0aZ.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./clsx-B-dksMZM.js";import"./index-BGQ8HYEh.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./ActionGroupView-DqUzS8K9.js";import"./Content-LSOtaIIS.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./RSPContexts-C61Ijawi.js";import"./utils-bqUpXLHN.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./Modal-BdrjL7gW.js";import"./Overlay-yXgmDyXI.js";import"./useOverlayController-7vnF_84u.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./LoadingSpinner-DXxHNnrx.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./Dialog-BvIZXNXz.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./ButtonView-C56jVANI.js";import"./Flex-BjbASY3g.js";import"./useRef-NKl_qwib.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C8VBWo1V.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./useFieldComponent-B5iNz-5m.js";import"./useControlledHostValueProps-Del_bpsM.js";import"./FieldDescription-BgERXXFv.js";import"./TextField-Bz70SPLT.js";import"./FieldError-8R1qsZQS.js";import"./Form-FdseNRzi.js";import"./Group-BHV0qvDi.js";import"./Input-BXsG1hsf.js";import"./useTextField-CmkUv5OG.js";import"./useFormReset-CDquwT_C.js";import"./useFormValidation-I8j-SbQp.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Xr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const i=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),s=j();return r.jsx(l,{form:e,onSubmit:i,children:r.jsxs(g,{children:[r.jsx(s,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(s,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:i=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:i=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Zr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Zr as __namedExportsOrder,Xr as default};
