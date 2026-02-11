import{r as x,j as r}from"./iframe-BBLgQM8W.js";import{a as c,u as p,F as a,R as l,S as f,t as F}from"./ResetButton-BLMx4wj7.js";import{B as d}from"./Button-B_d3OkSN.js";import{S as j}from"./Section-BqYCDxKj.js";import{A as b}from"./ActionGroup-DI2Kr1jI.js";import{s as u}from"./Action-vczYGY_C.js";import{C as t}from"./Checkbox-BnJag2Qh.js";import{F as E}from"./FieldError-DAXPSsyp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-De16JUVi.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./clsx-B-dksMZM.js";import"./index-CC4aSS2B.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./useRef-BADtkrSm.js";import"./utils-Bzwl2RbX.js";import"./ButtonView-BpODKVdh.js";import"./browser-DI7yhJk5.js";import"./IconWarning-CmmOPW6y.js";import"./remote-Vne7hGXH.js";import"./Text-DyzGue3k.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Text-C-vmddAy.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DXblhpXj.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useFocusable-BlOp3ek5.js";import"./ContextMenuSection-DowsXKqD.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./useStatic-DeJLZZ0I.js";import"./context-On8QMk-S.js";import"./useFieldComponent-BfDJ4pJf.js";import"./FieldError-CxkPyMXc.js";import"./Form-WOMIl9aS.js";import"./useFormValidation-DAic1NnU.js";import"./useToggleState-Db4BOF7R.js";import"./useFormReset-4n7xFzn-.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const wr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,wr as __namedExportsOrder,qr as default};
