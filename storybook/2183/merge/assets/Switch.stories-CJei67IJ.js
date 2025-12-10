import{j as r,r as F}from"./iframe-6jyXgxue.js";import{b as n,u as p,F as a,t as S}from"./Form-CqT2k3Ls.js";import{R as u,S as l}from"./ResetButton-IThoXGd6.js";import{B as d}from"./Button-C79y5FLr.js";import{S as x,s as c}from"./Section-H3gIqLfl.js";import{A as E}from"./ActionGroup-CzskHu9f.js";import{S as s,g as j}from"./TimeField-BWhC3HpL.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DCXw5NHQ.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./context-JQMt_ZQS.js";import"./browser-BMGdvove.js";import"./utils-gjysgmBz.js";import"./IconWarning-C-gwxPU9.js";import"./remote-D3kJiMg-.js";import"./Text-Dlqenc2H.js";import"./EmulatedBoldText-BIdH-rcf.js";import"./LoadingSpinner-D7O-q36Z.js";import"./Button-DvSQe7YO.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./context-DHByHAd4.js";import"./RSPContexts-B8t3YJD-.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./useStatic-D2icMmWp.js";import"./Accordion-fULoH9xe.js";import"./Alert-DrBylAny.js";import"./AlertIcon-CE8OjIho.js";import"./AlertBadge-DgAWcThQ.js";import"./Align-BzUcMv_f.js";import"./Popover-D8d0zPXi.js";import"./OverlayTrigger-C4RVAI_V.js";import"./TableFooterRow-DpjTUBn1.js";import"./SkeletonText-6_21vf5Q.js";import"./Avatar-C1mA-DAE.js";import"./AvatarStack-BqyIa6ad.js";import"./Badge-WZr49ZKv.js";import"./BigNumber-C54ZRNi7.js";import"./Breadcrumb-Cwl4tYyc.js";import"./Link-D0jiVju_.js";import"./Heading-CJE26UUg.js";import"./Legend-WIvdEy4p.js";import"./FileCardList-B0iLEsKd.js";import"./Image-COP6xYUW.js";import"./Color-JgwV0I9-.js";import"./Content-BVhQmARn.js";import"./Label-ChCKJV3V.js";import"./ContextualHelpTrigger-CJ7SzJu0.js";import"./CounterBadge-D4Tjgl8K.js";import"./DonutChart-6sh_E6SJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CRpXUc1l.js";import"./Header-BSNdFr4b.js";import"./Initials-prUY4cPn.js";import"./InlineCode-Czh4dmVv.js";import"./PopoverTrigger-Dz8Taoga.js";import"./Separator-BU3gQHFS.js";import"./Message-f3EcTgP_.js";import"./MessageSeparator-D_xNlPF-.js";import"./NavigationGroup-C98vmueH.js";import"./Notification-DPFB18oq.js";import"./NotificationProvider-Ce0Lip3J.js";import"./ProgressBar-uMhxME4A.js";import"./Rating-DbrK3hf3.js";import"./Skeleton-Dm-B8LNv.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),Nr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),g(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <Switch {...props}>Field1</Switch>
        </Field>
        <Switch>
          Field2
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </Switch>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Switch {...props}>Field</Switch>
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
}`,...m.parameters?.docs?.source}}};const Ur=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Ur as __namedExportsOrder,Nr as default};
