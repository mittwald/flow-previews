import{j as r,r as C}from"./iframe-CcNHCKoB.js";import{a as p,u as a,F as c,t as j,R as h,S as x}from"./ResetButton-QovA5GoB.js";import{B as l}from"./Button-DTuLbClr.js";import{S as B}from"./Section-C7V_cxBu.js";import{A as b}from"./ActionGroup-C0eUcCYO.js";import{s as u}from"./Action-XHgAr--T.js";import{T as i}from"./Text-BmtlE-88.js";import{C as m}from"./CheckboxButton-MXAIaE5W.js";import{C as d}from"./Content-1twFUXOj.js";import{F as E}from"./FieldError-BlodrZIq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nNoo79J6.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./useRef-Cb4CGn_K.js";import"./utils-NnqZ9ZBK.js";import"./ButtonView-BSq0RN-i.js";import"./browser-C0P1LItQ.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Dialog-DlflAgwc.js";import"./RSPContexts-DYw5y0O9.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./Text-BCtKE9i4.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./useStatic-BA9Xyuh5.js";import"./context-QFR9DY6D.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Checkbox-7QlRkZ_S.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./FieldError--IyvMZRA.js";import"./Form-DRLF_vg9.js";import"./useFormValidation-PdvsTzHy.js";import"./useToggleState-DMv-HDsl.js";import"./useFormReset-CUbMVBNo.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Pr={title:"Integrations/React Hook Form/CheckboxButton",component:p,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(B,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(i,{children:"Terms and Conditions"}),r.jsx(d,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
