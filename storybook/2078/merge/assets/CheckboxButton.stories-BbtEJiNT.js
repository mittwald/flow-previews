import{j as r,r as C}from"./iframe-D1IXLGfs.js";import{b as d,u as a,F as c,t as j}from"./Form-Bff3UVAM.js";import{R as h,S as x}from"./ResetButton-DuVxIEvp.js";import{B as l}from"./Button-C4C6Tlp0.js";import{S as b,s as u}from"./Section-C53WOw1M.js";import{A as B}from"./ActionGroup-Dy6atzM_.js";import{T as s}from"./Text-D1LKMi-w.js";import{t as m,g as E}from"./TimeField-AGTx6k1i.js";import{C as p}from"./Content-BzpcLFjt.js";import"./index-nuYtCEEu.js";import"./dynamic-pDnrtSWy.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./context-Co7rtKcb.js";import"./browser-tVHcyQIt.js";import"./utils-B-QWEDo7.js";import"./IconWarning-BxNDhWjd.js";import"./LoadingSpinner-7FjPacVo.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./context-5e9UnPLe.js";import"./RSPContexts-BgSWsIZW.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./useStatic-CpvtqM-K.js";import"./EmulatedBoldText-DH1aO4MF.js";import"./Accordion-BzVkjqgY.js";import"./Alert-QHsz_O3h.js";import"./AlertIcon-D96GlUxX.js";import"./AlertBadge-BYlu6Hm_.js";import"./Align-B09u4AJz.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./TableFooterRow-JV1dlzn6.js";import"./SkeletonText-BvUdv64z.js";import"./Avatar-Dgoo8XLu.js";import"./AvatarStack-DtbcXK87.js";import"./Badge-C-697TDl.js";import"./BigNumber-D0ECKC0O.js";import"./Breadcrumb-BUr6ABI5.js";import"./Link-CxLhPbdv.js";import"./Heading-oQ8JRrCO.js";import"./Legend-CqX9YVYz.js";import"./FileCardList-B1MHdddU.js";import"./Image-BtTPpMHP.js";import"./Color-BS8KIqfb.js";import"./Label-DqDuDjZM.js";import"./ContextualHelpTrigger-DAOvEHNM.js";import"./CounterBadge-BX6TKafN.js";import"./DonutChart-JW7SWDsk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DShuYc2u.js";import"./Header-Dbn0HhfV.js";import"./Initials-D9ELne8C.js";import"./InlineCode-CUmJ0bpc.js";import"./PopoverTrigger-DVp_5BpC.js";import"./Separator-QPbWx2p8.js";import"./Message-BpdzFhxT.js";import"./MessageSeparator-BOJp8Opk.js";import"./NavigationGroup-CpG2utD2.js";import"./Notification-civqnTG1.js";import"./NotificationProvider-CNqrmsHu.js";import"./ProgressBar-JXuTyxt5.js";import"./Skeleton-Fe8-xAPK.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,T=S("submit"),Nr={title:"Integrations/React Hook Form/CheckboxButton",component:d,render:()=>{const t=async F=>{await u(1500),T(F)},o=a({defaultValues:{acceptTerms:!1}}),f=j();return r.jsx(c,{form:o,onSubmit:t,children:r.jsxs(b,{children:[r.jsx(f,{name:"acceptTerms",children:r.jsxs(m,{children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(B,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},e={},n={render:t=>{const o=a();return C.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"}),r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:t=>{const o=a();return r.jsxs(c,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(s,{children:"Terms and Conditions"}),r.jsx(p,{children:"Consent to terms and conditions"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,n as WithFieldError,i as WithFocus,Ur as __namedExportsOrder,Nr as default};
