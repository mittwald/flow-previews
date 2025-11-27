import{j as r,r as g}from"./iframe-7BcSOkL1.js";import{b as s,u as a,F as p,t as F}from"./Form-XneFK107.js";import{L as o}from"./Label-1f6WodcS.js";import{R as d,S as c}from"./ResetButton-Ho5zA5gP.js";import{B as u}from"./Button-BCb61ouP.js";import{S,s as l}from"./Section-BM04QQ4S.js";import{A as b}from"./ActionGroup-FxuoPE1e.js";import{aq as m,g as j}from"./TimeField-CijeBcVc.js";import"./index-nuYtCEEu.js";import"./dynamic-BRBd3S7h.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./context-BxMgKMFE.js";import"./browser-DkuKIMCf.js";import"./utils-CnXd-itf.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DFK7FPRm.js";import"./Text-sNy_JVUg.js";import"./EmulatedBoldText-KFps1Djg.js";import"./LoadingSpinner-CQRWUrve.js";import"./Button-BRvXO2c0.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./context-BY2qRpUu.js";import"./RSPContexts-VFAeT7fJ.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./useStatic-DpF8IrGJ.js";import"./Accordion-BgHobUJE.js";import"./Alert-BQNPh5ec.js";import"./AlertIcon-sj9HDcTQ.js";import"./AlertBadge-BLLOUyvy.js";import"./Align-aNcJd3ZC.js";import"./Popover-BpKg5fzM.js";import"./OverlayTrigger-CbmE6C3-.js";import"./TableFooterRow-C9n4XIk3.js";import"./SkeletonText-Dy0ubcCb.js";import"./Avatar-BAV3j3y8.js";import"./AvatarStack-C6ZLwmar.js";import"./Badge-CnwbPEBD.js";import"./BigNumber-BcqybdoX.js";import"./Breadcrumb-ffW0rgiH.js";import"./Link-BKHlTtzt.js";import"./Heading-B3rrQZdA.js";import"./Legend-C9JtvmWd.js";import"./FileCardList-SRvmN5kn.js";import"./Image-hgYl8lpC.js";import"./Color-DwtLdQ8R.js";import"./Content-7kAZ-hbm.js";import"./ContextualHelpTrigger-BM0OhULK.js";import"./CounterBadge-D-e_4-L-.js";import"./DonutChart-C7Yxj0ZB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEBLlaTe.js";import"./Header-C14rp7oJ.js";import"./Initials-DHljFpPT.js";import"./InlineCode-Cn06tSfu.js";import"./PopoverTrigger-CWou1-Xt.js";import"./Separator-BAEfiZhs.js";import"./Message-BYi7izf0.js";import"./MessageSeparator-l1p35Wzt.js";import"./NavigationGroup-C79N-DNU.js";import"./Notification-ClV3UBCJ.js";import"./NotificationProvider-CbODtqmP.js";import"./ProgressBar-BfuFFwrF.js";import"./Rating-BqxzbIze.js";import"./Skeleton-DuvA9UgZ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
        </Field>
        <Slider formatOptions={{
        style: "unit",
        unit: "gigabyte"
      }} minValue={10} maxValue={100} isInvalid>
          <Label>Storage</Label>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Slider>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Slider formatOptions={{
          style: "unit",
          unit: "gigabyte"
        }} minValue={10} maxValue={100}>
            <Label>Storage</Label>
          </Slider>
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
}`,...n.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,n as WithFocus,Nr as __namedExportsOrder,Mr as default};
