import{j as r,r as g}from"./iframe-CXtvBV5-.js";import{b as s,u as a,F as p,t as F}from"./Form-BbT170GB.js";import{L as o}from"./Label-BsNkG_q3.js";import{R as d,S as c}from"./ResetButton-BM9UVWDk.js";import{B as u}from"./Button-B1zeu3c2.js";import{S,s as l}from"./Section-Cfn-btcH.js";import{A as b}from"./ActionGroup-76WE-uDm.js";import{as as m,g as j}from"./TimeField-BLflHk5O.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-d7RV2m3i.js";import"./PropsContextProvider-BygdkkPC.js";import"./mergeRefs-XVX53w-Z.js";import"./index-ChNj5jQF.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CRhy_wW7.js";import"./context-CAEu_mOG.js";import"./browser-Du_NX0QX.js";import"./utils-qd2QOFm2.js";import"./ProgressBar-BKXLtSPJ.js";import"./Hidden-CuDHI-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BhkQzOu2.js";import"./Text-CMr19a6m.js";import"./EmulatedBoldText-BlfminYz.js";import"./LoadingSpinner-8mK8rEyJ.js";import"./Button-Czyxm9kV.js";import"./useFocusRing-B4KbP9xH.js";import"./useFocusable-Bz2ht442.js";import"./context-BYM96aX5.js";import"./RSPContexts-CwFlS_g1.js";import"./Collection-Dzcp4a7b.js";import"./CollectionBuilder-D3qe7MnH.js";import"./SelectionIndicator-CtMNhqjQ.js";import"./Separator-B4Qn40UI.js";import"./useStatic-CaDi_bvV.js";import"./Accordion-0Pp4Qh68.js";import"./Alert-CqNDQYoG.js";import"./AlertIcon-CV1zk-Xj.js";import"./AlertBadge-uNDoePGd.js";import"./Align-BmR42nkq.js";import"./Popover-BDQF3mLq.js";import"./OverlayTrigger-EmUXyo3B.js";import"./TableFooterRow-BFXHFHbH.js";import"./SkeletonText-Bu_fUB4Q.js";import"./Avatar-B3QvG10-.js";import"./AvatarStack-Cap2B7L3.js";import"./Badge-CpmTQ8o9.js";import"./BigNumber-BjFcKf7O.js";import"./Breadcrumb-Dqt6p75N.js";import"./Link-4Q0a9Nwo.js";import"./Heading-BrBtBi-y.js";import"./Legend-DjwS0-g4.js";import"./FileCardList-DumOlmwR.js";import"./Image-CUtbNuBW.js";import"./Color-BKfHjzKa.js";import"./Content-7cfCqjj6.js";import"./ContextualHelpTrigger-BC8S8E_S.js";import"./CounterBadge-CtF233lE.js";import"./DonutChart-DXXMJftD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BL-nBC4B.js";import"./Header-D_XWctB_.js";import"./Initials-CFarEfIW.js";import"./InlineCode-BqXOUe9b.js";import"./PopoverTrigger-CRfGGebp.js";import"./Separator-DLNm_QtB.js";import"./Message-BiZAGwK8.js";import"./MessageSeparator-CYDLlDnj.js";import"./NavigationGroup-2W6CdmgF.js";import"./Notification-Bvs2MP1B.js";import"./NotificationProvider-DS7rbb_m.js";import"./ProgressBar-C6BmRW-m.js";import"./Rating-vrPWheMU.js";import"./Skeleton-C1XPs7Yz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
