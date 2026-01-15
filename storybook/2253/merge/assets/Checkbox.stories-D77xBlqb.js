import{j as r,r as x}from"./iframe-DA37PzgD.js";import{b as c,u as p,F as a,t as F}from"./Form-CNVzXB2H.js";import{R as l,S as f}from"./ResetButton-CD2o3ffQ.js";import{B as d}from"./Button-C_3hQ6qU.js";import{S as j}from"./Section-CLHfQYLM.js";import{A as b}from"./ActionGroup-zt1HPiGK.js";import{s as u}from"./Action-hYBLKXUj.js";import{C as t}from"./Checkbox-C5KyXcum.js";import{F as E}from"./FieldError-CnCGw98P.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cec-XZha.js";import"./flowComponent-DxL-Dn0k.js";import"./index-BgSlp0g3.js";import"./clsx-B-dksMZM.js";import"./index-CccRe4nm.js";import"./useLocalizedStringFormatter-C1YnvIwi.js";import"./context-KzPqYKh3.js";import"./browser-Tq-Ovndo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-DtYp6psM.js";import"./useRef-qcoJkYAs.js";import"./IconWarning-DMc9nDIB.js";import"./remote-BJWo5b31.js";import"./Text-CKy5VQ2_.js";import"./EmulatedBoldText-CMCwPeqW.js";import"./Text-VNYIIeBR.js";import"./LoadingSpinner-YNnYvyP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzF7Ww8-.js";import"./ProgressBar-Dk36AjFP.js";import"./Label-D_nNHFmP.js";import"./Hidden-CyblAlwf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrQo68aR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress--pFlH7xw.js";import"./useFocus-Ck97lmu1.js";import"./useFocusRing-GdKi_2te.js";import"./useFocusable-_BBBrAx0.js";import"./ContextMenuSection-DYM7NU_i.js";import"./Dialog-hpWxHudW.js";import"./RSPContexts-DnMMFVEJ.js";import"./OverlayArrow-BTxrL9C1.js";import"./useControlledState-izS5uoD6.js";import"./Collection-Br_xwhc2.js";import"./CollectionBuilder-DSPHiwuI.js";import"./SelectionIndicator-D-mCry-j.js";import"./Separator-uGGsp39Q.js";import"./SelectionManager-WiFwd4h7.js";import"./useEvent-D5fcY2Sa.js";import"./useCollator-BaT-QBRk.js";import"./FocusScope-CIeecyJ9.js";import"./VisuallyHidden-C_Tup-b1.js";import"./getActionGroupSlot-wxzu3uZW.js";import"./useStatic-ChmTLNpH.js";import"./context-Cc9V1wfK.js";import"./useFieldComponent-DTrWN6Rf.js";import"./FieldError-jhFQ-VHV.js";import"./Form-DXCSZa8G.js";import"./useFormValidation-2Nc27zh7.js";import"./useToggleState-Y0erzZpk.js";import"./useFormReset-ChjOdAw3.js";import"./AlertText-HBRlOgXf.js";import"./AlertIcon-BbDcA2fv.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),wr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
