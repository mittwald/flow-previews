import{j as r,r as h}from"./iframe-CPn2ZlG8.js";import{a as p,u as a,F as d,t as F}from"./Form-Bzt_tKay.js";import{L as s}from"./Label-Opx6KdMe.js";import{B as m}from"./Button-i2RXMGoH.js";import{S as x}from"./Section-K5CfbtJu.js";import{A as E}from"./ActionGroup-gwUYpalQ.js";import{s as l}from"./Action-Dgdncsxu.js";import{m as n,F as j}from"./Modal-BBOS47oM.js";import"./index-nuYtCEEu.js";import"./dynamic-CmzXv2ZH.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./clsx-B-dksMZM.js";import"./index-B0eWxAoc.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./context-BiAR75ic.js";import"./browser-Cl13ZrDl.js";import"./utils-DBul4rcK.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BTNOc1CF.js";import"./Text-6RCNpXVe.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./LoadingSpinner-mgkNzsmz.js";import"./Button-Di4iIPFk.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./Dialog-CXw6CUzT.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./useStatic-BnTfOIpp.js";import"./context-CgTN8SSG.js";import"./Popover-BXUF-6SC.js";import"./OverlayTrigger-20DAFHoE.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./LayoutCard-C_hSjeDr.js";import"./Accordion-B-bChxW6.js";import"./Alert-Ug9GHVUz.js";import"./AlertIcon-zTj1UJpO.js";import"./AlertBadge-BsQaA3x6.js";import"./Align-DE9bebnk.js";import"./TableFooterRow-B5LtY95q.js";import"./SkeletonText-oiPGeqDP.js";import"./Avatar-DDyQczM4.js";import"./AvatarStack-CWZ-VL73.js";import"./Badge-D9v8JAmm.js";import"./BigNumber-C4G7-3T-.js";import"./Breadcrumb-Bacspdd1.js";import"./Link-DVlBL-qV.js";import"./Heading-BzbKq0dK.js";import"./Legend-DDMMG7bH.js";import"./FileCardList-rzh9hTjl.js";import"./Image-C-mKiOK_.js";import"./CodeBlock-DfQLW9jR.js";import"./CopyButton-BPFZIEl4.js";import"./Tooltip-BEM5VXj8.js";import"./react-children-utilities-WPpO_PnD.js";import"./Color-BEtva2JY.js";import"./Content-35wcbQLb.js";import"./ContextualHelpTrigger-BF0zQddW.js";import"./CounterBadge-DQvxwwoY.js";import"./DonutChart-BrF9Zm5P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGRfp6b0.js";import"./Header-DnNd6Njs.js";import"./Initials-Bv6RP1-8.js";import"./InlineCode-CHc7o_jp.js";import"./LabeledValue-j0cEpKgE.js";import"./PopoverTrigger-CMl9e6LO.js";import"./Markdown-Coe6N29n.js";import"./Separator-CJJgusYM.js";import"./Message-Dqi0-r_q.js";import"./MessageSeparator-CroayyHM.js";import"./NavigationGroup-qSfETvJA.js";import"./Notification-r_T3n36Q.js";import"./NotificationProvider-u0HbSQig.js";import"./ProgressBar-BXbWnBwm.js";import"./Rating-DIBuOTMV.js";import"./Skeleton-1myRvyzI.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
