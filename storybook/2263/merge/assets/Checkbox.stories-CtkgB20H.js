import{j as r,r as x}from"./iframe-B_VLmVOf.js";import{b as c,u as p,F as a,t as F}from"./Form-CYwbn_Ej.js";import{R as l,S as f}from"./ResetButton-CT-MbADY.js";import{B as d}from"./Button-Bx9uZJMk.js";import{S as j}from"./Section-C8rH5F8Y.js";import{A as b}from"./ActionGroup-BpNSiWp6.js";import{s as u}from"./Action-Ct3jXlr4.js";import{C as t}from"./Checkbox-Ck8a81Up.js";import{F as E}from"./FieldError-Daf8utl3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BPLgH_zA.js";import"./flowComponent-Bc5-OX5Z.js";import"./index-GX3ioGoD.js";import"./clsx-B-dksMZM.js";import"./index-Cpfd6Pim.js";import"./useLocalizedStringFormatter-HtYu0JJ-.js";import"./context-x63-ahNn.js";import"./browser-BI-ei-gA.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-C3gFrn3p.js";import"./useRef-ktlGpVd-.js";import"./IconWarning-COj126FB.js";import"./remote-D8h-jp0X.js";import"./Text-DLyTxpXl.js";import"./EmulatedBoldText-C4lFh4eF.js";import"./Text-Cz72Ll4P.js";import"./LoadingSpinner-8NlAwzA_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-sEz_Ftmo.js";import"./ProgressBar-B-kO7AM1.js";import"./Label-BcEUcVG2.js";import"./Hidden-BDeD6EhR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-3m37nTep.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dvDnySA_.js";import"./useFocus-BThPJxs2.js";import"./useFocusRing-CqgXonXS.js";import"./useFocusable-D136elhd.js";import"./ContextMenuSection-Bn3YLQv6.js";import"./Dialog-B23HRyeo.js";import"./RSPContexts-CewByvV8.js";import"./OverlayArrow-BqV4egk9.js";import"./useControlledState-Cy2UyDQ-.js";import"./Collection-gtDJcyu2.js";import"./CollectionBuilder-DNk5Dmq7.js";import"./SelectionIndicator-BccBPPpV.js";import"./Separator-2P5ZQBAJ.js";import"./SelectionManager-DSvZPYB7.js";import"./useEvent-CYdGT-0S.js";import"./useCollator-C3rClAMq.js";import"./FocusScope-PhJ8RGzw.js";import"./VisuallyHidden-neYV3Owd.js";import"./getActionGroupSlot-DWxJJpa_.js";import"./useStatic-Ch5ZGK2l.js";import"./context-DKzx1USb.js";import"./useFieldComponent-CG-gR-7X.js";import"./FieldError-DsHbeww2.js";import"./Form-Bzu1lHbY.js";import"./useFormValidation-BmcsTB_W.js";import"./useToggleState-CVL98gOE.js";import"./useFormReset-DzSH81mS.js";import"./AlertText-DdDDd0bO.js";import"./AlertIcon-CQ3Ik0rE.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Dr=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Dr as __namedExportsOrder,wr as default};
