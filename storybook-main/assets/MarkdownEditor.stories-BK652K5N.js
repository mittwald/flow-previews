import{j as r,r as h}from"./iframe-Bx5EipPE.js";import{a as p,u as a,F as d,t as F}from"./Form-BnshVL_Q.js";import{L as s}from"./Label-BvwZD5Eb.js";import{B as m}from"./Button-CFmBk-Ho.js";import{S as x}from"./Section-DvWWmWm_.js";import{A as E}from"./ActionGroup-No0FdeaF.js";import{s as l}from"./Action-D66DYP5N.js";import{m as n,F as j}from"./Modal-DjbUmKIN.js";import"./index-nuYtCEEu.js";import"./dynamic-DMwV73o9.js";import"./flowComponent-DV1r5tPv.js";import"./index-13Ss2Q1C.js";import"./clsx-B-dksMZM.js";import"./index-B2U9nMUa.js";import"./useLocalizedStringFormatter-2_Ttu7_B.js";import"./context-CiBo84na.js";import"./browser-YP_S1MMX.js";import"./utils-CqLTISaK.js";import"./ProgressBar-CLZ_h9h8.js";import"./Hidden-DlcLHRCE.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-sXt69lXW.js";import"./Text-cL2QlUTP.js";import"./EmulatedBoldText-DBVghW6y.js";import"./LoadingSpinner-BBcen_x5.js";import"./Button-CMS0XqzI.js";import"./useFocusRing-B-aBTfr6.js";import"./useFocusable-C9Y_kWrv.js";import"./Dialog-iL1jHTNr.js";import"./RSPContexts-ByW7h33h.js";import"./OverlayArrow-DDi9NGvK.js";import"./useControlledState-DARDYAMl.js";import"./Collection-BHn5eDKP.js";import"./CollectionBuilder-cxVcyhpe.js";import"./SelectionIndicator-MBSA8IqZ.js";import"./Separator-CJ9-vZHB.js";import"./getActionGroupSlot-B1Q5BOiy.js";import"./useStatic-BSnv9Wf7.js";import"./context-mT0U7naa.js";import"./Popover-iFb4HmrW.js";import"./OverlayTrigger-CtLRnD7V.js";import"./ControlledNotification-BIugGNxy.js";import"./ClearPropsContextView-Cv4XWBgA.js";import"./LayoutCard-sMcferaL.js";import"./Accordion-DmTD0R0Y.js";import"./Alert-DWOWH2LA.js";import"./AlertIcon-DV0ec5yj.js";import"./AlertBadge-BwMmDr9n.js";import"./Align-BTFCqDEW.js";import"./TableFooterRow-DVDcT3e4.js";import"./SkeletonText-CvOIMsNd.js";import"./Avatar-BbydMM9a.js";import"./AvatarStack-sAUaD8vE.js";import"./Badge-BTvmzEPQ.js";import"./BigNumber-CC1pbU8C.js";import"./Breadcrumb-DgZgPTJv.js";import"./Link-C2LG0YAc.js";import"./Heading-DhAPxMie.js";import"./Legend-D_PiYtz_.js";import"./FileCardList-BIFG4rII.js";import"./Image-Gea1ZpcM.js";import"./CodeBlock-D1_fjXpw.js";import"./CopyButton-B3VIC-Kt.js";import"./Tooltip-CNvRcV1e.js";import"./react-children-utilities-DjBlfejv.js";import"./Color-BAClko0e.js";import"./Content-BPEEMkM8.js";import"./ContextualHelpTrigger-C9p_kpwL.js";import"./CounterBadge-PTDzzWJN.js";import"./DonutChart-DYYf8Fww.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DHZoePPN.js";import"./Header-Bex9_Xed.js";import"./Initials-qgg-p_0J.js";import"./InlineCode-CAAK-Hr2.js";import"./LabeledValue-Csrm71fe.js";import"./PopoverTrigger-rUkUK7-J.js";import"./Markdown-71TJHhxg.js";import"./Separator-CnG4MZcN.js";import"./Message-Bokpl9Ee.js";import"./MessageSeparator-CKVniD8U.js";import"./NavigationGroup-BvitlAKA.js";import"./Notification-CGSW0KyE.js";import"./NotificationProvider-jZGeYcdw.js";import"./ProgressBar-DdWEGT_H.js";import"./Rating-IN0owOnk.js";import"./Skeleton-CqqMkjPZ.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};const to=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,to as __namedExportsOrder,oo as default};
