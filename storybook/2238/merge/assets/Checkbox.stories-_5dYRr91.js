import{j as r,r as x}from"./iframe-DB4UlQ_F.js";import{b as c,u as p,F as a,t as F}from"./Form-CprAAj6n.js";import{R as l,S as f}from"./ResetButton-Cbtj9u5S.js";import{B as d}from"./Button-DYIAULzM.js";import{S as j}from"./Section-CwTyfRBn.js";import{A as b}from"./ActionGroup-DYVJBbzZ.js";import{s as u}from"./Action-D44Jy6S7.js";import{C as t}from"./Checkbox-bWO3Umvm.js";import{F as E}from"./FieldError-7mdFLW8I.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CewJ3DJw.js";import"./flowComponent-BL-3GjRu.js";import"./index-DpDRS9kh.js";import"./clsx-B-dksMZM.js";import"./index-BSqJ1-JW.js";import"./useLocalizedStringFormatter-DsWJPkCN.js";import"./context-BeH9c2u_.js";import"./browser-CMEWPYW9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B6Q0cVYp.js";import"./useRef-D2qb2cPS.js";import"./IconWarning-D6sMwWyV.js";import"./remote-DOdcl-CB.js";import"./Text-CvhufvNl.js";import"./EmulatedBoldText-1LQNM6BM.js";import"./Text-De_rG2Pz.js";import"./LoadingSpinner-BUzKTNdb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-L-mN_PGj.js";import"./ProgressBar-BtSLHqLj.js";import"./Label-CzwPVXKy.js";import"./Hidden-BofTzQhQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-bn4O9qyi.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDGll4uD.js";import"./useFocus-mLt6Jcka.js";import"./useFocusRing-BToYuWbv.js";import"./useFocusable-BfPamkyW.js";import"./ContextMenuSection-BHyvjJMz.js";import"./Dialog-B4nT46da.js";import"./RSPContexts-Br1rngEm.js";import"./OverlayArrow-BH8gVRz-.js";import"./useControlledState-2lUl0kro.js";import"./Collection-e6TIFm8x.js";import"./CollectionBuilder-DlEUUA4I.js";import"./SelectionIndicator-D87wG6Zb.js";import"./Separator-Bcm53B3D.js";import"./SelectionManager-Ber2ZhG4.js";import"./useEvent-C6FAavwc.js";import"./useCollator-BdTHcpkR.js";import"./FocusScope-D57vEPf5.js";import"./VisuallyHidden-C3r-i5Fv.js";import"./getActionGroupSlot-BJEuMMsc.js";import"./useStatic-BsW-2tBw.js";import"./context-b0VtR6po.js";import"./useFieldComponent-Dp69OqtL.js";import"./FieldError-CegzLELq.js";import"./Form-PeScrtUS.js";import"./useFormValidation-Bt0uBrAk.js";import"./useToggleState-kc3vNB61.js";import"./useFormReset-zmgaZOpR.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
