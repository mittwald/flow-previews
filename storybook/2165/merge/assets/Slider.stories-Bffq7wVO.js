import{j as r,r as g}from"./iframe-Bl94pFC8.js";import{b as s,u as a,F as p,t as F}from"./Form-Bhzywxgr.js";import{L as o}from"./Label-DSusOXDR.js";import{R as d,S as c}from"./ResetButton-Cm6oOnRk.js";import{B as u}from"./Button-AfVTn90Y.js";import{S,s as l}from"./Section-LN95lzay.js";import{A as b}from"./ActionGroup-CYfLKjjP.js";import{aq as m,g as j}from"./TimeField-Dr4KQ3tF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CIZa5yke.js";import"./PropsContextProvider-BQui21V8.js";import"./mergeRefs-BiBjcigA.js";import"./index-DsFLFuyK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-Cy6aSMx0.js";import"./context-DhigdGAb.js";import"./browser-BA3Ei853.js";import"./utils-zKD0YG1w.js";import"./ProgressBar-C-lIvLR2.js";import"./Hidden-BS8eNNR-.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-SCcj4Iql.js";import"./Text-DCRPGY0z.js";import"./EmulatedBoldText-CCSVbhNW.js";import"./LoadingSpinner-CJ6B7oAG.js";import"./Button-Bw0lcVwr.js";import"./useFocusRing-_izhPlj5.js";import"./useFocusable-BC3ywUsf.js";import"./context-BpghOljr.js";import"./RSPContexts-CHIkVN0y.js";import"./Collection-Bsn8m2mI.js";import"./CollectionBuilder-D14md_BA.js";import"./SelectionIndicator-Bx-x-xLH.js";import"./Separator-R67wGb_t.js";import"./useStatic-gdaW8QxK.js";import"./Accordion-CCFKHcUe.js";import"./Alert-DXgIB8vT.js";import"./AlertIcon-KdhHTMr9.js";import"./AlertBadge-Bsnm1FW5.js";import"./Align-vdE1Hw63.js";import"./Popover-Vgu8QpdP.js";import"./OverlayTrigger-CoDb3nvg.js";import"./TableFooterRow-yXwprf4A.js";import"./SkeletonText-BxAwRS8K.js";import"./Avatar-CBi98t6a.js";import"./AvatarStack-BCyimaIH.js";import"./Badge-CWRZ3wRS.js";import"./BigNumber-BOmO8_9H.js";import"./Breadcrumb-qLsGxUTH.js";import"./Link-CxjACdrd.js";import"./Heading-gu5HE-XK.js";import"./Legend-Bk5heO9K.js";import"./FileCardList-BKpHqFCP.js";import"./Image-zwt55Zy5.js";import"./Color-BEk31k5R.js";import"./Content-CFmPNCl8.js";import"./ContextualHelpTrigger-CUwhkzFI.js";import"./CounterBadge-Dy2ngnrh.js";import"./DonutChart-DyH97w7v.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Doe0mmHM.js";import"./Header-DENQ7Dxk.js";import"./Initials-TwvVZF9j.js";import"./InlineCode-CTUORIgt.js";import"./PopoverTrigger-om_tcJyU.js";import"./Separator-F44i8CmN.js";import"./Message-CzqxdJ5a.js";import"./MessageSeparator-DcMZZRKU.js";import"./NavigationGroup-CUhbVSuu.js";import"./Notification-bDPr6UcS.js";import"./NotificationProvider-BFKLdZBe.js";import"./ProgressBar-BdgJs4zS.js";import"./Rating-DCow-Fra.js";import"./Skeleton-BOcdA3Th.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
