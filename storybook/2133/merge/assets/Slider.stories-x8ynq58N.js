import{j as r,r as F}from"./iframe-tJv_x5rY.js";import{c as s,u as a,F as l,t as g}from"./Form-jEx2y5xc.js";import{L as e}from"./Label-RjTzOsfv.js";import{R as d,S as c}from"./ResetButton-DjXvyyaO.js";import{B as u}from"./Button-BFrhyxcx.js";import{S,s as p}from"./Section-C3zFkOR2.js";import{A as b}from"./ActionGroup-ofmp5p0b.js";import{au as m,F as j}from"./Modal-C5nUCLYg.js";import"./index-nuYtCEEu.js";import"./dynamic-D0IhEVDX.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./clsx-B-dksMZM.js";import"./index-zslH_nwp.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./context-DzrJfCbv.js";import"./browser-TdwBVE6G.js";import"./utils-CzbxkoY8.js";import"./ProgressBar-DMZ3QrgP.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-3nJf9pka.js";import"./Text-Dguu0ahS.js";import"./EmulatedBoldText-BtPGtFYn.js";import"./LoadingSpinner-Bcrzivl8.js";import"./Button-DANMsRvu.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./context-B6V5mJe_.js";import"./RSPContexts-B20KOh4s.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./useStatic-ChHmkVJf.js";import"./getActionGroupSlot-Bx9-2150.js";import"./FileCardList-xvc84fPF.js";import"./Avatar-DCjhmqbI.js";import"./AlertIcon-BmIRgy9X.js";import"./Image-BsEx4Gyw.js";import"./Link-CNQmH85M.js";import"./ControlledNotification-Bf-cHYr4.js";import"./LayoutCard-FaDrJ9hh.js";import"./Accordion-BkjCzJbI.js";import"./Alert-BSKDhqn2.js";import"./AlertBadge-DwpbJvbe.js";import"./Align-CwffRYKZ.js";import"./AvatarStack-Dk_NcqSD.js";import"./BigNumber-CVotIBh9.js";import"./Breadcrumb-CqycGyzj.js";import"./Heading-DBV7hltH.js";import"./Legend-DwZKxd2C.js";import"./Color-DCrxZZxn.js";import"./TableFooterRow-CTXom9Ef.js";import"./SkeletonText-D85nAxtU.js";import"./Content-B6i-pyoJ.js";import"./CounterBadge-C7SQltDy.js";import"./DonutChart-BF3qOkbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5HLqNns.js";import"./Header-DsWh8L6x.js";import"./Initials-WnEx4zz5.js";import"./InlineCode-B62lvli0.js";import"./Separator-CYyKLl0S.js";import"./MessageSeparator-DELmev1y.js";import"./NavigationGroup-DtKUP1MG.js";import"./Notification-kUETDS4p.js";import"./NotificationProvider-Cl16zYR0.js";import"./ProgressBar-4Q8djMZo.js";import"./Rating-BBipw1Rp.js";import"./Skeleton-DtEBxlD8.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Gr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await p(1500),E(x)},f=a({defaultValues:{storage:50}}),h=g();return r.jsx(l,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},i={render:()=>{const t=a();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(l,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Hr as __namedExportsOrder,Gr as default};
