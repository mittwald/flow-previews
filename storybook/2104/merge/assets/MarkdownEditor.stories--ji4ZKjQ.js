import{j as r,r as h}from"./iframe-CXJD44gU.js";import{a as p,u as a,F as d,t as F}from"./Form-DeLPQYfM.js";import{L as s}from"./Label-CHgl7mam.js";import{B as m}from"./Button-Cqh03G4a.js";import{S as x}from"./Section-C4fj5Uhb.js";import{A as E}from"./ActionGroup-D292NLNL.js";import{s as l}from"./Action-3nbS0LG3.js";import{m as n,F as j}from"./Modal-BpR0AIl0.js";import"./index-nuYtCEEu.js";import"./dynamic-By6FwFol.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./clsx-B-dksMZM.js";import"./index-CRJWytS4.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./context-FTDoYYrb.js";import"./browser-BB5suZC2.js";import"./utils-BNVflTSU.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BGBHXtCn.js";import"./Text-D7qfRA1L.js";import"./EmulatedBoldText-BVX9n63_.js";import"./LoadingSpinner-GTDlM8Wf.js";import"./Button-BYCRTXMY.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./Dialog-0oqd1mPP.js";import"./RSPContexts-DduoqfxZ.js";import"./OverlayArrow-D2uhXVaI.js";import"./useControlledState-Bnjej2q1.js";import"./Collection-DYOHqOtc.js";import"./CollectionBuilder-D4Pa1_Ag.js";import"./SelectionIndicator-CQbg55hv.js";import"./Separator-FNjaa8bX.js";import"./getActionGroupSlot-B4xny-oM.js";import"./useStatic-Dhs2fcV6.js";import"./context-CQFOhjaS.js";import"./Popover-BkL35Kgm.js";import"./OverlayTrigger-CG63jM03.js";import"./ControlledNotification-CcIZA-Lf.js";import"./ClearPropsContextView-CQgAJ6wW.js";import"./LayoutCard-BQ5ezla0.js";import"./Accordion-Bj27BqHz.js";import"./Alert-C1LKtwr3.js";import"./AlertIcon-D9uZzc44.js";import"./AlertBadge-0ly9k36p.js";import"./Align-C_lRlCFk.js";import"./TableFooterRow-BBOrGqj2.js";import"./SkeletonText-BbctJOCV.js";import"./Avatar-E5uMknVI.js";import"./AvatarStack-DclY_dZp.js";import"./Badge-BzcGSwdk.js";import"./BigNumber-DXHoNC3I.js";import"./Breadcrumb-BjLJfUge.js";import"./Link-DiqcoEP6.js";import"./Heading-BqJcdYMf.js";import"./Legend-AgQ5Azi9.js";import"./FileCardList-BIAQaiiD.js";import"./Image-B85nW0l4.js";import"./CodeBlock-C0vU8UC8.js";import"./CopyButton-CykQYOAE.js";import"./Tooltip-CqIq6Zy5.js";import"./react-children-utilities-kGfg2sgw.js";import"./Color-D60gh5no.js";import"./Content-BcWGfTxO.js";import"./ContextualHelpTrigger-fA-EYHMX.js";import"./CounterBadge-BPDnJgLw.js";import"./DonutChart-CdTDK19_.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DFg7T8Xg.js";import"./Header-B_quMRYt.js";import"./Initials-xmMGVfq4.js";import"./InlineCode-CYRFQk4l.js";import"./LabeledValue-Dq4eg6f0.js";import"./PopoverTrigger-CxS2VuOB.js";import"./Markdown-DXgOGEAm.js";import"./Separator-BEFSvNVJ.js";import"./Message-BLm14bIo.js";import"./MessageSeparator-HYi6VZTX.js";import"./NavigationGroup-DbBmwSaG.js";import"./Notification-D9-cNcGL.js";import"./NotificationProvider-DYXHSDNp.js";import"./ProgressBar-DuiZQfN7.js";import"./Rating-BCPsPc_Q.js";import"./Skeleton-BLYXe0ue.js";const{action:b}=__STORYBOOK_MODULE_ACTIONS__,g=b("submit"),oo={title:"Integrations/React Hook Form/MarkdownEditor",component:p,render:()=>{const o=async f=>{await l(5e3),g(f)},u=a({defaultValues:{user:""}}),c=F();return r.jsx(d,{form:u,onSubmit:o,children:r.jsxs(x,{children:[r.jsx(c,{name:"user",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx(E,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},e={render:()=>{const o=a({defaultValues:{field:""}});return h.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsxs(n,{isInvalid:!0,children:[r.jsx(s,{children:"Message"}),r.jsx(j,{children:"ErrorFromOuterFieldError!"})]})]})}},i={render:()=>{const o=a({defaultValues:{field:""}});return r.jsxs(d,{form:o,onSubmit:async()=>await l(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(n,{children:r.jsx(s,{children:"Message"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
