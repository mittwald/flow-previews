import{j as r,r as x}from"./iframe-d8TPt7Dq.js";import{b as c,u as p,F as a,t as F}from"./Form-9w--j5Mp.js";import{R as l,S as f}from"./ResetButton-DO1Nuvjf.js";import{B as d}from"./Button-CG9B_DsC.js";import{S as j}from"./Section-gs_NZoj_.js";import{A as b}from"./ActionGroup-Bto2kHza.js";import{s as u}from"./Action-BNptIGGg.js";import{C as t}from"./Checkbox-67X_-9X5.js";import{F as E}from"./FieldError-Z630sQ-Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-q6Z3lF5f.js";import"./flowComponent-HcW5iDWG.js";import"./index-D-tXEbu6.js";import"./clsx-B-dksMZM.js";import"./index-hNZo4M03.js";import"./useLocalizedStringFormatter-do7nMxiz.js";import"./context-s9WFa2xd.js";import"./browser-Cq89yPle.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CQWCrNEN.js";import"./useRef-Uwn_o1DG.js";import"./IconWarning-BBwUIuFu.js";import"./remote-DqOJ-OtV.js";import"./Text-B_83j2CJ.js";import"./EmulatedBoldText-Dx_IZKf8.js";import"./Text-CbFZ93_1.js";import"./LoadingSpinner-CZkvTSmf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CiuUFhcg.js";import"./ProgressBar-DbAphBhf.js";import"./Label-Ddce6lPW.js";import"./Hidden-DwOTALl4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CyX9DgZ-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DD6hZDmw.js";import"./useFocus-Dzzsimxq.js";import"./useFocusRing-Pl_83XSU.js";import"./useFocusable-Blyv-8JB.js";import"./ContextMenuSection-BGdNAGXU.js";import"./Dialog-DKAUR0i0.js";import"./RSPContexts-Bn3c_trp.js";import"./OverlayArrow-DsjdeIno.js";import"./useControlledState-Du7Hq4ap.js";import"./Collection-C_DIbhIS.js";import"./CollectionBuilder-DWjCGULS.js";import"./SelectionIndicator-Tc2ddoNh.js";import"./Separator-CfU7skaS.js";import"./SelectionManager-CwYh5ako.js";import"./useEvent-BEdiQQE9.js";import"./useCollator-BT1LDj3M.js";import"./FocusScope-TlUkqt74.js";import"./VisuallyHidden-_OGl7ay2.js";import"./getActionGroupSlot-BPC2rtYu.js";import"./useStatic-C-4yNygp.js";import"./context-BnRBG3H-.js";import"./useFieldComponent-XccPD61N.js";import"./FieldError-D74Rm1AJ.js";import"./Form-bB72J6qo.js";import"./useFormValidation-DzABwrGN.js";import"./useToggleState-MqcjNIYZ.js";import"./useFormReset-AO5_sbxL.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const qr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,qr as __namedExportsOrder,_r as default};
