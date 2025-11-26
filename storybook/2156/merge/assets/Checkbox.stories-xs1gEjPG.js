import{j as r,r as x}from"./iframe-g-XFBo2M.js";import{b as p,u as c,F as a,t as F}from"./Form-C-rqEFEY.js";import{R as l,S as h}from"./ResetButton-cLqq5vgS.js";import{B as d}from"./Button-CgOKxPbj.js";import{S as j,s as u}from"./Section-BXzmDK8J.js";import{A as b}from"./ActionGroup-1WZPcRd7.js";import{v as t,F as E}from"./Modal-HN7mUc_p.js";import"./index-nuYtCEEu.js";import"./dynamic-y0BvrcCC.js";import"./flowComponent-BTFCKpJC.js";import"./index-Di8R43pA.js";import"./clsx-B-dksMZM.js";import"./index-D0vwgSdS.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./context-BmipQpJh.js";import"./browser-aGtpEYpD.js";import"./utils-BLpr0TUC.js";import"./IconWarning-IhhFy3Bx.js";import"./Text-vL1LV049.js";import"./EmulatedBoldText-weZy4b5C.js";import"./LoadingSpinner-hwBIUj3t.js";import"./Button-F2DpSCEE.js";import"./ProgressBar-DLmwbc5V.js";import"./Hidden-CbPhQWFj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./context-MFH_cEi3.js";import"./RSPContexts-FyZiT-dA.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./SelectionIndicator-CoVhmIZH.js";import"./Separator-tfjl_R7-.js";import"./useStatic-BQUJQZNk.js";import"./FileCardList-DoQkIDuX.js";import"./Avatar-X3dATXB7.js";import"./AlertIcon-DJoeY47w.js";import"./Image-MSIXUbcy.js";import"./Link-CRZIDf5q.js";import"./ControlledNotification-COssbRo0.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./Alert-BdQYV_b8.js";import"./AlertBadge-K2HkqN1E.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./Heading-D8TOp1jB.js";import"./Legend-OCWjJfVR.js";import"./Color-BlRFVK3w.js";import"./TableFooterRow-lK-uAiGD.js";import"./SkeletonText-CtpLmtNt.js";import"./Content-BwCOhlmF.js";import"./Label-C0aRk6NU.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Header-C5E3rf3q.js";import"./Initials-B759V3Ss.js";import"./InlineCode-bJV2810L.js";import"./LayoutCard-DBrjjt1J.js";import"./Separator-KtU-Fy3c.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Skeleton-MXCSZONm.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,B=S("submit"),Gr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),B(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},i={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{s as Default,i as WithFieldError,m as WithFocus,Hr as __namedExportsOrder,Gr as default};
