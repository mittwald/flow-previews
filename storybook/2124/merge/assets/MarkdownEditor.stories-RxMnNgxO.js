import{j as r,r as h}from"./iframe-CVnOevS7.js";import{a as p,u as a,F as d,t as F}from"./Form-BV0DfRKx.js";import{L as s}from"./Label-CAmF3EV2.js";import{B as m}from"./Button-Cf7B0HY9.js";import{S as x}from"./Section-bMj7sGFO.js";import{A as E}from"./ActionGroup-B3X5o9oq.js";import{s as l}from"./Action-CUQVeG4t.js";import{m as n,F as j}from"./Modal-QfU2S1Ru.js";import"./index-nuYtCEEu.js";import"./dynamic-DEpoJ_Zh.js";import"./flowComponent-ozwQ3SWo.js";import"./index-BwqpXzO7.js";import"./clsx-B-dksMZM.js";import"./index-Cr689PiB.js";import"./useLocalizedStringFormatter-BS7r61NG.js";import"./context-B1NGcly_.js";import"./browser-DLVk8Qjw.js";import"./utils-CGDhhS2B.js";import"./ProgressBar-BnC0gGn_.js";import"./Hidden-B8qaVAs1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B_svJUl9.js";import"./Text-Bxez-FPO.js";import"./EmulatedBoldText-FqR_2DOA.js";import"./LoadingSpinner-CSIBpLRI.js";import"./Button-DX-sXAbn.js";import"./useFocusRing-DhtM2K-5.js";import"./useFocusable-D2dO-wlH.js";import"./Dialog-WTjaYKjI.js";import"./RSPContexts-DjbnK2VB.js";import"./OverlayArrow-76JnWsm4.js";import"./useControlledState-DEBy32LM.js";import"./Collection-Cksyx-Vf.js";import"./CollectionBuilder-CYwEwQob.js";import"./SelectionIndicator-DnhwtZbe.js";import"./Separator-IYcFdJAY.js";import"./getActionGroupSlot-CQ6F0YI_.js";import"./useStatic-CGYI-bhE.js";import"./context-CfRoeqvW.js";import"./Popover-DBExu7Vo.js";import"./OverlayTrigger-BkfO43HH.js";import"./ControlledNotification-GhQOL8__.js";import"./ClearPropsContextView-DFZ0V7Jx.js";import"./LayoutCard-CRc28-ot.js";import"./Accordion-L3zPfCh8.js";import"./Alert-C0tO03bG.js";import"./AlertIcon-DHgwBo_e.js";import"./AlertBadge-BnMe9rDd.js";import"./Align-BLxH_lnh.js";import"./TableFooterRow-C5f7VRCm.js";import"./SkeletonText-Ba9BdoYu.js";import"./Avatar-D3cwiEC5.js";import"./AvatarStack-C8hks35D.js";import"./Badge-ByDbUbxC.js";import"./BigNumber-q4yIW4xK.js";import"./Breadcrumb-DftlKfTG.js";import"./Link-ChTVftws.js";import"./Heading-DfGW7LfL.js";import"./Legend-CYdy4Ftw.js";import"./FileCardList-DxLgTIjd.js";import"./Image-B5CmC758.js";import"./CodeBlock-BdFqEOfx.js";import"./CopyButton-B4NCpX0w.js";import"./Tooltip-Dzxj1hFf.js";import"./react-children-utilities-TDhYNC0Q.js";import"./Color-Ds-Zu7tK.js";import"./Content-BmyMaCIf.js";import"./ContextualHelpTrigger-tU_W7v1d.js";import"./CounterBadge-DTIKZj10.js";import"./DonutChart-DPPXtNJb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CmJ3l5DD.js";import"./Header-SbiS3SyG.js";import"./Initials-CMa8SWiA.js";import"./InlineCode-Bt59bwJI.js";import"./LabeledValue-DKq90b9W.js";import"./PopoverTrigger-kkn5I6qo.js";import"./Markdown-Bx_g-Nsi.js";import"./Separator-BzOj-Dtn.js";import"./Message-BI6CPN5H.js";import"./MessageSeparator-BDDP4jc7.js";import"./NavigationGroup-C6HKSd84.js";import"./Notification-BehsA8rM.js";import"./NotificationProvider-C7mDNPzU.js";import"./ProgressBar-Cz8XcWEU.js";import"./Rating-BhL8l3pQ.js";import"./Skeleton-w_dx-zb1.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
