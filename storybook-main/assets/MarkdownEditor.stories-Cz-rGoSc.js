import{j as r,r as x}from"./iframe-D9rlzAqJ.js";import{c as m,u as a,F as d,t as E}from"./Form-DIGEXwNO.js";import{L as s}from"./Label-De2mPddt.js";import{R as u,S as c}from"./ResetButton-BJW7HNl2.js";import{B as l}from"./Button-DfeJaIav.js";import{S as j,s as p}from"./Section-DdtLQD5i.js";import{A as b}from"./ActionGroup-nl-J_ZaJ.js";import{t as n,F as g}from"./Modal-BynqOLm-.js";import"./index-nuYtCEEu.js";import"./dynamic-C5PGxhSs.js";import"./flowComponent-DpPOKAlU.js";import"./index-Cnuf1N7w.js";import"./clsx-B-dksMZM.js";import"./index-BRV6ez6J.js";import"./useLocalizedStringFormatter-sycgthOl.js";import"./context-SsG6f9B0.js";import"./browser-Dst4DIkE.js";import"./utils-7I1ZD9XH.js";import"./ProgressBar-D7ktSTLg.js";import"./Hidden-BT89mVsv.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DYHE_-m1.js";import"./Text-CDUW2Lw5.js";import"./EmulatedBoldText-UlD0huTW.js";import"./LoadingSpinner-CyD3G-ZV.js";import"./Button-Dk6vUitJ.js";import"./useFocusRing-Bm-SRwoH.js";import"./useFocusable-DWITSf8K.js";import"./context-BuH1yLqf.js";import"./RSPContexts-BuIr8cKO.js";import"./Collection-CHEizjOQ.js";import"./CollectionBuilder-CmYRnc-a.js";import"./SelectionIndicator-5tAJZLYr.js";import"./Separator-DXKCcY-q.js";import"./useStatic-gEenggmF.js";import"./getActionGroupSlot-DGGwKmzg.js";import"./FileCardList-sswsurGC.js";import"./Avatar-CVZJY-yw.js";import"./AlertIcon-D9lVAGtj.js";import"./Image-znh9VsXc.js";import"./Link-CiWldIOq.js";import"./ControlledNotification-DJsf1UrJ.js";import"./LayoutCard-C1B5QMHw.js";import"./Accordion-B9hs9Qn2.js";import"./Alert-DuJJ4rT_.js";import"./AlertBadge-BnXdFh9T.js";import"./Align-BypOuxnt.js";import"./AvatarStack-QD_yWmaq.js";import"./BigNumber-BlstSBAi.js";import"./Breadcrumb-0HuKzEPm.js";import"./Heading-BREdtYuh.js";import"./Legend-DCoV0FhZ.js";import"./Color-D6GZqEuQ.js";import"./TableFooterRow-L5PvmNuU.js";import"./SkeletonText-eP7sv0oh.js";import"./Content-CAVs97j9.js";import"./CounterBadge-B5IrCd5x.js";import"./DonutChart-BT3iuNO2.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BSBIprut.js";import"./Header-DM8xn8Xs.js";import"./Initials-CqcjGuhB.js";import"./InlineCode-C8MLWFOe.js";import"./Separator-BzNwvCBD.js";import"./MessageSeparator-BPR6MdX0.js";import"./NavigationGroup-DduFAEdE.js";import"./Notification-JhI0KVRU.js";import"./NotificationProvider-DWcmSa_I.js";import"./ProgressBar-CyT1sEwu.js";import"./Rating-DrSUgOZP.js";import"./Skeleton-CleqlSca.js";const{action:S}=__STORYBOOK_MODULE_ACTIONS__,M=S("submit"),Cr={title:"Integrations/React Hook Form/MarkdownEditor",component:m,render:()=>{const o=async F=>{await p(5e3),M(F)},f=a({defaultValues:{user:""}}),h=E();return r.jsx(d,{form:f,onSubmit:o,children:r.jsxs(j,{children:[r.jsx(h,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})]})})}},e={},t={render:()=>{const o=a({defaultValues:{field:""}});return x.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await p(2e3),children:[r.jsx(m,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(c,{children:"Submit"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <MarkdownEditor isInvalid>
          <Label>Message</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </MarkdownEditor>
      </Form>;
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <MarkdownEditor>
            <Label>Message</Label>
          </MarkdownEditor>
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
}`,...i.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{e as Default,t as WithFieldError,i as WithFocus,Gr as __namedExportsOrder,Cr as default};
