import{r as x,j as r}from"./iframe-je41IZNf.js";import{a as p,u as c,F as a,R as l,S as f,t as F}from"./ResetButton-C7YuCwWl.js";import{B as d}from"./Button-CKqcv5FO.js";import{S as j}from"./Section-DOpZVh4G.js";import{A as b}from"./ActionGroup-rchol9jY.js";import{s as u}from"./ActionBatch-ChKsIRTP.js";import{C as t}from"./Checkbox-aPAkBvGG.js";import{F as E}from"./FieldError-BATB6zBo.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BrtagzWP.js";import"./flowComponent-Byg_Wdja.js";import"./index-3zpYFWyF.js";import"./clsx-B-dksMZM.js";import"./index-DBepN-OD.js";import"./useLocalizedStringFormatter-DHff-c09.js";import"./context-533DYF-u.js";import"./ActionGroupView-CNDRVPWd.js";import"./Content-CI6m-d_y.js";import"./Heading-Bj867S3k.js";import"./Heading-0rwlvdDR.js";import"./RSPContexts-u6z1ubPU.js";import"./utils-Q4wA2zXG.js";import"./Text-BC-RZ7k4.js";import"./browser-Drae5Vqb.js";import"./EmulatedBoldText-BdEDO8G6.js";import"./Text-DidYm6nP.js";import"./Modal-CPZv7ujk.js";import"./useOverlayController-BUOVgKeB.js";import"./useStatic-DB-qeJ4V.js";import"./Overlay-B0VzEzJb.js";import"./OverlayContextProvider-hjkTcZbT.js";import"./LoadingSpinner-DltTQrQc.js";import"./IconWarning-Bnxn-M7Y.js";import"./remote-CVh73cse.js";import"./Dialog-BA8GDzQ6.js";import"./Button-Bv1GWar0.js";import"./ProgressBar-DuWvfVrm.js";import"./Label-BNl2hTKa.js";import"./Hidden-CA0I_dPB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-_SRIQyLy.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BcrJWT2n.js";import"./useFocus-YEPBe3OK.js";import"./useFocusRing-DOADtTnm.js";import"./useFocusable-Ldg9iOHo.js";import"./OverlayArrow-7pXV33mr.js";import"./useControlledState-Behjjcy6.js";import"./Collection-fxANXXK9.js";import"./CollectionBuilder-BswnoYzM.js";import"./SelectionIndicator-DrqbtAz1.js";import"./Separator-CRKtuO5D.js";import"./SelectionManager-DarNfpx7.js";import"./useEvent-BrmATdRq.js";import"./useCollator-5dtfDRbY.js";import"./FocusScope-ClZvkh4F.js";import"./VisuallyHidden-DTzU9Ikw.js";import"./ButtonView-Dl5Y4ZWm.js";import"./Flex--JtxxRJ0.js";import"./useRef-DwDjpRrm.js";import"./ContextMenuSection-D3nZCtKg.js";import"./getActionGroupSlot-RUbe0sa1.js";import"./useFieldComponent-b8-F_AVa.js";import"./FieldError-MnbTPawu.js";import"./Form-D8X7JUv8.js";import"./useFormValidation-DLIHXRbT.js";import"./useToggleState-IFAQ1815.js";import"./useFormReset-BAaFkhxA.js";import"./AlertText-B3BG9g2L.js";import"./AlertIcon-g4_I2qja.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async h=>{await u(1500),B(h)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
