import{r as x,j as r}from"./iframe-DwsGXJVG.js";import{a as l,u as a,F as c,R as p,S as d,t as j}from"./ResetButton-DNLz9h87.js";import{L as s}from"./Label-DOR8D5QK.js";import{B as t}from"./Button-CqL_vLUu.js";import{S}from"./Section-BZCnXK6X.js";import{A as b}from"./ActionGroup-DKP4zTXr.js";import{s as u}from"./ActionBatch-CjTnBW9C.js";import{F as m}from"./FileField-BPIAFk3Z.js";import{F as B}from"./FieldError-BPT_klMb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY6fGUGp.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./ActionGroupView-MmtnTSxu.js";import"./Content-knY6EnXd.js";import"./Heading-BKffDfDn.js";import"./Heading-CsVZ9AEI.js";import"./RSPContexts-CFeGdYTg.js";import"./utils-DRn9wprx.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./Modal-BWobx_T-.js";import"./Overlay-BTIksBpa.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./VisuallyHidden-Fvx90J8z.js";import"./ButtonView-CH2jD_Y9.js";import"./Flex-CPs0qh3k.js";import"./useRef-DR2JPmPu.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-X-b9aW1Y.js";import"./getActionGroupSlot-BRP57hZk.js";import"./useFormValidation-Bdpbh0WL.js";import"./FieldError-BZQRredP.js";import"./Input-B80smJAQ.js";import"./useFieldComponent-BobnjoTA.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Gr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(p,{children:"Reset"}),r.jsx(d,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
