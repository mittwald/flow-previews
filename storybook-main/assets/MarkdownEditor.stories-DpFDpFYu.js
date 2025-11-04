import{j as r,r as h}from"./iframe-oci4ptrj.js";import{a as p,u as a,F as d,t as F}from"./Form-CWXQHvRO.js";import{L as s}from"./Label-BAtgzmlj.js";import{B as m}from"./Button-eO-ASnyK.js";import{S as x}from"./Section-BqsjHtKC.js";import{A as E}from"./ActionGroup-BCSCA9xU.js";import{s as l}from"./Action-BqzVohHB.js";import{m as n,F as j}from"./Modal-ClTHDKZJ.js";import"./index-nuYtCEEu.js";import"./dynamic-Bjr85D4p.js";import"./flowComponent-C2w89MO3.js";import"./index-DzNagtAD.js";import"./clsx-B-dksMZM.js";import"./index-BOV_kcUj.js";import"./useLocalizedStringFormatter-d3uviZeO.js";import"./context-DcUd--Pd.js";import"./browser-CA-_dWQR.js";import"./utils-BqyPjKLh.js";import"./ProgressBar-BWGxJHnn.js";import"./Hidden-BTg-KeYM.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-DHgEivld.js";import"./Text-BC4L9_-c.js";import"./EmulatedBoldText-DLGY6dL5.js";import"./LoadingSpinner-Ce9YNblG.js";import"./Button-KMwH7pyb.js";import"./useFocusRing-GHPD41Xj.js";import"./useFocusable-Dp9h7abG.js";import"./Dialog-BNJbCqlP.js";import"./RSPContexts-Ba4NKIWK.js";import"./OverlayArrow-DTr5Iaqo.js";import"./useControlledState-DDWL0DP8.js";import"./Collection-BMK5V4Kq.js";import"./CollectionBuilder-v2B4mNBt.js";import"./SelectionIndicator-B29MN-WG.js";import"./Separator-BHmM9LBW.js";import"./getActionGroupSlot-DN_BwUZY.js";import"./useStatic-Dg5syQGi.js";import"./context-CY6wUJcA.js";import"./Popover-BgPcaCsv.js";import"./OverlayTrigger-XJjkijZP.js";import"./ControlledNotification-CtEY5SML.js";import"./ClearPropsContextView-Cq8Pr-2n.js";import"./LayoutCard-BeWDWJMn.js";import"./Accordion-CYorM61X.js";import"./Alert-CAKY88Nb.js";import"./AlertIcon-CnQ2e6rw.js";import"./AlertBadge-CJ49mG81.js";import"./Align-C8DjyZjw.js";import"./TableFooterRow-Cl02B7LL.js";import"./SkeletonText-CnrcMbjq.js";import"./Avatar-DfMs39fp.js";import"./AvatarStack-4WBR-7X1.js";import"./Badge-BxjS4WAu.js";import"./BigNumber-DzCpGuON.js";import"./Breadcrumb-DMg5f8JX.js";import"./Link-CqXHSRvB.js";import"./Heading-C66T-W7d.js";import"./Legend-9J4PLNv2.js";import"./FileCardList-DYlHj2Op.js";import"./Image-DhsxEBuG.js";import"./CodeBlock-BNK1aCmv.js";import"./CopyButton-BNX1PJqg.js";import"./Tooltip-s-7knXV2.js";import"./react-children-utilities-DMJR_FXU.js";import"./Color-BKC_Yk11.js";import"./Content-Bcd3Dcbz.js";import"./ContextualHelpTrigger-DenoHM9c.js";import"./CounterBadge-Bq2uMDn7.js";import"./DonutChart-CywyKNmf.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-PuEJrwWX.js";import"./Header-D58-wiVK.js";import"./Initials-DO7BUWcj.js";import"./InlineCode-xz8RRo8y.js";import"./LabeledValue-8alV3kb7.js";import"./PopoverTrigger-GYLBAt5X.js";import"./Markdown-CnIy4cHY.js";import"./Separator--yDeOmz1.js";import"./Message-BQr9h5FH.js";import"./MessageSeparator-BSbcqWRj.js";import"./NavigationGroup-BLEWgi8U.js";import"./Notification-StB_4mj6.js";import"./NotificationProvider-BYADytI6.js";import"./ProgressBar-D71YL-U_.js";import"./Rating-D6p8cglX.js";import"./Skeleton-BG5LDZdF.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
