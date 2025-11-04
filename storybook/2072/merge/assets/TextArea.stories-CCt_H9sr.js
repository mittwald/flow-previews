import{j as r,r as x}from"./iframe-BGjIo6hw.js";import{a as d,u as l,F as c,t as f}from"./Form-GeAuQ6SE.js";import{L as o}from"./Label-Bfvc2OEj.js";import{B as a}from"./Button-72uC3Xxd.js";import{S as F}from"./Section-TUTyCtZG.js";import{A as j}from"./ActionGroup-hiZS26La.js";import{s as u}from"./Action-DQWGsoks.js";import{d as g}from"./dummyText-CX_I_Wpl.js";import{a as t,F as b}from"./Modal-BYTJ9Y12.js";import"./index-nuYtCEEu.js";import"./dynamic-CxgTiQUL.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./clsx-B-dksMZM.js";import"./index-D8hDUSyP.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./context-DQ8Yy5yO.js";import"./browser-i6k0HuHn.js";import"./utils-FWUTa6bA.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-OiQYEbgz.js";import"./Text-Bc8wJjtt.js";import"./EmulatedBoldText-DcmHRAc9.js";import"./LoadingSpinner-DW7FO3ji.js";import"./Button-DVeyWZob.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./Dialog-DZpgyeVc.js";import"./RSPContexts-BLZAUi5X.js";import"./OverlayArrow-D5fKAg8k.js";import"./useControlledState-8IdaO4XH.js";import"./Collection-DBSHt2At.js";import"./CollectionBuilder-CfVVvz4n.js";import"./SelectionIndicator-D0sGU-I3.js";import"./Separator-D2n48QdT.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./useStatic-B2rVxKR2.js";import"./context-jnS2Fs_o.js";import"./Popover-tW18rmQX.js";import"./OverlayTrigger-CsYA01So.js";import"./ControlledNotification-Dq6bZvP5.js";import"./ClearPropsContextView-CF-h0ZS8.js";import"./LayoutCard-lfPzieL5.js";import"./Accordion-i0q50_hv.js";import"./Alert-CouJG9of.js";import"./AlertIcon-Dbvw5J6E.js";import"./AlertBadge-CZAc4HrV.js";import"./Align-DZ9lgcQB.js";import"./TableFooterRow-B7GJOO76.js";import"./SkeletonText-BAKl1hQL.js";import"./Avatar-DdlYxgbX.js";import"./AvatarStack-GbEbEW2B.js";import"./Badge-BM2kNOCX.js";import"./BigNumber-D9d1tqLF.js";import"./Breadcrumb-BZd1J0Jr.js";import"./Link-phR0Xn4I.js";import"./Heading-QJXZDrut.js";import"./Legend-w3nuMcY_.js";import"./FileCardList-C4P00gKp.js";import"./Image-DVGepZy_.js";import"./CodeBlock-DANnuUSc.js";import"./CopyButton-DCk4o20_.js";import"./Tooltip-CjugpP2q.js";import"./react-children-utilities-CjDAauZg.js";import"./Color-Dq8hW1_T.js";import"./Content-Dsk5yoIX.js";import"./ContextualHelpTrigger-Dxu_RRLr.js";import"./CounterBadge-CkxONrfP.js";import"./DonutChart-CodRmRtb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BfGqCS7W.js";import"./Header-B7fIZl89.js";import"./Initials-Drmk3ion.js";import"./InlineCode-D0p9Y-vu.js";import"./LabeledValue-tPVZUd4m.js";import"./PopoverTrigger-QUfyk5z7.js";import"./Markdown-7KDHmlwn.js";import"./Separator-BnpxR7q2.js";import"./Message-DA1fOBGL.js";import"./MessageSeparator-D5qZufnd.js";import"./NavigationGroup-DCtLktTW.js";import"./Notification-B2wiDs3w.js";import"./NotificationProvider-BdKzz8-L.js";import"./ProgressBar-BCWSFDCi.js";import"./Rating-BnGzKbk4.js";import"./Skeleton-D-2WZNfg.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),te={title:"Integrations/React Hook Form/TextArea",component:d,render:()=>{const i=async h=>{await u(1500),y(h)},e=l({defaultValues:{message:"",messageDefaultValue:g.medium,messageRequired:"",messageMaxLength:""}}),m=f();return r.jsx(c,{form:e,onSubmit:i,children:r.jsxs(F,{children:[r.jsx(m,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(m,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsx(j,{children:r.jsx(a,{type:"submit",children:"Submit"})})]})})}},s={},n={render:i=>{const e=l();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(b,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:i=>{const e=l();return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{...i,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(a,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(a,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(a,{type:"submit",children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
