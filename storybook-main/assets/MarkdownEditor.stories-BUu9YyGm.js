import{r as x,j as r}from"./iframe-C037GO3p.js";import{a as n,u as p,F as a,R as u,S as c,t as E}from"./FormRootError-DJURmarp.js";import{L as m}from"./Label-B8SETf0h.js";import{B as l}from"./Button-Cf9guGvq.js";import{S as j}from"./Section-B8monzQm.js";import{A as b}from"./ActionGroup-BMh_5334.js";import{s as d}from"./ActionBatch-BkGPDfVM.js";import{M as s}from"./MarkdownEditor-Blr2YFY0.js";import{F as g}from"./FieldError-B5a1fJJd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CXANBhHf.js";import"./flowComponent-DDhfot0o.js";import"./index-wUcB077p.js";import"./clsx-B-dksMZM.js";import"./index-aVIlTX7l.js";import"./useLocalizedStringFormatter-yCwjB9xr.js";import"./context-Cm0s8R8a.js";import"./ActionGroupView-CqMOXzA_.js";import"./Content-D47RimDj.js";import"./Heading-D6ofxLDB.js";import"./Heading-DNAjQtPl.js";import"./RSPContexts-Cx4BM4L8.js";import"./utils-B21QcS96.js";import"./Text-1H8qvaGa.js";import"./browser-CtD1Hg4J.js";import"./EmulatedBoldText-BFdb5mKm.js";import"./Text-BlWqR5Lx.js";import"./Modal-DzeJT8sQ.js";import"./useOverlayController-CulrQTjS.js";import"./useStatic-zK9KTA7T.js";import"./Overlay-DtmfWyOD.js";import"./OverlayContextProvider-saupE8AB.js";import"./LoadingSpinner-7anO2L1H.js";import"./IconWarning-tMH4RyLr.js";import"./remote-BG6_lggN.js";import"./Dialog-Sd6ebC5F.js";import"./Button-3UAE6tol.js";import"./ProgressBar-Cvwm74GX.js";import"./Label-B5WCISDn.js";import"./Hidden-CT4yCR-L.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-FMiMqQcP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DtHLFK3z.js";import"./useFocus-CuP2Z3Ew.js";import"./useFocusRing-D8Rjq8L2.js";import"./useFocusable-DZHoKnFR.js";import"./OverlayArrow-Ct00V4z2.js";import"./useControlledState-DIGHyhBs.js";import"./Collection--dT_Uf-3.js";import"./CollectionBuilder-BaeZE-8K.js";import"./SelectionIndicator-DMUN5t4K.js";import"./Separator-DqZ2iszF.js";import"./SelectionManager-DPHkBOMj.js";import"./useEvent-DWoTHX9Z.js";import"./useCollator-SPxqcFer.js";import"./FocusScope-ByEh1Q0k.js";import"./VisuallyHidden-DBGkoZNP.js";import"./ButtonView-DKqFNzvb.js";import"./Flex-krSDMMbd.js";import"./useRef-CAUxoMVD.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-yxbgVkhw.js";import"./getActionGroupSlot-Be7CG0GW.js";import"./Markdown-CwSaKxHe.js";import"./CodeBlock-BsCspl_Q.js";import"./CopyButton-BM_OH3sn.js";import"./Tooltip-PaeEpN2O.js";import"./react-children-utilities-BmLO5X3m.js";import"./InlineCode-BmrvED6k.js";import"./Link-DnebGyxy.js";import"./Separator-Dh4XkHra.js";import"./TextArea-CYEcm52J.js";import"./useFieldComponent-BW6tilSl.js";import"./useControlledHostValueProps-ClXNYq5v.js";import"./FieldDescription-BhLI0C98.js";import"./TextField-BZQwJmxp.js";import"./FieldError-BWfaawdZ.js";import"./Form-DK0MW_mU.js";import"./Group-BPrnFgpr.js";import"./Input-COylKlun.js";import"./useTextField-CiTgdQeQ.js";import"./useFormReset-BmsW_IRy.js";import"./useFormValidation-kMumfte1.js";import"./AlertText-BaelcRob.js";import"./AlertIcon-CoEhaz6M.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),eo={title:"Integrations/React Hook Form/MarkdownEditor",component:n,render:()=>{const o=async F=>{await d(5e3),M(F)},f=p({defaultValues:{user:""}}),h=E();return r.jsx(a,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},t={},e={render:()=>{const o=p({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsxs(s,{isInvalid:!0,children:[r.jsx(m,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=p({defaultValues:{field:""}});return r.jsxs(a,{form:o,onSubmit:async()=>await d(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{children:r.jsx(m,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const io=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,io as __namedExportsOrder,eo as default};
