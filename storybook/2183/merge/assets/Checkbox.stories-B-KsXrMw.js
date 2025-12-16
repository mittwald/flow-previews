import{j as r,r as x}from"./iframe-B9O3ZODG.js";import{u as p,F as c}from"./Form-BITB_N9N.js";import{F as a,t as F}from"./Field-C1mLbov2.js";import{B as d}from"./Button-_bqaGPGi.js";import{S as j}from"./Section-D0wO1wxm.js";import{A as b}from"./ActionGroup-Cs7TEC0c.js";import{s as u}from"./Action-BQuW1ndX.js";import{C as o}from"./Checkbox-DMiqeI_l.js";import{F as E}from"./FieldError-Kcym6Pi9.js";import{R as l}from"./ResetButton-DICAuUJI.js";import{S as f}from"./SubmitButton-DarLBIcW.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-B4_YLigQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-18R3GcKE.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./clsx-B-dksMZM.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconX-Bnf6ky8_.js";import"./IconCheck-DJGWCBoR.js";import"./Text-BRHICk1_.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./utils-B6bG5pl_.js";import"./LoadingSpinner-PN97giik.js";import"./ariaLive-CzzNeS0z.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DakXwMZU.js";import"./ProgressBar-TB1EdJrk.js";import"./Label-CUW7vXaw.js";import"./Hidden-1Y6zqjHd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXmDULV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CefnHgfW.js";import"./useFocus-CgajmM1R.js";import"./useFocusRing-DApHxXgU.js";import"./useFocusable-x8wHKSzm.js";import"./ContextMenuSection-Hhq7J4bP.js";import"./lib-90ocxLs-.js";import"./Dialog-DJkxmbot.js";import"./RSPContexts-_UgIwAnW.js";import"./OverlayArrow-Bv80aGiZ.js";import"./useControlledState-C-iuwE9o.js";import"./Collection-DF4Xj_TY.js";import"./CollectionBuilder-CNg30nDc.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./Separator-BaiOIBBy.js";import"./SelectionManager-DYOtVSu9.js";import"./useEvent-BwQwG_n8.js";import"./useCollator-KSJVzoQQ.js";import"./FocusScope-kRkt8xnH.js";import"./VisuallyHidden-C9d_MZuH.js";import"./getActionGroupSlot-Cp-CJTrn.js";import"./useStatic-q7_HxIxT.js";import"./context-DoFxq3ih.js";import"./IconCheckboxEmpty-Ckzx3xhi.js";import"./useFieldComponent-CRvrWckq.js";import"./FieldError-BrC6eHcT.js";import"./Form-BpuzTWI4.js";import"./useFormValidation-Dlo1bwd1.js";import"./useToggleState-BoijUoy5.js";import"./useFormReset-Cc2EXXxK.js";import"./IconDanger-Aj7LdC1h.js";import"./useRef-jwi4kh1m.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Vr={title:"Integrations/React Hook Form/Checkbox",component:a,render:()=>{const t=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(c,{form:e,onSubmit:t,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:t=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Vr as default};
