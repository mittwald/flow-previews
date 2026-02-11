import{r as x,j as r}from"./iframe-DiUxw81Q.js";import{a as c,u as p,F as a,R as l,S as f,t as F}from"./ResetButton-DLc-3RhS.js";import{B as d}from"./Button-gnRq8NvL.js";import{S as j}from"./Section-DUwGPO-R.js";import{A as b}from"./ActionGroup-CgTxc8cR.js";import{s as u}from"./Action-D_TEMwel.js";import{C as t}from"./Checkbox-CDM3V5hL.js";import{F as E}from"./FieldError-DH3i7Cba.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bvqmautb.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./clsx-B-dksMZM.js";import"./index-2ROVwQvu.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./context-si8TSn1j.js";import"./useRef-C5iQicBg.js";import"./utils-BhADjK-H.js";import"./ButtonView-DRbY-aON.js";import"./browser-DhblGL2Q.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-I-WC2YFt.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocusable-bbwyacvB.js";import"./ContextMenuSection-CCmic__u.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./useControlledState-DDLUXLOw.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./useStatic-BoyD6q7D.js";import"./context-C7B1j1st.js";import"./useFieldComponent-BFiXxBQU.js";import"./FieldError-BKME6Hw5.js";import"./Form-kW4DkkVS.js";import"./useFormValidation-CsqhaN7Y.js";import"./useToggleState-BEtMbK80.js";import"./useFormReset-Cz-LaBzR.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
