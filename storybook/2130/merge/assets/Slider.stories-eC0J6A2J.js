import{j as r,r as F}from"./iframe-D9rlzAqJ.js";import{c as s,u as a,F as l,t as g}from"./Form-DIGEXwNO.js";import{L as e}from"./Label-De2mPddt.js";import{R as d,S as c}from"./ResetButton-BJW7HNl2.js";import{B as u}from"./Button-DfeJaIav.js";import{S,s as p}from"./Section-DdtLQD5i.js";import{A as b}from"./ActionGroup-nl-J_ZaJ.js";import{au as m,F as j}from"./Modal-BynqOLm-.js";import"./index-nuYtCEEu.js";import"./dynamic-C5PGxhSs.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./clsx-B-dksMZM.js";import"./index-BRV6ez6J.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./context-SsG6f9B0.js";import"./browser-Dst4DIkE.js";import"./utils-7I1ZD9XH.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DYHE_-m1.js";import"./Text-CDUW2Lw5.js";import"./EmulatedBoldText-UlD0huTW.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./Button-Dk6vUitJ.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./context-BuH1yLqf.js";import"./RSPContexts-BuIr8cKO.js";import"./Collection-CHEizjOQ.js";import"./CollectionBuilder-CmYRnc-a.js";import"./SelectionIndicator-5tAJZLYr.js";import"./Separator-DXKCcY-q.js";import"./useStatic-gEenggmF.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./FileCardList-sswsurGC.js";import"./Avatar-CVZJY-yw.js";import"./AlertIcon-D9lVAGtj.js";import"./Image-znh9VsXc.js";import"./Link-CiWldIOq.js";import"./ControlledNotification-DJsf1UrJ.js";import"./LayoutCard-C1B5QMHw.js";import"./Accordion-B9hs9Qn2.js";import"./Alert-DuJJ4rT_.js";import"./AlertBadge-BnXdFh9T.js";import"./Align-BypOuxnt.js";import"./AvatarStack-QD_yWmaq.js";import"./BigNumber-BlstSBAi.js";import"./Breadcrumb-0HuKzEPm.js";import"./Heading-BREdtYuh.js";import"./Legend-DCoV0FhZ.js";import"./Color-D6GZqEuQ.js";import"./TableFooterRow-L5PvmNuU.js";import"./SkeletonText-eP7sv0oh.js";import"./Content-CAVs97j9.js";import"./CounterBadge-B5IrCd5x.js";import"./DonutChart-BT3iuNO2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BSBIprut.js";import"./Header-DM8xn8Xs.js";import"./Initials-CqcjGuhB.js";import"./InlineCode-C8MLWFOe.js";import"./Separator-BzNwvCBD.js";import"./MessageSeparator-BPR6MdX0.js";import"./NavigationGroup-DduFAEdE.js";import"./Notification-JhI0KVRU.js";import"./NotificationProvider-DWcmSa_I.js";import"./ProgressBar-CyT1sEwu.js";import"./Rating-DrSUgOZP.js";import"./Skeleton-CleqlSca.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,E=y("submit"),Gr={title:"Integrations/React Hook Form/Slider",component:s,render:()=>{const t=async x=>{await p(1500),E(x)},f=a({defaultValues:{storage:50}}),h=g();return r.jsx(l,{form:f,onSubmit:t,children:r.jsxs(S,{children:[r.jsx(h,{name:"storage",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},o={},i={render:()=>{const t=a();return F.useEffect(()=>{t.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsxs(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,isInvalid:!0,children:[r.jsx(e,{children:"Storage"}),r.jsx(e,{children:"Field"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const t=a();return r.jsxs(l,{form:t,onSubmit:async()=>await p(2e3),children:[r.jsx(s,{name:"field",children:r.jsx(m,{formatOptions:{style:"unit",unit:"gigabyte"},minValue:10,maxValue:100,children:r.jsx(e,{children:"Storage"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>t.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>t.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
