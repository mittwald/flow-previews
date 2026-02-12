import{r as x,j as r}from"./iframe-BECefjM4.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./ResetButton-C-RI2y7J.js";import{L as s}from"./Label-CVvbUjW4.js";import{B as t}from"./Button-DAjxqCNq.js";import{S}from"./Section-BJXV5he9.js";import{A as b}from"./ActionGroup-p2GKrbTu.js";import{s as u}from"./ActionBatch-DZRJQ0Jr.js";import{F as m}from"./FileField-gr2b5Cao.js";import{F as B}from"./FieldError-B21MiKyw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJ76M0aZ.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./clsx-B-dksMZM.js";import"./index-BGQ8HYEh.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./ActionGroupView-DqUzS8K9.js";import"./Content-LSOtaIIS.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./RSPContexts-C61Ijawi.js";import"./utils-bqUpXLHN.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./Modal-BdrjL7gW.js";import"./Overlay-yXgmDyXI.js";import"./useOverlayController-7vnF_84u.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./LoadingSpinner-DXxHNnrx.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./Dialog-BvIZXNXz.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./ButtonView-C56jVANI.js";import"./Flex-BjbASY3g.js";import"./useRef-NKl_qwib.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C8VBWo1V.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./useFormValidation-I8j-SbQp.js";import"./FieldError-8R1qsZQS.js";import"./Input-BXsG1hsf.js";import"./useFieldComponent-B5iNz-5m.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Hr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Kr as __namedExportsOrder,Hr as default};
