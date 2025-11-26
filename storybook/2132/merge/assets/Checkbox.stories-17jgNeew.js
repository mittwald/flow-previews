import{j as r,r as x}from"./iframe-DTBy15H7.js";import{b as p,u as c,F as a,t as F}from"./Form-DK8ugccL.js";import{R as l,S as h}from"./ResetButton--ELhH4TP.js";import{B as d}from"./Button-QHOz67K3.js";import{S as j,s as u}from"./Section-CTt0hPdU.js";import{A as b}from"./ActionGroup-BXdOYEdg.js";import{s as t,g as E}from"./TimeField-C25JplCF.js";import"./index-nuYtCEEu.js";import"./dynamic-CCPexUYC.js";import"./PropsContextProvider-Fi7tnu-J.js";import"./mergeRefs-CWVC3DZq.js";import"./index-C9i3V5R3.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-C6mCvBeu.js";import"./context-DDV21Rg9.js";import"./browser-MW83o6M0.js";import"./utils-Dl3W8pzT.js";import"./IconWarning-Djz7NATM.js";import"./Text-Bj8vPlc0.js";import"./EmulatedBoldText-Dvqrfp28.js";import"./LoadingSpinner-CRyT1UDC.js";import"./Button-BYfJcV7w.js";import"./ProgressBar-BPzzwKl5.js";import"./Hidden-CGEKkcWL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DZNjyW13.js";import"./useFocusable-C5o0miI6.js";import"./context-DioYia5p.js";import"./RSPContexts-DH-gZpq1.js";import"./Collection-D1XcVqi_.js";import"./CollectionBuilder-C71l8wdj.js";import"./SelectionIndicator-CxONpiWv.js";import"./Separator-CSQG4MPx.js";import"./useStatic-eHzIFJyj.js";import"./Accordion-DnPtHmZG.js";import"./Alert-QdSgDx1T.js";import"./AlertIcon-B0N13FEc.js";import"./AlertBadge-8jy2QUL6.js";import"./Align-DQZB8NzV.js";import"./Popover-7hNwjNSl.js";import"./OverlayTrigger-ZFUPrMkD.js";import"./TableFooterRow-CtpRNrqi.js";import"./SkeletonText-DpsupKVa.js";import"./Avatar-BILpTm5T.js";import"./AvatarStack-CUiO0Zcy.js";import"./Badge-CT04WDK1.js";import"./BigNumber-BCtBSLB-.js";import"./Breadcrumb-B6l_HQxY.js";import"./Link-CxbSfmHB.js";import"./Heading-Ca-tELgf.js";import"./Legend-Bpj9sjZW.js";import"./FileCardList-39D8aOFP.js";import"./Image-MOe90XqG.js";import"./Color-ClQVjgLv.js";import"./Content-Dlpa9xN1.js";import"./Label-DjwrD9Fk.js";import"./ContextualHelpTrigger-BRKcFrI9.js";import"./CounterBadge-12ncM8Mc.js";import"./DonutChart-CLp4EYV9.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-7vWoxhWM.js";import"./Header-DBPOtdGg.js";import"./Initials-aSFKpGEw.js";import"./InlineCode-_CBCXquU.js";import"./PopoverTrigger-BD_9xpzq.js";import"./Separator-B_RuElQr.js";import"./Message-C0AuzCP0.js";import"./MessageSeparator-Bf9oDxzN.js";import"./NavigationGroup-BiQENMNY.js";import"./Notification-wHOEjy82.js";import"./NotificationProvider-B2b2Yliw.js";import"./ProgressBar-DqwDkFTJ.js";import"./Rating-Bb3yeVUh.js";import"./Skeleton-C9fzI41z.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Lr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
