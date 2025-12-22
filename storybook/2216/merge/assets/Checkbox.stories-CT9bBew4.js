import{j as r,r as x}from"./iframe-CYPvHnuu.js";import{b as c,u as p,F as a,t as F}from"./Form-DgiaaHrn.js";import{R as l,S as f}from"./ResetButton-bf1bv1xz.js";import{B as d}from"./Button-DytH811E.js";import{S as j}from"./Section-CHd7gCnn.js";import{A as b}from"./ActionGroup-DqvIB4F8.js";import{s as u}from"./Action-Db_hw0Ue.js";import{C as t}from"./Checkbox-CWfn6qud.js";import{F as E}from"./FieldError-BvWeuB1p.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLG3Xjqu.js";import"./flowComponent-BiIhS_GG.js";import"./index-6AOj4Xku.js";import"./clsx-B-dksMZM.js";import"./index-CuYxJU0p.js";import"./useLocalizedStringFormatter-DwFCtkTc.js";import"./context-Dv0AyQUz.js";import"./browser-DHkGBw9W.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils---ZBHqUT.js";import"./useRef-BXFRsUMW.js";import"./IconWarning-CxTd4Ejc.js";import"./remote-jfB-IGaC.js";import"./Text-B7HPZf5X.js";import"./EmulatedBoldText-BplpewOf.js";import"./Text-CELcxyth.js";import"./LoadingSpinner-If-eK7wE.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BM3lF2Ud.js";import"./ProgressBar-Ds4kKwS2.js";import"./Label-5Y8iG3_m.js";import"./Hidden-C7UX8GNM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DsmrWctO.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BAll9lzw.js";import"./useFocus-Besr2u9O.js";import"./useFocusRing-CwF8Yxqy.js";import"./useFocusable-DNqkvuS2.js";import"./ContextMenuSection-Cvtue2Xc.js";import"./Dialog-DVySTr_M.js";import"./RSPContexts-B-l9PBN7.js";import"./OverlayArrow-c0UAwNBy.js";import"./useControlledState-CzL0wnxp.js";import"./Collection-CC7kOuB5.js";import"./CollectionBuilder-CcAo9kg0.js";import"./SelectionIndicator-CQjOYyqW.js";import"./Separator-B0yS3gpc.js";import"./SelectionManager-D6v8Hpa5.js";import"./useEvent-ZUbDwjtd.js";import"./useCollator-D2xCK0iS.js";import"./FocusScope-CPpTYY10.js";import"./VisuallyHidden-DQ4VZa68.js";import"./getActionGroupSlot-D8XZvD04.js";import"./useStatic-Clnm1k9a.js";import"./context-BIqaEuJx.js";import"./useFieldComponent-K4osF3of.js";import"./FieldError-DKbYNsKn.js";import"./Form-Bjo4WKP7.js";import"./useFormValidation-BOj1NNIZ.js";import"./useToggleState-CMepU1Ix.js";import"./useFormReset-DMfMEm_f.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),_r={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const o=async h=>{await u(1500),B(h)},e=p({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},m={render:o=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:o=>{const e=p();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
