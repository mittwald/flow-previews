import{r as x,j as r}from"./iframe-BECefjM4.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-C-RI2y7J.js";import{L as o}from"./Label-CVvbUjW4.js";import{B as u}from"./Button-DAjxqCNq.js";import{S as g}from"./Section-BJXV5he9.js";import{A as b}from"./ActionGroup-p2GKrbTu.js";import{s as p}from"./ActionBatch-DZRJQ0Jr.js";import{N as t}from"./NumberField-CFSzktDH.js";import{F as E}from"./FieldDescription-BgERXXFv.js";import{F as S}from"./FieldError-B21MiKyw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJ76M0aZ.js";import"./flowComponent-BuliJvUF.js";import"./index-CR5wd-c8.js";import"./clsx-B-dksMZM.js";import"./index-BGQ8HYEh.js";import"./useLocalizedStringFormatter-CcdVRlpp.js";import"./context-iJTSqlsV.js";import"./ActionGroupView-DqUzS8K9.js";import"./Content-LSOtaIIS.js";import"./Heading-CqTYuCig.js";import"./Heading-Brz3JFJA.js";import"./RSPContexts-C61Ijawi.js";import"./utils-bqUpXLHN.js";import"./Text-lZ2PbEqF.js";import"./browser-C9O3Z26r.js";import"./EmulatedBoldText-DVZs9jiX.js";import"./Text-IrzRAzMs.js";import"./Modal-BdrjL7gW.js";import"./Overlay-yXgmDyXI.js";import"./useOverlayController-7vnF_84u.js";import"./context-mnhTcWwX.js";import"./useStatic-Bcu2QKMg.js";import"./OverlayContextProvider-DAJfBpJE.js";import"./LoadingSpinner-DXxHNnrx.js";import"./IconWarning-CvVn1QxU.js";import"./remote-CqI4D0us.js";import"./Dialog-BvIZXNXz.js";import"./Button-CUoWVSdf.js";import"./ProgressBar-f6I3NHnz.js";import"./Label-DPandUgz.js";import"./Hidden-DMWiq0rX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-d0BVjP-J.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-427CihAL.js";import"./useFocus-CIRpkrn7.js";import"./useFocusRing-DIpVtkGc.js";import"./useFocusable-DTBBh1VF.js";import"./OverlayArrow-C6gZr2kK.js";import"./useControlledState-2Tdfwl5E.js";import"./Collection-dp2xzFhV.js";import"./CollectionBuilder-mQKTvAir.js";import"./SelectionIndicator-B2vofSgQ.js";import"./Separator-Ba2twhHH.js";import"./SelectionManager-Oe0Hh4DI.js";import"./useEvent-C3AnDdDF.js";import"./useCollator-r-PMcESO.js";import"./FocusScope-CjCXh94P.js";import"./VisuallyHidden-GWiC-wFe.js";import"./ButtonView-C56jVANI.js";import"./Flex-BjbASY3g.js";import"./useRef-NKl_qwib.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C8VBWo1V.js";import"./getActionGroupSlot-5YMPQbIk.js";import"./useFieldComponent-B5iNz-5m.js";import"./useControlledHostValueProps-Del_bpsM.js";import"./FieldError-8R1qsZQS.js";import"./Form-FdseNRzi.js";import"./Group-BHV0qvDi.js";import"./Input-BXsG1hsf.js";import"./useFormValidation-I8j-SbQp.js";import"./useSpinButton-k5vWUYEG.js";import"./useFormReset-CDquwT_C.js";import"./useTextField-CmkUv5OG.js";import"./AlertText-DIDGLLaX.js";import"./AlertIcon-B57cAQNM.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
