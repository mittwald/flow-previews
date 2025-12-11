import{j as r,r as x}from"./iframe-DJotDYDy.js";import{b as p,u as c,F as a,t as F}from"./Form--OyMN0Zf.js";import{R as l,S as h}from"./ResetButton-BXzEWh8-.js";import{B as d}from"./Button-CQDQfA67.js";import{S as j,s as u}from"./Section-Bz15vzU3.js";import{A as b}from"./ActionGroup-C7fdOZLN.js";import{s as t,g as E}from"./TimeField-BlAfO89Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8klVav1.js";import"./PropsContextProvider-C8D7pSNe.js";import"./mergeRefs-TkKWhRS-.js";import"./index-ebT-aqWZ.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BEYdlta5.js";import"./context-BRylSH4L.js";import"./browser-D3MZEWQb.js";import"./utils-C6pspRr_.js";import"./IconWarning-B2TzUZi8.js";import"./remote-C1ZUFjaQ.js";import"./Text-D93KUIkM.js";import"./EmulatedBoldText-DL9TulOO.js";import"./LoadingSpinner-C00dVMXY.js";import"./Button-Dv79gn0L.js";import"./ProgressBar-Bd3Cq33t.js";import"./Hidden-W-9e78A-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-C6VIijHL.js";import"./useFocusable-CiM2gaeN.js";import"./context-OUVwQ3_j.js";import"./RSPContexts-CU0-oOpl.js";import"./Collection-BohX5TfD.js";import"./CollectionBuilder-BdsPzAgw.js";import"./SelectionIndicator-CS7AIL_l.js";import"./Separator-D2bXbcR5.js";import"./useStatic-Dv4cIFiB.js";import"./Accordion-zR5eFsCn.js";import"./Alert-DLOSTbSN.js";import"./AlertIcon-CudStmFb.js";import"./AlertBadge-hHuvqtIQ.js";import"./Align-Dk0iJg5X.js";import"./Popover-CTYLH_EU.js";import"./OverlayTrigger-Ba9XbFcO.js";import"./TableFooterRow-DVt43RQ5.js";import"./SkeletonText-Ca5w9B9h.js";import"./Avatar-CanBm8d9.js";import"./AvatarStack-CkGqbJia.js";import"./Badge-D6gkAHgL.js";import"./BigNumber-CoSdM1jp.js";import"./Breadcrumb-OJI6AK0i.js";import"./Link-Br48FmRg.js";import"./Heading-C_Kr3DP-.js";import"./Legend-BG_Ok682.js";import"./FileCardList-BHXDHcva.js";import"./Image-DuNd2GJV.js";import"./Color-DSNVJGOK.js";import"./Content-Cmsz75X5.js";import"./Label-DswoIiqU.js";import"./ContextualHelpTrigger-C6QZhAxg.js";import"./CounterBadge-DIAsQ6Mo.js";import"./DonutChart-CDa6nqpQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CShNVj2X.js";import"./Header-LVC8PwXi.js";import"./Initials-Dpb5-Mu6.js";import"./InlineCode-CS-pupFg.js";import"./PopoverTrigger-CTOjZswe.js";import"./Separator-DdvEDZlm.js";import"./Message-BphMRukK.js";import"./MessageSeparator-DL5Mtc4a.js";import"./NavigationGroup-GlfagvwS.js";import"./Notification-Bfz10Opj.js";import"./NotificationProvider-BEeuteXk.js";import"./ProgressBar-DEoqe-N6.js";import"./Rating-1LXSamgX.js";import"./Skeleton-DH-hjyZA.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,g=S("submit"),Mr={title:"Integrations/React Hook Form/Checkbox",component:p,render:()=>{const o=async f=>{await u(1500),g(f)},e=c({defaultValues:{acceptTerms:!1,acceptTermsDefaultValue:!0,acceptTermsRequired:!1}}),n=F();return r.jsx(a,{form:e,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(n,{name:"acceptTerms",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsDefaultValue",children:r.jsx(t,{children:"Accept terms"})}),r.jsx(n,{name:"acceptTermsRequired",rules:{required:!0},children:r.jsx(t,{children:"Accept terms"})}),r.jsxs(b,{children:[r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},i={},m={render:o=>{const e=c();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsxs(t,{isInvalid:!0,children:["Accept terms",r.jsx(E,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:o=>{const e=c();return r.jsxs(a,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...o,children:"Accept terms"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(l,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
