import{j as r,r as g}from"./iframe-DZYTde4e.js";import{b as s,u as a,F as p,t as F}from"./Form-DAXzYjaL.js";import{L as o}from"./Label-DZlptx1G.js";import{R as d,S as c}from"./ResetButton-CmisILQg.js";import{B as u}from"./Button-CI_UMDNZ.js";import{S,s as l}from"./Section-BS2Y3V6J.js";import{A as b}from"./ActionGroup-Ckwbfgsv.js";import{as as m,g as j}from"./TimeField-D-kTf3v3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cr3CK9yB.js";import"./PropsContextProvider-CgtZzzdB.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./context-Du59aHbH.js";import"./browser-D1RFTwuv.js";import"./utils-Z6vXhZ96.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DXCUbPmL.js";import"./Text-BDClvQAl.js";import"./EmulatedBoldText-S-B02nx0.js";import"./LoadingSpinner-qhZotF0H.js";import"./Button-CC2_Lwz2.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./context-CBzv9cN1.js";import"./RSPContexts-BlMA0jp2.js";import"./Collection-BPkXYQex.js";import"./CollectionBuilder-D0jI_Gb0.js";import"./SelectionIndicator-BtmzIdOy.js";import"./Separator-B8KzwdIi.js";import"./useStatic-Cc8Tg3eq.js";import"./Accordion-DiPyOI-t.js";import"./Alert-o31AdO5J.js";import"./AlertIcon-DI40NDQv.js";import"./AlertBadge-B-5ctEFQ.js";import"./Align-Bd9WPaYv.js";import"./Popover-DM3qcDl0.js";import"./OverlayTrigger-m1G0j68U.js";import"./TableFooterRow-DLS1mk-5.js";import"./SkeletonText-BUQiET49.js";import"./Avatar-Dmmmqcaw.js";import"./AvatarStack-BhWncLCg.js";import"./Badge-X0UYy-cl.js";import"./BigNumber-8rUzV783.js";import"./Breadcrumb-ySYD737Q.js";import"./Link-DC_xwsX0.js";import"./Heading-CAPeE680.js";import"./Legend-7UlaW6sh.js";import"./FileCardList-CawIlP9w.js";import"./Image-EqBeX_Jm.js";import"./Color-BBOLURjV.js";import"./Content-eCyDCyWy.js";import"./ContextualHelpTrigger-ql3WkHfV.js";import"./CounterBadge-CzzRj_yg.js";import"./DonutChart-D3LmI0Kl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-O-W3HO2z.js";import"./Header-DCViW_g1.js";import"./Initials-t14XTLYH.js";import"./InlineCode-Ji-F6tIS.js";import"./PopoverTrigger--kk_uIkh.js";import"./Separator-DBcIVj4L.js";import"./Message-Bphq-Ucd.js";import"./MessageSeparator-BFaxocAk.js";import"./NavigationGroup-CwR3lyRV.js";import"./Notification-Boctb1zI.js";import"./NotificationProvider-DZIN2fGZ.js";import"./ProgressBar-DQG5KsVg.js";import"./Rating-BX6XEAkD.js";import"./Skeleton-BXF3hqOE.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
