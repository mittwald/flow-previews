import{r as x,j as r}from"./iframe-DwsGXJVG.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-DNLz9h87.js";import{B as d}from"./Button-CqL_vLUu.js";import{S as j}from"./Section-BZCnXK6X.js";import{A as b}from"./ActionGroup-DKP4zTXr.js";import{s as u}from"./ActionBatch-CjTnBW9C.js";import{C as t}from"./Checkbox-ClPySi5f.js";import{F as E}from"./FieldError-BPT_klMb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CY6fGUGp.js";import"./flowComponent-qxgtoIlH.js";import"./index-Bl29J3nk.js";import"./clsx-B-dksMZM.js";import"./index-Z94wDe_B.js";import"./useLocalizedStringFormatter-D7jMR4ny.js";import"./context-aVGfmL8k.js";import"./ActionGroupView-MmtnTSxu.js";import"./Content-knY6EnXd.js";import"./Heading-BKffDfDn.js";import"./Heading-CsVZ9AEI.js";import"./RSPContexts-CFeGdYTg.js";import"./utils-DRn9wprx.js";import"./Text-BV6qM8pO.js";import"./browser-Cz_VorJk.js";import"./EmulatedBoldText-C-itzyky.js";import"./Text-_i5SHi6c.js";import"./Modal-BWobx_T-.js";import"./Overlay-BTIksBpa.js";import"./useOverlayController-Bn3a-KRG.js";import"./useStatic-BwWlrMEh.js";import"./OverlayContextProvider-CCF5PYOf.js";import"./LoadingSpinner-DKEuwZ4C.js";import"./IconWarning-Ci9l-8b2.js";import"./remote-Co6v5gQ1.js";import"./Dialog-M15I_L87.js";import"./Button-m4IzIabh.js";import"./ProgressBar-C9wD8OqZ.js";import"./Label-C5wfq0Kb.js";import"./Hidden-CJnCNBv0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DGPoQV-x.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CckbZpi5.js";import"./useFocus-DIaiJ-NX.js";import"./useFocusRing-DdmspiUG.js";import"./useFocusable-s83SGTZ-.js";import"./OverlayArrow-DURPAUST.js";import"./useControlledState-CRB4bW25.js";import"./Collection-BGu_nwcH.js";import"./CollectionBuilder-B17IJuT1.js";import"./SelectionIndicator-BqSVIa4a.js";import"./Separator-BaZLZFLd.js";import"./SelectionManager-TlInvFTF.js";import"./useEvent-nJ48QMBy.js";import"./useCollator-GdkhHcGA.js";import"./FocusScope-4Fd3tZfM.js";import"./VisuallyHidden-Fvx90J8z.js";import"./ButtonView-CH2jD_Y9.js";import"./Flex-CPs0qh3k.js";import"./useRef-DR2JPmPu.js";import"./ContextMenuSection-X-b9aW1Y.js";import"./getActionGroupSlot-BRP57hZk.js";import"./useFieldComponent-BobnjoTA.js";import"./FieldError-BZQRredP.js";import"./Form-BVLfeGH7.js";import"./useFormValidation-Bdpbh0WL.js";import"./useToggleState-DlDrxqdX.js";import"./useFormReset-hk4HwqV2.js";import"./AlertText-D-LhYLA_.js";import"./AlertIcon-BhWII3Mz.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <Checkbox {...props}>Accept terms</Checkbox>
        </Field>
        <Checkbox isInvalid>
          Accept terms
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Checkbox>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Checkbox {...props}>Accept terms</Checkbox>
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
}`,...i.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Hr as __namedExportsOrder,Gr as default};
