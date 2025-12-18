import{j as r,r as x}from"./iframe-CXtvBV5-.js";import{b as p,u as c,F as a,t as F}from"./Form-BbT170GB.js";import{R as l,S as h}from"./ResetButton-BM9UVWDk.js";import{B as d}from"./Button-B1zeu3c2.js";import{S as j,s as u}from"./Section-Cfn-btcH.js";import{A as b}from"./ActionGroup-76WE-uDm.js";import{s as t,g as E}from"./TimeField-BLflHk5O.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d7RV2m3i.js";import"./PropsContextProvider-BygdkkPC.js";import"./mergeRefs-XVX53w-Z.js";import"./index-ChNj5jQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CRhy_wW7.js";import"./context-CAEu_mOG.js";import"./browser-Du_NX0QX.js";import"./utils-qd2QOFm2.js";import"./IconWarning-BhkQzOu2.js";import"./Text-CMr19a6m.js";import"./EmulatedBoldText-BlfminYz.js";import"./LoadingSpinner-8mK8rEyJ.js";import"./Button-Czyxm9kV.js";import"./ProgressBar-BKXLtSPJ.js";import"./Hidden-CuDHI-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B4KbP9xH.js";import"./useFocusable-Bz2ht442.js";import"./context-BYM96aX5.js";import"./RSPContexts-CwFlS_g1.js";import"./Collection-Dzcp4a7b.js";import"./CollectionBuilder-D3qe7MnH.js";import"./SelectionIndicator-CtMNhqjQ.js";import"./Separator-B4Qn40UI.js";import"./useStatic-CaDi_bvV.js";import"./Accordion-0Pp4Qh68.js";import"./Alert-CqNDQYoG.js";import"./AlertIcon-CV1zk-Xj.js";import"./AlertBadge-uNDoePGd.js";import"./Align-BmR42nkq.js";import"./Popover-BDQF3mLq.js";import"./OverlayTrigger-EmUXyo3B.js";import"./TableFooterRow-BFXHFHbH.js";import"./SkeletonText-Bu_fUB4Q.js";import"./Avatar-B3QvG10-.js";import"./AvatarStack-Cap2B7L3.js";import"./Badge-CpmTQ8o9.js";import"./BigNumber-BjFcKf7O.js";import"./Breadcrumb-Dqt6p75N.js";import"./Link-4Q0a9Nwo.js";import"./Heading-BrBtBi-y.js";import"./Legend-DjwS0-g4.js";import"./FileCardList-DumOlmwR.js";import"./Image-CUtbNuBW.js";import"./Color-BKfHjzKa.js";import"./Content-7cfCqjj6.js";import"./Label-BsNkG_q3.js";import"./ContextualHelpTrigger-BC8S8E_S.js";import"./CounterBadge-CtF233lE.js";import"./DonutChart-DXXMJftD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BL-nBC4B.js";import"./Header-D_XWctB_.js";import"./Initials-CFarEfIW.js";import"./InlineCode-BqXOUe9b.js";import"./PopoverTrigger-CRfGGebp.js";import"./Separator-DLNm_QtB.js";import"./Message-BiZAGwK8.js";import"./MessageSeparator-CYDLlDnj.js";import"./NavigationGroup-2W6CdmgF.js";import"./Notification-Bvs2MP1B.js";import"./NotificationProvider-DS7rbb_m.js";import"./ProgressBar-C6BmRW-m.js";import"./Rating-vrPWheMU.js";import"./Skeleton-C1XPs7Yz.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Mr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Mr as __namedExportsOrder,Lr as default};
