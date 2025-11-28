import{j as r,r as g}from"./iframe-DOEJXvGk.js";import{b as s,u as a,F as p,t as F}from"./Form-UjzAV8c2.js";import{L as o}from"./Label-CHbDmU_0.js";import{R as d,S as c}from"./ResetButton-BFU_0WFQ.js";import{B as u}from"./Button-BYGUtkd2.js";import{S,s as l}from"./Section-BqMXvD2Y.js";import{A as b}from"./ActionGroup-ZPTq9sUD.js";import{aq as m,g as j}from"./TimeField-DzkbFTLr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-yU3-i23D.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./context-fI8vs3af.js";import"./browser-DH30uIAM.js";import"./utils-DdqmmzJ9.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Ci_z427u.js";import"./Text-D2s12SBY.js";import"./EmulatedBoldText-8EHop2RJ.js";import"./LoadingSpinner-C3IBuXDG.js";import"./Button-DlVwZwD1.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./context-ClAoL54q.js";import"./RSPContexts-bWk5q8vU.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./useStatic-DU36eiHs.js";import"./Accordion-DrpzS9Tu.js";import"./Alert-Dz6Txycm.js";import"./AlertIcon-DeM3Y1y8.js";import"./AlertBadge-F2NWY7KX.js";import"./Align-Wr8YCtA6.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./TableFooterRow-BqdPD20e.js";import"./SkeletonText-DM-BrczZ.js";import"./Avatar-AfEQ8aJ7.js";import"./AvatarStack-PbGcOMzO.js";import"./Badge-CoMRyfRW.js";import"./BigNumber-BuS1c3m1.js";import"./Breadcrumb-CGjUpZnK.js";import"./Link-BnTqUE_d.js";import"./Heading-B55jlt0S.js";import"./Legend-BR0OJkN5.js";import"./FileCardList-BfoXr3eL.js";import"./Image-Bzob2sy0.js";import"./Color-C7W8ONo_.js";import"./Content-BvjUUUqh.js";import"./ContextualHelpTrigger-SA4yZZHq.js";import"./CounterBadge-Bq8ZiO3w.js";import"./DonutChart-D4hkpW0U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BGYJy9GV.js";import"./Header-DpcvefSw.js";import"./Initials-Bo59F16W.js";import"./InlineCode-D_4JxDia.js";import"./PopoverTrigger-BL7IIJoh.js";import"./Separator-BKXlt3AK.js";import"./Message-DDZrbHos.js";import"./MessageSeparator-BlAKvn2O.js";import"./NavigationGroup-b6mYgSHm.js";import"./Notification-Btu7hZt1.js";import"./NotificationProvider-QjMkPqGI.js";import"./ProgressBar-BZO70kmk.js";import"./Rating-CzHquKAT.js";import"./Skeleton-DpeTzzxW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
