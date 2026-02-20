import{r as S,j as r}from"./iframe-BXGfha1q.js";import{a as l,u as a,F as c,R as u,S as p,t as y}from"./ResetButton-BJ_wNjWf.js";import{L as s}from"./Label-DmvSuQEb.js";import{B as e}from"./Button-DfmOHFsC.js";import{S as f}from"./Section-DH7vXPsV.js";import{A as F}from"./ActionGroup-CxRxNddr.js";import{s as d}from"./ActionBatch-z52bmq8Z.js";import{F as m}from"./FileField-CXrsXNKf.js";import{F as b}from"./FieldError-B0wR5GbE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx3iunOI.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./ActionGroupView-B4EOVs6v.js";import"./Content-BvqimwwE.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./utils-DDzB-hS3.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./Modal-BngkIUxs.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DVxvJxxR.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./useFormValidation-51U-qV9x.js";import"./FieldError-B-_MD7Je.js";import"./Input-DlEaT4nu.js";import"./useFieldComponent-BBRXs3en.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,B=E("submit"),Tr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const o=async j=>{await d(5e3),B(j)},h=a({defaultValues:{user:""}}),x=y();return r.jsx(c,{form:h,onSubmit:o,children:r.jsxs(f,{children:[r.jsx(x,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(e,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(F,{children:[r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},t={},i={render:()=>{const o=a({defaultValues:{field:""}});return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsx(c,{form:o,onSubmit:async()=>await d(2e3),children:r.jsxs(f,{children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(e,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(e,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})})}},n={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(c,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(e,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(F,{children:[r.jsx(e,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(e,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(u,{slot:"abort",children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <Section>
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
        </Section>
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
        <Field name="field">
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
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{t as Default,i as WithFieldError,n as WithFocus,kr as __namedExportsOrder,Tr as default};
