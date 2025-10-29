import{j as r,r as h}from"./iframe-CUHqcL_I.js";import{a as p,u as a,F as d,t as F}from"./Form-5fo7woDu.js";import{L as s}from"./Label-CftDOVkr.js";import{B as m}from"./Button-DrygTKxs.js";import{S as x}from"./Section-BDyomcFR.js";import{A as E}from"./ActionGroup-C9uFf6fw.js";import{s as l}from"./Action-YrFh6m1g.js";import{m as n,F as j}from"./Modal-DGsJEXr2.js";import"./index-nuYtCEEu.js";import"./dynamic-B87jRkTU.js";import"./flowComponent-BjSKuQCX.js";import"./index-CrtpoxY-.js";import"./clsx-B-dksMZM.js";import"./index-CTAmePsE.js";import"./useLocalizedStringFormatter-CdK5FACb.js";import"./context-DsJ462Ut.js";import"./browser-Cw9CdHqj.js";import"./utils-yOUeLBa9.js";import"./ProgressBar-CSMSR9VB.js";import"./Hidden-DlQVfkRs.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-C3AAIkW7.js";import"./Text-9dBC56cL.js";import"./EmulatedBoldText-3j1WcMoY.js";import"./LoadingSpinner-tg8gDUA6.js";import"./Button-Gx1b59X2.js";import"./useFocusRing-DaG9LpkP.js";import"./useFocusable-BfYOI4CR.js";import"./Dialog-CfYxSPof.js";import"./RSPContexts-CQETDyCZ.js";import"./OverlayArrow-BTviaJ6o.js";import"./useControlledState-CnBvEePG.js";import"./Collection-BRy2AcbC.js";import"./CollectionBuilder-BO8DlF0S.js";import"./SelectionIndicator-Qn1nfVf2.js";import"./Separator-CNp-Wjum.js";import"./getActionGroupSlot-C3SbOV1Z.js";import"./useStatic-D0HQJKJl.js";import"./context-D0yqdMla.js";import"./Popover-BKsJ_j8S.js";import"./OverlayTrigger-CCqikpvI.js";import"./ControlledNotification-ZZQB_4VO.js";import"./ClearPropsContextView-BgTB1xWu.js";import"./Flex-DjLSetdt.js";import"./Accordion-C9Jz-Dzr.js";import"./Alert-9S7EMKOb.js";import"./AlertIcon-Dy-osvDK.js";import"./AlertBadge-CDFvuvv0.js";import"./Align-C7VgsRKs.js";import"./TableFooterRow-VkBwf7Va.js";import"./SkeletonText-IkFJ6vBW.js";import"./Avatar-D5u-XXQ1.js";import"./AvatarStack-BR0FYbi-.js";import"./Badge-DXaST8W3.js";import"./BigNumber-ClO_t8fY.js";import"./Breadcrumb-Csidruk6.js";import"./Link-DkZTrzTy.js";import"./Heading-Do04wJKe.js";import"./Legend-Dkcdf5r0.js";import"./FileCardList-JBRFEM2o.js";import"./Image-BR0uhpVC.js";import"./CodeBlock-CXk6J5cs.js";import"./CopyButton-BJJJXXgW.js";import"./Tooltip-Dn4txEtj.js";import"./react-children-utilities-CXfUQI5d.js";import"./Color-Bmr5ZLVK.js";import"./Content-TYeYRqFP.js";import"./ContextualHelpTrigger-D0Te7oiW.js";import"./CounterBadge-BoLspiWF.js";import"./DonutChart-CR6QCuTP.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Biga6ABh.js";import"./Header-P8gjYkyo.js";import"./Initials-BMJoTRLs.js";import"./InlineCode-CJA2KdA8.js";import"./LabeledValue-vl-aQtEh.js";import"./LayoutCard-oxl6IAgK.js";import"./PopoverTrigger-n1PupvaH.js";import"./Markdown-Ud-W-mq0.js";import"./Separator-BCH2Wd4c.js";import"./Message-CuV5JQlt.js";import"./MessageSeparator-DWxnRzMf.js";import"./NavigationGroup-CEG9s3ee.js";import"./Notification-B0eLpSBG.js";import"./NotificationProvider-CbpZr_DM.js";import"./ProgressBar-BtyjcTBa.js";import"./Rating-DqKMEG6_.js";import"./Skeleton-CVfEiyn2.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),to={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const eo=["Default","WithFieldError","WithFocus"];export{t as Default,e as WithFieldError,i as WithFocus,eo as __namedExportsOrder,to as default};
