import{j as r,r as g}from"./iframe-BfTJ8OoU.js";import{b as s,u as a,F as p,t as F}from"./Form-D5Qxyvhh.js";import{L as o}from"./Label-OsD2mDHN.js";import{R as d,S as c}from"./ResetButton-Btgq5MTA.js";import{B as u}from"./Button-CAnEum-p.js";import{S,s as l}from"./Section-ieM08Mfc.js";import{A as b}from"./ActionGroup-BXvzv2B4.js";import{aq as m,g as j}from"./TimeField-Dni6ZWL5.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLLy2Odl.js";import"./PropsContextProvider-pKtaUqJb.js";import"./mergeRefs-C4nh5J5i.js";import"./index-wBRAyXy5.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-BuC6mQ9L.js";import"./context-DfwvGs8v.js";import"./browser-_NOMM9Cq.js";import"./utils-CAkX6XFC.js";import"./ProgressBar-BquNzOVV.js";import"./Hidden-Chv29Vof.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CnDmU8KM.js";import"./Text-ChPpwgcs.js";import"./EmulatedBoldText-Do8p-rFi.js";import"./LoadingSpinner-CDSlajDH.js";import"./Button-v46gVvAB.js";import"./useFocusRing-D-g0YXE4.js";import"./useFocusable-DTCTS8eh.js";import"./context-DqfyIwOm.js";import"./RSPContexts-B_hP9IPu.js";import"./Collection-B-SpNygI.js";import"./CollectionBuilder-Cew6fxQL.js";import"./SelectionIndicator-BLntbEi9.js";import"./Separator-B1RL2fWY.js";import"./useStatic-DZbTJ5BB.js";import"./Accordion-EetxEBhv.js";import"./Alert-CFx8_uD8.js";import"./AlertIcon-Bk9PFIDr.js";import"./AlertBadge-zn-1W_0t.js";import"./Align-DLans5uB.js";import"./Popover-DxokbZnr.js";import"./OverlayTrigger-CvXwRqat.js";import"./TableFooterRow-BfBKGOJY.js";import"./SkeletonText-BAh3LYCP.js";import"./Avatar-DBLpjnAX.js";import"./AvatarStack-BHU-_pXB.js";import"./Badge-B1Bj-2mY.js";import"./BigNumber-BzAzuR-m.js";import"./Breadcrumb-DO48AN_q.js";import"./Link-fRrhQgjx.js";import"./Heading-C_Cd2XWG.js";import"./Legend-D59IIsbr.js";import"./FileCardList-Crd4-rJi.js";import"./Image-D7QRJIgn.js";import"./Color-BcE30bux.js";import"./Content-BbEJXFUy.js";import"./ContextualHelpTrigger-BBU6ZCx4.js";import"./CounterBadge-qpjoO2b-.js";import"./DonutChart-DSkqB0Nj.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D4r4pUSf.js";import"./Header-DgEQtgXz.js";import"./Initials-DNuviWyX.js";import"./InlineCode-OjIKEpaK.js";import"./PopoverTrigger-zZ3JKVIV.js";import"./Separator-B5S4ffvA.js";import"./Message-Bivfjnxf.js";import"./MessageSeparator-BWNjQn1R.js";import"./NavigationGroup-JMiAIgUz.js";import"./Notification-6ZwISdx7.js";import"./NotificationProvider-BNxs8g7x.js";import"./ProgressBar-BlJq2aYe.js";import"./Rating-BodFdmqC.js";import"./Skeleton--CLyUYrz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
