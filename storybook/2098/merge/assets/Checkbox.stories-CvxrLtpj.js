import{j as r,r as f}from"./iframe-B8r8XrPb.js";import{a as c,u as a,F as u,t as h}from"./Form-DuDUSxCv.js";import{B as n}from"./Button-x8S8uZ_3.js";import{S as x}from"./Section-DbQ-wmnj.js";import{A as F}from"./ActionGroup-COWTQNIi.js";import{s as d}from"./Action-DHR-Mkls.js";import{C as o}from"./Checkbox-BBWgQpqY.js";import{F as j}from"./FieldError-Cr-OeICt.js";import"./index-nuYtCEEu.js";import"./dynamic-Bnt25vOJ.js";import"./flowComponent-CWjpVcP-.js";import"./index-CVBgNbzf.js";import"./clsx-B-dksMZM.js";import"./index-ChMccDi0.js";import"./useLocalizedStringFormatter-B1bOogGx.js";import"./context-d7knuPTA.js";import"./browser-5JWtNQpe.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-BnpSGPSL.js";import"./Text-CxxNxEUo.js";import"./EmulatedBoldText-DH8-rljC.js";import"./Text-DsIbOJYe.js";import"./utils-B2sHMxfy.js";import"./LoadingSpinner-bZO-WOXG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DOtSsu3o.js";import"./ProgressBar-9fERUQ0g.js";import"./Label-DhvUjtv7.js";import"./Hidden-C0uurl-T.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bn_yI2FK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BPC_OlSs.js";import"./useFocus-Co_XlsN_.js";import"./useFocusRing-DGaivw0f.js";import"./useFocusable-USAcjdfT.js";import"./ContextMenuSection-Cnztb-zU.js";import"./Dialog-DJ22CsqV.js";import"./RSPContexts-Do_0M-hc.js";import"./OverlayArrow-Cf4VI4sB.js";import"./useControlledState-Dhb_P5xS.js";import"./Collection-Dst8UlSd.js";import"./CollectionBuilder-C1D-HmCC.js";import"./SelectionIndicator-BHwOxkNR.js";import"./Separator-BqgRmmFG.js";import"./SelectionManager-kzjy3-H4.js";import"./useEvent-BY3XUUFC.js";import"./useCollator-CG3LD3jQ.js";import"./FocusScope-DHLNAyY7.js";import"./VisuallyHidden-DvNHrLSk.js";import"./getActionGroupSlot-BOj_bO4_.js";import"./useStatic-Qi3p0Ena.js";import"./context-tqHfsDuk.js";import"./useFieldComponent-DByhNd_z.js";import"./ClearPropsContext-BX2g1WFh.js";import"./useMakeFocusable-DmR7nfCv.js";import"./Form-C0W2Agsa.js";import"./useFormValidation-DuuScCCl.js";import"./useToggleState-C6yrgWHr.js";import"./useFormReset-Cpg0SQow.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,E=b("submit"),kr={title:"Integrations/React Hook Form/Checkbox",component:c,render:()=>{const t=async l=>{await d(1500),E(l)},e=a({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),p=h();return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(p,{name:"acceptTerms",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsDefaultValue",children:r.jsx(o,{children:"Accept terms"})}),r.jsx(p,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(o,{children:"Accept terms"})}),r.jsx(F,{children:r.jsx(n,{type:"submit",children:"Submit"})})]})})}},s={},m={render:t=>{const e=a();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsxs(o,{isInvalid:!0,children:["Accept terms",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const e=a();return r.jsxs(u,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(c,{name:"field",children:r.jsx(o,{...t,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(n,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(n,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(n,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithFocus"];export{s as Default,m as WithFieldError,i as WithFocus,Or as __namedExportsOrder,kr as default};
