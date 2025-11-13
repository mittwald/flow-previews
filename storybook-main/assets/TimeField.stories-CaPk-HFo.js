import{j as r,r as f}from"./iframe-D9rlzAqJ.js";import{c as a,u as p,F as c,t as j}from"./Form-DIGEXwNO.js";import{L as t}from"./Label-De2mPddt.js";import{R as u,S as F}from"./ResetButton-BJW7HNl2.js";import{B as l}from"./Button-DfeJaIav.js";import{S as b,s as d}from"./Section-DdtLQD5i.js";import{A as E}from"./ActionGroup-nl-J_ZaJ.js";import{aw as S,av as o,F as T}from"./Modal-BynqOLm-.js";import"./index-nuYtCEEu.js";import"./dynamic-C5PGxhSs.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./clsx-B-dksMZM.js";import"./index-BRV6ez6J.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./context-SsG6f9B0.js";import"./browser-Dst4DIkE.js";import"./utils-7I1ZD9XH.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DYHE_-m1.js";import"./Text-CDUW2Lw5.js";import"./EmulatedBoldText-UlD0huTW.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./Button-Dk6vUitJ.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./context-BuH1yLqf.js";import"./RSPContexts-BuIr8cKO.js";import"./Collection-CHEizjOQ.js";import"./CollectionBuilder-CmYRnc-a.js";import"./SelectionIndicator-5tAJZLYr.js";import"./Separator-DXKCcY-q.js";import"./useStatic-gEenggmF.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./FileCardList-sswsurGC.js";import"./Avatar-CVZJY-yw.js";import"./AlertIcon-D9lVAGtj.js";import"./Image-znh9VsXc.js";import"./Link-CiWldIOq.js";import"./ControlledNotification-DJsf1UrJ.js";import"./LayoutCard-C1B5QMHw.js";import"./Accordion-B9hs9Qn2.js";import"./Alert-DuJJ4rT_.js";import"./AlertBadge-BnXdFh9T.js";import"./Align-BypOuxnt.js";import"./AvatarStack-QD_yWmaq.js";import"./BigNumber-BlstSBAi.js";import"./Breadcrumb-0HuKzEPm.js";import"./Heading-BREdtYuh.js";import"./Legend-DCoV0FhZ.js";import"./Color-D6GZqEuQ.js";import"./TableFooterRow-L5PvmNuU.js";import"./SkeletonText-eP7sv0oh.js";import"./Content-CAVs97j9.js";import"./CounterBadge-B5IrCd5x.js";import"./DonutChart-BT3iuNO2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BSBIprut.js";import"./Header-DM8xn8Xs.js";import"./Initials-CqcjGuhB.js";import"./InlineCode-C8MLWFOe.js";import"./Separator-BzNwvCBD.js";import"./MessageSeparator-BPR6MdX0.js";import"./NavigationGroup-DduFAEdE.js";import"./Notification-JhI0KVRU.js";import"./NotificationProvider-DWcmSa_I.js";import"./ProgressBar-CyT1sEwu.js";import"./Rating-DrSUgOZP.js";import"./Skeleton-CleqlSca.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Gr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async x=>{await d(1500),g(x)},h=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(c,{form:h,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return f.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(c,{form:e,onSubmit:async()=>await d(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Hr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Hr as __namedExportsOrder,Gr as default};
