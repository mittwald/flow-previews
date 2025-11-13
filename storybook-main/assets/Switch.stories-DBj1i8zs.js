import{j as r,r as F}from"./iframe-D9rlzAqJ.js";import{c as n,u as p,F as a,t as S}from"./Form-DIGEXwNO.js";import{R as u,S as l}from"./ResetButton-BJW7HNl2.js";import{B as d}from"./Button-DfeJaIav.js";import{S as x,s as c}from"./Section-DdtLQD5i.js";import{A as E}from"./ActionGroup-nl-J_ZaJ.js";import{S as s,F as j}from"./Modal-BynqOLm-.js";import"./index-nuYtCEEu.js";import"./dynamic-C5PGxhSs.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./clsx-B-dksMZM.js";import"./index-BRV6ez6J.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./context-SsG6f9B0.js";import"./browser-Dst4DIkE.js";import"./utils-7I1ZD9XH.js";import"./IconWarning-DYHE_-m1.js";import"./Text-CDUW2Lw5.js";import"./EmulatedBoldText-UlD0huTW.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./Button-Dk6vUitJ.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./context-BuH1yLqf.js";import"./RSPContexts-BuIr8cKO.js";import"./Collection-CHEizjOQ.js";import"./CollectionBuilder-CmYRnc-a.js";import"./SelectionIndicator-5tAJZLYr.js";import"./Separator-DXKCcY-q.js";import"./useStatic-gEenggmF.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./FileCardList-sswsurGC.js";import"./Avatar-CVZJY-yw.js";import"./AlertIcon-D9lVAGtj.js";import"./Image-znh9VsXc.js";import"./Link-CiWldIOq.js";import"./ControlledNotification-DJsf1UrJ.js";import"./LayoutCard-C1B5QMHw.js";import"./Accordion-B9hs9Qn2.js";import"./Alert-DuJJ4rT_.js";import"./AlertBadge-BnXdFh9T.js";import"./Align-BypOuxnt.js";import"./AvatarStack-QD_yWmaq.js";import"./BigNumber-BlstSBAi.js";import"./Breadcrumb-0HuKzEPm.js";import"./Heading-BREdtYuh.js";import"./Legend-DCoV0FhZ.js";import"./Color-D6GZqEuQ.js";import"./TableFooterRow-L5PvmNuU.js";import"./SkeletonText-eP7sv0oh.js";import"./Content-CAVs97j9.js";import"./Label-De2mPddt.js";import"./CounterBadge-B5IrCd5x.js";import"./DonutChart-BT3iuNO2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BSBIprut.js";import"./Header-DM8xn8Xs.js";import"./Initials-CqcjGuhB.js";import"./InlineCode-C8MLWFOe.js";import"./Separator-BzNwvCBD.js";import"./MessageSeparator-BPR6MdX0.js";import"./NavigationGroup-DduFAEdE.js";import"./Notification-JhI0KVRU.js";import"./NotificationProvider-DWcmSa_I.js";import"./ProgressBar-CyT1sEwu.js";import"./Rating-DrSUgOZP.js";import"./Skeleton-CleqlSca.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,B=b("submit"),Hr={title:"Integrations/React Hook Form/Switch",component:n,render:()=>{const t=async h=>{await c(5e3),B(h)},o=p({defaultValues:{isEnabled:!1}}),f=S();return r.jsx(a,{form:o,onSubmit:t,children:r.jsxs(x,{children:[r.jsx(f,{name:"isEnabled",children:r.jsx(s,{children:"Text"})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})]})})}},e={},i={render:t=>{const o=p();return F.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field1"})}),r.jsxs(s,{children:["Field2",r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:t=>{const o=p();return r.jsxs(a,{form:o,onSubmit:async()=>await c(2e3),children:[r.jsx(n,{name:"field",children:r.jsx(s,{...t,children:"Field"})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(d,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(d,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(l,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Kr=["Default","WithFieldError","WithFocus"];export{e as Default,i as WithFieldError,m as WithFocus,Kr as __namedExportsOrder,Hr as default};
