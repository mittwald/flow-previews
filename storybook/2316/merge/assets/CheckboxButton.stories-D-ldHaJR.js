import{r as C,j as r}from"./iframe-BBLgQM8W.js";import{a as p,u as a,F as c,R as h,S as x,t as j}from"./ResetButton-BLMx4wj7.js";import{B as l}from"./Button-B_d3OkSN.js";import{S as B}from"./Section-BqYCDxKj.js";import{A as b}from"./ActionGroup-DI2Kr1jI.js";import{s as u}from"./Action-vczYGY_C.js";import{T as i}from"./Text-DyzGue3k.js";import{C as m}from"./CheckboxButton-CbNag02C.js";import{C as d}from"./Content-BVt5oRT8.js";import{F as E}from"./FieldError-DAXPSsyp.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-De16JUVi.js";import"./flowComponent-D-0ABlaS.js";import"./index-DIoQv3Yu.js";import"./clsx-B-dksMZM.js";import"./index-CC4aSS2B.js";import"./useLocalizedStringFormatter-ndUPvi50.js";import"./context-CbfWsJFN.js";import"./useRef-BADtkrSm.js";import"./utils-Bzwl2RbX.js";import"./ButtonView-BpODKVdh.js";import"./browser-DI7yhJk5.js";import"./IconWarning-CmmOPW6y.js";import"./remote-Vne7hGXH.js";import"./LoadingSpinner-CfkxbS8M.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-M7FHgNE8.js";import"./ProgressBar-C8xfeLyO.js";import"./Label-DjOsKLLo.js";import"./Hidden-CcHv8P9l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-65Ti_lew.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DXblhpXj.js";import"./useFocus-atMo-T8H.js";import"./useFocusRing-XNEcT-2-.js";import"./useFocusable-BlOp3ek5.js";import"./ContextMenuSection-DowsXKqD.js";import"./Dialog-ErohAvYc.js";import"./RSPContexts-CYvfEZEC.js";import"./OverlayArrow-DOWztXxW.js";import"./useControlledState-Cx-WZngS.js";import"./Collection-D0FsBWET.js";import"./CollectionBuilder-B0O9WQSu.js";import"./SelectionIndicator-CxHxHFYG.js";import"./Separator-Du5IBTyX.js";import"./Text-C-vmddAy.js";import"./SelectionManager-Qclabrtm.js";import"./useEvent-xi19_WIE.js";import"./useCollator--gNzNCc1.js";import"./FocusScope-BuBo0u5V.js";import"./VisuallyHidden-DReBsRIr.js";import"./getActionGroupSlot-BNVlq3z6.js";import"./useStatic-DeJLZZ0I.js";import"./context-On8QMk-S.js";import"./EmulatedBoldText-BZaUBYn6.js";import"./Checkbox-BnJag2Qh.js";import"./useFieldComponent-BfDJ4pJf.js";import"./FieldError-CxkPyMXc.js";import"./Form-WOMIl9aS.js";import"./useFormValidation-DAic1NnU.js";import"./useToggleState-Db4BOF7R.js";import"./useFormReset-4n7xFzn-.js";import"./AlertText-B4ActtEe.js";import"./AlertIcon-CiXM2S_P.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
        </Field>
        <CheckboxButton {...props} isInvalid>
          <Text>Terms and Conditions</Text>
          <Content>Consent to terms and conditions</Content>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxButton>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxButton {...props}>
            <Text>Terms and Conditions</Text>
            <Content>Consent to terms and conditions</Content>
          </CheckboxButton>
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
}`,...s.parameters?.docs?.source}}};const Wr=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,s as WithFocus,Wr as __namedExportsOrder,Pr as default};
