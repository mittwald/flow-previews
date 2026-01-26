import{j as r,r as x}from"./iframe-BZLAsPNC.js";import{a as c,u as p,F as a,t as F,R as l,S as f}from"./ResetButton-Buihhz8x.js";import{B as d}from"./Button-CSRJ_rM3.js";import{S as j}from"./Section-CMyrzkHY.js";import{A as b}from"./ActionGroup-Co14a4VD.js";import{s as u}from"./Action-mWe4s719.js";import{C as t}from"./Checkbox-Cs2MfJ8L.js";import{F as E}from"./FieldError-D2O_dT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DRBl70hS.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./clsx-B-dksMZM.js";import"./index-CYjhUmDO.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./context-B1QKiSyt.js";import"./useRef-CZJNdnDd.js";import"./utils-GBJhPEt0.js";import"./ButtonView-DfyaGCHA.js";import"./browser-D75BLayN.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./Text-oqqebshB.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YUsFH9mL.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C3AJe8l0.js";import"./useFocus-BAbXgSuO.js";import"./useFocusRing-DUiko_nB.js";import"./useFocusable-CJlLttAU.js";import"./ContextMenuSection-B5_hjl5E.js";import"./Dialog-BHTl5ZpY.js";import"./RSPContexts-DRyX1L5k.js";import"./OverlayArrow-D53qTIEL.js";import"./useControlledState-BdOl-nfx.js";import"./Collection-oaJ1OlFu.js";import"./CollectionBuilder-DNc7feWH.js";import"./SelectionIndicator--Gts2DGf.js";import"./Separator-kzi7KXEN.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./useStatic-CJRmLxnl.js";import"./context-Wd_RxxmY.js";import"./useFieldComponent-C5gewvzz.js";import"./FieldError-B9G53mk8.js";import"./Form-CDvikIHs.js";import"./useFormValidation-BLPWS9Vb.js";import"./useToggleState-D_Xkru6C.js";import"./useFormReset-B4usOE4z.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),qr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
