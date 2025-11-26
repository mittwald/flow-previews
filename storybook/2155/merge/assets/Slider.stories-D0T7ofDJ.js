import{j as r,r as g}from"./iframe-D9CYFPXr.js";import{b as s,u as a,F as p,t as F}from"./Form-BNmwIDs0.js";import{L as o}from"./Label-CzxcXiJX.js";import{R as d,S as c}from"./ResetButton-DJ1KjM7J.js";import{B as u}from"./Button-CT-xyYfH.js";import{S,s as l}from"./Section-CA0EDsnV.js";import{A as b}from"./ActionGroup-Ccd39lHI.js";import{aq as m,g as j}from"./TimeField-BkJlZcm0.js";import"./index-nuYtCEEu.js";import"./dynamic-SXs7A3g7.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./context-Dx6KMOks.js";import"./browser-D2ZJCi1x.js";import"./utils-yR_DAamg.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-jXguM53C.js";import"./Text-DJSjVfmJ.js";import"./EmulatedBoldText-BO0x8ST2.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Button-DG6HuID3.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./context-COeqZE1E.js";import"./RSPContexts-CiawBZSO.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./useStatic-DvORlamL.js";import"./Accordion-BArRtOTS.js";import"./Alert-CyjiVY23.js";import"./AlertIcon-8Ocv2v3H.js";import"./AlertBadge-CRoJOsK9.js";import"./Align-CLrsPfYt.js";import"./Popover-BNCnXQAV.js";import"./OverlayTrigger-CUUjZI6u.js";import"./TableFooterRow-OQSmAD90.js";import"./SkeletonText-Dmouj86v.js";import"./Avatar-BkdvaG88.js";import"./AvatarStack-C3tebcLD.js";import"./Badge-C2tMlnMT.js";import"./BigNumber-ijILQR_w.js";import"./Breadcrumb-BxUPCHCP.js";import"./Link-Bm2iZsG_.js";import"./Heading-CavYhFH8.js";import"./Legend-DtDM-qUx.js";import"./FileCardList-D5Ru0u2M.js";import"./Image-DgZNHogz.js";import"./Color-ykv-EnxY.js";import"./Content-2XO0f1sV.js";import"./ContextualHelpTrigger-Cks81a1U.js";import"./CounterBadge-V16geG9B.js";import"./DonutChart-D89z5kPJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C5cgRyU-.js";import"./Header-qxJ8AaGd.js";import"./Initials-ft2Izcj0.js";import"./InlineCode-CDcWeZk1.js";import"./PopoverTrigger-CVb4_ztY.js";import"./Separator-BrIDoq1X.js";import"./Message-BoLQMEmF.js";import"./MessageSeparator-CgZcEmeT.js";import"./NavigationGroup-CXptzVeF.js";import"./Notification-Kh0NRtbz.js";import"./NotificationProvider-BfspMVKw.js";import"./ProgressBar-B-qkFYl5.js";import"./Rating-D8qxWgHK.js";import"./Skeleton-BBVDwrbz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Mr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await l(1500),E(x)},f=a({defaultValues:{storage:50}}),h=F();return r.jsx(p,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},i={render:()=>{const t=a();return g.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(o,{children:"Storage"}),r.jsx(o,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(p,{form:t,onSubmit:async()=>await l(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(o,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
