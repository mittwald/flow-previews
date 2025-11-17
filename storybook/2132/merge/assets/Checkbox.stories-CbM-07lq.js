import{j as r,r as x}from"./iframe-DjMRZ933.js";import{c as p,u as c,F as a,t as F}from"./Form-DE6VWUf-.js";import{R as l,S as h}from"./ResetButton-CaELwfNw.js";import{B as d}from"./Button-DcZikGPu.js";import{S as j,s as u}from"./Section-Cfn_XoWh.js";import{A as b}from"./ActionGroup-7rrFpHFJ.js";import{t,g as E}from"./TimeField-B0eJEEhW.js";import"./index-nuYtCEEu.js";import"./dynamic-xmc70gpV.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./context-CMNm5Xu1.js";import"./browser-CRatz6fZ.js";import"./utils-ChD4yM7Z.js";import"./IconWarning-15BQJDPi.js";import"./Text-HqedTJ3_.js";import"./EmulatedBoldText-B3brdLrg.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Button-CVSjku2L.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./context-o3mGNPxn.js";import"./RSPContexts-xVWKxYWV.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./useStatic-CBLHZfUJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./Accordion-BZmsZnOt.js";import"./Alert-BcobEuUM.js";import"./AlertIcon-DmCm2LWR.js";import"./AlertBadge-CHwJpuCJ.js";import"./Align-BzDEdRIo.js";import"./Popover-C5QNOwBo.js";import"./OverlayTrigger-CrRJgUZu.js";import"./TableFooterRow-B6PT5pbR.js";import"./SkeletonText-CI93CBea.js";import"./Avatar-BB63liah.js";import"./AvatarStack-B8FhdVad.js";import"./Badge-BN0x96Ky.js";import"./BigNumber-BSqhFP9i.js";import"./Breadcrumb-nMuJg0z4.js";import"./Link-ejox3cBD.js";import"./Heading-BgHZ1ILD.js";import"./Legend-DF5rtCao.js";import"./FileCardList-TQMS-z_x.js";import"./Image-wUfga1_8.js";import"./Color-BWZ1Dr8p.js";import"./Content-Bcc-jBqm.js";import"./Label-DE4OEFg-.js";import"./ContextualHelpTrigger-CYoOPEVY.js";import"./CounterBadge-CAliY95s.js";import"./DonutChart-DDKsyr_O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrAWYJ7k.js";import"./Header-DCu3M0y9.js";import"./Initials-TwtEiJm8.js";import"./InlineCode-CKS5wrww.js";import"./PopoverTrigger-DbAiM7NS.js";import"./Separator-sHJV27kT.js";import"./Message-DoIB20zo.js";import"./MessageSeparator-l8_oHDYV.js";import"./NavigationGroup-DRmGCyXC.js";import"./Notification-DGagkD2g.js";import"./NotificationProvider-BQSRGQyP.js";import"./ProgressBar-BaViBzGB.js";import"./Rating-CYR_1TdL.js";import"./Skeleton-IgaQ_QZW.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Mr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Nr as __namedExportsOrder,Mr as default};
